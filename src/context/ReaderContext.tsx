import { createContext, ReactNode, useContext } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type FontSize = 'sm' | 'base' | 'lg' | 'xl';

interface ReaderContextValue {
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
}

const ReaderContext = createContext<ReaderContextValue | null>(null);

export function ReaderProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSize] = useLocalStorage<FontSize>('mb.font-size', 'base');
  return (
    <ReaderContext.Provider value={{ fontSize, setFontSize }}>
      {children}
    </ReaderContext.Provider>
  );
}

export function useReader() {
  const ctx = useContext(ReaderContext);
  if (!ctx) throw new Error('useReader must be used within ReaderProvider');
  return ctx;
}
