import axios from 'axios';

const client = axios.create({
  baseURL: import.meta.env.VITE_SWU_IP,
  headers: {
    'Access-Control-Allow-Origin': import.meta.env.VITE_SWU_IP,
    'Content-type': 'application/json',
  },
});

export const swuGraduationtFetcher = (url: string) => client.get(url).then((res) => res.data);
export { client };
