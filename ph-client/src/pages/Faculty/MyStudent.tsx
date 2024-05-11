import { json, useParams } from "react-router-dom";
import {
  useGetEnrolledFacultyInCourseQuery,
  useUpdateStudentMarkMutation,
} from "../../redux/feature/faculty/myFacultyCourse.api";
import { Button, Modal, Table } from "antd";
import PHForm from "../../component/form/PHForm";
import PHinput from "../../component/form/PHinput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useState } from "react";

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
    ({ _id, student, semesterRegistration, offeredCourse }) => ({
      key: _id,
      name: student.fullName,
      roll: student.id,
      semesterRegistration: semesterRegistration?._id,
      offeredCourse: offeredCourse._id,
      student: student._id,
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
      render: (item) => {
        // console.log(item)
        return <AddMarksModal studentInfo={item}></AddMarksModal>;
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
const AddMarksModal = ({ studentInfo }) => {
  // console.log(studentInfo);
  const [updateStudentMarks] = useUpdateStudentMarkMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSubmit: SubmitHandler<FieldValues> = async (data) => {
    const studentMarks = {
      semesterRegistration: studentInfo.semesterRegistration,
      offeredCourse: studentInfo.offeredCourse,
      student: studentInfo.student,
      courseMarks: {
        classTest1: Number(data?.classTest1),
        midTerm: Number(data?.midTerm),
        classTest2: Number(data?.classTest2),
        finalTerm: Number(data?.finalTerm),
      },
    };
    // console.log(boydData);
    // console.log(boydData);
    const res = await updateStudentMarks(studentMarks);
    // console.log(res);
  };

  return (
    <>
      <Button onClick={showModal}>Assign Faculty</Button>
      <Modal
        title="Assign Faculty"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <PHForm onSubmit={handleSubmit}>
          <PHinput
            label="Class test 1"
            name="classTest1"
            type="number"
          ></PHinput>
          <PHinput
            label="Class test 2"
            name="classTest2"
            type="number"
          ></PHinput>
          <PHinput label="Midterm" name="midTerm" type="number"></PHinput>
          <PHinput label="Finalterm" name="finalTerm" type="number"></PHinput>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Modal>
    </>
  );
};
