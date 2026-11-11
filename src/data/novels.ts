import { Novel } from '@/types';

const COVER = (seed: string) => `https://picsum.photos/seed/${seed}/400/600`;

export const novels: Novel[] = [
  {
    id: 'n1',
    title: 'মেঘ বালিকা',
    authorId: 'a1',
    categoryId: 'c1',
    coverUrl: COVER('mb-1'),
    synopsis:
      'বৃষ্টিভেজা এক সন্ধ্যায় শুরু হয়েছিল এক অসমাপ্ত গল্পের প্রথম অধ্যায় — যেখানে প্রতিটি শব্দ ভিজে যায় স্বপ্নের জলে। মেঘের মতো ভাসমান এক তরুণীর সাথে এক তরুণ কবির দেখা হয় বৃষ্টির শহরে। তাদের গল্প কি শেষ হবে, নাকি মেঘের মতোই হারিয়ে যাবে আকাশে?',
    excerpt: 'বৃষ্টিভেজা এক সন্ধ্যায় শুরু হয়েছিল এক অসমাপ্ত গল্পের প্রথম অধ্যায়।',
    chapterCount: 24,
    rating: 4.8,
    isNew: true,
    isFeatured: true,
    publishedYear: 2024,
  },
  {
    id: 'n2',
    title: 'চাঁদনী রাতের গল্প',
    authorId: 'a2',
    categoryId: 'c1',
    coverUrl: COVER('mb-2'),
    synopsis:
      'প্রতিটি পূর্ণিমায় ফিরে আসে সেই অচেনা চিঠি — যার প্রেরকের নাম কেউ জানে না, কেবল হৃদয় জানে। দুই প্রজন্মের প্রেমের গল্প বোনা আছে এই উপন্যাসে।',
    excerpt: 'প্রতিটি পূর্ণিমায় ফিরে আসে সেই অচেনা চিঠি।',
    chapterCount: 18,
    rating: 4.6,
    isFeatured: true,
    publishedYear: 2023,
  },
  {
    id: 'n3',
    title: 'স্বপ্নচূড়া',
    authorId: 'a3',
    categoryId: 'c4',
    coverUrl: COVER('mb-3'),
    synopsis:
      'পর্বতারোহীর চোখে প্রথমবার দেখা সেই ভোর — যেখানে স্বপ্ন আর বাস্তবের সীমানা মুছে যায়। একটি অভিযানের গল্প, একটি আত্মার অনুসন্ধান।',
    excerpt: 'পর্বতারোহীর চোখে প্রথমবার দেখা সেই ভোর।',
    chapterCount: 22,
    rating: 4.7,
    publishedYear: 2024,
  },
  {
    id: 'n4',
    title: 'নীল জোছনা',
    authorId: 'a4',
    categoryId: 'c7',
    coverUrl: COVER('mb-4'),
    synopsis:
      'কবিতার ভাষায় লেখা একটি উপন্যাস — যেখানে প্রতিটি বাক্য এক একটি চিত্র। নীল জোছনায় ভেজা এক শহরের গল্প।',
    excerpt: 'কবিতার ভাষায় লেখা একটি উপন্যাস।',
    chapterCount: 15,
    rating: 4.5,
    publishedYear: 2023,
  },
  {
    id: 'n5',
    title: 'বৃষ্টির চিঠি',
    authorId: 'a2',
    categoryId: 'c2',
    coverUrl: COVER('mb-5'),
    synopsis:
      'প্রতিটি বৃষ্টির দিনে একটি চিঠি আসে — কোনো প্রেরক নেই, কোনো ঠিকানা নেই। কে পাঠায় এই চিঠি?',
    excerpt: 'প্রতিটি বৃষ্টির দিনে একটি চিঠি আসে।',
    chapterCount: 20,
    rating: 4.4,
    publishedYear: 2024,
  },
  {
    id: 'n6',
    title: 'রঙিন রোদ',
    authorId: 'a6',
    categoryId: 'c6',
    coverUrl: COVER('mb-6'),
    synopsis:
      'স্কুলের শেষ বছরে দুই বন্ধুর মধ্যে যা ঘটে — সেটাই বদলে দেয় তাদের পুরো জীবন। ইয়াং অ্যাডাল্ট রোমান্স।',
    excerpt: 'স্কুলের শেষ বছরে দুই বন্ধুর মধ্যে যা ঘটে।',
    chapterCount: 16,
    rating: 4.3,
    isNew: true,
    publishedYear: 2025,
  },
  {
    id: 'n7',
    title: 'অচেনা নগরী',
    authorId: 'a7',
    categoryId: 'c8',
    coverUrl: COVER('mb-7'),
    synopsis:
      'এক রহস্যময় শহরে ঢুকে পড়ে এক পর্যটক — যেখান থেকে ফেরার পথ নেই। ভৌতিক ও রহস্যের মিশ্রণ।',
    excerpt: 'এক রহস্যময় শহরে ঢুকে পড়ে এক পর্যটক।',
    chapterCount: 28,
    rating: 4.6,
    publishedYear: 2023,
  },
  {
    id: 'n8',
    title: 'মৌন মেঘ',
    authorId: 'a5',
    categoryId: 'c5',
    coverUrl: COVER('mb-8'),
    synopsis:
      'ব্রিটিশ আমলের এক জমিদার বাড়ির গল্প — যেখানে প্রেম আর ক্ষমতার দ্বন্দ্ব একসাথে বোনা।',
    excerpt: 'ব্রিটিশ আমলের এক জমিদার বাড়ির গল্প।',
    chapterCount: 32,
    rating: 4.7,
    isFeatured: true,
    publishedYear: 2022,
  },
  {
    id: 'n9',
    title: 'জোনাকির আলো',
    authorId: 'a3',
    categoryId: 'c3',
    coverUrl: COVER('mb-9'),
    synopsis:
      'একটি খুন, একটি রহস্য, আর একজন গোয়েন্দা — যিনি নিজেই এক রহস্য।',
    excerpt: 'একটি খুন, একটি রহস্য, আর একজন গোয়েন্দা।',
    chapterCount: 25,
    rating: 4.5,
    publishedYear: 2024,
  },
  {
    id: 'n10',
    title: 'শেষ বিকেলের গল্প',
    authorId: 'a8',
    categoryId: 'c2',
    coverUrl: COVER('mb-10'),
    synopsis:
      'জীবনের শেষ প্রান্তে দাঁড়িয়ে একজন মানুষ ফিরে দেখে তার পুরো জীবন — সব হারানো, সব পাওয়া।',
    excerpt: 'জীবনের শেষ প্রান্তে দাঁড়িয়ে একজন মানুষ ফিরে দেখে।',
    chapterCount: 12,
    rating: 4.9,
    isNew: true,
    publishedYear: 2025,
  },
  {
    id: 'n11',
    title: 'অরণ্যের ডাক',
    authorId: 'a3',
    categoryId: 'c4',
    coverUrl: COVER('mb-11'),
    synopsis:
      'গভীর অরণ্যে হারিয়ে যাওয়া এক অভিযাত্রীর ডায়েরি — যেখানে প্রতিটি পাতা এক একটি বাঁচার গল্প।',
    excerpt: 'গভীর অরণ্যে হারিয়ে যাওয়া এক অভিযাত্রীর ডায়েরি।',
    chapterCount: 19,
    rating: 4.4,
    publishedYear: 2023,
  },
  {
    id: 'n12',
    title: 'চুম্বনের আগে',
    authorId: 'a1',
    categoryId: 'c1',
    coverUrl: COVER('mb-12'),
    synopsis:
      'প্রথম চুম্বনের আগে যে মুহূর্তটা — সেটাই সবচেয়ে সুন্দর। একটি মিষ্টি প্রেমের গল্প।',
    excerpt: 'প্রথম চুম্বনের আগে যে মুহূর্তটা।',
    chapterCount: 14,
    rating: 4.6,
    publishedYear: 2024,
  },
];

export function getNovel(id: string): Novel | undefined {
  return novels.find((n) => n.id === id);
}

export function getNovelsByCategory(categoryId: string): Novel[] {
  return novels.filter((n) => n.categoryId === categoryId);
}

export function getFeaturedNovels(): Novel[] {
  return novels.filter((n) => n.isFeatured);
}

export function getNewNovels(): Novel[] {
  return novels.filter((n) => n.isNew);
}

export function getPopularNovels(): Novel[] {
  return [...novels].sort((a, b) => b.rating - a.rating).slice(0, 8);
}
