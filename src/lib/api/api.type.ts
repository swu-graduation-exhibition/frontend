export type Keys<T> = keyof T;
export type Values<T> = T[Keys<T>];

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  status: number;
  error?: {
    code: number;
    detail: string;
    title: string;
    status: number;
  };
}
