import { BookOpen, Heart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { SITE } from '@/config/site';
import { SearchBar } from './SearchBar';
import { ThreeDotMenu } from './ThreeDotMenu';
import { useFavorites } from '@/context/FavoritesContext';

export function Header() {
  const { count } = useFavorites();

  return (
    <header className="sticky top-0 z-40 border-b border-burgundy/8 bg-cream-50/90 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label={`${SITE.name} হোমপেজ`}
          className="group flex shrink-0 items-center gap-2.5"
        >
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-burgundy to-rose-deep text-cream-50 shadow-soft transition-transform group-hover:scale-105">
            <BookOpen className="h-5 w-5" />
            <span className="absolute inset-0 bg-gradient-to-tr from-transparent via-cream-50/10 to-transparent" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-burgundy sm:text-xl">
              {SITE.name}
            </span>
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:block">
              {SITE.nameEn}
            </span>
          </span>
        </Link>

        <div className="mx-auto hidden flex-1 justify-center px-4 md:flex">
          <SearchBar />
        </div>

        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <NavLink
            to="/favorites"
            aria-label={`প্রিয় তালিকা${count > 0 ? ` (${count})` : ''}`}
            className="relative grid h-10 w-10 place-items-center rounded-full text-ink-soft transition hover:bg-rose/10 hover:text-burgundy"
          >
            <Heart className="h-5 w-5" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-burgundy px-1 text-[10px] font-bold text-cream-50">
                {count > 9 ? '৯+' : count}
              </span>
            )}
          </NavLink>
          <ThreeDotMenu />
        </div>
      </div>

      <div className="border-t border-burgundy/8 px-4 pb-3 md:hidden">
        <SearchBar className="max-w-none" />
      </div>
    </header>
  );
}
