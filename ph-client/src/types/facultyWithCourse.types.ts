export interface TFacultyWithCourse {
    _id: string
    id: string
    user: string
    designation: string
    name: Name
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloogGroup: string
    presentAddress: string
    permanentAddress: string
    profileImg: string
    academicDepartment: string
    academicFaculty: string
    isDeleted: boolean
    __v: number
    fullName: string
  }
  
  export interface Name {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }