

export interface TAcademicFaculty {
  success: boolean
  message: string
  data: TAcaFacultyData
}

export interface TAcaFacultyData {
  name: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

