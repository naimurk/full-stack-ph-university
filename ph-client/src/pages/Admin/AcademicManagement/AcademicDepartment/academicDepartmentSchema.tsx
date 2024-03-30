import z from "zod";

export const academicDepartmentSchema = z.object({
  academicFaculty: z.string(),
  name: z.string(),
});
