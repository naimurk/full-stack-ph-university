import { Layout, Menu } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../Routes/adminRoutes";
import { studentPaths } from "../../Routes/studentRoutes";
import { facultyPaths } from "../../Routes/facultyRoutes";
const { Sider } = Layout;
const userRole = {
  ADMIN: "admin",
  Faculty: "faculty",
  Student: "student",
};
const Sidebar = () => {
  const role = "faculty";
  let sidebarItems;

  switch (role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.Student:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.Student);
      break;
    case userRole.Faculty:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.Faculty);
      break;

    default:
      break;
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
