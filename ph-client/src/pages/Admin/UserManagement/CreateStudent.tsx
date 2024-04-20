import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../component/form/PHForm";
import PHinput from "../../../component/form/PHinput";
import { Button, Col, Divider, Row } from "antd";

const studentData = {
  password: "student123",
  student: {
    name: {
      firstName: "I am ",
      middleName: "Student",
      lastName: "Number 1",
    },
    gender: "male",
    dateOfBirth: "1990-01-01",

    email: "studffsent9ff92@gmail.com",
    contactNo: "1235678",
    emergencyContactNo: "987-654-3210",
    bloogGroup: "A+",
    presentAddress: "123 Main St, Cityville",
    permanentAddress: "456 Oak St, Townsville",
    guardian: {
      fatherName: "James Doe",
      fatherOccupation: "Engineer",
      fatherContactNo: "111-222-3333",
      motherName: "Mary Doe",
      motherOccupation: "Teacher",
      motherContactNo: "444-555-6666",
    },
    localGuardian: {
      name: "Alice Johnson",
      occupation: "Doctor",
      contactNo: "777-888-9999",
      address: "789 Pine St, Villageton",
    },
    admissionSemester: "6603e75f01476003defc1c44",
    academicDepartment: "6607b6163f46619212f466b4",
  },
};

const CreateStudent = () => {
  const onsubmit: SubmitHandler<FieldValues> = (data) => {
    // const formData = new FormData();
    // formData.append("something", "hello");
    // console.log(Object.fromEntries(formData));
    console.log(data);
  };
  return (
    <Row>
      <Col span={24}>
        <PHForm onSubmit={onsubmit}>
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
              <PHinput
                label="Date of Birth"
                name="dateOfBirth"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput label="Gender" name="gender" type="text"></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Blood Group"
                name="bloogGroup"
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
          <Divider>Guardian info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Father name"
                name="guardian.fatherName"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Father occupation"
                name="guardian.fatherOccupation"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Father Contact no"
                name="guardian.fatherContactNo"
                type="tel"
              ></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Mother name"
                name="guardian.motherName"
                type="text"
              ></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Mother occupation"
                name="guardian.motherOccupation"
                type="text"
              ></PHinput>
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Mother Contact no"
                name="guardian.motherContactNo"
                type="tel"
              ></PHinput>
            </Col>
          </Row>
          <Divider>Local Guardian Info.</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="name"
                name="localGuardian.name"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Occupation"
                name="localGuardian.occupation"
                type="text"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="ContactNo"
                name="localGuardian.contactNo"
                type="tel"
              ></PHinput>
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <PHinput
                label="Address"
                name="localGuardian.address"
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

export default CreateStudent;
