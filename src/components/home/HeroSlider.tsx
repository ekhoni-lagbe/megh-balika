import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Novel } from '@/types';
import { Button } from '@/components/ui/Button';

export function HeroSlider({ novels }: { novels: Novel[] }) {
  const [index, setIndex] = useState(0);
  const active = novels[index];
  if (!active) return null;

  const go = (dir: number) =>
    setIndex((i) => (i + dir + novels.length) % novels.length);

  return (
    <section
      aria-label="বিশেষ উপন্যাস"
      className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8"
    >
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-burgundy via-burgundy-light to-rose-deep p-6 sm:p-10">
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div className="max-w-xl animate-fade-in text-cream-50">
            <span className="inline-block rounded-full bg-cream-50/15 px-3 py-1 text-xs font-medium">
              বিশেষ সংখ্যা
            </span>
            <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-balance sm:text-4xl">
              {active.title}
            </h1>
            <p className="mt-2 text-sm text-cream-100/80 sm:text-base">
              {active.author} • {active.category}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-100/90 sm:text-base">
              {active.excerpt}
            </p>
            <div className="mt-6 flex gap-3">
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
            <img
              src={active.coverUrl}
              alt={`${active.title} — প্রচ্ছদ`}
              className="h-64 w-48 rounded-2xl object-cover shadow-float"
              loading="eager"
            />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex gap-1.5">
            {novels.map((n, i) => (
              <button
                key={n.id}
                aria-label={`স্লাইড ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-6 bg-cream-50' : 'w-1.5 bg-cream-50/40'
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              aria-label="আগের স্লাইড"
              onClick={() => go(-1)}
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/15 text-cream-50 transition hover:bg-cream-50/25"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="পরবর্তী স্লাইড"
              onClick={() => go(1)}
              className="grid h-9 w-9 place-items-center rounded-full bg-cream-50/15 text-cream-50 transition hover:bg-cream-50/25"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
