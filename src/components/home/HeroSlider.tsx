import { useState } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Novel } from '@/types';
import { Button } from '@/components/ui/Button';
import { getAuthor } from '@/data/authors';
import { getCategory } from '@/data/categories';

export function HeroSlider({ novels }: { novels: Novel[] }) {
  const [index, setIndex] = useState(0);
  const active = novels[index];
  if (!active) return null;

  const author = getAuthor(active.authorId);
  const category = getCategory(active.categoryId);

  const go = (dir: number) =>
    setIndex((i) => (i + dir + novels.length) % novels.length);

  return (
    <section
      aria-label="বিশেষ উপন্যাস"
      className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy via-burgundy-light to-rose-deep p-6 sm:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-lavender/20 blur-3xl" />

        <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div className="max-w-xl animate-fade-in text-cream-50">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-50/15 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3 w-3" />
              বিশেষ সংখ্যা
            </span>
            <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-balance sm:text-5xl">
              {active.title}
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-cream-100/85">
              <span className="font-medium">{author?.name}</span>
              {category && (
                <>
                  <span className="opacity-50">•</span>
                  <span>{category.name}</span>
                </>
              )}
              <span className="opacity-50">•</span>
              <span>{active.chapterCount} অধ্যায়</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream-100/90 sm:text-base">
              {active.excerpt}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to={`/novel/${active.id}`}>
                <Button variant="secondary" size="md">
                  বিস্তারিত দেখুন
                </Button>
              </Link>
              <Link to={`/read/${active.id}/1`}>
                <Button
                  variant="outline"
                  size="md"
                  className="border-cream-50/40 text-cream-50 hover:bg-cream-50/10"
                >
                  পড়া শুরু করুন
                </Button>
              </Link>
            </div>
          </div>
          <div className="hidden justify-self-end md:block">
            <div className="relative">
              <img
                src={active.coverUrl}
                alt={`${active.title} — প্রচ্ছদ`}
                className="h-72 w-52 rounded-2xl object-cover shadow-float"
                loading="eager"
              />
              <div className="absolute -bottom-2 -right-2 rounded-xl bg-cream-50 px-3 py-1.5 text-xs font-semibold text-burgundy shadow-soft">
                ⭐ {active.rating.toFixed(1)}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-7 flex items-center justify-between">
          <div className="flex gap-1.5">
            {novels.map((n, i) => (
              <button
                key={n.id}
                aria-label={`স্লাইড ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-cream-50' : 'w-1.5 bg-cream-50/40 hover:bg-cream-50/60'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="আগের স্লাইড"
              onClick={() => go(-1)}
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/15 text-cream-50 backdrop-blur transition hover:bg-cream-50/25"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="পরবর্তী স্লাইড"
              onClick={() => go(1)}
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/15 text-cream-50 backdrop-blur transition hover:bg-cream-50/25"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
