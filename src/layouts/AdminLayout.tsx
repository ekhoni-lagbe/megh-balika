import { Outlet, Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function AdminLayout() {
  return (
    <div className="min-h-screen bg-cream-50">
      <header className="border-b border-burgundy/10 bg-burgundy text-cream-50">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:px-6 lg:px-8">
          <Shield className="h-4 w-4" />
          <span className="text-sm font-semibold">Megh Balika — অ্যাডমিন</span>
          <Link
            to="/"
            className="ml-auto text-xs opacity-70 hover:opacity-100"
          >
            ← সাইটে ফিরে যান
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}
