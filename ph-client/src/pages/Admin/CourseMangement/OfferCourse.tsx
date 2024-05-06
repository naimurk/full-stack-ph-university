import { FieldValues, SubmitHandler } from "react-hook-form";
import { useGetAllFacultyQuery } from "../../../redux/feature/admin/AcademicFaculty/academicFacultyApi";
import { useGetAllAcademicDepartmentApiQuery } from "../../../redux/feature/admin/academicDepartment/academincDepartmentApi";
import {
  useAddOfferedCourseMutation,
  useGetAllCoursesQuery,
  useGetAllFacultyByCourseQuery,
  useGetAllRegisteredSemesterQuery,
} from "../../../redux/feature/admin/courseMangement/courseManagementApi";
import { toast } from "sonner";
import { TPreRequisiteCourse } from "../../../types/course.type";
import { TResponseWithRedux } from "../../../types";
import { Button, Col, Flex } from "antd";
import PHForm from "../../../component/form/PHForm";
import PHSelect from "../../../component/form/PHSelect";
import { weekOptions } from "../../../options/Options";
import PHinput from "../../../component/form/PHinput";
import PHDatePicker from "../../../component/form/PHDatePicker";
import PHTimePicker from "../../../component/form/PHTimePicker";
import { useState } from "react";
import PHSelectWithWatch from "../../../component/form/PHSelectWithWatch";

const OfferCourse = () => {
  const [courseId, setCourseId] = useState("");
  const { data: registeredSemester } =
    useGetAllRegisteredSemesterQuery(undefined);
  //   const {data }
  const semisterOptions = registeredSemester?.data?.map((item) => ({
    label: `${item.academicSemester.name} ${item.academicSemester.year}`,
    value: `${item._id}`,
  }));
  const { data: academicDepartment } =
    useGetAllAcademicDepartmentApiQuery(undefined);
  const departmentOptions = academicDepartment?.data?.map((item) => ({
    label: `${item.name}`,
    value: `${item._id}`,
  }));
  const {
    data: facultyData,
    isFetching,
    isLoading,
  } = useGetAllFacultyQuery(undefined);

  const facultyOptions = facultyData?.data?.map((item) => ({
    label: `${item.name}`,
    value: `${item._id}`,
  }));

  const { data: allcourses } = useGetAllCoursesQuery(undefined);
  const allcoursesOptions = allcourses?.data?.map((item) => ({
    label: `${item.title}`,
    value: `${item._id}`,
  }));

  // coursesByFaculty
  const { data: allFacultyDataByCourse } = useGetAllFacultyByCourseQuery(
    {
      id: courseId,
    },
    { skip: !courseId }
  );
 console.log(allFacultyDataByCourse)
  const allFacultyWithCourseOptions = allFacultyDataByCourse?.data?.faculties?.map(
    (item) => ({
      label: `${item.fullName}`,
      value: `${item._id}`,
    })
  );

  const [createOfferedCourse, { data: insertedData }] =
    useAddOfferedCourseMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating ...");
    // const name = academicOptions[Number(data?.name) - 1].label;
    const formData = {
      ...data,
      section: Number(data.section),
      maxCapacity: Number(data?.maxCapacity)
    };
    // console.log(formData);

    try {
      const res = (await createOfferedCourse(
        formData
      )) as TResponseWithRedux<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <>
      <Flex justify="center" align="center">
        <Col span={6}>
          <PHForm onSubmit={onSubmit}>
            <PHSelect
              label="Semester Registration"
              options={semisterOptions}
              name="semesterRegistration"
            ></PHSelect>
            <PHSelect
              label="Academic Faculty"
              options={facultyOptions}
              name="academicFaculty"
            ></PHSelect>
            <PHSelect
              label="Academic Department"
              options={departmentOptions}
              name="academicDepartment"
            ></PHSelect>
            <PHSelectWithWatch
              label="Course"
              options={allcoursesOptions}
              name="course"
              onValueChange={setCourseId}
            ></PHSelectWithWatch>

            <PHSelect
              label="Faculty"
              disabled={!courseId}
              options={allFacultyWithCourseOptions}
              name="faculty"
            ></PHSelect>
            {/* 
            <PHSelect
              label="Course"
              options={allcoursesOptions}
              name="course"
            ></PHSelect> */}
            <PHSelect
              label="Days"
              mode="multiple"
              options={weekOptions}
              name="days"
            ></PHSelect>
            <PHinput name="section" type="number" label="Section"></PHinput>
            <PHinput
              name="maxCapacity"
              type="number"
              label="Max capacity"
            ></PHinput>

            <PHinput name="startTime" type="time" label="Start time"></PHinput>
            <PHinput name="endTime" type="time" label="Start time"></PHinput>

            <Button htmlType="submit">Submit</Button>
          </PHForm>
        </Col>
      </Flex>
    </>
  );
};

export default OfferCourse;
