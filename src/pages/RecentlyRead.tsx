import { Link } from 'react-router-dom';
import { Clock } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import { getNovel } from '@/data/novels';
import { NovelCard } from '@/components/home/NovelCard';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';

export default function RecentlyRead() {
  const { recentlyRead } = useProgress();
  const items = recentlyRead
    .map((p) => ({ progress: p, novel: getNovel(p.novelId) }))
    .filter((x): x is { progress: typeof x.progress; novel: NonNullable<typeof x.novel> } =>
      Boolean(x.novel),
    );

  if (items.length === 0) {
    return (
      <EmptyState
        icon={<Clock className="h-7 w-7" />}
        title="সম্প্রতি কিছু পড়া হয়নি"
        description="যেকোনো উপন্যাস পড়া শুরু করলে সেটি এখানে দেখা যাবে।"
        action={<Link to="/"><Button>উপন্যাস দেখুন</Button></Link>}
      />
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-burgundy">সম্প্রতি পড়া</h1>
      <p className="mt-1 text-sm text-ink-muted">আপনার পাঠের ইতিহাস</p>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {items.map(({ novel, progress }) => (
          <div key={novel.id}>
            <NovelCard novel={novel} />
            <Link
              to={`/read/${novel.id}/${progress.chapterNumber}`}
              className="mt-2 block text-center text-xs font-medium text-burgundy hover:underline"
            >
              অধ্যায় {progress.chapterNumber} থেকে চালিয়ে যান →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
