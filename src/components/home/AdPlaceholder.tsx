export function AdPlaceholder() {
  return (
    <aside
      aria-label="বিজ্ঞাপন"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="grid place-items-center rounded-2xl border border-dashed border-burgundy/15 bg-gradient-to-br from-cream-100/80 to-rose/5 py-12 text-center">
        <p className="text-sm font-medium text-ink-muted">বিজ্ঞাপনের জন্য স্থান</p>
        <p className="mt-1 text-[10px] uppercase tracking-widest text-ink-muted/60">
          Advertisement
        </p>
      </div>
    </aside>
  );
}
