export interface TCourse {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: PreRequisiteCourse[] | [];
  isDeleted: boolean;
}

export interface PreRequisiteCourse {
  course: null | string;
  isDeleted: boolean;
}
