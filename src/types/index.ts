export interface Novel {
  id: string;
  title: string;
  author: string;
  coverUrl: string;
  excerpt: string;
  category: string;
  chapterCount: number;
  rating: number;
  isNew?: boolean;
}

export interface Chapter {
  id: string;
  novelId: string;
  title: string;
  index: number;
  content?: string;
}

export type ReaderTheme = 'light' | 'sepia' | 'dark';
export type ReaderFontSize = 'sm' | 'base' | 'lg' | 'xl';
