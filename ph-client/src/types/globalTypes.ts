import { BaseQueryApi } from "@reduxjs/toolkit/query";
import { TFacultyWithCourse } from "./facultyWithCourse.types";

// export
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TFacultyWithCourses = {
  data: {
    faculties: TFacultyWithCourse[];
  };
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?: {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };
  status?: boolean;
  message?: string;
};

export type TResponseWithRedux<T> = BaseQueryApi & TResponse<T>;

export type TResponseAnother<T> = {
  data?: {
    faculties: T;
  };
  error?: TError;
  meta?: {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };
  status?: boolean;
  message?: string;
};

export type TResponseWithReduxAnother<T> = BaseQueryApi & TResponseAnother<T>;
