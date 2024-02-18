import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { routesGenerator } from "../utils/routesGenerator";
import { adminPaths } from "./adminRoutes";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App></App>,
    children: routesGenerator(adminPaths),
  },
]);

export default router;
