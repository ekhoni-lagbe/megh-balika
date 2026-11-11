import { ReactNode } from 'react';
import { BookOpen } from 'lucide-react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="grid h-16 w-16 place-items-center rounded-full bg-rose/15 text-burgundy">
        {icon ?? <BookOpen className="h-7 w-7" />}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-ink">{title}</h3>
      {description && (
        <p className="mt-2 max-w-sm text-sm text-ink-muted">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
