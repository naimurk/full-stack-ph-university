export interface TMyFacultyEnrolledCourse {
    _id: string
    semesterRegistration: SemesterRegistration
    academicSemester: AcademicSemester
    academicFaculty: AcademicFaculty
    academicDepartment: AcademicDepartment
    offeredCourse: OfferedCourse
    course: Course
    student: Student
    faculty: Faculty
    isEnrolled: boolean
    courseMarks: CourseMarks
    grade: string
    gradePoints: number
    isCompleted: boolean
  }
  
  export interface SemesterRegistration {
    _id: string
    academicSemester: string
    status: string
    startDate: string
    endDate: string
    minCredit: number
    maxCredit: number
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface AcademicSemester {
    _id: string
    name: string
    year: string
    code: string
    startMonth: string
    endMonth: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface AcademicFaculty {
    _id: string
    name: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface AcademicDepartment {
    _id: string
    name: string
    academicFaculty: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface OfferedCourse {
    _id: string
    semesterRegistration: string
    academicSemester: string
    academicFaculty: string
    academicDepartment: string
    course: string
    faculty: string
    maxCapacity: number
    section: number
    days: string[]
    startTime: string
    endTime: string
    createdAt: string
    updatedAt: string
    __v: number
  }
  
  export interface Course {
    _id: string
    title: string
    prefix: string
    code: number
    credits: number
    isDeleted: boolean
    preRequisiteCourses: any[]
    __v: number
  }
  
  export interface Student {
    _id: string
    id: string
    user: string
    name: Name
    gender: string
    dateOfBirth: string
    email: string
    contactNo: string
    emergencyContactNo: string
    bloogGroup: string
    presentAddress: string
    permanentAddress: string
    guardian: Guardian
    localGuardian: LocalGuardian
    profileImg: string
    admissionSemester: string
    isDeleted: boolean
    academicDepartment: string
    academicFaculty: string
    __v: number
    fullName: string
  }
  
  export interface Name {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export interface Guardian {
    fatherName: string
    fatherOccupation: string
    fatherContactNo: string
    motherName: string
    motherOccupation: string
    motherContactNo: string
    _id: string
  }
  
  export interface LocalGuardian {
    name: string
    occupation: string
    contactNo: string
    address: string
    _id: string
  }
  
  export interface Faculty {
    _id: string
    id: string
    user: string
    designation: string
    name: Name2
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
  
  export interface Name2 {
    firstName: string
    middleName: string
    lastName: string
    _id: string
  }
  
  export interface CourseMarks {
    classTest1: number
    midTerm: number
    classTest2: number
    finalTerm: number
  }
  