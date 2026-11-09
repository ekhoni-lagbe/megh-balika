import { useSearchParams } from 'react-router-dom';
import { Placeholder } from './Placeholder';

export default function SearchResults() {
  const [params] = useSearchParams();
  const q = params.get('q') ?? '';
  return (
    <Placeholder
      title={q ? `"${q}" এর ফলাফল` : 'অনুসন্ধান'}
      description="সার্চ ফাংশনালিটি Phase 02-এ যুক্ত হবে।"
    />
  );
}
