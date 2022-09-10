import React, { useContext} from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";

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
      <Link to=".">
      <div className="logo">
      <Link to="."  class="logo"> <img className="logo-img" src={logo} /> </Link>
      </div>
      </Link>
      <ul>
        <li className="list_item">
          <Link className="link" to=".">INICIO</Link>
        </li>
        <li className="list_item">
          <Link className="link" to="../productos">PRODUCTOS</Link>
        </li>
        <li className="list_item">
          <Link to="../nosotros" className="link" >NOSOTROS</Link>
        </li>
        <li className="list_item">
          <Link className="link" to="./contacto">CONTACTO</Link>
        </li>
      </ul>
      <div className="cart">
       <div className="icon-header">
          <box-icon onClick={toogleMenu} name='cart-alt' ></box-icon>
          <box-icon onClick={handleLogin} name="user" /> 
         </div>
         <div class="icon-redes">
              <a href="https://www.facebook.com/Juniros-Arequipe-108802061960917" target="_blank"> <box-icon className="icon-fb" type='logo' name='facebook-square'/> </a>
              <a href="https://www.instagram.com/junirosarequipe/" target="_blank"> <box-icon name='instagram' type='logo' className="icon-inst" /> </a>
              <a href="https://wa.me/message/JZFWE2CJVWUCB1" target="_blank"> <box-icon name='whatsapp' type='logo' className="icon-what"/> </a>
           </div>
        
        <span className="item__total"> {carrito.length} </span>
        
      </div>
    </header>
  );
};
