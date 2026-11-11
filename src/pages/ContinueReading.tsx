import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { getNovel } from '@/data/novels';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { FavoriteButton } from '@/components/novel/FavoriteButton';

export default function ContinueReading() {
  const { continueReading } = useProgress();
  const novel = continueReading ? getNovel(continueReading.novelId) : undefined;

  if (!continueReading || !novel) {
    return (
      <EmptyState
        icon={<Play className="h-7 w-7" />}
        title="চালিয়ে যাওয়ার কিছু নেই"
        description="একটি উপন্যাস পড়া শুরু করুন — এখানে থেকে সহজেই চালিয়ে যেতে পারবেন।"
        action={<Link to="/"><Button>উপন্যাস দেখুন</Button></Link>}
      />
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-burgundy">পড়া চালিয়ে যান</h1>
      <p className="mt-1 text-sm text-ink-muted">যেখানে থামিয়েছিলেন সেখান থেকেই শুরু করুন</p>

      <div className="mt-8 overflow-hidden rounded-3xl border border-burgundy/10 bg-gradient-to-br from-cream-100 to-rose/10 p-6 sm:p-8">
        <div className="grid items-center gap-6 sm:grid-cols-[140px_1fr]">
          <img
            src={novel.coverUrl}
            alt={novel.title}
            className="aspect-[3/4] w-full rounded-2xl object-cover shadow-card sm:w-auto"
          />
          <div>
            <h2 className="font-display text-2xl font-bold text-burgundy">{novel.title}</h2>
            <p className="mt-1 text-sm text-ink-muted">
              অধ্যায় {continueReading.chapterNumber}
            </p>
            <p className="mt-3 line-clamp-3 text-sm text-ink-soft">{novel.excerpt}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Link to={`/read/${novel.id}/${continueReading.chapterNumber}`}>
                <Button>
                  <Play className="h-4 w-4" /> পড়া চালিয়ে যান
                </Button>
              </Link>
              <FavoriteButton novelId={novel.id} variant="full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
