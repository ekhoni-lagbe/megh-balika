import { useParams } from 'react-router-dom';
import { Placeholder } from './Placeholder';

export default function NovelDetails() {
  const { novelId } = useParams();
  return (
    <Placeholder
      title={`উপন্যাস — ${novelId}`}
      description="উপন্যাসের বিস্তারিত তথ্য, অধ্যায় তালিকা ও রিভিউ Phase 02-এ যুক্ত হবে।"
    />
  );
}
