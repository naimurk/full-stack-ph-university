import { NavLink } from "react-router-dom";
import { TRoutesData, TSidebarItems } from "../types";



export const sidebarItemsGenerator = (sidebarData: TRoutesData[], role) => {
  const adminSidebarItem = sidebarData?.reduce((acc: TSidebarItems[], item) => {
    if (item?.path && item?.name) {
      acc.push({
        key: item?.name,
        label: <NavLink to={`/${role}/${item?.path}`}>{item?.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key: item?.name,
        label: item?.name,
        children: item?.children?.map((child) => ({
          key: child?.name,
          label: <NavLink to={`/admin/${child?.path}`}>{child?.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return adminSidebarItem;
};
