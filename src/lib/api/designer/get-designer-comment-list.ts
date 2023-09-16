import { QueryClient, useInfiniteQuery } from '@tanstack/react-query';

import { client } from '~/lib/axios';
import { ApiResponse } from '../api.type';
import { GuestBookPaginationInfo } from '~/types/guestBook';

const getCommentList = (
  path: string | undefined | null,
  page: number,
): Promise<ApiResponse<GuestBookPaginationInfo>> | null => {
  return client.get(`${path}&page=${page}`);
};

const fetchCommentList = async (path: string | undefined | null, page: number) => {
  return {
    response: await getCommentList(path, page),
    nextPage: page + 1,
  };
};

export const useCommentList = (path: string | undefined | null) => {
  return useInfiniteQuery(
    ['get-designer-comment-List', path],
    ({ pageParam = 0 }) => fetchCommentList(path, pageParam),
    {
      getNextPageParam: (lastPage) => {
        const totalSize = lastPage.response?.data.totalSize;
        const items = lastPage.response?.data.data;
        return items && items.length > 0 ? lastPage.nextPage : false;
      },
    },
  );
};
