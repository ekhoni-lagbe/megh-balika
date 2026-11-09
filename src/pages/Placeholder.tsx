import { ReactNode } from 'react';

interface PlaceholderProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

export function Placeholder({ title, description, children }: PlaceholderProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-2xl font-bold text-burgundy sm:text-3xl">
        {title}
      </h1>
      {description && <p className="mt-2 text-ink-soft">{description}</p>}
      <div className="mt-8 rounded-2xl border border-dashed border-burgundy/15 bg-white/40 p-8 text-center text-sm text-ink-muted">
        এই পৃষ্ঠাটি Phase 02-এ তৈরি হবে।
        {children}
      </div>
    </div>
  );
}
