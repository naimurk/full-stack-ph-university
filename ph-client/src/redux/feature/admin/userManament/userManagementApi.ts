import { TResponseWithRedux, TStudent } from "../../../../types";
import { TQueryParams } from "../../../../types/queryParams.type";
import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all user
    getAllStudent: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/students",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TStudent[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),
    getAllFaculty: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/academic-faculties",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TStudent[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),
    getAllAdmin: builder.query({
      query: (arg) => {
        const params = new URLSearchParams();
        arg?.forEach((element: TQueryParams) => {
          params.append(element.name, element.value as string);
        });
        return {
          url: "/admins",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TStudent[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),

    // add all user
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student/",
        method: "POST",
        body: data,
      }),
    }),
    addFaculty: builder.mutation({
      query: (data) => ({
        url: "/users/create-faculty",
        method: "POST",
        body: data,
      }),
    }),
    addAdmin: builder.mutation({
      query: (data) => ({
        url: "/users/create-admin",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddStudentMutation,
  useGetAllStudentQuery,
  useAddAdminMutation,
  useAddFacultyMutation,
  useGetAllAdminQuery,
  useGetAllFacultyQuery,
} = userManagementApi;
