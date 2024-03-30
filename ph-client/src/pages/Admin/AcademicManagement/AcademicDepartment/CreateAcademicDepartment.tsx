import { Button, Col, Flex } from "antd";
import PHForm from "../../../../component/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import PHinput from "../../../../component/form/PHinput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { TResponse, TResponseWithRedux } from "../../../../types";
import { TAcademicDepartment } from "../../../../types/academicDepartmentTypes";
import { toast } from "sonner";
import { useGetAllFacultyQuery } from "../../../../redux/feature/admin/AcademicFaculty/academicFacultyApi";
import { useAddAcademicDepartmentMutation } from "../../../../redux/feature/admin/academicDepartment/academincDepartmentApi";
import { academicDepartmentSchema } from "./academicDepartmentSchema";
import PHSelect from "../../../../component/form/PHSelect";
import { optionsConverter } from "../../../../utils/optionsConverter";
import { useEffect, useState } from "react";
import { TOptions } from "../../../../types/optionsTypes";

const CreateAcademicDepartment = () => {
  const { data: facultyData } = useGetAllFacultyQuery(undefined);
  const [addAcademicDepartment] = useAddAcademicDepartmentMutation();
  const [academicFacultyOptions, setacademicFacultyOptions] = useState<
    TOptions[] | undefined
  >(undefined);

  useEffect(() => {
    const arr = optionsConverter("name", "_id", facultyData?.data);
    setacademicFacultyOptions(arr);
  }, [facultyData]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("creating ...");
    try {
      const res = (await addAcademicDepartment(
        data
      ).unwrap()) as TResponse<TAcademicDepartment>;
      if (res?.error) {
        toast.error(res?.error?.data?.message, { id: toastId });
      } else {
        console.log(res)
        toast.success(res.message, { id: toastId });
      }
    } catch (error) {
      toast.error("something went wrong", { id: toastId });
    }
  };
  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <PHForm
          resolver={zodResolver(academicDepartmentSchema)}
          onSubmit={onSubmit}
        >
          <PHinput label="Name" name="name" type="string"></PHinput>
          <PHSelect
            label="Academic Faculty"
            name="academicFaculty"
            options={academicFacultyOptions as TOptions[]}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicDepartment;
