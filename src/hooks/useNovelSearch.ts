import { useMemo } from 'react';
import { novels } from '@/data/novels';
import { authors } from '@/data/authors';
import { categories } from '@/data/categories';
import { chapters } from '@/data/chapters';
import { Novel } from '@/types';

export function useNovelSearch(query: string): Novel[] {
  return useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return novels.filter((novel) => {
      const author = authors.find((a) => a.id === novel.authorId);
      const category = categories.find((c) => c.id === novel.categoryId);
      const novelChapters = chapters.filter((c) => c.novelId === novel.id);

      if (novel.title.toLowerCase().includes(q)) return true;
      if (author?.name.toLowerCase().includes(q)) return true;
      if (category?.name.toLowerCase().includes(q)) return true;
      if (novelChapters.some((ch) => ch.title.toLowerCase().includes(q))) return true;
      if (/^\d+$/.test(q) && novelChapters.some((ch) => ch.number.toString() === q)) return true;

      return false;
    });
  }, [query]);
}
