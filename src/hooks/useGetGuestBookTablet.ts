import { useQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/getGuestBook';

const useGetGuestBookTablet = (id: number, page: number) => {
  const { data: tabletData } = useQuery(['getGuestTablet'], () => getGuestBook(id, page, 6), {
    onSuccess: (res) => {
      // console.log(res);
    },
    onError: (err) => {
      console.log(tabletData);
    },
  });

  return { tabletData };
};

export default useGetGuestBookTablet;
