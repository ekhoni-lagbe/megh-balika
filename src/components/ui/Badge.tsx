import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function Badge({
  children,
  className,
  variant = 'default',
}: {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'new' | 'solid';
}) {
  const variants = {
    default: 'bg-rose-soft/60 text-burgundy',
    new: 'bg-burgundy text-cream-50',
    solid: 'bg-lavender text-burgundy',
  };
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
