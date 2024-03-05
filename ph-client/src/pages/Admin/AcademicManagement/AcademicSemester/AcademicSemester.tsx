import { useGetAllAcademicSemesterQuery } from "../../../../redux/feature/AcademicSemester/academicSemesterApi";

const AcademicSemester = () => {
  const { data } = useGetAllAcademicSemesterQuery(undefined);
  console.log(data);
  return <div>AcademicSemester</div>;
};

export default AcademicSemester;
