import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import Swal from 'sweetalert2'

//En el context estan las funciones que se utilizan en todo el aplicativo

export const DataContext = createContext();
const MY_AUTH_APP = "MY_AUTH_APP_";
export const DataProvider = (props) => {
  const [productos, setProductos] = useState([]);
  const [menu, setMenu] = useState(false);
  const [header, setHeader] = useState(false);
  const [user, setUser] = useState(false);
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCreate, setShowCreate] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [infoPedido, setinfoPedido] = useState({
    user_name: '',
    user_email: '',
    user_address: '',
    user_city: '',
    user_barrio: ''
  })

  //Autentificacion de administrador
  const [isAuthenticated, setIsAuthenticated] = useState(
    window.localStorage.getItem(MY_AUTH_APP) ?? false
  );
//vista del acceso del administrador
  const login = useCallback(function () {
    window.localStorage.setItem(MY_AUTH_APP, true);
    setIsAuthenticated(true);
  }, []);
//vista del salir del administrador
  const logout = useCallback(function () {
    window.localStorage.removeItem(MY_AUTH_APP);
    setIsAuthenticated(false);
  }, []);

  // Solicitar productos a la base de datos
  const URI = "http://localhost:8000/productos/admin/";

  const getProducts = async () => {
    const res = await axios.get(URI);
    setProductos(res.data);
  };
  const setData = () => getProducts(setProductos);

  useEffect(() => {
    setData();
  }, []);

  // Alerta 
  const alertErr = () =>{

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Este producto ya se ha añadido al carrito, revisalo.',
      timer: 4000
    })
  }
  // Añadir productos al carrito
  const addCarrito = (id) => {
    const check = carrito.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = productos.filter((producto) => {
        return producto.id === id;
      });
      setCarrito([...carrito, ...data]);
    } else {
      alertErr();
    }
  };
  // Solicitar productos guardados en el carrito en localStorage
  useEffect(() => {
    const dataCarrito = JSON.parse(localStorage.getItem("dataCarrito"));
    if (dataCarrito) {
      setCarrito(dataCarrito);
    }
  }, []);
  // Guardar productos guardados en el carrito en localStorage
  useEffect(() => {
    localStorage.setItem("dataCarrito", JSON.stringify(carrito));
  }, [carrito]);
  //Calcular total de valores
  useEffect(() => {
    const getTotal = () => {
      const res = carrito.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      setTotal(res);
    };
    getTotal();
  }, [carrito]);
  // valores de las funciones a exportar
  const value = {
    productos: [productos, setProductos],
    menu: [menu, setMenu],
    user: [user, setUser],
    header: [header, setHeader],
    showCreate: [showCreate, setShowCreate],
    showEdit: [showEdit, setShowEdit],
    carrito: [carrito, setCarrito],
    infoPedido: [infoPedido, setinfoPedido],
    addCarrito: addCarrito,
    getProducts: getProducts,
    URI: URI,
    total: [total, setTotal],
    isAuthenticated: [isAuthenticated],
    login: login,
    logout: logout,
  };
  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
