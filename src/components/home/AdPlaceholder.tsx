export function AdPlaceholder() {
  return (
    <aside
      aria-label="বিজ্ঞাপন"
      className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
    >
      <div className="grid place-items-center rounded-2xl border border-dashed border-burgundy/15 bg-cream-100/60 py-10 text-center">
        <p className="text-sm font-medium text-ink-muted">বিজ্ঞাপনের জন্য স্থান</p>
        <p className="mt-1 text-xs text-ink-muted/70">
          Advertisement Placeholder
        </p>
      </div>
    </aside>
  );
}
