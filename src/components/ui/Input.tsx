import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/utils/cn';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'h-11 w-full rounded-xl border border-burgundy/15 bg-white/70 px-4 text-ink placeholder:text-ink-muted focus:border-burgundy/40 focus:outline-none focus:ring-2 focus:ring-burgundy/15 transition',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';
