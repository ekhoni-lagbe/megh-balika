import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  List,
  Type,
  AlignJustify,
  Maximize2,
} from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useReader } from '@/context/ReaderContext';
import { cn } from '@/utils/cn';

const fontSizes = ['sm', 'base', 'lg', 'xl'] as const;
const lineSpacings = ['compact', 'normal', 'relaxed'] as const;
const widths = ['narrow', 'normal', 'wide'] as const;

const themes = [
  { id: 'light' as const, label: 'হালকা', swatch: 'bg-cream-50', text: 'text-ink' },
  { id: 'sepia' as const, label: 'সেপিয়া', swatch: 'bg-[#F4ECD8]', text: 'text-[#4A3728]' },
  { id: 'dark' as const, label: 'ডার্ক', swatch: 'bg-[#1E1B1A]', text: 'text-[#E9E1D5]' },
  { id: 'eyeComfort' as const, label: 'আই কমফোর্ট', swatch: 'bg-[#C7EDCC]', text: 'text-[#1B3A2A]' },
];

interface ReaderShellProps {
  novelTitle: string;
  chapterTitle: string;
  content: ReactNode;
  onPrev?: () => void;
  onNext?: () => void;
  onChapterList?: () => void;
}

export function ReaderShell({
  novelTitle,
  chapterTitle,
  content,
  onPrev,
  onNext,
  onChapterList,
}: ReaderShellProps) {
  const { readingTheme, setReadingTheme } = useTheme();
  const { fontSize, setFontSize, lineSpacing, setLineSpacing, contentWidth, setContentWidth } =
    useReader();

  const surface =
    readingTheme === 'dark'
      ? 'bg-[#1E1B1A] text-[#E9E1D5]'
      : readingTheme === 'sepia'
      ? 'bg-[#F4ECD8] text-[#4A3728]'
      : readingTheme === 'eyeComfort'
      ? 'bg-[#C7EDCC] text-[#1B3A2A]'
      : 'bg-cream-50 text-ink';

  const widthClass =
    contentWidth === 'narrow'
      ? 'max-w-xl'
      : contentWidth === 'wide'
      ? 'max-w-4xl'
      : 'max-w-2xl';

  const spacingClass =
    lineSpacing === 'compact'
      ? 'leading-relaxed space-y-3'
      : lineSpacing === 'relaxed'
      ? 'leading-loose space-y-6'
      : 'leading-loose space-y-5';

  const fontClass =
    fontSize === 'sm'
      ? 'text-sm'
      : fontSize === 'lg'
      ? 'text-lg'
      : fontSize === 'xl'
      ? 'text-xl'
      : 'text-base';

  return (
    <div className={cn('min-h-screen transition-colors duration-300', surface)}>
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="mb-6 flex items-center justify-between gap-3">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm opacity-70 transition hover:opacity-100"
          >
            <ArrowLeft className="h-4 w-4" /> ফিরে যান
          </Link>
          <div className="flex items-center gap-1.5">
            <button
              onClick={onChapterList}
              aria-label="অধ্যায় তালিকা"
              className="grid h-9 w-9 place-items-center rounded-full opacity-70 transition hover:bg-black/5 hover:opacity-100"
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className={cn('mx-auto', widthClass)}>
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.25em] opacity-60">{novelTitle}</p>
            <h1 className="mt-2 font-display text-2xl font-semibold sm:text-3xl">
              {chapterTitle}
            </h1>
          </div>

          <div className="mb-6 rounded-2xl border border-black/5 bg-white/40 p-3 backdrop-blur-sm dark:bg-black/10">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {/* Theme selectors */}
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setReadingTheme(t.id)}
                  aria-pressed={readingTheme === t.id}
                  className={cn(
                    'flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition',
                    readingTheme === t.id
                      ? 'border-burgundy/50 bg-burgundy/10'
                      : 'border-black/10 opacity-70 hover:opacity-100',
                  )}
                >
                  <span className={cn('h-3 w-3 rounded-full ring-1 ring-black/10', t.swatch)} />
                  {t.label}
                </button>
              ))}

              <span className="mx-1 h-4 w-px bg-black/10" />

              {/* Font size */}
              <div className="flex items-center gap-1 rounded-full border border-black/10 px-1">
                <Type className="h-3.5 w-3.5 opacity-60" />
                {fontSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setFontSize(s)}
                    aria-pressed={fontSize === s}
                    className={cn(
                      'grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold transition',
                      fontSize === s
                        ? 'bg-burgundy text-cream-50'
                        : 'opacity-70 hover:opacity-100',
                    )}
                  >
                    {s === 'sm' ? 'A' : s === 'base' ? 'A' : s === 'lg' ? 'A' : 'A'}
                  </button>
                ))}
              </div>

              {/* Line spacing */}
              <div className="flex items-center gap-1 rounded-full border border-black/10 px-1">
                <AlignJustify className="h-3.5 w-3.5 opacity-60" />
                {lineSpacings.map((s) => (
                  <button
                    key={s}
                    onClick={() => setLineSpacing(s)}
                    aria-pressed={lineSpacing === s}
                    className={cn(
                      'grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold transition',
                      lineSpacing === s
                        ? 'bg-burgundy text-cream-50'
                        : 'opacity-70 hover:opacity-100',
                    )}
                  >
                    {s === 'compact' ? '−' : s === 'normal' ? '≡' : '+'}
                  </button>
                ))}
              </div>

              {/* Width */}
              <div className="flex items-center gap-1 rounded-full border border-black/10 px-1">
                <Maximize2 className="h-3.5 w-3.5 opacity-60" />
                {widths.map((w) => (
                  <button
                    key={w}
                    onClick={() => setContentWidth(w)}
                    aria-pressed={contentWidth === w}
                    className={cn(
                      'grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold transition',
                      contentWidth === w
                        ? 'bg-burgundy text-cream-50'
                        : 'opacity-70 hover:opacity-100',
                    )}
                  >
                    {w === 'narrow' ? '◁' : w === 'normal' ? '□' : '▷'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <article
            className={cn(
              'font-display whitespace-pre-line',
              fontClass,
              spacingClass,
            )}
          >
            {content}
          </article>

          <nav className="mt-12 flex items-center justify-between gap-3 border-t border-black/10 pt-6">
            <button
              onClick={onPrev}
              disabled={!onPrev}
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" /> আগের অধ্যায়
            </button>
            <button
              onClick={onNext}
              disabled={!onNext}
              className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium opacity-80 transition hover:bg-black/5 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              পরবর্তী অধ্যায় <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
