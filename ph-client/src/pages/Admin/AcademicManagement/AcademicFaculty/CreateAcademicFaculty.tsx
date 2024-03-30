import { Button, Col, Flex } from "antd";
import PHForm from "../../../../component/form/PHForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicFacultySchema } from "./academicFacultySchema";
import PHinput from "../../../../component/form/PHinput";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useAddAcademicFacultyMutation } from "../../../../redux/feature/admin/AcademicFaculty/academicFacultyApi";
import { toast } from "sonner";
import { TResponseWithRedux } from "../../../../types";
import { TAcademicFaculty } from "../../../../types/academicFacultyTypes";

const CreateAcademicFaculty = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const toastId = toast.loading("creating ...");
    try {
        const res = (await addAcademicFaculty(data)) as TResponseWithRedux<TAcademicFaculty>;
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
          resolver={zodResolver(academicFacultySchema)}
          onSubmit={onSubmit}
        >
          <PHinput label="Name" name="name" type="string"></PHinput>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicFaculty;
