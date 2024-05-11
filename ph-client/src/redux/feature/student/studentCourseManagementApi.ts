import { TResponseWithRedux } from "../../../types";
import { TMyEnrolledCourse } from "../../../types/myEnrolledCourse.type";
import { TQueryParams } from "../../../types/queryParams.type";
import { TStudentOfferedCourse } from "../../../types/studentOfferedCourse.types";
import { baseApi } from "../../api/baseApi";

const studentCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getStudentOfferedCourse: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/offered-courses/my-offered-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["studentOfferedCourse"],
      transformResponse: (res: TResponseWithRedux<TStudentOfferedCourse[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),

    getMyEnrolledCourse: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/enrolled-courses/my-enrolled-courses",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["studentOfferedCourse"],
      transformResponse: (res: TResponseWithRedux<TMyEnrolledCourse[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),

    enrollCourse: builder.mutation({
      query: (data) => ({
        url: "/enrolled-courses/create-enrolled-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["studentOfferedCourse"],
    }),
  }),
});

export const { useGetStudentOfferedCourseQuery, useEnrollCourseMutation , useGetMyEnrolledCourseQuery} =
  studentCourseApi;
