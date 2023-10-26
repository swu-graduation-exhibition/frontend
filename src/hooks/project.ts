import { useQuery } from '@tanstack/react-query';
import { getProjectDetail } from '~/api/project';

export default function useGetProjectDetail(id: number) {
  const { data: projectDetail } = useQuery(['getProjectDetail'], () => getProjectDetail(id), {
    onSuccess: () => {},
    onError: (err) => {
      console.log(err);
    },
  });

  return { projectDetail };
}
