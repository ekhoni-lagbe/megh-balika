import { BookOpen, Heart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { SITE } from '@/config/site';
import { SearchBar } from './SearchBar';
import { ThreeDotMenu } from './ThreeDotMenu';

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-burgundy/5 bg-cream-50/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label={`${SITE.name} হোমপেজ`}
          className="flex shrink-0 items-center gap-2"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-burgundy text-cream-50">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-burgundy sm:text-xl">
            {SITE.name}
          </span>
        </Link>

        {/* Center search (desktop) */}
        <div className="mx-auto hidden flex-1 justify-center px-4 md:flex">
          <SearchBar />
        </div>

        {/* Right actions */}
        <div className="ml-auto flex items-center gap-1 md:ml-0">
          <NavLink
            to="/favorites"
            aria-label="প্রিয় তালিকা"
            className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition hover:bg-rose/10 hover:text-burgundy"
          >
            <Heart className="h-5 w-5" />
          </NavLink>
          <ThreeDotMenu />
        </div>
      </div>

      {/* Mobile search row */}
      <div className="border-t border-burgundy/5 px-4 pb-3 md:hidden">
        <SearchBar className="max-w-none" />
      </div>
    </header>
  );
}
