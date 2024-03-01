import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";
import { studentPaths } from "./studentRoutes";
import { facultyPaths } from "./facultyRoutes";
import Login from "../pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App></App>,
    children: routesGenerator(adminPaths),
  },
  {
    path: "/student",
    element: <App></App>,
    children: routesGenerator(studentPaths),
  },
  {
    path: "/faculty",
    element: <App></App>,
    children: routesGenerator(facultyPaths),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
