import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { cn } from '@/utils/cn';

interface FavoriteButtonProps {
  novelId: string;
  variant?: 'icon' | 'full';
  className?: string;
}

export function FavoriteButton({ novelId, variant = 'icon', className }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const active = isFavorite(novelId);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(novelId);
  };

  if (variant === 'full') {
    return (
      <button
        type="button"
        onClick={handleClick}
        aria-pressed={active}
        className={cn(
          'inline-flex h-11 items-center gap-2 rounded-full px-6 text-sm font-medium transition',
          active
            ? 'bg-burgundy text-cream-50 shadow-card'
            : 'border border-burgundy/25 text-burgundy hover:bg-burgundy/5',
          className,
        )}
      >
        <Heart className={cn('h-4 w-4', active && 'fill-current')} />
        {active ? 'প্রিয়তে আছে' : 'প্রিয়তে যোগ করুন'}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={active ? 'প্রিয় থেকে সরান' : 'প্রিয়তে যোগ করুন'}
      aria-pressed={active}
      className={cn(
        'grid h-9 w-9 place-items-center rounded-full bg-cream-50/90 text-burgundy shadow-soft backdrop-blur transition hover:scale-110',
        className,
      )}
    >
      <Heart className={cn('h-4 w-4', active && 'fill-burgundy')} />
    </button>
  );
}
