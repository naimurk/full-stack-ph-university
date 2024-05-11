import { useParams } from "react-router-dom";
import { useGetEnrolledFacultyInCourseQuery } from "../../redux/feature/faculty/myFacultyCourse.api";

const MyStudent = () => {
  // semesterRegisteredId/:courseId

  const { semesterRegisteredId, courseId } = useParams();
//   console.log(semesterRegisteredId, courseId);
  const { data } = useGetEnrolledFacultyInCourseQuery([
    { name: "semesterRegistration", value: semesterRegisteredId },
    { name: "course", value: courseId },
  ]);
  console.log(data)
  return <div>MyStudent</div>;
};

export default MyStudent;
