import { useInfiniteQuery } from '@tanstack/react-query';
import { getProjectComment } from '~/api/project';

const useGetProjectCommentMobile = (id: number) => {
  const designerId = id === -1 ? '' : id;

  const fetchComments = async (pageParams: number) => {
    const response = await getProjectComment(designerId, pageParams, 3);

    return { response, nextPage: pageParams + 1 };
  };

  const { data, fetchNextPage, hasNextPage, ...restValues } = useInfiniteQuery(
    ['getProjectCommentMobile'],
    ({ pageParam = 1 }) => fetchComments(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.response.length === 0 ? undefined : lastPage.nextPage;
      },
    },
  );

  const mobileCount = data?.pages[0].response.count;
  const mobileData = data?.pages.flatMap((data) =>
    data.response.projectCommentList.filter((comment: any) => comment),
  );

  return {
    mobileCount,
    mobileData,
    fetchNextPage,
    hasNextPage,
    ...restValues,
  };
};

export default useGetProjectCommentMobile;
