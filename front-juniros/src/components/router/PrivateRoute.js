import React, { useContext } from "react";
import { Navigate, Outlet  } from "react-router-dom";
import { LOGIN } from "Routes/paths";
import { DataContext } from "context/DataProvider";



export const PrivateRoute = () => {
    const value = useContext(DataContext);
    const [isAuthenticated] = value.isAuthenticated;

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }

  return (
    <div>
        <Outlet />
    </div>
  )
}
