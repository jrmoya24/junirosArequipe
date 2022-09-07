import axios from 'axios'
import { useState, useContext, useEffect } from 'react'

import { DataContext } from "../../context/DataProvider";



export const CreateProduct = () => {
    const value = useContext(DataContext);
    const URI = value.URI; 
    const getProducts = value.getProducts;
    const [showCreate] = value.showCreate;

  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState()
  const [cantidad, setCantidad] = useState()

 
  
 

  //Procedimiento guardar
  const store = async (e) => {
    e.preventDefault()
    await axios.post(URI, {title: title, image: image, category: category, price: price, cantidad: cantidad } )
    
  }
useEffect(() => {
  getProducts()

  
}, [])
  const vista = showCreate ? "showCreate show_create" : "showCreate";

  return (
    <div className={showCreate, vista}>
                    <div class="bg2">
                        <div class="container_create">
                            <form class="formulario_create" onSubmit={store} >
                                <fieldset>
                                    <div class="contenedor_campos_create">
                                        <div class="campo">
                                            <label class="campo__label_create" htmlFor="titulo">Titulo:</label>
                                            <input class="campo__field_create" type="text" value={title} onChange={ (e) => setTitle(e.target.value) } name='titulo' placeholder="Ingrese el titulo" id="titulo" />
                                        </div>
                                        <div class="campo">
                                            <label class="campo__label_create" htmlFor="imagen">Imagen:</label>
                                            <input class="campo__field_create" type="text"  value={image} onChange={ (e) => setImage(e.target.value) } name='link-image' placeholder="Ingrese link de la imagen" id="link-image" />
                                        </div>
                                        <div class="campo">
                                            <label class="campo__label_create" htmlFor="categoria">Categoria:</label>
                                            <input class="campo__field_create" type="text"  value={category} onChange={ (e) => setCategory(e.target.value) } name='categoria' placeholder="Ingrese la categoria" id="categoria" />
                                        </div>

                                        <div class="campo">
                                            <label class="campo__label_create" htmlFor="precio">Precio:</label>
                                            <input class="campo__field_create" type="number"  value={price} onChange={ (e) => setPrice(e.target.value) } name='precio' placeholder="Ingrese el precio" id="precio" />
                                        </div>

                                        <div class="campo">
                                            <label class="campo__label_create" htmlFor="cantidad">Cantidad:</label>
                                            <input class="campo__field_create" type="number"  value={cantidad} onChange={ (e) => setCantidad(e.target.value) } name='cantidad' placeholder="Ingrese la cantidad" id="cantidad" />
                                        </div>

                                        <div class="enviar">
                                            <button type="submit"  class="boton_create">Crear</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
  )
}

