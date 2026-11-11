import { useRef, useState } from 'react';
import { MoreVertical, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from '@/config/site';
import { useClickOutside } from '@/hooks/useClickOutside';
import { cn } from '@/utils/cn';

export function ThreeDotMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false), open);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="আরও মেনু"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-full text-ink-soft transition hover:bg-rose/10 hover:text-burgundy"
      >
        {open ? <X className="h-5 w-5" /> : <MoreVertical className="h-5 w-5" />}
      </button>

      {open && (
        <nav
          aria-label="অতিরিক্ত নেভিগেশন"
          className="absolute right-0 top-12 z-50 w-60 animate-slide-in overflow-hidden rounded-2xl border border-burgundy/10 bg-cream-50 p-2 shadow-float"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  'block rounded-xl px-3 py-2.5 text-sm font-medium transition',
                  isActive
                    ? 'bg-rose/15 text-burgundy'
                    : 'text-ink-soft hover:bg-rose/10 hover:text-burgundy',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="my-1 h-px bg-burgundy/10" />
          <NavLink
            to="/settings"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition hover:bg-rose/10 hover:text-burgundy"
          >
            সেটিংস
          </NavLink>
        </nav>
      )}
    </div>
  );
}
