export interface GuestBookCommentInfo {
  sender: string;
  content: string;
  createdAt: string;
}

export interface GuestBookPaginationInfo {
  count: number;
  designerCommentList: GuestBookCommentInfo[];
}

export interface GuestBookPageCard {
  sender: string;
  content: string;
  receiver: string;
  createdAt: string;
}

export interface GuesBookPageData {
  designerCommentList: GuestBookPageCard[];
  count: number;
}
