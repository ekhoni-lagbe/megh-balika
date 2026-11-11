import { createContext, useContext, ReactNode, useCallback, useMemo } from 'react';
import { ReadingProgress } from '@/types';
import { useLocalStorage } from '@/hooks/useLocalStorage';

interface ProgressContextValue {
  progress: ReadingProgress[];
  saveProgress: (p: Omit<ReadingProgress, 'updatedAt'>) => void;
  getProgress: (novelId: string) => ReadingProgress | undefined;
  recentlyRead: ReadingProgress[];
  continueReading: ReadingProgress | undefined;
  clearProgress: () => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useLocalStorage<ReadingProgress[]>('mb.progress', []);

  const saveProgress = useCallback(
    (p: Omit<ReadingProgress, 'updatedAt'>) => {
      setProgress((prev) => {
        const filtered = prev.filter((x) => x.novelId !== p.novelId);
        return [{ ...p, updatedAt: Date.now() }, ...filtered].slice(0, 50);
      });
    },
    [setProgress],
  );

  const getProgress = useCallback(
    (novelId: string) => progress.find((p) => p.novelId === novelId),
    [progress],
  );

  const recentlyRead = useMemo(
    () => [...progress].sort((a, b) => b.updatedAt - a.updatedAt),
    [progress],
  );

  const continueReading = useMemo(() => {
    if (progress.length === 0) return undefined;
    return [...progress].sort((a, b) => b.updatedAt - a.updatedAt)[0];
  }, [progress]);

  const clearProgress = useCallback(() => setProgress([]), [setProgress]);

  return (
    <ProgressContext.Provider
      value={{ progress, saveProgress, getProgress, recentlyRead, continueReading, clearProgress }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
