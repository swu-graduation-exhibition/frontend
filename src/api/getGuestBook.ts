import axios from 'axios';

export async function getGuestBook(id: number, page: number, limit: number) {
  const data = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/comment/designer?id=${id}&page=${page}&limit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data?.data?.data;
}
