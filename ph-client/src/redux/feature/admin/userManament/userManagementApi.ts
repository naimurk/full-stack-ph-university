import { TResponseWithRedux, TStudent } from "../../../../types";
import { TQueryParams } from "../../../../types/queryParams.type";
import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddStudentMutation , useGetAllStudentQuery } = userManagementApi;
