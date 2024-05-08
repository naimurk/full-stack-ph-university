import { object } from "zod";
import { useGetStudentOfferedCourseQuery } from "../../redux/feature/student/studentCourseManagementApi";

const OfferedCourse = () => {
  const { data: studentOfferedCourses } =
    useGetStudentOfferedCourseQuery(undefined);
  const singleObject = studentOfferedCourses?.data?.reduce((acc, item) => {
    const key = item?.course?.title;
    acc[key] = acc[key] || { courseTitle: key, section: [] };
    acc[key].section.push({
      section: item?.section,
      _id: item?._id,
    });
    return acc;
  }, {});
  console.log(Object.values(singleObject ? singleObject : {}));
  // console.log(Object.values(singleObject));
  return <div>OfferedCourse student</div>;
};

export default OfferedCourse;
