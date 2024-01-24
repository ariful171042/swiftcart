import React from "react";
import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;
  isAdmin?: boolean;
  redirect?: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  isAuthenticated,
  children,
  adminOnly,
  isAdmin,
  redirect = "/",
}) => {
  if (!isAuthenticated) {
    return <Navigate to={redirect} />;
  }

 
  if (adminOnly && !isAdmin) {
    return <Navigate to={redirect} />;
  }



  return children ? children :<Outlet/>
};

export default ProtectedRoute;
