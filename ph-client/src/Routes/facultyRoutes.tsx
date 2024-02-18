import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferedCourse from "../pages/Faculty/OfferedCourse";

export const facultyPaths = [
    {
      name: "Dashboard",
      path: "dashboard",
      element: <FacultyDashboard></FacultyDashboard>,
    },
    {
      name: "Offered Course",
      path: "offered-course",
      element: <OfferedCourse></OfferedCourse>,
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