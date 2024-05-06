import { ReactNode } from "react";

 export type TTRoutes = {
    path: string;
    element: ReactNode;
  };

  export type TSidebarItems = {
    key: string;
    label: ReactNode;
    children?: TSidebarItems[];
  } | undefined;
  
   export type TRoutesData = {
    name?: string;
    path?: string;
    element?: ReactNode;
    children?: TRoutesData[];
  };