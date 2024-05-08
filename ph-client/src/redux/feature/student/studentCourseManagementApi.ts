import { TResponseWithRedux } from "../../../types";
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
      transformResponse: (res: TResponseWithRedux<TStudentOfferedCourse[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),
    // addAcademicSemester: builder.mutation({
    //   query: (data) => ({
    //     url: "/academic-semesters/create-academic-semester",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

export const { useGetStudentOfferedCourseQuery } = studentCourseApi;
