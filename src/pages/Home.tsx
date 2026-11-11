import { HeroSlider } from '@/components/home/HeroSlider';
import { PopularCarousel } from '@/components/home/PopularCarousel';
import { NovelGrid } from '@/components/home/NovelGrid';
import { CategoryStrip } from '@/components/home/CategoryStrip';
import { AdPlaceholder } from '@/components/home/AdPlaceholder';
import { getFeaturedNovels, getPopularNovels, getNewNovels, novels } from '@/data/novels';

export default function Home() {
  return (
    <>
      <HeroSlider novels={getFeaturedNovels()} />
      <CategoryStrip />
      <PopularCarousel novels={getPopularNovels()} />
      <NovelGrid novels={getNewNovels()} title="নতুন উপন্যাস" subtitle="সদ্য প্রকাশিত গল্পগুলো" />
      <AdPlaceholder />
      <NovelGrid novels={novels} />
    </>
  );
}
