import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {  adminRoutes } from "./adminRoutes";


const router = createBrowserRouter([
  {
    path: "/admin",
    element: <App></App>,
    children: adminRoutes
  },
]);

export default router;
