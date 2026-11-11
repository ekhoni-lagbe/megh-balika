export interface Author {
  id: string;
  name: string;
  bio?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface Novel {
  id: string;
  title: string;
  authorId: string;
  categoryId: string;
  coverUrl: string;
  synopsis: string;
  excerpt: string;
  chapterCount: number;
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
  publishedYear: number;
}

export interface Chapter {
  id: string;
  novelId: string;
  number: number;
  title: string;
  content: string;
  wordCount: number;
}

export interface ReaderPreferences {
  theme: 'light' | 'sepia' | 'dark' | 'eyeComfort';
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  lineSpacing: 'compact' | 'normal' | 'relaxed';
  contentWidth: 'narrow' | 'normal' | 'wide';
}

export interface ReadingProgress {
  novelId: string;
  chapterId: string;
  chapterNumber: number;
  updatedAt: number;
}
