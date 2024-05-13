import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../../component/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../../component/form/PHSelect";
import { academicOptions, monthOptions, yearOptions } from "./AcademinOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "./AcademinSemsterSchema";
import { useAddAcademicSemesterMutation } from "../../../../redux/feature/admin/AcademicSemester/academicSemesterApi";
import { toast } from "sonner";
import { TAcademicSemester,  TResponseWithRedux } from "../../../../types";

const CreateAcademicSemester = () => {
  const [addAcademicSemester] = useAddAcademicSemesterMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // console.log(data);
    
    const toastId = toast.loading("creating ...");
    const name = academicOptions[Number(data?.name) - 1].label;
    const formData = {
      name,
      code: data.name,
      year: data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth,
    };

    try {
      const res = (await addAcademicSemester(formData)) as TResponseWithRedux<TAcademicSemester>;
      if (res?.error) {
        toast.error(res?.error?.data?.message , {id : toastId});
      } else {
        toast.success(res?.data?.message , {id: toastId});
      }
   
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          resolver={zodResolver(academicSemesterSchema)}
          onSubmit={onSubmit}
        >
          <PHSelect
            name={"name"}
            label={"Name"}
            options={academicOptions}
          ></PHSelect>
          <PHSelect
            name={"year"}
            label={"Year"}
            options={yearOptions}
          ></PHSelect>
          <PHSelect
            name={"startMonth"}
            label={"Start Month"}
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            name={"endMonth"}
            label={"End Month"}
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
