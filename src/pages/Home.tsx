import { HeroSlider } from '@/components/home/HeroSlider';
import { PopularCarousel } from '@/components/home/PopularCarousel';
import { NovelGrid } from '@/components/home/NovelGrid';
import { AdPlaceholder } from '@/components/home/AdPlaceholder';
import { Novel } from '@/types';

const COVER = (seed: string) => `https://picsum.photos/seed/${seed}/400/600`;

const featured: Novel[] = [
  {
    id: 'megh-balika',
    title: 'মেঘ বালিকা',
    author: 'অনন্যা রহমান',
    coverUrl: COVER('mb-1'),
    excerpt:
      'বৃষ্টিভেজা এক সন্ধ্যায় শুরু হয়েছিল এক অসমাপ্ত গল্পের প্রথম অধ্যায় — যেখানে প্রতিটি শব্দ ভিজে যায় স্বপ্নের জলে।',
    category: 'রোমান্স',
    chapterCount: 42,
    rating: 4.8,
    isNew: true,
  },
  {
    id: 'chandni-rat',
    title: 'চাঁদনী রাতের গল্প',
    author: 'শারমিন আক্তার',
    coverUrl: COVER('mb-2'),
    excerpt:
      'প্রতিটি পূর্ণিমায় ফিরে আসে সেই অচেনা চিঠি — যার প্রেরকের নাম কেউ জানে না, কেবল হৃদয় জানে।',
    category: 'রোমান্স',
    chapterCount: 28,
    rating: 4.6,
  },
  {
    id: 'shopno-chura',
    title: 'স্বপ্নচূড়া',
    author: 'তানভীর হাসান',
    coverUrl: COVER('mb-3'),
    excerpt:
      'পর্বতারোহীর চোখে প্রথমবার দেখা সেই ভোর — যেখানে স্বপ্ন আর বাস্তবের সীমানা মুছে যায়।',
    category: 'অ্যাডভেঞ্চার',
    chapterCount: 35,
    rating: 4.7,
  },
];

const popular: Novel[] = [
  ...featured,
  ...Array.from({ length: 5 }, (_, i) => ({
    id: `popular-${i}`,
    title: ['নীল জোছনা', 'বৃষ্টির চিঠি', 'রঙিন রোদ', 'অচেনা নগরী', 'মৌন মেঘ'][i],
    author: ['ঋতুপর্ণা', 'সৈয়দা রুবাইয়া', 'অরিন্দম', 'ফারিয়া', 'নীলাদ্রি'][i],
    coverUrl: COVER(`pop-${i}`),
    excerpt: 'একটি সুন্দর গল্পের সংক্ষিপ্ত বিবরণ।',
    category: 'কথাসাহিত্য',
    chapterCount: 20 + i * 3,
    rating: 4.5 - i * 0.05,
  })),
];

const allNovels: Novel[] = [
  ...popular,
  ...Array.from({ length: 10 }, (_, i) => ({
    id: `all-${i}`,
    title: `উপন্যাস ${i + 1}`,
    author: `লেখক ${i + 1}`,
    coverUrl: COVER(`all-${i}`),
    excerpt: 'গল্পের সারসংক্ষেপ এখানে থাকবে।',
    category: 'উপন্যাস',
    chapterCount: 15 + i,
    rating: 4.0 + (i % 10) * 0.08,
    isNew: i % 3 === 0,
  })),
];

export default function Home() {
  return (
    <>
      <HeroSlider novels={featured} />
      <PopularCarousel novels={popular} />
      <NovelGrid novels={allNovels} />
      <AdPlaceholder />
    </>
  );
}
