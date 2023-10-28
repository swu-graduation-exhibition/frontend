import axios from 'axios';

export async function getGuestBook(id: number | string, page: number, limit: number) {
  const data = await axios.get(
    `${import.meta.env.VITE_APP_BASE_URL}/comment/list?id=${id}&page=${page}&limit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data?.data?.data;
}

interface guestbookType {
  sender: string;
  receiver: number;
  content: string;
}

export async function postGuestBook(formData: guestbookType) {
  const data = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}/comment/designer`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data?.data?.data;
}
