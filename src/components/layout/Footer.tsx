import { Link } from 'react-router-dom';
import { SITE } from '@/config/site';

const columns = [
  {
    title: 'প্ল্যাটফর্ম',
    links: [
      { label: 'হোম', to: '/' },
      { label: 'ক্যাটাগরি', to: '/categories' },
      { label: 'সম্প্রতি পড়া', to: '/recently-read' },
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
    <footer className="mt-20 border-t border-burgundy/10 bg-cream-100">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h2 className="font-display text-xl font-semibold text-burgundy">
              {SITE.name}
            </h2>
            <p className="mt-2 text-sm text-ink-soft">{SITE.tagline}</p>
            <p className="mt-4 text-xs text-ink-muted">
              © {new Date().getFullYear()} {SITE.nameEn}. সমস্ত অধিকার সংরক্ষিত।
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-ink-soft transition hover:text-burgundy"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
