import { client } from '~/lib/axios';

interface projectCommentType {
  sender: string;
  receiver: number | undefined;
  content: string;
}

export async function postDesignerComment(formData: projectCommentType) {
  const data = await client.post(`${import.meta.env.VITE_APP_BASE_URL}/comment/designer`, formData);

  return data?.data?.data;
}
