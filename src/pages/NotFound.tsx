import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="mx-auto grid max-w-xl place-items-center px-4 py-24 text-center">
      <p className="font-display text-6xl font-bold text-burgundy">৪০৪</p>
      <h1 className="mt-3 text-xl font-semibold text-ink">
        পৃষ্ঠাটি খুঁজে পাওয়া যায়নি
      </h1>
      <p className="mt-2 text-sm text-ink-muted">
        আপনি যে পৃষ্ঠাটি খুঁজছেন তা সরানো হয়েছে বা কখনও ছিল না।
      </p>
      <Link to="/" className="mt-6">
        <Button>হোমপেজে ফিরে যান</Button>
      </Link>
    </div>
  );
}
