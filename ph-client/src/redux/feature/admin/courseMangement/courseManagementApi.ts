import {
  TResponseWithRedux,
  TResponseWithReduxAnother,
} from "../../../../types";
import { TCourse } from "../../../../types/course.type";
import { TFacultyWithCourse } from "../../../../types/facultyWithCourse.types";
import { TQueryParams } from "../../../../types/queryParams.type";
import { TRegisteredSemester } from "../../../../types/registeredSemesterTypes";
import { baseApi } from "../../../api/baseApi";

const courseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/semester-registrations",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TRegisteredSemester[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
      providesTags: ["semester-registrations"],
    }),
    getAllCourses: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TCourse[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
      providesTags: ["course"],
    }),

    getAllFacultyByCourse: builder.query({
      query: ({ id }) => {
        return {
          url: `/courses/${id}/get-faculties`,
          method: "GET",
        };
      },
      transformResponse: (
        res: TResponseWithReduxAnother<TFacultyWithCourse[]>
      ) => {
        console.log(res);
        return { data: res?.data, meta: res?.meta };
      },
      providesTags: ["course"],
    }),

    addCourse: builder.mutation({
      query: (data) => ({
        url: "/courses/create-course",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),

    assignCourseToFaculty: builder.mutation({
      query: ({ id, data }) => ({
        url: `/courses/${id}/assign-faculties`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["course"],
    }),
    addOfferedCourse: builder.mutation({
      query: (data) => ({
        url: `/offered-courses/create-offered-course`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["OfferedCourse"],
    }),

    getOfferedCourse: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/offered-courses",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TCourse[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
      providesTags: ["OfferedCourse"],
    }),

    addSemesterRegistration: builder.mutation({
      query: (data) => ({
        url: "/semester-registrations/create-semester-registration",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["semester-registrations"],
    }),
    updateSemesterRegistration: builder.mutation({
      query: ({ id, data }) => ({
        url: `/semester-registrations/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["semester-registrations"],
    }),
  }),
});
export const {
  useAddSemesterRegistrationMutation,
  useGetAllRegisteredSemesterQuery,
  useUpdateSemesterRegistrationMutation,
  useGetAllCoursesQuery,
  useAddCourseMutation,
  useAssignCourseToFacultyMutation,
  useAddOfferedCourseMutation,
  useGetOfferedCourseQuery,
  useGetAllFacultyByCourseQuery,
} = courseManagementApi;
