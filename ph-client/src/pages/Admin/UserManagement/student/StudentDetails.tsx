import { useParams } from "react-router-dom";

const StudentDetails = () => {
  // todo-1
  const { studentId } = useParams();
  // console.log(studentId);
  return <div><p>{studentId}</p></div>;
};

export default StudentDetails;
