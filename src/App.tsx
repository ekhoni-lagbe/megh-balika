import { ThemeProvider } from '@/context/ThemeContext';
import { ReaderProvider } from '@/context/ReaderContext';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { ProgressProvider } from '@/context/ProgressContext';
import { AppRouter } from './router';

export default function App() {
  return (
    <FavoritesProvider>
      <ProgressProvider>
        <ThemeProvider>
          <ReaderProvider>
            <AppRouter />
          </ReaderProvider>
        </ThemeProvider>
      </ProgressProvider>
    </FavoritesProvider>
  );
}
