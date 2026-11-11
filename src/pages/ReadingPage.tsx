import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ReaderShell } from '@/components/reading/ReaderShell';
import { getNovel } from '@/data/novels';
import { getOrCreateChapter } from '@/data/chapters';
import { useProgress } from '@/context/ProgressContext';
import { EmptyState } from '@/components/ui/EmptyState';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export default function ReadingPage() {
  const { novelId, chapterId } = useParams<{ novelId: string; chapterId: string }>();
  const navigate = useNavigate();
  const { saveProgress } = useProgress();

  const novel = novelId ? getNovel(novelId) : undefined;
  const chapterNumber = Number(chapterId ?? 1);

  useEffect(() => {
    if (novelId && !isNaN(chapterNumber)) {
      saveProgress({
        novelId,
        chapterId: `${novelId}-ch${chapterNumber}`,
        chapterNumber,
      });
    }
  }, [novelId, chapterNumber, saveProgress]);

  if (!novel) {
    return (
      <EmptyState
        title="উপন্যাসটি পাওয়া যায়নি"
        action={<Link to="/"><Button>হোমপেজে ফিরে যান</Button></Link>}
      />
    );
  }

  const chapter = getOrCreateChapter(novel.id, chapterNumber);

  return (
    <ReaderShell
      novelTitle={novel.title}
      chapterTitle={`${chapter.number}. ${chapter.title}`}
      content={<p className="whitespace-pre-line">{chapter.content}</p>}
      onPrev={
        chapterNumber > 1
          ? () => navigate(`/read/${novel.id}/${chapterNumber - 1}`)
          : undefined
      }
      onNext={
        chapterNumber < novel.chapterCount
          ? () => navigate(`/read/${novel.id}/${chapterNumber + 1}`)
          : undefined
      }
      onChapterList={() => navigate(`/novel/${novel.id}`)}
    />
  );
}
