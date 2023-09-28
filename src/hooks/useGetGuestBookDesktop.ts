import { useQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/getGuestBook';

const useGetGuestBookDesktop = (id: number, page: number) => {
  const { data: desktopData } = useQuery(['getGuestDesktop'], () => getGuestBook(id, page, 8), {
    onSuccess: (res) => {
      // console.log(res);
    },
    onError: (err) => {
      console.log(err);
    },
  });
  // console.log(desktopData);
  return { desktopData };
};

export default useGetGuestBookDesktop;
