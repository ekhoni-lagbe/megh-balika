import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/context/FavoritesContext';
import { novels } from '@/data/novels';
import { NovelCard } from '@/components/home/NovelCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';

export default function Favorites() {
  const { favorites } = useFavorites();
  const favNovels = novels.filter((n) => favorites.includes(n.id));

  if (favNovels.length === 0) {
    return (
      <EmptyState
        icon={<Heart className="h-7 w-7" />}
        title="প্রিয় তালিকা খালি"
        description="পছন্দের উপন্যাসে ♥ চিহ্নে ক্লিক করে সংরক্ষণ করুন।"
        action={
          <Link to="/">
            <Button>উপন্যাস দেখুন</Button>
          </Link>
        }
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-burgundy">প্রিয় তালিকা</h1>
      <p className="mt-1 text-sm text-ink-muted">{favNovels.length}টি সংরক্ষিত উপন্যাস</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {favNovels.map((novel) => (
          <NovelCard key={novel.id} novel={novel} />
        ))}
      </div>
    </div>
  );
}
