import { useSearchParams } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';
import { useNovelSearch } from '@/hooks/useNovelSearch';
import { NovelGrid } from '@/components/home/NovelGrid';
import { EmptyState } from '@/components/ui/EmptyState';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  const results = useNovelSearch(q);

  if (!q.trim()) {
    return (
      <EmptyState
        icon={<SearchIcon className="h-7 w-7" />}
        title="কিছু খুঁজুন"
        description="উপন্যাসের নাম, লেখক, ক্যাটাগরি বা অধ্যায় দিয়ে খুঁজুন।"
      />
    );
  }

  if (results.length === 0) {
    return (
      <EmptyState
        icon={<SearchIcon className="h-7 w-7" />}
        title={`"${q}" এর কোনো ফলাফল নেই`}
        description="অন্য শব্দ দিয়ে আবার চেষ্টা করুন।"
      />
    );
  }

  return (
    <div className="py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-ink-muted">
          <strong className="text-burgundy">{results.length}</strong>টি ফলাফল পাওয়া গেছে
          &ldquo;{q}&rdquo; এর জন্য
        </p>
      </div>
      <NovelGrid novels={results} title="অনুসন্ধানের ফলাফল" subtitle="" />
    </div>
  );
}
