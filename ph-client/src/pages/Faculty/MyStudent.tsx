import { useParams } from "react-router-dom";
import { useGetEnrolledFacultyInCourseQuery } from "../../redux/feature/faculty/myFacultyCourse.api";
import { Button, Table } from "antd";


const MyStudent = () => {
  // semesterRegisteredId/:courseId

  const { semesterRegisteredId, courseId } = useParams();
  //   console.log(semesterRegisteredId, courseId);
  const { data: EnrolledFacultyCourseData } =
    useGetEnrolledFacultyInCourseQuery([
      { name: "semesterRegistration", value: semesterRegisteredId },
      { name: "course", value: courseId },
    ]);
  // console.log(data);
  const data = EnrolledFacultyCourseData?.data?.map(
    ({ _id, student }) => ({
      key: _id,
      name: student.fullName,
      roll: student.id


    })
  );
  // console.log(params);

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      key: "roll",
      title: "Roll",
      dataIndex: "roll",
    },
    {
      key: "x",
      title: "Action",
      render: () => {
        return (
          <div>
            <Button>Update</Button>
          </div>
        );
      },
    },
  ];

  return (
    <Table
      // loading={isFetching}
      columns={columns}
      dataSource={data}
      // onChange={onChange}
    />
  );
};

export default MyStudent;
