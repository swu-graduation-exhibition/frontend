import { useQuery } from '@tanstack/react-query';
import { getProjectComment } from '~/api/project';

const useGetProjectCommentTablet = (id: number, page: number) => {
  const { data: tabletData } = useQuery(
    ['getProjectCommentTablet', id, page],
    () => getProjectComment(id, page, 6),
    {
      onSuccess: (res) => {
        // console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  return { tabletData };
};

export default useGetProjectCommentTablet;
