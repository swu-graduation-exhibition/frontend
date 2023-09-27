import { useInfiniteQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/getGuestBook';

const useGetGuestBookMobile = (id: number) => {
  const pageParams = 1;
  const fetchGuestBook = async (pageParams: number) => {
    const response = await getGuestBook(id, pageParams, 3);
    const list = response.designerCommentList;
    return { list, nextPage: pageParams + 1 };
  };
  const { data, fetchNextPage, hasNextPage, ...restValues } = useInfiniteQuery(
    ['getGuestMobile'],
    () => fetchGuestBook(pageParams),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    },
  );
  console.log(data);
  return {
    mobileDesignerCommentList: data?.pages,
    fetchNextPage,
    hasNextPage,
    ...restValues,
  };
};

export default useGetGuestBookMobile;
