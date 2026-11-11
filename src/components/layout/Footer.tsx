import { Link } from 'react-router-dom';
import { BookOpen, Heart } from 'lucide-react';
import { SITE } from '@/config/site';

const columns = [
  {
    title: 'প্ল্যাটফর্ম',
    links: [
      { label: 'হোম', to: '/' },
      { label: 'ক্যাটাগরি', to: '/categories' },
      { label: 'সম্প্রতি পড়া', to: '/recently-read' },
      { label: 'প্রিয় তালিকা', to: '/favorites' },
    ],
  },
  {
    title: 'সহায়তা',
    links: [
      { label: 'যোগাযোগ', to: '/contact' },
      { label: 'আমাদের সম্পর্কে', to: '/about' },
      { label: 'নোটিফিকেশন', to: '/notifications' },
    ],
  },
  {
    title: 'আইনি',
    links: [
      { label: 'গোপনীয়তা নীতি', to: '/privacy' },
      { label: 'শর্তাবলী', to: '/terms' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-burgundy/10 bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:pr-8">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-burgundy to-rose-deep text-cream-50">
                <BookOpen className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-lg font-bold text-burgundy">{SITE.name}</h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-ink-muted">{SITE.nameEn}</p>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">{SITE.tagline}</p>
            <p className="mt-4 flex items-center gap-1.5 text-xs text-ink-muted">
              ভালোবাসায় তৈরি <Heart className="h-3 w-3 fill-rose-deep text-rose-deep" />
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-burgundy">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-soft transition hover:text-burgundy hover:underline decoration-rose/50 underline-offset-4"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-burgundy/10 pt-6">
          <p className="text-center text-xs text-ink-muted">
            © {new Date().getFullYear()} {SITE.nameEn}. সমস্ত অধিকার সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
}
