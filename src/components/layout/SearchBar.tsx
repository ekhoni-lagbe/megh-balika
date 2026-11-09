import { FormEvent, useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/utils/cn';

export function SearchBar({ className }: { className?: string }) {
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (!q.trim()) return;
    navigate(`/search?q=${encodeURIComponent(q.trim())}`);
    setQ('');
  };

  return (
    <form
      role="search"
      onSubmit={submit}
      className={cn('relative w-full max-w-md', className)}
    >
      <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" />
      <input
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="উপন্যাস, অধ্যায় বা লেখক খুঁজুন…"
        aria-label="খুঁজুন"
        className="h-10 w-full rounded-full border border-burgundy/15 bg-white/70 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted transition focus:border-burgundy/40 focus:outline-none focus:ring-2 focus:ring-burgundy/15"
      />
    </form>
  );
}
