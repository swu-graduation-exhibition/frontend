import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useCommentList } from './get-designer-comment-list';

export default function useCommentDesignerWithScroll(designer_id: string, limit: number) {
  console.log(limit);
  const { data, error, isFetching, isLoading, fetchNextPage, refetch, isRefetching } =
    useCommentList(designer_id, limit);

  const ObservationComponent = (): React.ReactElement => {
    const [ref, inView] = useInView();

    useEffect(() => {
      if (!data) return;

      const isLast = Boolean(data.pages[0].response.length);

      if (isLast && inView) {
        fetchNextPage();
      }
    }, [inView]);

    return <div ref={ref} />;
  };

  return {
    data: data?.pages,
    error,
    isFetching,
    isLoading,
    totalRecord: data?.pages[0].count,
    ObservationComponent,
    fetchNextPage,
    isRefetching,
    refetch,
  };
}
