import React from "react";
import nosotrosImg from "../../images/nosotros.JPG";

export const PageNososotros = () => {
  return (
    <>
      <h2 id="nosotros" class="nosotros-page-title">
        Sobre <span>nosotros</span>
      </h2>
      <section class="nosotrosPage">
        <img src={nosotrosImg} alt="" class="nosotros-img" />
        <p class="nosotros-text">
          Juniro’s Arequipe es una micro empresa creada por la necesidad de
          generar empleo a nivel familiar, inicialmente se eligió este producto
          por el conocimiento que se tenia sobre este elemento, en cuanto a la
          creación, producción y comercio. <br/>
          <br/>
          Juniro’s Arequipe se dedica a comercializar  arequipe  en frascos de diferentes tamaños y
          presentaciones, así mismo varían los precios de cada uno de estos.
          Esta producción se mantiene y se conserva en una baja temperatura para
          mantener la cadena de fría y su conservación hasta al momento de
          entrega al usuario final. <br/>
          <br/>
          Como empresa queremos satisfacer a nuestros
          clientes en sus momentos más dulces, creando así la opción de poder
          entregar regalos, que nuestros usuarios deseen obsequiar a sus
          personas favoritas, para esto desempeñamos en mutuo acuerdo, la
          creación de una caja personalizada a sus gustos, con diferentes
          detalles en su interior y como principal nuestro producto insignia,
          Arequipe de Juniro’s.
        </p>
      </section>
      <div className="conten-mision">
        <h2 className="title-mision">Misión</h2>
        <p className="text-mision">
          Producir y comercializar arequipe, llevando un producto de excelente
          calidad a los consumidores de este producto colombiano, teniendo el
          orgullo de ser una microempresa comercial. Estamos comprometidos con
          llevar una imagen de excelencia como representantes empresariales de
          nuestro país, de igual forma estamos en la misión y disposición de
          crecer como microempresa en todos los aspectos económicos, sociales,
          políticos y ambientales de tal forma que generemos a futuro gran
          competitividad.
        </p>
      </div>

      <div className="conten-mision">
        <h2 className="title-mision">Visión</h2>
        <p className="text-mision">
          En el año 2024 seremos una compañía productora de arequipe, con la
          capacidad de enfrentar a la competencia con validez económica y
          social, de tal manera que se logre obtener un posicionamiento en el
          mercado nacional importante para de esta formar contribuir en el
          ámbito de mercados y ventas para el desarrollo económico y social de
          nuestro país.
        </p>
      </div>
    </>
  );
};
