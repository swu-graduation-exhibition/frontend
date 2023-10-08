import axios from 'axios';

export async function getProjectList(type: number) {
  const data = await axios.get(`${import.meta.env.VITE_SWU_IP}/project/list?type=${type}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data?.data?.data;
}

export async function getProjectComment(id: number | string, page: number, limit: number) {
  const data = await axios.get(
    `${import.meta.env.VITE_SWU_IP}/comment/project?id=${id}&page=${page}&limit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  return data?.data?.data;
}

interface projectCommentType {
  sender: string;
  receiver: number | undefined;
  content: string;
}

export async function postProjectComment(formData: projectCommentType) {
  const data = await axios.post(`${import.meta.env.VITE_SWU_IP}/comment/project`, formData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data?.data?.data;
}
