import {  Col, Flex, Button } from "antd";
import PHForm from "../../component/form/PHForm";
import PHSelect from "../../component/form/PHSelect";
import { useGetEnrolledFacultyInCourseQuery } from "../../redux/feature/faculty/myFacultyCourse.api";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const MyFacultyCourses = () => {
  const { data } = useGetEnrolledFacultyInCourseQuery(undefined);
  const navigate = useNavigate();
  console.log(data?.data);
  const semesterRegistrationOptions = data?.data?.map((item) => ({
    label: `${item.academicSemester.name}${item.academicSemester.year}`,
    value: item.semesterRegistration._id,
  }));
  const courseOptions = data?.data?.map((item) => ({
    label: `${item.course.title}`,
    value: `${item.course._id}`,
  }));
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    navigate(`/faculty/my-student/${data?.semesterRegistration}/${data.course}`);
  };
  return (
    <Flex justify="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name="semesterRegistration"
            label="Semester Registration"
            options={semesterRegistrationOptions}
          ></PHSelect>
          <PHSelect
            name="course"
            label="Course"
            options={courseOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default MyFacultyCourses;
