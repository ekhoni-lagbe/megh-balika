# মেঘ বালিকা — সংস্করণ ৪ (Supabase Backend Starter)

এই সংস্করণে আগের হোমপেজ/রোমান্টিক অটো-স্লাইডার রাখা হয়েছে এবং Supabase-ভিত্তিক ব্যাকএন্ড সংযোগের কাঠামো যোগ করা হয়েছে।

## নতুন ফিচার
- Supabase Auth দিয়ে পাঠক signup/login
- Supabase database থেকে প্রকাশিত পোস্ট হোমপেজে লোড
- পোস্টের পূর্ণ লেখা দেখার modal
- লগইন করা পাঠকের লাইক দেওয়া/সরানো
- লগইন করা পাঠকের মন্তব্য জমা; অ্যাডমিন অনুমোদনের পর public-এ দেখা যায়
- আলাদা `admin.html` অ্যাডমিন লগইন ও ড্যাশবোর্ড
- অ্যাডমিন পোস্ট তৈরি, draft/publish, edit/delete
- অ্যাডমিন মন্তব্য approve/delete
- SQL schema-তে Row Level Security (RLS) policies

## ধাপ ১ — Supabase project তৈরি
1. https://supabase.com এ নিজের অ্যাকাউন্টে লগইন করে New project তৈরি করুন।
2. Project তৈরি হলে Project Settings → API থেকে Project URL এবং anon/publishable key নিন।
3. `supabase-config.js` খুলে এই দুটি placeholder বদলান:
   - `YOUR_SUPABASE_PROJECT_URL`
   - `YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY`
4. এখানে কখনো `service_role` বা `secret` key বসাবেন না। সেগুলো browser-এ রাখা নিরাপদ নয়।

## ধাপ ২ — Database তৈরি
1. Supabase Dashboard → SQL Editor → New query খুলুন।
2. এই project-এর `schema.sql` ফাইলের সম্পূর্ণ SQL paste করে Run করুন।
3. সফল হলে Table Editor-এ `profiles`, `posts`, `comments`, `likes` টেবিল দেখবেন।

## ধাপ ৩ — প্রথম অ্যাডমিন তৈরি
1. সাইটের `/admin.html` পেজ খুলুন।
2. আপনার নিজের ইমেইল ও শক্তিশালী পাসওয়ার্ড দিয়ে **অ্যাকাউন্ট তৈরি** চাপুন।
3. Supabase Authentication-এ email confirmation চালু থাকলে ইমেইল নিশ্চিত করুন।
4. Supabase → SQL Editor-এ নিচের query চালান; নিজের ইমেইল বসাবেন:

```sql
update public.profiles
set role = 'admin'
where email = 'YOUR_EMAIL@example.com';
```

5. `/admin.html`-এ ফিরে একই ইমেইল-পাসওয়ার্ড দিয়ে লগইন করুন। এখন ড্যাশবোর্ড খুলবে।
6. ভবিষ্যতে নতুন অ্যাডমিন করতে চাইলে একইভাবে তার অ্যাকাউন্ট তৈরি করে profiles.role `admin` করুন। অচেনা কাউকে admin করবেন না।

## ধাপ ৪ — GitHub ও Cloudflare Pages
1. GitHub-এ repository তৈরি করে এই ফোল্ডারের সব ফাইল upload করুন (ফোল্ডারের ভেতরের ফাইলগুলো repository root-এ থাকবে)।
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Repository নির্বাচন করুন; Framework preset `None`, Build command ফাঁকা, Build output directory `.` দিন।
4. Deploy করুন। deploy শেষে homepage এবং `/admin.html` পরীক্ষা করুন।

## গুরুত্বপূর্ণ নিরাপত্তা
- `supabase-config.js`-এ কেবল Project URL ও anon/publishable key থাকবে।
- `service_role` / secret key কখনো GitHub, HTML, JS বা Cloudflare Pages-এর public asset-এ দেবেন না।
- SQL-এ RLS চালু আছে: শুধু admin পোস্ট manage করতে পারে; public কেবল published posts ও approved comments পড়তে পারে।
- পাঠকের comments প্রথমে pending থাকবে; অ্যাডমিন অনুমোদন করলে প্রকাশ হবে।
- signup-এর পর ইমেইল confirmation লাগতে পারে; Supabase Authentication → URL Configuration-এ আপনার live site URL সেট করুন।

## বর্তমান সীমাবদ্ধতা / পরবর্তী ধাপ
- এই starter-এ cover image URL ব্যবহার করা হয়েছে; admin upload-এর জন্য Supabase Storage bucket/policies পরের ধাপে যোগ করা যাবে।
- Newsletter form এখনো database-এ email সংরক্ষণ করে না।
- Password reset, user profile page, pagination, post detail SEO route, report/spam moderation, rate limiting এবং richer editor এখনো যোগ করা হয়নি।
- Live database চালু হবে কেবল নিজের Supabase project তৈরি, config পূরণ ও SQL চালানোর পর।
