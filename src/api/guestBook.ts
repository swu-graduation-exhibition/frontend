import axios from 'axios';

export async function getGuestBook(id: number | string, page: number, limit: number) {
  const data = await axios.get(
    `http://3.38.119.61:3000/comment/list?id=${id}&page=${page}&limit=${limit}`,
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
  const data = await axios.post(`http://3.38.119.61:3000/comment/designer`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data?.data?.data;
}
