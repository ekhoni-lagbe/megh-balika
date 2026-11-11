import { cn } from '@/utils/cn';

export function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn('animate-pulse rounded-xl bg-burgundy/5', className)}
      aria-hidden="true"
    />
  );
}
