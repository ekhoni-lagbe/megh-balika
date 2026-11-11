import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type FontSize = 'sm' | 'base' | 'lg' | 'xl';
type LineSpacing = 'compact' | 'normal' | 'relaxed';
type ContentWidth = 'narrow' | 'normal' | 'wide';

interface ReaderContextValue {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  lineSpacing: LineSpacing;
  setLineSpacing: (s: LineSpacing) => void;
  contentWidth: ContentWidth;
  setContentWidth: (w: ContentWidth) => void;
}

const ReaderContext = createContext<ReaderContextValue | null>(null);

export function ReaderProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useLocalStorage<FontSize>('mb.font-size', 'base');
  const [lineSpacing, setLineSpacing] = useLocalStorage<LineSpacing>('mb.line-spacing', 'normal');
  const [contentWidth, setContentWidth] = useLocalStorage<ContentWidth>('mb.content-width', 'normal');

  return (
    <ReaderContext.Provider
      value={{ fontSize, setFontSize, lineSpacing, setLineSpacing, contentWidth, setContentWidth }}
    >
      {children}
    </ReaderContext.Provider>
  );
}

export function useReader() {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader must be used within ReaderProvider');
  return ctx;
}
