import { useQuery } from '@tanstack/react-query';
import { axiosRequest, client } from '~/lib/axios';
import { ApiResponse } from '../api.type';
import { DesingerInfo } from '~/types/designer';

/** 메인페이지 배너 및 퀵메뉴 */
const getDesignerList = (): Promise<ApiResponse<DesingerInfo>> => {
  const path = `/designer/list`;
  return axiosRequest(client, 'get', path);
};

export const useDesignerList = () => {
  return useQuery(['get-designer-list'], getDesignerList);
};
