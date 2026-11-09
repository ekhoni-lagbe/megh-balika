import { ThemeProvider } from '@/context/ThemeContext';
import { ReaderProvider } from '@/context/ReaderContext';
import { AppRouter } from './router';

export default function App() {
  return (
    <ThemeProvider>
      <ReaderProvider>
        <AppRouter />
      </ReaderProvider>
    </ThemeProvider>
  );
}
