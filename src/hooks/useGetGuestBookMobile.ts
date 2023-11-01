import { useInfiniteQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/guestBook';

const useGetGuestBookMobile = (id: number) => {
  const designerId = id === -1 ? '' : id;
  //  const lastMobilePage = Math.ceil(mobileData?.count / 3);

  const fetchComments = async (pageParams: number) => {
    const response = await getGuestBook(designerId, pageParams, 3);

    return { response, nextPage: pageParams + 1 };
  };

  const { data, fetchNextPage, hasNextPage, ...restValues } = useInfiniteQuery(
    ['getGuestBookMobile', designerId],
    ({ pageParam = 1 }) => fetchComments(pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.response.length === 0 ? undefined : lastPage.nextPage;
      },
    },
  );

  const mobileCount = data?.pages[0].response.count;
  const mobileData = data?.pages.flatMap((data) =>
    data.response.commentList.filter((comment: any) => comment),
  );

  return {
    mobileCount,
    mobileData,
    fetchNextPage,
    hasNextPage,
    ...restValues,
  };
};

export default useGetGuestBookMobile;
