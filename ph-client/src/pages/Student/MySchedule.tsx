import { useGetMyEnrolledCourseQuery } from "../../redux/feature/student/studentCourseManagementApi";

const MySchedule = () => {
    // todo: -2
    
  const { data } = useGetMyEnrolledCourseQuery(undefined);
  // console.log(data?.data?.map((item)=> ))
  console.log(data);

  return <div>MySchedule</div>;
};

export default MySchedule;
