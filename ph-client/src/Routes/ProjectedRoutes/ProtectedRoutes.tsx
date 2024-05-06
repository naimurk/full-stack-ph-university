import { ReactNode } from "react";
import {
  TUser,
  logout,
  useCurrentToken,
} from "../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";
import { decodeToken } from "../../utils/decodeToken";

type TProtectedRoutes = {
  role: "admin" | "student" | "faculty" | undefined;
  children: ReactNode;
};

const ProtectedRoutes = ({ children, role }: TProtectedRoutes) => {
  const token = useAppSelector(useCurrentToken);
  // console.log(token);
  const dispatch = useAppDispatch();
  // const user = useAppSelector((state) => state.auth.user);
  // console.log(currentRole)
  let user;
  if (token) {
    user = decodeToken(token) as TUser;
  }
  // const user = decodeToken(token as string) as TUser;
  if (role !== undefined && user?.role !== role) {
    dispatch(logout());
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
