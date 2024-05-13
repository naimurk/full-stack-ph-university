import { FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Col, Flex } from "antd";


import { toast } from "sonner";

import PHForm from "../../../component/form/PHForm";
import PHSelect from "../../../component/form/PHSelect";
import { useGetAllAcademicSemesterQuery } from "../../../redux/feature/admin/AcademicSemester/academicSemesterApi";
import { status } from "../../../options/Options";
import PHDatePicker from "../../../component/form/PHDatePicker";
import PHinput from "../../../component/form/PHinput";
import { useAddSemesterRegistrationMutation } from "../../../redux/feature/admin/courseMangement/courseManagementApi";
import { TResponseWithRedux } from "../../../types";

const SemesterRegistration = () => {
  const { data: allAcademicSemesterData } =
    useGetAllAcademicSemesterQuery(undefined);
  const [createSemesterRegistration] =
    useAddSemesterRegistrationMutation();
  const academicSemesterOptions = allAcademicSemesterData?.data?.map(
    (item) => ({
      label: `${item?.name} ${item?.year}`,
      value: item._id,
    })
  );
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);

    const toastId = toast.loading("creating ...");
    // const name = academicOptions[Number(data?.name) - 1].label;
    const formData = {
      //   name,
      ...data,
    
      minCredit: Number(data.minCredit),
      maxCredit: Number(data.maxCredit),
    };

    try {
      const res = (await createSemesterRegistration(
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
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm onSubmit={onSubmit}>
          <PHSelect
            name={"academicSemester"}
            label={"Academic Semester"}
            options={academicSemesterOptions}
          ></PHSelect>

          <PHSelect
            name={"status"}
            label={"Status"}
            options={status}
          ></PHSelect>
          <PHDatePicker name="startDate" label="Start Date"></PHDatePicker>
          <PHDatePicker name="endDate" label="End Date"></PHDatePicker>
          <PHinput label="Min Credit" type="text" name="minCredit"></PHinput>

          <PHinput label="Max Credit" type="text" name="maxCredit"></PHinput>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default SemesterRegistration;
