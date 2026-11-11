import { Category } from '@/types';

export const categories: Category[] = [
  { id: 'c1', name: 'রোমান্স', slug: 'romance', color: '#DDA0A0' },
  { id: 'c2', name: 'কথাসাহিত্য', slug: 'fiction', color: '#B8657A' },
  { id: 'c3', name: 'রহস্য', slug: 'mystery', color: '#7A2A3D' },
  { id: 'c4', name: 'অ্যাডভেঞ্চার', slug: 'adventure', color: '#C4B5D9' },
  { id: 'c5', name: 'ঐতিহাসিক', slug: 'historical', color: '#8A7A80' },
  { id: 'c6', name: 'ইয়াং অ্যাডাল্ট', slug: 'ya', color: '#E8C5C5' },
  { id: 'c7', name: 'কবিতা', slug: 'poetry', color: '#5C1A2B' },
  { id: 'c8', name: 'ভৌতিক', slug: 'horror', color: '#2B1A1F' },
];

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
