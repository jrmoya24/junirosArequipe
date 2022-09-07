import React from "react";

export const Features = () => {
  return (
    <div>
      <section className="features">
        <div className="features__content">
          <div className="features__content-card" data-features>
            <box-icon type="solid" name="package" className="feactures-icon" />
            <h3 className="title-card">Envío Rapido</h3>
            <p className="description-card">
              Nuestros envíos son rápidos y seguros.
            </p>
          </div>
          <div className="features__content-card">
            <box-icon
              className="feactures-icon"
              type="solid"
              name="dollar-circle"
            />
            <h3 className="title-card">Pago Seguro</h3>
            <p className="description-card">Pago seguro contra entrega.</p>
          </div>
          <div className="features__content-card">
            <box-icon
              type="solid"
              name="message-square-dots"
              className="feactures-icon"
            />

            <p className="description-card">
              Soporte 24/7 para atenderte en cualquier momento.
            </p>
          </div>
          <div className="features__content-card">
            <box-icon name="gift" type="solid" className="feactures-icon" />
            <h3 className="title-card">Regalos</h3>
            <p className="description-card">Regalos para tus amigos.</p>
          </div>
        </div>
      </section>
    </div>
  );
};
