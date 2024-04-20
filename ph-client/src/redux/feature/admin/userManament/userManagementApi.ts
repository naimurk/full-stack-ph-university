import { baseApi } from "../../../api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // getAllAcademicSemester: builder.query({
    //   query: (arg) => {
    //     const params = new URLSearchParams();
    //     arg?.forEach((element: TQueryParams) => {
    //       params.append(element.name, element.value as string);
    //     });
    //     return {
    //       url: "/academic-semesters",
    //       method: "GET",
    //       params: params,
    //     };
    //   },
    //   transformResponse: (res: TResponseWithRedux<TAcademicSemester[]>) => {
    //     return { data: res?.data, meta: res?.meta };
    //   },
    // }),
    addStudent: builder.mutation({
      query: (data) => ({
        url: "/users/create-student/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddStudentMutation } = userManagementApi;
