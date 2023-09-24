import { QueryClient, useQuery } from '@tanstack/react-query';
import { axiosRequest, client } from '~/lib/axios';
import { ApiResponse } from '../api.type';
import { DesignerDetailInfo } from '~/types/designer';

/** 메인페이지 배너 및 퀵메뉴 */
const getDesignerDetail = (designer_id: string): Promise<ApiResponse<DesignerDetailInfo>> => {
  const path = `/designer/${designer_id}`;
  return axiosRequest(client, 'get', path);
};

export const useDesignerDetail = (designer_id: string) => {
  return useQuery(['get-designer-detail', designer_id], () => getDesignerDetail(designer_id));
};
