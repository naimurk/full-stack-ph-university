import { TAcademicSemester, TResponseWithRedux } from "../../../../types";
import { baseApi } from "../../../api/baseApi";

const academicApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFaculty: builder.query({
      query: () => {
        // const params = new URLSearchParams();
        // arg?.forEach((element: TQueryParams) => {
        //   params.append(element.name, element.value as string);
        // });
        return {
          url: "/academic-faculties",
          method: "GET",
          //   params: params,
        };
      },
      transformResponse: (res: TResponseWithRedux<TAcademicSemester[]>) => {
        return { data: res?.data, meta: res?.meta };
      },
    }),
    addAcademicFaculty: builder.mutation({
      query: (data) => ({
        url: "/academic-faculties/create-academic-faculty",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddAcademicFacultyMutation, useGetAllFacultyQuery } =
  academicApi;
