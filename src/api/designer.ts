import { client } from '~/lib/axios';

interface projectCommentType {
  sender: string;
  receiver: number | undefined;
  content: string;
}

export async function postDesignerComment(formData: projectCommentType) {
  const data = await client.post(`${import.meta.env.VITE_SWU_IP}/comment/designer`, formData);

  return data?.data?.data;
}
