-- মেঘ বালিকা: Supabase SQL schema
-- Supabase Dashboard → SQL Editor → New query → এই ফাইলের সব SQL রান করুন।

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique,
  display_name text,
  role text not null default 'reader' check (role in ('reader','admin')),
  created_at timestamptz not null default now()
);

create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text not null,
  excerpt text default '',
  content text not null,
  cover_image text default '',
  status text not null default 'draft' check (status in ('draft','published')),
  author_id uuid references auth.users(id) on delete set null default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  author_name text not null,
  content text not null check (char_length(content) between 2 and 1500),
  approved boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.likes (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.posts(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  created_at timestamptz not null default now(),
  unique(post_id, user_id)
);

create index if not exists posts_status_created_idx on public.posts(status, created_at desc);
create index if not exists posts_category_idx on public.posts(category);
create index if not exists comments_post_approved_idx on public.comments(post_id, approved, created_at desc);
create index if not exists likes_post_idx on public.likes(post_id);

-- নতুন signup হলে reader profile স্বয়ংক্রিয়ভাবে তৈরি হবে।
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, display_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists(select 1 from public.profiles where id = auth.uid() and role = 'admin');
$$;

alter table public.profiles enable row level security;
alter table public.posts enable row level security;
alter table public.comments enable row level security;
alter table public.likes enable row level security;

drop policy if exists "profiles read own or admin" on public.profiles;
create policy "profiles read own or admin" on public.profiles for select to authenticated
using (id = auth.uid() or public.is_admin());
drop policy if exists "profiles update own display" on public.profiles;
create policy "profiles update own display" on public.profiles for update to authenticated
using (id = auth.uid()) with check (id = auth.uid() and role = 'reader');

-- প্রকাশিত লেখা সবাই পড়তে পারবে; অ্যাডমিন সব পোস্ট পরিচালনা করতে পারবে।
drop policy if exists "published posts public read" on public.posts;
create policy "published posts public read" on public.posts for select to anon, authenticated
using (status = 'published' or public.is_admin());
drop policy if exists "admin manage posts" on public.posts;
create policy "admin manage posts" on public.posts for all to authenticated
using (public.is_admin()) with check (public.is_admin());

-- পাঠক নিজের মন্তব্য জমা দিতে পারবে; প্রকাশের আগে অ্যাডমিন অনুমোদন করবে।
drop policy if exists "approved comments public read" on public.comments;
create policy "approved comments public read" on public.comments for select to anon, authenticated
using (approved = true or public.is_admin() or user_id = auth.uid());
drop policy if exists "signed in users add comments" on public.comments;
create policy "signed in users add comments" on public.comments for insert to authenticated
with check (user_id = auth.uid() and approved = false and exists(select 1 from public.posts p where p.id = post_id and p.status = 'published'));
drop policy if exists "admin moderate comments" on public.comments;
create policy "admin moderate comments" on public.comments for all to authenticated
using (public.is_admin()) with check (public.is_admin());

-- লাইক কাউন্ট public, কিন্তু add/remove শুধু নিজের লাইক।
drop policy if exists "likes public read" on public.likes;
create policy "likes public read" on public.likes for select to anon, authenticated using (true);
drop policy if exists "users add own likes" on public.likes;
create policy "users add own likes" on public.likes for insert to authenticated with check (user_id = auth.uid());
drop policy if exists "users remove own likes" on public.likes;
create policy "users remove own likes" on public.likes for delete to authenticated using (user_id = auth.uid() or public.is_admin());

-- প্রথম অ্যাডমিন বানানোর ধাপ README-তে দেওয়া আছে।
