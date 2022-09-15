import React from "react";
import { Link } from "react-router-dom";
import nosotros from "../../images/nosotros.JPG";

export default function Nosotros() {
  return (
    <>
      <h2 id="nosotros" class="nosotros-title">
        Sobre <span>nosotros</span>
      </h2>
      <section class="nosotros">
        <img src={nosotros} alt="" class="nosotros-img" />
        <p class="nosotros-text">
          Juniro’s Arequipe es una micro empresa creada por la necesidad de
          generar empleo a nivel familiar, inicialmente se eligió este producto
          por el conocimiento que se tenia sobre este elemento, en cuanto a la
          creación, producción y comercio. <br/>
          <br/>
          Juniro’s Arequipe se dedica a comercializar frascos rellenos de arequipe, de diferentes tamaños y
          presentaciones, así mismo varían los precios de cada uno de estos.
        </p>
        <Link to="/nosotros" class="btnn">
          Ver mas
        </Link>
      </section>
    </>
  );
}
