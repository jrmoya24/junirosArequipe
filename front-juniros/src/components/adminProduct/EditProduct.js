import axios from "axios";
import { DataContext } from "context/DataProvider";
import { useEffect, useState, useContext } from "react";

import {  Link, useParams } from "react-router-dom";


export default function EditProduct() {
  const value = useContext(DataContext);
  const URI = value.URI;
  const [showEdit] = value.showEdit;

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState();
  const [cantidad, setCantidad] = useState();
  const {id} = useParams();

  //Procedimiento para editar

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      title: title,
      image: image,
      category: category,
      price: price,
      cantidad: cantidad,
    })

    
  };

  useEffect(() => {
    getProductById()
  }, [])
  


  const getProductById = async () => {
    const res = await axios.get(URI + id);
    setTitle(res.data.title);
    setImage(res.data.image);
    setCategory(res.data.category);
    setPrice(res.data.price);
    setCantidad(res.data.cantidad);
  };

  const vistaedit = showEdit ? "showEdit show_edit" : "showEdit";

  return (
    <div className={(showEdit, vistaedit)}>
      <div class="bg2">
        <div class="container_create">
          <form class="formulario_create" onSubmit={update}>
            <fieldset>
              <div class="contenedor_campos_create">
                <div class="campo">
                  <label class="campo__label_create" htmlFor="titulo">
                    Titulo:
                  </label>
                  <input
                    class="campo__field_create"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="titulo"
                    placeholder="Ingrese el titulo"
                    id="titulo"
                  />
                </div>
                <div class="campo">
                  <label class="campo__label_create" htmlFor="imagen">
                    Imagen:
                  </label>
                  <input
                    class="campo__field_create"
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    name="link-image"
                    placeholder="Ingrese link de la imagen"
                    id="link-image"
                  />
                </div>
                <div class="campo">
                  <label class="campo__label_create" htmlFor="categoria">
                    Categoria:
                  </label>
                  <input
                    class="campo__field_create"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    name="categoria"
                    placeholder="Ingrese la categoria"
                    id="categoria"
                  />
                </div>

                <div class="campo">
                  <label class="campo__label_create" htmlFor="precio">
                    Precio:
                  </label>
                  <input
                    class="campo__field_create"
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    name="precio"
                    placeholder="Ingrese el precio"
                    id="precio"
                  />
                </div>

                <div class="campo">
                  <label class="campo__label_create" htmlFor="cantidad">
                    Cantidad:
                  </label>
                  <input
                    class="campo__field_create"
                    type="number"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    name="cantidad"
                    placeholder="Ingrese la cantidad"
                    id="cantidad"
                  />
                </div>

                <div class="enviar">
                  <button type="submit" class="boton_editar">Editar</button> 
                  <Link to="/productos/admin/"  class="boton_regresar "> Regresar</Link>
                </div>
                
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}
