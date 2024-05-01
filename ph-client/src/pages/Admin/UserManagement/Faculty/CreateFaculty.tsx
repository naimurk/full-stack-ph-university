import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../../component/form/PHForm";
import PHinput from "../../../../component/form/PHinput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useGetAllAcademicDepartmentApiQuery } from "../../../../redux/feature/admin/academicDepartment/academincDepartmentApi";
import { bloodOptions, genderOptions } from "../../../../options/Options";
import PHSelect from "../../../../component/form/PHSelect";
import PHDatePicker from "../../../../component/form/PHDatePicker";
import { useAddFacultyMutation } from "../../../../redux/feature/admin/userManament/userManagementApi";
import { toast } from "sonner";
import { TResponseWithRedux } from "../../../../types";

const facultyValues = {
  designation: "Lecturer",
  name: {
    firstName: "Mridul",
    middleName: "Das",
    lastName: "Rahman",
  },
  gender: "male",
  email: "faculty3@gmail.com",
  dateOfBirth: "1990-01-01",
  contactNo: "123",
  emergencyContactNo: "123",
  bloogGroup: "A+",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",
  // academicDepartment: "65b00fb010b74fcbd7a25d8e",
};

const CreateFaculty = () => {
  const [createFaculty, { data: insertedData, error }] =
    useAddFacultyMutation();

  console.log(insertedData);
  console.log(error);
  const { data: dData, isLoading: DIsloading } =
    useGetAllAcademicDepartmentApiQuery(undefined);
  const departmentOptions = dData?.data?.map((item) => ({
    label: `${item?.name}`,
    value: item?._id,
  }));
  const onsubmit: SubmitHandler<FieldValues> = async (data) => {
    const facultyData = {
      password: "student123",
      faculty: data,
    };
    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.image);
    const toastId = toast.loading("creating ...");
    try {
      const res = (await createFaculty(formData)) as TResponseWithRedux<any>;
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
    <Row>
      <Col span={24}>
        <PHForm defaultValues={facultyValues} onSubmit={onsubmit}>
          <Divider>Personal info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="First Name"
                name="name.firstName"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Middle name"
                name="name.middleName"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Last name"
                name="name.lastName"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHDatePicker
                name="dateOfBirth"
                label="Date of Birth"
              ></PHDatePicker>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name={"gender"}
                label={"Gender"}
                options={genderOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name={"bloogGroup"}
                label={"Blood Group"}
                options={bloodOptions}
              ></PHSelect>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name={"image"}
                render={({
                  field: { onChange, value, ...field },
                  fieldState: { error },
                }) => (
                  // <Input {...field} type={type} placeholder="Basic usage" />
                  <Form.Item label={"Picture"}>
                    <Input
                      value={value?.fileName}
                      {...field}
                      type="file"
                      onChange={(e) => onChange(e.target.files![0])}
                    ></Input>
                    {error && <p style={{ color: "red" }}>{error?.message}</p>}
                  </Form.Item>
                )}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Designation"
                name="designation"
                type="text"
              ></PHinput>
            </Col>
          </Row>
          <Divider>Contact info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput label="Email" name="email" type="email"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Contact number"
                name="contactNo"
                type="number"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Emergency contact no"
                name="emergencyContactNo"
                type="number"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Present Address"
                name="presentAddress"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Permanent Address"
                name="permanentAddress"
                type="text"
              ></PHinput>
            </Col>
          </Row>

          <Divider>Academic Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHSelect
                name={"academicDepartment"}
                label={"Academic department"}
                options={departmentOptions}
                disabled={DIsloading}
              ></PHSelect>
            </Col>
          </Row>

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateFaculty;
