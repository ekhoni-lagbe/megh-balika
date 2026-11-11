import { Link, useSearchParams } from 'react-router-dom';
import { categories, getCategoryBySlug } from '@/data/categories';
import { novels } from '@/data/novels';
import { NovelGrid } from '@/components/home/NovelGrid';

export default function Categories() {
  const [params] = useSearchParams();
  const activeSlug = params.get('c');
  const activeCategory = activeSlug ? getCategoryBySlug(activeSlug) : null;

  const filtered = activeCategory
    ? novels.filter((n) => n.categoryId === activeCategory.id)
    : novels;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-burgundy">ক্যাটাগরি</h1>
      <p className="mt-1 text-sm text-ink-muted">আপনার পছন্দের ধারা বেছে নিন</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          to="/categories"
          className={`rounded-full px-4 py-2 text-sm font-medium transition ${
            !activeCategory
              ? 'bg-burgundy text-cream-50'
              : 'bg-white/60 text-ink-soft hover:bg-rose/10'
          }`}
        >
          সব
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/categories?c=${cat.slug}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              activeCategory?.id === cat.id
                ? 'bg-burgundy text-cream-50'
                : 'bg-white/60 text-ink-soft hover:bg-rose/10'
            }`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <NovelGrid
        novels={filtered}
        title={activeCategory ? activeCategory.name : 'সব উপন্যাস'}
        subtitle={`${filtered.length}টি উপন্যাস`}
      />
    </div>
  );
}
