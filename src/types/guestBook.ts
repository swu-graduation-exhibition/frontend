export interface GuestBookCommentInfo {
  sender: string;
  content: string;
  createdAt: string;
}

export interface GuestBookPaginationInfo {
  count: number;
  designerCommentList: GuestBookCommentInfo[];
}
