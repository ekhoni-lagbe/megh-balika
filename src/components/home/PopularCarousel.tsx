import { Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Novel } from '@/types';
import { NovelCard } from './NovelCard';

export function PopularCarousel({ novels }: { novels: Novel[] }) {
  return (
    <section aria-labelledby="popular-heading" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-rose-deep" />
              <h2
                id="popular-heading"
                className="font-display text-xl font-bold text-burgundy sm:text-2xl"
              >
                জনপ্রিয় উপন্যাস
              </h2>
            </div>
            <p className="mt-1 text-sm text-ink-muted">
              এই মুহূর্তে সবচেয়ে বেশি পড়া হচ্ছে
            </p>
          </div>
          <Link
            to="/categories"
            className="text-sm font-medium text-burgundy transition hover:text-rose-deep"
          >
            সব দেখুন →
          </Link>
        </div>
        <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {novels.map((novel) => (
            <div
              key={novel.id}
              className="w-40 shrink-0 snap-start sm:w-44 md:w-48"
            >
              <NovelCard novel={novel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
