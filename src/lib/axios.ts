import axios, { AxiosInstance, Method } from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_SWU_IP,
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_SWU_IP,
    'Content-type': 'application/json',
  },
});
const dev_client = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_APP_BASE_URL,
    'Content-type': 'application/json',
  },
});
export const swuDevGraduationtFetcher = (url: string) =>
  dev_client.get(url).then((res) => res.data);

export const swuGraduationtFetcher = (url: string) => client.get(url).then((res) => res.data);
export { client, dev_client };

export const axiosRequest = async <T>(
  axiosInstance: AxiosInstance,
  method: Method = 'get',
  url: string,
  data?: any,
  headers?: any,
  params?: any,
  validStatusList: number[] = [],
): Promise<T> => {
  const instance = await axiosInstance.request<T>({
    method,
    url,
    ...(data && { data }),
    ...(headers && {
      headers: {
        ...headers,
      },
    }),
    ...(params && { params }),

    validateStatus: (status) => {
      return (
        (status >= 200 && status < 300) ||
        !!validStatusList.find((validStatus) => validStatus === status)
      );
    },
  });

  return instance.data;
};
