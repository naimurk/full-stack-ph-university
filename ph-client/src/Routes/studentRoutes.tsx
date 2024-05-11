import MySchedule from "../pages/Student/MySchedule";
import OfferedCourse from "../pages/Student/OfferedCourse";
import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard></StudentDashboard>,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCourse></OfferedCourse>,
  },
  {
    name: "My Schedule",
    path: "schedule-course",
    element: <MySchedule></MySchedule>,
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
