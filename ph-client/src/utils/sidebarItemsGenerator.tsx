import { NavLink } from "react-router-dom";
import { TRoutesData, TSidebarItemsAnother } from "../types";



export const sidebarItemsGenerator = (sidebarData: TRoutesData[], role : string) => {
  const adminSidebarItem = sidebarData?.reduce((acc: TSidebarItemsAnother[], item) => {
    if (item?.path && item?.name) {
      acc.push({
        key: item?.name,
        label: <NavLink to={`/${role}/${item?.path}`}>{item?.name}</NavLink>,
      });
    }
    if (item?.children) {
      acc.push({
        key: (item?.name) as string,
        label: item?.name,
        children: item?.children?.map((child) => {
          if(child?.name){

            return {
              key: child?.name,
              label: <NavLink to={`/admin/${child?.path}`}>{child?.name}</NavLink>,
            }
          }
        }),
      });
    }
    return acc;
  }, []);
  return adminSidebarItem;
};
