import { ReactNode } from "react";
import { useCurrentToken } from "../../redux/feature/auth/authSlice";
import { useAppSelector } from "../../redux/hook";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  console.log(token);
  if (!token) {
    return <Navigate to={"/login"} replace={true}></Navigate>;
  }
  return children;
};

export default ProtectedRoutes;
