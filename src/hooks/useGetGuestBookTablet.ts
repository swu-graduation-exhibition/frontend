import { useQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/guestBook';

const useGetGuestBookTablet = (id: number, page: number) => {
  const designerId = id === -1 ? '' : id;
  const { data: tabletData } = useQuery(['getGuestBook'], () => getGuestBook(designerId, page, 6), {
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
