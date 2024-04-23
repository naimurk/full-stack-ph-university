export interface TAdmin {
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
    isDeleted: boolean
    fullName: string
  }
  
  export interface Name {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  