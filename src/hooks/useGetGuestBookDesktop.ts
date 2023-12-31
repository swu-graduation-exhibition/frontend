import { useQuery } from '@tanstack/react-query';
import { getGuestBook } from '~/api/guestBook';

const useGetGuestBookDesktop = (id: number, page: number) => {
  const designerId = id === -1 ? '' : id;
  const { data: desktopData, isLoading: isDesktopLoading } = useQuery(
    ['getGuestBookDesktop', id, page],
    () => getGuestBook(designerId, page, 8),
    {
      onSuccess: (res) => {
        // console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );
  // console.log(desktopData);
  return { desktopData, isDesktopLoading };
};

export default useGetGuestBookDesktop;
