import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { studentPaths } from "./studentRoutes";
import { facultyPaths } from "./facultyRoutes";
import Login from "../pages/auth/login/Login";
import ProtectedRoutes from "./ProjectedRoutes/ProtectedRoutes";
import ChangesPassword from "../pages/auth/ChangesPassword/ChangesPassword";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <ProtectedRoutes role="admin">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routesGenerator(adminPaths),
  },
  {
    path: "/student",
    element: (
      <ProtectedRoutes role="student">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routesGenerator(studentPaths),
  },
  {
    path: "/faculty",
    element: (
      <ProtectedRoutes role="faculty">
        <App></App>
      </ProtectedRoutes>
    ),
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/change-password",
    element: <ChangesPassword></ChangesPassword>,
  },
]);

export default router;
