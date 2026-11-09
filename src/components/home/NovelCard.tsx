import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Novel } from '@/types';
import { Badge } from '@/components/ui/Badge';

export function NovelCard({ novel }: { novel: Novel }) {
  return (
    <Link
      to={`/novel/${novel.id}`}
      className="group block overflow-hidden rounded-2xl bg-white/60 ring-1 ring-burgundy/5 transition hover:-translate-y-0.5 hover:shadow-card"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-rose-soft/50 to-lavender-soft/50">
        <img
          src={novel.coverUrl}
          alt={`${novel.title} — প্রচ্ছদ`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {novel.isNew && (
          <span className="absolute left-2 top-2 rounded-full bg-burgundy px-2 py-0.5 text-[10px] font-medium text-cream-50">
            নতুন
          </span>
        )}
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 font-display text-sm font-semibold text-ink">
          {novel.title}
        </h3>
        <p className="mt-0.5 text-xs text-ink-muted">{novel.author}</p>
        <div className="mt-2 flex items-center gap-1 text-xs text-ink-soft">
          <Star className="h-3 w-3 fill-rose-deep text-rose-deep" />
          <span>{novel.rating.toFixed(1)}</span>
          <span className="text-ink-muted">• {novel.chapterCount} অধ্যায়</span>
        </div>
      </div>
    </Link>
  );
}
