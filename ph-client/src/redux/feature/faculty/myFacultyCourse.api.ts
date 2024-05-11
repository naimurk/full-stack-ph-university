import { TResponseWithRedux } from "../../../types";
import { TMyFacultyEnrolledCourse } from "../../../types/myFacultyEnrolledCourse.type";
import { TQueryParams } from "../../../types/queryParams.type";
import { baseApi } from "../../api/baseApi";

const myFacultyCourseApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEnrolledFacultyInCourse: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/enrolled-courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (
        res: TResponseWithRedux<TMyFacultyEnrolledCourse[]>
      ) => {
        return { data: res?.data, meta: res?.meta };
      },
      providesTags: ["semester-registrations"],
    }),
    updateStudentMark: builder.mutation({
      query: (data) => {
        return {
          url: "/enrolled-courses/update-enrolled-course-marks",
          method: "PATCH",
          body: data,
        };
      },
    }),
  }),
});

export const {
  useGetEnrolledFacultyInCourseQuery,
  useUpdateStudentMarkMutation,
} = myFacultyCourseApi;
