import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import MyFacultyCourses from "../pages/Faculty/MyFacultyCourses";
import MyStudent from "../pages/Faculty/MyStudent";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard></FacultyDashboard>,
  },
  {
    name: "My Course",
    path: "course",
    element: <MyFacultyCourses></MyFacultyCourses>,
  },
  {
    path: "my-student/:semesterRegisteredId/:courseId",
    element: <MyStudent></MyStudent>,
  },
  // {
  //   name: "User Management",
  //   children: [
  //     {
  //       name: "Create Student",
  //       path: "create-student",
  //       element: <CreateStudent></CreateStudent>,
  //     },
  //     {
  //       name: "Create Admin",
  //       path: "create-admin",
  //       element: <CreateAdmin></CreateAdmin>,
  //     },
  //     {
  //       name: "Create Faculty",
  //       path: "create-faculty",
  //       element: <CreateFaculty></CreateFaculty>,
  //     },
  //   ],
  // },
];
