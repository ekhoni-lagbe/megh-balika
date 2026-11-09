import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, List, Type } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useReader } from '@/context/ReaderContext';

const fontSizes = ['sm', 'base', 'lg', 'xl'] as const;
const themes = [
  { id: 'light' as const, label: 'হালকা', swatch: 'bg-cream-50' },
  { id: 'sepia' as const, label: 'সেপিয়া', swatch: 'bg-[#F4ECD8]' },
  { id: 'dark' as const, label: 'ডার্ক', swatch: 'bg-[#1E1B1A]' },
];

interface ReaderShellProps {
  novelTitle: string;
  chapterTitle: string;
  content: ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
}

export function ReaderShell({
  novelTitle,
  chapterTitle,
  content,
  onPrev,
  onNext,
}: ReaderShellProps) {
  const { readingTheme, setReadingTheme } = useTheme();
  const { fontSize, setFontSize } = useReader();

  const surface =
    readingTheme === 'dark'
      ? 'bg-[#1E1B1A] text-[#E9E1D5]'
      : readingTheme === 'sepia'
      ? 'bg-[#F4ECD8] text-[#4A3728]'
      : 'bg-cream-50 text-ink';

  return (
    <div className={`min-h-screen ${surface} transition-colors`}>
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm opacity-70 hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" /> ফিরে যান
          </Link>
          <div className="flex items-center gap-1.5">
            <button
              aria-label="অধ্যায় তালিকা"
              className="grid h-9 w-9 place-items-center rounded-full opacity-70 hover:bg-black/5 hover:opacity-100"
            >
              <List className="h-4 w-4" />
            </button>
            <button
              aria-label="ফন্ট সাইজ"
              className="grid h-9 w-9 place-items-center rounded-full opacity-70 hover:bg-black/5 hover:opacity-100"
            >
              <Type className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mb-6 text-center">
          <p className="text-xs uppercase tracking-widest opacity-60">{novelTitle}</p>
          <h1 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
            {chapterTitle}
          </h1>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setReadingTheme(t.id)}
              aria-pressed={readingTheme === t.id}
              className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                readingTheme === t.id
                  ? 'border-burgundy/50 bg-rose/20'
                  : 'border-black/10 opacity-70 hover:opacity-100'
              }`}
            >
              <span className={`h-3 w-3 rounded-full ${t.swatch} ring-1 ring-black/10`} />
              {t.label}
            </button>
          ))}
          <span className="mx-1 h-4 w-px bg-black/10" />
          {fontSizes.map((s) => (
            <button
              key={s}
              onClick={() => setFontSize(s)}
              aria-pressed={fontSize === s}
              className={`grid h-7 w-7 place-items-center rounded-full text-xs font-semibold transition ${
                fontSize === s ? 'bg-burgundy text-cream-50' : 'opacity-70 hover:opacity-100'
              }`}
            >
              A
            </button>
          ))}
        </div>

        <article
          className={`space-y-4 leading-loose ${
            fontSize === 'sm'
              ? 'text-sm'
              : fontSize === 'lg'
              ? 'text-lg'
              : fontSize === 'xl'
              ? 'text-xl'
              : 'text-base'
          }`}
        >
          {content}
        </article>

        <nav className="mt-10 flex items-center justify-between gap-3 border-t border-black/10 pt-6">
          <button
            onClick={onPrev}
            disabled={!onPrev}
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:bg-black/5 disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> আগের অধ্যায়
          </button>
          <button
            onClick={onNext}
            disabled={!onNext}
            className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:bg-black/5 disabled:opacity-30"
          >
            পরবর্তী অধ্যায় <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>
    </div>
  );
}
