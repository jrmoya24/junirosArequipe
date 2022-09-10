import React from "react";
import { Routes, Route } from "react-router-dom";
import ContactoPage from "components/page/contacto/contactoPage";
import Inicio from "../components/page/inicio/index";
import { NosotrosPage } from "../components/page/nosotros/nosotrosPage";
import { ProductosList } from "../components/page/productos/";
import { CompraPage } from "../components/page/compra/CompraPage";
import { ProductosDetalles } from "../components/page/productos/ProductosDetalles";
import { AdminProduct } from "../components/adminProduct/AdminProduct";

import EditProduct from "components/adminProduct/EditProduct";
import { HOME, LOGOUT, PRIVATE, PRIVATE_EDIT } from "./paths";
import { Logout} from "../components/logout/Logout";
import PublicRoute from "components/router/PublicRoute";
import { PrivateRoute } from "components/router/PrivateRoute";

export default function Page() {
  return (
   
      <Routes>

        <Route path="/" element={ <PublicRoute /> }>
            <Route index  element={ <Inicio /> } />
            <Route path="/nosotros" exact  element={ <NosotrosPage /> } />
            <Route path="/productos"  element={ <ProductosList /> } />
            <Route path="/contacto"  element={<ContactoPage /> } />
            <Route path="/producto/:id"  element={ <ProductosDetalles/> } />
            <Route path="/compra/"  element={ <CompraPage/> } />
        </Route>
        
        <Route path={PRIVATE} element={ <PrivateRoute /> } >
            <Route index  element={ < AdminProduct/> } />
            <Route path={PRIVATE_EDIT}  element={ <EditProduct/> } />
            <Route path={LOGOUT}  element={ <Logout/> } />
        </Route>

      </Routes>
    
  );
}
