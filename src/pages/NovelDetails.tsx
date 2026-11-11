import { Link, useParams } from 'react-router-dom';
import { Star, BookOpen, Clock, ArrowRight, ChevronRight } from 'lucide-react';
import { getNovel } from '@/data/novels';
import { getAuthor } from '@/data/authors';
import { getCategory } from '@/data/categories';
import { getChaptersByNovel } from '@/data/chapters';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { FavoriteButton } from '@/components/novel/FavoriteButton';
import { EmptyState } from '@/components/ui/EmptyState';
import { useProgress } from '@/context/ProgressContext';

export default function NovelDetails() {
  const { novelId } = useParams<{ novelId: string }>();
  const novel = novelId ? getNovel(novelId) : undefined;
  const { getProgress } = useProgress();

  if (!novel) {
    return (
      <EmptyState
        title="উপন্যাসটি পাওয়া যায়নি"
        description="সম্ভবত এটি সরানো হয়েছে।"
        action={
          <Link to="/">
            <Button>হোমপেজে ফিরে যান</Button>
          </Link>
        }
      />
    );
  }

  const author = getAuthor(novel.authorId);
  const category = getCategory(novel.categoryId);
  const chapters = getChaptersByNovel(novel.id);
  const progress = getProgress(novel.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-xs text-ink-muted">
        <Link to="/" className="hover:text-burgundy">হোম</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/categories" className="hover:text-burgundy">ক্যাটাগরি</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-burgundy">{novel.title}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div>
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <img
              src={novel.coverUrl}
              alt={`${novel.title} — প্রচ্ছদ`}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        <div>
          <div className="flex flex-wrap gap-2">
            {novel.isNew && <Badge variant="new">নতুন</Badge>}
            {category && <Badge>{category.name}</Badge>}
            <Badge variant="solid">{novel.publishedYear}</Badge>
          </div>

          <h1 className="mt-3 font-display text-3xl font-bold text-burgundy sm:text-4xl">
            {novel.title}
          </h1>
          <p className="mt-2 text-base text-ink-soft">লেখক: {author?.name ?? 'অজানা'}</p>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-ink-soft">
            <span className="flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-rose-deep text-rose-deep" />
              <strong className="text-burgundy">{novel.rating.toFixed(1)}</strong> / ৫
            </span>
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" />
              {novel.chapterCount} অধ্যায়
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {Math.round(novel.chapterCount * 15)} মিনিট পাঠ
            </span>
          </div>

          <p className="mt-6 leading-relaxed text-ink-soft">{novel.synopsis}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to={
                progress
                  ? `/read/${novel.id}/${progress.chapterNumber}`
                  : `/read/${novel.id}/1`
              }
            >
              <Button size="lg">
                {progress ? 'পড়া চালিয়ে যান' : 'এখনই পড়ুন'}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <FavoriteButton novelId={novel.id} variant="full" />
          </div>

          {progress && (
            <p className="mt-4 text-sm text-ink-muted">
              আপনি সর্বশেষ পড়েছেন: <strong className="text-burgundy">অধ্যায় {progress.chapterNumber}</strong>
            </p>
          )}
        </div>
      </div>

      <section className="mt-12" aria-labelledby="chapters-heading">
        <h2
          id="chapters-heading"
          className="font-display text-xl font-bold text-burgundy sm:text-2xl"
        >
          অধ্যায় তালিকা
        </h2>
        <div className="mt-4 divide-y divide-burgundy/8 overflow-hidden rounded-2xl border border-burgundy/10 bg-white/50">
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              to={`/read/${novel.id}/${ch.number}`}
              className="flex items-center justify-between gap-4 px-4 py-3.5 transition hover:bg-rose/5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-rose/15 text-xs font-semibold text-burgundy">
                  {ch.number}
                </span>
                <span className="font-medium text-ink">{ch.title}</span>
              </div>
              <ChevronRight className="h-4 w-4 text-ink-muted" />
            </Link>
          ))}
          {chapters.length < novel.chapterCount && (
            <div className="px-4 py-3 text-xs text-ink-muted">
              আরও {novel.chapterCount - chapters.length}টি অধ্যায় শীঘ্রই আসছে…
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
