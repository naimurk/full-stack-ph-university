import z from "zod";
export const academicSemesterSchema = z.object({
  name: z.string({ required_error: "Please select name" }),
  year: z.string({ required_error: "Please select year" }),
  startDate: z.string({ required_error: "Please select start date" }),
  endDate: z.string({ required_error: "Please select end date" }),
});
