export interface TCourse {
  _id: string;
  title: string;
  prefix: string;
  code: number;
  credits: number;
  preRequisiteCourses: TPreRequisiteCourse[] | [];
  isDeleted: boolean;
}

export interface TPreRequisiteCourse {
  course: null | string;
  isDeleted: boolean;
}
