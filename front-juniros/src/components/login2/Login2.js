import React, { useContext, useState } from "react";
import { DataContext } from "context/DataProvider";
import { EMAIL, PASSWORD } from "components/consts/accesoAdmin";
import Swal from 'sweetalert2'

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
      tooglefalsee()
    }else{
      alertErr()
    }
  }

  const alertErr = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usted no tiene acceso, verifique sus credenciales de administrador.',
      timer: 6000
    })
  }
  const tooglefalsee = () => {
    setUser(false);
  };

  const show = user ? "user show" : "user";
  return (
    //Caja Usuario
    <div>
      <form onSubmit={handleSubmit} className={(user, show)}>
        <box-icon className="cerrar-btn-login" onClick={tooglefalsee} name="x"></box-icon>
        <h2>Iniciar sesión como administrador</h2>
        <input 
        type="email"
         value={email}
         onChange={handleChangeEmail}
         placeholder="Correo"
         required
         />
         
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Contraseña"
          required
        />
        <button type="submit"  class="login-btn">Iniciar sesión</button>
       
      </form>
    </div>
  );
};
