import { QueryClient, useQuery } from '@tanstack/react-query';
import { client } from '~/lib/axios';
import { ApiResponse } from '../api.type';
import { DesingerInfo } from '~/types/designer';

/** 메인페이지 배너 및 퀵메뉴 */
const getDesignerList = (): Promise<ApiResponse<DesingerInfo>> => {
  const path = `/product/list`;
  return client.get(path);
};

export const useDesignerList = () => {
  return useQuery(['get-designer-list'], getDesignerList);
};
