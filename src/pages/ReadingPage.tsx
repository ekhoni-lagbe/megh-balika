import { useParams } from 'react-router-dom';
import { ReaderShell } from '@/components/reading/ReaderShell';

const sample = Array.from({ length: 6 }, (_, i) => (
  <p key={i}>
    বৃষ্টির শব্দে জেগে ওঠে শহর। জানালার কাচ ভেদ করে ঢুকে পড়ে সেই পুরনো
    গন্ধ — ভেজা মাটির, আর কিছু অসমাপ্ত কথার। সে প্রতিদিন এভাবেই শুরু করে
    নিজের দিন, এক কাপ চায়ের ভাপে, আর স্মৃতির পাতায়। প্রতিটি অধ্যায় যেন
    একটি নতুন সন্ধ্যা, নতুন প্রতিশ্রুতি নিয়ে আসে।
  </p>
));

export default function ReadingPage() {
  const { novelId, chapterId } = useParams<{ novelId: string; chapterId: string }>();
  const chapter = Number(chapterId ?? 1);

  return (
    <ReaderShell
      novelTitle={`উপন্যাস #${novelId ?? '—'}`}
      chapterTitle={`অধ্যায় ${chapter}`}
      content={sample}
      onPrev={chapter > 1 ? () => (window.location.href = `/read/${novelId}/${chapter - 1}`) : undefined}
      onNext={() => (window.location.href = `/read/${novelId}/${chapter + 1}`)}
    />
  );
}
