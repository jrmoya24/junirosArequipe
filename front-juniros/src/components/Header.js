import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import {useAuth0} from '@auth0/auth0-react'
import { LogoutButton } from "./logout/Logout";
import { Perfil } from "./perfil/Perfil";
import { Login2 } from "./login2/Login2";
import logo from "../images/logo.png"


export const Header = () => {
  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;
  const [user, setUser] = value.user;
  //const {loginWithRedirect, isAuthenticated} = useAuth0();

  const toogleMenu = () =>{
    setMenu(!menu)
  }

  const handleLogin = () => {
    setUser(!user)
  }
 

  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <div className="logo">
      <Link to="/"  class="logo"> <img className="logo-img" src={logo} /> </Link>
      </div>
      </Link>
      <ul>
        <li className="list_item">
          <Link className="link" to="/">INICIO</Link>
        </li>
        <li className="list_item">
          <Link className="link" to="/productos">PRODUCTOS</Link>
        </li>
        <li className="list_item">
          <Link className="link" to="/nosotros">NOSOTROS</Link>
        </li>
        <li className="list_item">
          <Link className="link" to="/contacto">CONTACTO</Link>
        </li>
      </ul>
      <div className="cart">
       
        <box-icon onClick={toogleMenu} name='cart-alt' ></box-icon>

        

        
          
         <box-icon onClick={handleLogin} name="user" /> 
        
        <span className="item__total"> {carrito.length} </span>
        
      </div>
    </header>
  );
};
