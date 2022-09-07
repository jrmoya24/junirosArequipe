import React from "react";
import { Switch, Route } from "react-router-dom";
import contactoPage from "../components/page/contacto/contactoPage";
import Inicio from "../components/page/inicio/index";
import { nosotrosPage } from "../components/page/nosotros/nosotrosPage";
import { ProductosList } from "../components/page/productos/";
import { CompraPage } from "../components/page/compra/CompraPage";
import { ProductosDetalles } from "../components/page/productos/ProductosDetalles";
import { adminProduct } from "../components/adminProduct/adminProduct";
import PrivateRoute from "./PrivateRoute";
import EditProduct from "components/adminProduct/EditProduct";

export default function Page() {
  return (
    <section>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/productos" exact component={ProductosList} />
        <Route path="/nosotros" exact component={nosotrosPage} />
        <Route path="/contacto" exact component={contactoPage} />
        <Route path="/producto/:id" exact component={ProductosDetalles} />
        <Route path="/compra/" exact component={CompraPage} />
        <PrivateRoute path="/productos/admin/" exact component={adminProduct} />
        <PrivateRoute path="/productos/admin/edit/:id" exact component={ EditProduct } />

      </Switch>
    </section>
  );
}
