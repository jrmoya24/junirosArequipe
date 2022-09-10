import React, { useContext, useState } from "react";
import { DataContext } from "context/DataProvider";
import { EMAIL, PASSWORD } from "components/consts/accesoAdmin";

export const Login2 = () => {
  const value = useContext(DataContext);
  const [user, setUser] = value.user;
  const login = value.login;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState ('');


  function handleChangeEmail (e) {
    setEmail(e.target.value);
  }

  function handleChangePassword (e) {
    setPassword(e.target.value)
  }

  function handleSubmit (e){
    e.preventDefault();
    if( email === EMAIL && password === PASSWORD ) {
      login();
    }else{
      alert("El correo o la ontraseña es incorrecta")
    }
  }

  const tooglefalsee = () => {
    setUser(false);
  };

  const show = user ? "user show" : "user";
  return (
    //Caja Usuario
    <div>
      <form onSubmit={handleSubmit} className={(user, show)}>
        <h2>Iniciar sesión como administrador</h2>
        <input 
        type="email"
         value={email}
         onChange={handleChangeEmail}
         placeholder="Correo"
         />
         
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Contraseña"
        />
        <button type="submit"  class="login-btn">Iniciar sesión</button>
       
      </form>
    </div>
  );
};
