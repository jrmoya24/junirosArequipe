import React, {useContext, useEffect} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../context/DataProvider";
import axios from "axios";








export const ItemProducto = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
    const [productos, setProductos] = value.productos;
    const [showEdit, setShowEdit] = value.showEdit;
  const getProducts = value.getProducts;
  const URI = value.URI; 


// llamar todos los productos
useEffect(() => {
  getProducts()
}, [])

  

  // Eliminar un producto
  const deleteProduct = async (id) => {
   await axios.delete(`${URI}${id}`);
    getProducts();
  };

 


  return (
    
    <div key={id} className="shop-content">
      
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>

      <div className="bottom_edit">
        <div>
        <Link to={`/productos/admin/edit/${id}`} className='boton_editar' ><box-icon name='edit' /> </Link>
        </div>
        <div>
        <button onClick={ ()=> deleteProduct(id) } className='boton_delete'><box-icon name='trash-alt' type='solid' / ></button>
        </div>
      </div>

    </div>

  )
}
//<button className="btnn"  onClick={() => addCarrito(id)}><box-icon name='cart-alt' type='solid' /></button>