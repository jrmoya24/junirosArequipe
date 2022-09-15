import React, { useContext, useRef, useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataContext } from "context/DataProvider";
import emailjs from "@emailjs/browser";
import axios from "axios";
import Swal from 'sweetalert2'



//const URI = "http://localhost:8000/compra/";

export const Compra = () => {
  const value = useContext(DataContext);
  const [carrito, setCarrito] = value.carrito;
  const [total] = value.total;

 const [infoPedido, setinfoPedido] = value.infoPedido;



  const changeInput = ({ target }) => {
    const { name, value } = target
   setinfoPedido({
    ...infoPedido,
    [name] : value
   })
  }


  // Procedimiento enviar datos a la base de datos
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post("http://localhost:8000/compra/", carrito)
    
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
      sendEmail()
      e.target.reset();
      alertCon();
    //console.log("esto es lo que hay en BSSS " +  JSON.stringify(value.carrito) );
  }



  const form = useRef();
  const sendEmail = (e) => {
    

    emailjs
      .sendForm(
        "service_8tpoj8a",
        "template_scyz6dn",
        form.current,
        "GQqteDc3aLIZ7lJuV"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("mensaje enviado");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const alertCon = () => {

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Pedido generado correctamete',
      text: 'Nos estaremos comunicando con usted, en un tiempo estimado de 30 minutos.',
      showConfirmButton: false,
    })
  }

  return (
    <div>
      <div className="py-4">
        <Typography variant="h4" gutterBottom>
          Informacion de envio.
        </Typography>
        <form ref={form} onSubmit={handleSubmit} >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <div class="campo">
                <label class="campo__label" id="userName" htmlFor="NomForm">
                  Nombre: </label>
                <input
                  class="campo__field"
                  type="text"
                  name="user_name"
                  placeholder="Ingrese su nombre"
                  id="nombre"
                  onChange={changeInput}
                  required
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div class="campo">
                <label class="campo__label" id="userNum" htmlFor="TelForm">
                  Telefono:
                </label>
                <input
                  class="campo__field"
                  type="number"
                  name="user_num"
                  placeholder="Ingrese su telefono"
                  id="telefono"
                  onChange={changeInput}
                  required
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div class="campo">
                <label class="campo__label" id="userEmail" htmlFor="EmailForm">
                  Correo:
                </label>
                <input
                  class="campo__field"
                  type="email"
                  placeholder="Correo"
                  name="user_email"
                  id="correo"
                  onChange={changeInput}
                  required
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div class="campo">
                <label
                  class="campo__label"
                  id="userAddress"
                  htmlFor="addresForm"
                >
                  Direccion:
                </label>
                <input
                  class="campo__field"
                  type="text"
                  name="user_address"
                  placeholder="Ingrese su direccion"
                  id="direccion"
                  onChange={changeInput}
                  required
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={6}>
              <div class="campo">
                <label class="campo__label" id="userCity" htmlFor="cityForm">
                  Ciudad:
                </label>
                <input
                  class="campo__field"
                  type="text"
                  name="user_city"
                  placeholder="Ciudad"
                  id="ciudad"
                  onChange={changeInput}
                  required
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div class="campo">
                <label
                  class="campo__label"
                  id="userBarrio"
                  htmlFor="BarrioForm"
                >
                  Barrio:
                </label>
                <input
                  class="campo__field"
                  type="text"
                  name="user_barrio"
                  placeholder="Barrio"
                  id="Barrio"
                  onChange={changeInput}
                  required
                />
              </div>
            </Grid>

            <div className="col-md-5 tabla">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th> </th>
                    <th width="50%">Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {carrito.map((producto) => {
                    return (
                      <tr key={producto.id}>
                        <td>
                          {" "}
                          <img
                            style={{ width: "55%" }}
                            src={producto.image}
                          />{" "}
                        </td>
                        <td> {producto.title} </td>
                        <td> $ {producto.price} </td>
                        <td> {producto.cantidad} </td>
                        <td> </td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td> </td>
                    <td style={{ alignItems: "flex-end", display: "flex" }}>
                      {" "}
                      $ {total}{" "}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Grid item xs={12} sm={8}>
              <button type="submit" className="compra-btn" >Generar solicitud</button>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </div>
  );
};
