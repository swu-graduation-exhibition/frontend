import { useInfiniteQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/guestBook';

const useGetGuestBookMobile = (id: number) => {
  const designerId = id === -1 ? '' : id;
  const pageParams = 1;
  const fetchGuestBook = async (pageParams: number) => {
    const response = await getGuestBook(designerId, pageParams, 3);
    const list = response.designerCommentList;
    return { list, nextPage: pageParams + 1 };
  };
  const { data, fetchNextPage, hasNextPage, ...restValues } = useInfiniteQuery(
    ['getGuestBook'],
    () => fetchGuestBook(pageParams),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    },
  );

  return {
    mobileDesignerCommentList: data?.pages,
    fetchNextPage,
    hasNextPage,
    ...restValues,
  };
};

export default useGetGuestBookMobile;
