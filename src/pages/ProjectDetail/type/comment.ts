interface CommentData {
  from: string;
  date: string;
  content: string;
}

export interface CommnetBoxProps {
  commentData: CommentData;
  lastelement: boolean;
}
