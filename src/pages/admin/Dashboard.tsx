export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-burgundy">
        অ্যাডমিন ড্যাশবোর্ড
      </h1>
      <p className="mt-2 text-sm text-ink-soft">
        অ্যাডমিন ফিচার Phase 03-এ যুক্ত হবে।
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {['উপন্যাস', 'অধ্যায়', 'ব্যবহারকারী', 'পরিসংখ্যান'].map((label) => (
          <div
            key={label}
            className="rounded-2xl border border-burgundy/10 bg-white/60 p-5"
          >
            <p className="text-xs uppercase tracking-widest text-ink-muted">
              {label}
            </p>
            <p className="mt-2 font-display text-2xl font-bold text-burgundy">—</p>
          </div>
        ))}
      </div>
    </div>
  );
}
