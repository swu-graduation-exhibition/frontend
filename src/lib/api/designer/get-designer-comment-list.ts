import { useInfiniteQuery } from '@tanstack/react-query';

import { axiosRequest, client } from '~/lib/axios';
import { ApiResponse } from '../api.type';
import { GuestBookPaginationInfo } from '~/types/guestBook';

const getCommentList = (
  designer_id: string,
  limit: number,
  page: number,
): Promise<ApiResponse<GuestBookPaginationInfo>> => {
  return axiosRequest(
    client,
    'get',
    `comment/designer?id=${designer_id}&page=${page}&limit=${limit}`,
  );
};

const fetchCommentList = async (designer_id: string, limit: number, pageParam: number) => {
  const { data } = await getCommentList(designer_id, limit, pageParam);

  const { data: listData, count } = data;

  return {
    response: listData,
    nextPage: pageParam + 1,
    count,
  };
};

export const useCommentList = (designer_id: string, limit: number) => {
  return useInfiniteQuery(
    ['get-designer-comment-List', designer_id, limit],
    ({ pageParam = 0 }) => fetchCommentList(designer_id, limit, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const count = lastPage.count;
        const items = lastPage.response;
        return items && items.length > 0 ? lastPage.nextPage : false;
      },
    },
  );
};
