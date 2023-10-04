import { useQuery } from '@tanstack/react-query';
import { getProjectComment } from '~/api/project';

const useGetProjectCommentDesktop = (id: number, page: number) => {
  const { data: desktopData } = useQuery(
    ['getProjectCommentDesktop', id, page],
    () => getProjectComment(id, page, 8),
    {
      onSuccess: (res) => {
        // console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  return { desktopData };
};

export default useGetProjectCommentDesktop;
