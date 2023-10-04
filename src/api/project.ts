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
