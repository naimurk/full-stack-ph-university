import { ReactNode } from "react";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import CreateAdmin from "../pages/Admin/CreateAdmin";
import CreateFaculty from "../pages/Admin/CreateFaculty";
import CreateStudent from "../pages/Admin/CreateStudent";
import { NavLink } from "react-router-dom";
type TAdminRoutes = {
  path: string;
  element: ReactNode;
};
type TAdminSidebar = {
  key: string;
  label: ReactNode;
  children?: TAdminSidebar[];
};

const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard></AdminDashboard>,
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
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ],
  },
];

export const adminRoutes = adminPaths?.reduce((acc: TAdminRoutes[], item) => {
  if (item?.path && item?.element) {
    acc.push({ path: item.path, element: item.element });
  }
  if (item?.children) {
    item?.children?.forEach((i) =>
      acc.push({ path: i.path, element: i.element })
    );
  }
  return acc;
}, []);

export const adminSidebarItem = adminPaths?.reduce(
  (acc: TAdminSidebar[], item) => {
    if (item?.path && item?.name) {
      acc.push({
        key: item?.name,
        label: <NavLink to={`/admin/${item?.path}`}>{item?.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key: item?.name,
        label: item?.name,
        children: item?.children?.map((child) => ({
          key: child?.name,
          label: <NavLink to={`/admin/${child?.path}`}>{item?.name}</NavLink>,
        })),
      });
    }
    return acc;
  },
  []
);
