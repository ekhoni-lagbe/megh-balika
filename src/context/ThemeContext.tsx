import { createContext, useContext, ReactNode } from 'react';
import { useLocalStorage } from '@/hooks/useLocalStorage';

type ReadingTheme = 'light' | 'sepia' | 'dark';

interface ThemeContextValue {
  readingTheme: ReadingTheme;
  setReadingTheme: (t: ReadingTheme) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [readingTheme, setReadingTheme] = useLocalStorage<ReadingTheme>(
    'mb.reading-theme',
    'light',
  );
  return (
    <ThemeContext.Provider value={{ readingTheme, setReadingTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
