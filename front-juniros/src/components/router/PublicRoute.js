import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { PRIVATE } from "Routes/paths";
import { DataContext } from "context/DataProvider";



export default function PublicRoute() {
    const value = useContext(DataContext);
    const [isAuthenticated] = value.isAuthenticated;

    if (isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }

  return (
    <div>
        <Outlet/>
    </div>
  )
}
