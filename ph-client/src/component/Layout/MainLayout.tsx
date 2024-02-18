import React from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../Routes/adminRoutes";
import { Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

const MainLayout = () => {
  // const items: MenuProps["items"] = [
  //   {
  //     key: "Dashboard",
  //     label: <NavLink to={"/admin/dashboard"}>Dashboard</NavLink>,
  //     // icon: React.createElement(icon),
  //   },
  //   {
  //     key: "User Management",
  //     label: "User Management",
  //     children: [
  //       {
  //         key: "Create Student",
  //         label: (
  //           <NavLink to={"/admin/create-student"}> Create Student</NavLink>
  //         ),
  //       },
  //       {
  //         key: "Create Faculty",
  //         label: (
  //           <NavLink to={"/admin/create-faculty"}> Create Faculty</NavLink>
  //         ),
  //       },
  //       {
  //         key: "Create Admin",
  //         label: <NavLink to={"/admin/create-admin"}>Create Admin</NavLink>,
  //       },
  //     ],
  //   },
  // ];
  return (
    <Layout style={{ height: "100vh" }}>
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
          items={sidebarItemsGenerator(adminPaths, "admin")}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            //  background: colorBgContainer
          }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              // background: colorBgContainer,
              // borderRadius: borderRadiusLG,
            }}
          >
            <Outlet></Outlet>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
