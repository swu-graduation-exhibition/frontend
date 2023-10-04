import axios from 'axios';

export async function getProjectList(type: number) {
  console.log(type);
  const data = await axios.get(`http://3.38.119.61:3000/project/list?type=${type}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data?.data?.data;
}

export async function getProjectComment(id: number | string, page: number, limit: number) {
  console.log(limit);
  const data = await axios.get(
    `http://3.38.119.61:3000/comment/project?id=${id}&page=${page}&limit=${limit}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );

  console.log(data?.data?.data);

  return data?.data?.data;
}
