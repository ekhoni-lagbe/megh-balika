import { Link } from 'react-router-dom';
import { categories } from '@/data/categories';
import { novels } from '@/data/novels';

export function CategoryStrip() {
  return (
    <section aria-labelledby="category-heading" className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-5">
          <h2
            id="category-heading"
            className="font-display text-xl font-bold text-burgundy sm:text-2xl"
          >
            ক্যাটাগরি
          </h2>
          <p className="mt-1 text-sm text-ink-muted">আপনার পছন্দের ধারাটি বেছে নিন</p>
        </div>
        <div className="no-scrollbar -mx-4 flex gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
          {categories.map((cat) => {
            const count = novels.filter((n) => n.categoryId === cat.id).length;
            return (
              <Link
                key={cat.id}
                to={`/categories?c=${cat.slug}`}
                className="group flex shrink-0 items-center gap-3 rounded-2xl border border-burgundy/8 bg-white/60 px-5 py-4 transition hover:border-burgundy/25 hover:bg-white hover:shadow-soft"
              >
                <span
                  className="h-9 w-9 rounded-full"
                  style={{ backgroundColor: cat.color }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-ink group-hover:text-burgundy">
                    {cat.name}
                  </p>
                  <p className="text-xs text-ink-muted">{count} উপন্যাস</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
