import { Novel } from '@/types';
import { NovelCard } from './NovelCard';

interface NovelGridProps {
  novels: Novel[];
  title?: string;
  subtitle?: string;
}

export function NovelGrid({
  novels,
  title = 'সব উপন্যাস',
  subtitle = 'আপনার পছন্দের গল্প খুঁজে নিন',
}: NovelGridProps) {
  return (
    <section aria-labelledby="all-novels-heading" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5">
          <h2
            id="all-novels-heading"
            className="font-display text-xl font-bold text-burgundy sm:text-2xl"
          >
            {title}
          </h2>
          <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {novels.map((novel) => (
            <NovelCard key={novel.id} novel={novel} />
          ))}
        </div>
      </div>
    </section>
  );
}
