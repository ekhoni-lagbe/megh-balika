import { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-rose-soft/60 px-2.5 py-0.5 text-xs font-medium text-burgundy',
        className,
      )}
    >
      {children}
    </span>
  );
}
