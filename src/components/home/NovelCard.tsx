import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Novel } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { FavoriteButton } from '@/components/novel/FavoriteButton';
import { getAuthor } from '@/data/authors';

export function NovelCard({ novel }: { novel: Novel }) {
  const author = getAuthor(novel.authorId);

  return (
    <Link
      to={`/novel/${novel.id}`}
      className="group block overflow-hidden rounded-2xl bg-white/50 ring-1 ring-burgundy/5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-card"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-rose-soft/60 to-lavender-soft/60">
        <img
          src={novel.coverUrl}
          alt={`${novel.title} — প্রচ্ছদ`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-burgundy/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {novel.isNew && (
          <div className="absolute left-2 top-2">
            <Badge variant="new">নতুন</Badge>
          </div>
        )}
        <div className="absolute right-2 top-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <FavoriteButton novelId={novel.id} />
        </div>
      </div>
      <div className="p-3">
        <h3 className="line-clamp-1 font-display text-sm font-semibold text-ink transition group-hover:text-burgundy">
          {novel.title}
        </h3>
        <p className="mt-0.5 line-clamp-1 text-xs text-ink-muted">
          {author?.name ?? 'অজানা লেখক'}
        </p>
        <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-soft">
          <Star className="h-3 w-3 fill-rose-deep text-rose-deep" />
          <span className="font-medium">{novel.rating.toFixed(1)}</span>
          <span className="text-ink-muted">•</span>
          <span className="text-ink-muted">{novel.chapterCount} অধ্যায়</span>
        </div>
      </div>
    </Link>
  );
}
