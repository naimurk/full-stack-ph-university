import {TResponseWithRedux } from "../../../../types";
import { TAcademicDepartment } from "../../../../types/academicDepartmentTypes";
import { baseApi } from "../../../api/baseApi";

const academicDepartmentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAcademicDepartmentApi: builder.query({
      query: () => {
        // const params = new URLSearchParams();
        // arg?.forEach((element: TQueryParams) => {
        //   params.append(element.name, element.value as string);
        // });
        return {
          url: "/academic-departments",
          method: "GET",
          //   params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TAcademicDepartment[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),
    addAcademicDepartment: builder.mutation({
      query: (data) => ({
        url: "/academic-departments/create-academic-department",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddAcademicDepartmentMutation,
  useGetAllAcademicDepartmentApiQuery,
} = academicDepartmentApi;
