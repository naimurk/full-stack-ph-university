export interface TFaculty {
  _id: string;
  id: string;
  user: string;
  designation: string;
  name: Name;
  gender: string;
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloogGroup: string;
  presentAddress: string;
  permanentAddress: string;
  profileImg: string;
  academicDepartment: AcademicDepartment;
  academicFaculty: AcademicFaculty;
  isDeleted: boolean;
  fullName: string;
}

export interface Name {
  firstName: string;
  middleName: string;
  lastName: string;
  _id: string;
}

export interface AcademicDepartment {
  _id: string;
  name: string;
  academicFaculty: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface AcademicFaculty {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
