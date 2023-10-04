interface CommentData {
  sender: string;
  createdAt: string;
  content: string;
}

export interface CommnetBoxProps {
  commentData: CommentData;
  $lastelement: boolean;
}
