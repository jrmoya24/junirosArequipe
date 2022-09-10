import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ItemProducto } from "./itemProducto";
import { DataContext } from "context/DataProvider";
import { CreateProduct } from "./CreateProduct";


const ShowProducts = () => {
    const value = useContext(DataContext);
     const [productos] = value.productos;
     const [showCreate, setshowCreate] = value.showCreate;
     const logout = value.logout;


     const handleCreate = () => {
      setshowCreate(!showCreate)
    }

  return (
    <>
      <button onClick={logout} className="logout-btn">salir</button>
      <h1 className="produ">PANEL DE ADMINISTRADOR</h1>
      <CreateProduct />
       <div  > <button onClick={handleCreate} className="boton__crear" >Crear producto</button></div>
      <div className="productos">
        {productos.map((producto) => (
          <ItemProducto
            key={producto.id}
            title={producto.title}
            image={producto.image}
            category={producto.category}
            price={producto.price}
            id={producto.id}
          />
        ))}
      </div>
    </>
  );
};

export default ShowProducts;
