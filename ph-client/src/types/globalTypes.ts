import { BaseQueryApi } from "@reduxjs/toolkit/query";

// export
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TResponse <T> = {
  data?: T;
  error?: TError;
  meta ?: {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };
 status?: boolean;
 message?: string;
};

 export type TResponseWithRedux<T> = BaseQueryApi & TResponse<T>
