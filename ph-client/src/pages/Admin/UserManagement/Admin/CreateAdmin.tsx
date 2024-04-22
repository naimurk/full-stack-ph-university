import { Controller, FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../../component/form/PHForm";
import PHinput from "../../../../component/form/PHinput";
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { bloodOptions, genderOptions } from "../../../../options/Options";
import PHSelect from "../../../../component/form/PHSelect";
import PHDatePicker from "../../../../component/form/PHDatePicker";
import { useAddAdminMutation } from "../../../../redux/feature/admin/userManament/userManagementApi";

const adminValues = {
  designation: "Admin",
  name: {
    firstName: "Mridul",
    middleName: "Das",
    lastName: "Rahman",
  },
  gender: "male",
  email: "admin3@gmail.com",
  dateOfBirth: "1990-01-01",
  contactNo: "123",
  emergencyContactNo: "123",
  bloogGroup: "A+",
  presentAddress: "123 Main St, Cityville",
  permanentAddress: "456 Oak St, Townsville",
  // academicDepartment: "65b00fb010b74fcbd7a25d8e",
};

const CreateAdmin = () => {
  const [createAdmin, { data: insertedData, error }] = useAddAdminMutation();

  console.log(insertedData);
  console.log(error);

  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    const facultyData = {
      password: "admin123",
      admin: data,
    };
    // console.log(data)
    const formData = new FormData();
    formData.append("data", JSON.stringify(facultyData));
    formData.append("file", data.image);
    createAdmin(formData);
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm defaultValues={adminValues} onSubmit={onsubmit}>
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

          <Button htmlType="submit">Submit</Button>
        </PHForm>
      </Col>
    </Row>
  );
};

export default CreateAdmin;
