import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../../component/form/PHForm";
import { Button, Col, Flex } from "antd";
import PHSelect from "../../../../component/form/PHSelect";
import { academicOptions, monthOptions, yearOptions } from "./AcademinOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "./AcademinSemsterSchema";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    const name = academicOptions[Number(data?.name) - 1].label;
    const formData = {
      name,
      code: data.name,
      year: data.year,
      startDate: data.startDate,
      endDate: data.endDate,
    };
    console.log(formData);
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
            name={"startDate"}
            label={"Start Date"}
            options={monthOptions}
          ></PHSelect>
          <PHSelect
            name={"endDate"}
            label={"End Date"}
            options={monthOptions}
          ></PHSelect>
          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
