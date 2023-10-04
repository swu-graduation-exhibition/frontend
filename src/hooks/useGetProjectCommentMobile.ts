import { useQuery } from '@tanstack/react-query';
import { getProjectComment } from '~/api/project';

const useGetProjectCommentMobile = (id: number, page: number) => {
  const { data: mobileData } = useQuery(
    ['getProjectCommentMobile', id, page],
    () => getProjectComment(id, page, 3),
    {
      onSuccess: (res) => {
        // console.log(res);
      },
      onError: (err) => {
        console.log(err);
      },
    },
  );

  return { mobileData };
};

export default useGetProjectCommentMobile;
