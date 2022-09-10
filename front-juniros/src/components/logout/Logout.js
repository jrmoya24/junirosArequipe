import { useEffect, useContext } from "react";
import { DataContext } from "context/DataProvider";

export const Logout = () => {
  const value = useContext(DataContext);
  const logout = value.logout;

  

  return (
    <button onClick={logout()}>  Salir  </button>
  )
};
