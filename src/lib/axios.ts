import axios, { AxiosInstance, Method } from 'axios';

const client = axios.create({
  baseURL: 'http://3.38.119.61:3000', //import.meta.env.VITE_SWU_IP,
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_SWU_IP,
    'Content-type': 'application/json',
  },
});

export const swuGraduationtFetcher = (url: string) => client.get(url).then((res) => res.data);
export { client };

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
