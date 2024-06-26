import AcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment/AcademicDepartment";
import CreateAcademicDepartment from "../pages/Admin/AcademicManagement/AcademicDepartment/CreateAcademicDepartment";
import AcademicFaulty from "../pages/Admin/AcademicManagement/AcademicFaculty/AcademicFaulty";
import CreateAcademicFaculty from "../pages/Admin/AcademicManagement/AcademicFaculty/CreateAcademicFaculty";
import AcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester/AcademicSemester";
import CreateAcademicSemester from "../pages/Admin/AcademicManagement/AcademicSemester/CreateAcademicSemester";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import Courses from "../pages/Admin/CourseMangement/Courses";
import CreateCourse from "../pages/Admin/CourseMangement/CreateCourse";
import OfferCourse from "../pages/Admin/CourseMangement/OfferCourse";
import OfferedCourse from "../pages/Admin/CourseMangement/OfferedCourse";
import RegistredSemister from "../pages/Admin/CourseMangement/RegistredSemister";
import SemesterRegistration from "../pages/Admin/CourseMangement/SemesterRegistration";
import AdminData from "../pages/Admin/UserManagement/Admin/AdminData";
import AdminDetails from "../pages/Admin/UserManagement/Admin/AdminDetails";
import AdminUpdate from "../pages/Admin/UserManagement/Admin/AdminUpdate";
import CreateAdmin from "../pages/Admin/UserManagement/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/UserManagement/Faculty/CreateFaculty";
import FacultyData from "../pages/Admin/UserManagement/Faculty/FacultyData";
import FacultyDetails from "../pages/Admin/UserManagement/Faculty/FacultyDetails";
import FacultyUpdate from "../pages/Admin/UserManagement/Faculty/FacultyUpdate";
import CreateStudent from "../pages/Admin/UserManagement/student/CreateStudent";
import StudentData from "../pages/Admin/UserManagement/student/StudentData";
import StudentDetails from "../pages/Admin/UserManagement/student/StudentDetails";
import UpdateStudent from "../pages/Admin/UserManagement/student/UpdateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semester",
        path: "create-academic-semester",
        element: <CreateAcademicSemester></CreateAcademicSemester>,
      },
      {
        name: "Academic Semester",
        path: "academic-semester",
        element: <AcademicSemester></AcademicSemester>,
      },
      {
        name: "Create A. faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty></CreateAcademicFaculty>,
      },
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaulty></AcademicFaulty>,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment></CreateAcademicDepartment>,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment></AcademicDepartment>,
      },
    ],
  },

  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        name: "Student",
        path: "students",
        element: <StudentData></StudentData>,
      },
      {
        path: "students/:studentId",
        element: <StudentDetails></StudentDetails>,
      },
      {
        path: "student-update/:studentId",
        element: <UpdateStudent></UpdateStudent>,
      },
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Admins",
        path: "admins",
        element: <AdminData></AdminData>,
      },
      {
        path: "admin-details/:id",
        element: <AdminDetails></AdminDetails>,
      },
      {
        path: "admin-edit/:id",
        element: <AdminUpdate></AdminUpdate>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
      {
        name: "Faculties",
        path: "faculties",
        element: <FacultyData></FacultyData>,
      },
      {
        path: "faculty-details/:id",
        element: <FacultyDetails></FacultyDetails>,
      },
      {
        path: "faculty-edit/:id",
        element: <FacultyUpdate></FacultyUpdate>,
      },
    ],
  },
  {
    name: "Course Management",
    children: [
      {
        name: "Semester Registration",
        path: "semester-registration",
        element: <SemesterRegistration></SemesterRegistration>,
      },
      {
        name: "Registered Semester ",
        path: "registered-semester",
        element: <RegistredSemister></RegistredSemister>,
      },
      {
        name: "Create Course",
        path: "create-course",
        element: <CreateCourse></CreateCourse>,
      },
      {
        name: "Courses",
        path: "courses",
        element: <Courses></Courses>,
      },
      {
        name: "Offer Course",
        path: "offer-course",
        element: <OfferCourse></OfferCourse>,
      },
      {
        name: "Offered Courses",
        path: "offered-course",
        element: <OfferedCourse></OfferedCourse>,
      },
    ],
  },
];
