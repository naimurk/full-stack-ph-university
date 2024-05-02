import { FieldValues, SubmitHandler } from "react-hook-form";
import { Button, Col, Flex } from "antd";
import { toast } from "sonner";
import PHForm from "../../../component/form/PHForm";
import PHinput from "../../../component/form/PHinput";
import {
  useAddCourseMutation,
  useGetAllCoursesQuery,
} from "../../../redux/feature/admin/courseMangement/courseManagementApi";
import { TResponseWithRedux } from "../../../types";
import PHSelect from "../../../component/form/PHSelect";
import { TPreRequisiteCourse } from "../../../types/course.type";

const CreateCourse = () => {
  const [createCourse, { data: insertedData }] = useAddCourseMutation();
  const { data: coursesData } = useGetAllCoursesQuery(undefined);
  const courseOptions = coursesData?.data?.map((item) => ({
    label: item?.title,
    value: item?._id,
  }));
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating ...");
    // const name = academicOptions[Number(data?.name) - 1].label;
    const formData = {
      //   name,
      ...data,
      preRequisiteCourses: data?.preRequisiteCourses?.map(
        (item: TPreRequisiteCourse) => ({
          course: item,
          isDeleted: false,
        })
      ),
      code: Number(data.code),
      credits: Number(data.credits),
    };
    console.log(formData);

    try {
      const res = (await createCourse(formData)) as TResponseWithRedux<any>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        toast.success(res?.data?.message, { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  // console.log(insertedData);

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHinput label="Title" type="text" name="title"></PHinput>
          <PHinput label="Prefix" type="text" name="prefix"></PHinput>
          <PHinput label="Code" type="text" name="code"></PHinput>
          <PHinput label="Credits" type="text" name="credits"></PHinput>
          <PHSelect
            label="Course"
            mode="multiple"
            options={courseOptions}
            name="preRequisiteCourses"
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateCourse;
