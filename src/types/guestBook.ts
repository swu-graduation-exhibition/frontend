export interface GuestBookCommentInfo {
  sender: string;
  content: string;
  createdAt: string;
}

export interface GuestBookPaginationInfo {
  totalSize: number;
  data: GuestBookCommentInfo[];
}
