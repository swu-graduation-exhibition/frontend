import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

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

  const { designerCommentList: listData, count } = data;

  return {
    response: listData,
    nextPage: listData?.length >= limit ? pageParam + 1 : undefined,
    count,
  };
};

export const useDefaultCommentList = (designer_id: string, limit: number, pageParam: number) => {
  return useQuery(['get-designer-comment-list-default', designer_id, limit, pageParam], () =>
    getCommentList(designer_id, limit, pageParam),
  );
};

export const useCommentList = (designer_id: string, limit: number) => {
  return useInfiniteQuery(
    ['get-designer-comment-List', designer_id, limit],
    ({ pageParam = 1 }) => fetchCommentList(designer_id, limit, pageParam),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextPage;
      },
    },
  );
};
