import React, { useState, useRef } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";


export default function Contacto() {


  const [contacBody, setContacBody] = useState({
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
  })

  const inputChange = ({target}) => {
    const {name, value} = target
    setContacBody({
      ...contacBody,
      [name] : value
    })
  }

  const handleSubmit =async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8000/contacto/", contacBody)
    .then(response=>{
      console.log(response);
      console.log(response.data);
    })
    
    sendEmail();
    e.target.reset();
      //console.log("esto es lo que hay en BSSS " +  JSON.stringify(value.carrito) );
  }

  const form = useRef();
  const sendEmail = (e) => {
    

    emailjs
      .sendForm(
        "service_lodd8ia",
        "template_infkll5",
        form.current,
        "GQqteDc3aLIZ7lJuV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje de contacto enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  
  return (
    <div id="contacto" class="contacto">
      <h2 class="contacto-title">Contactanos</h2>
      <div class="content-contacto">
        <div class="bg">
          <div class="container">
            <form class="formulario" ref={form} onSubmit={handleSubmit}>
              <fieldset>
                <div class="contenedor_campos">
                  <div class="campo">
                    <label class="campo__label" for="nombre">
                      Nombre:
                    </label>
                    <input
                      class="campo__field"
                      type="text"
                      placeholder="Ingrese su nombre"
                      id="nombre"
                      name="nombre"
                      onChange={inputChange}
                    />
                  </div>
                  <div class="campo">
                    <label class="campo__label" for="nombre">
                      Telefono:
                    </label>
                    <input
                      class="campo__field"
                      type="number"
                      placeholder="Ingrese su telefono"
                      id="telefono"
                      name="telefono"
                      onChange={inputChange}
                    />
                  </div>
                  <div class="campo">
                    <label class="campo__label" for="email">
                      Correo:
                    </label>
                    <input
                      class="campo__field"
                      type="email"
                      placeholder="Ingrese su correo"
                      id="email"
                      name="correo"
                      onChange={inputChange}
                    />
                  </div>

                  <div class="campo">
                    <label class="campo__label" for="mensaje">
                      Mensaje:
                    </label>
                    <textarea
                      class="campo__tabla"
                      id="mensaje"
                      cols="30"
                      rows="10"
                      placeholder="Ingrese su mensaje"
                      name="mensaje"
                      onChange={inputChange}
                    ></textarea>
                  </div>
                  <div class="enviar">
                    <input type="submit" value="Enviar" class="boton" />
                  </div>

                  <div class="icon-redes">
                    <a href="#">
                      {" "}
                      <i class="bx bxl-facebook-circle icon-faceb"></i>{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="bx bxl-instagram-alt icon-inst"></i>{" "}
                    </a>
                    <a href="#">
                      {" "}
                      <i class="bx bxl-whatsapp icon-what"></i>{" "}
                    </a>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
