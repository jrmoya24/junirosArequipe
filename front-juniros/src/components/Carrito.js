import React, { useContext } from "react";
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

export const Carrito = () => {
	const value = useContext(DataContext);
	const [menu, setMenu] = value.menu;
	const [carrito, setCarrito] = value.carrito;
	const [total] = value.total;

	const tooglefalse = () => {
		setMenu(false);
	};

	const reduce = id => {
		carrito.forEach(item => {
			if (item.id === id) {
				item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
			}
			setCarrito([...carrito])
		})
	}
	const increase = id => {
		carrito.forEach(item => {
			if (item.id === id) {
				item.cantidad += 1;
			}
			setCarrito([...carrito])
		})
	}

	const showalert = (id) => {
		Swal.fire({
			title: '¿Estas seguro de eliminar este producto?',
			text: "¡No podrás revertirlo!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Si, eliminar!'
		  }).then((result) => {
			if (result.isConfirmed) {

				carrito.forEach((item, index) => {
					if (item.id === id) {
						item.cantidad = 1;
						carrito.splice(index, 1)
					}
				})
				setCarrito([...carrito])

			  	Swal.fire(
				'Eliminado!',
				'Este producto ha sido eliminado',
				'success',
				'3000'
			  )
			  
			}
		  })
	}

	

	const show1 = menu ? "carritos show" : "carrito";
	const show2 = menu ? "carrito show" : "carrito";



	return (
		<div className={show1}>
			<div className={show2}>
				<div onClick={tooglefalse} className="carrito__close">
					<box-icon name="x"></box-icon>
				</div>
				<h2>Su Carrito</h2>
				<div className="carrito__center">
					{


						carrito.length === 0 ? <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>Carrito Vacio</h2> : <>
							{
								carrito.map(producto => (
									<div className="carrito__item" key={producto.id}>
										<img src={producto.image} alt={producto.title} />
										<div>
											<h3> {producto.title} </h3>
											<h3 className="title-category"> {producto.category} </h3>
											<p className="price">${producto.price}</p>
										</div>
										<div>
											<box-icon
												onClick={() => increase(producto.id)} name="up-arrow"
												type="solid"
											/>
											<p className="cantidad">{producto.cantidad}</p>
											<box-icon
												onClick={() => reduce(producto.id)}
												name="down-arrow"
												type="solid"
											/>
										</div>
										<div
											onClick={() => showalert(producto.id)}
											className="remove__item">
											<box-icon name="trash" />
										</div>
									</div>
								))
							}

						</>
					}
				</div>

				<div className="carrito__footer">
					<h3>Total: ${total}</h3>
				<Link to={"/compra/"}>	<button className="btnn">Continuar pedido</button> </Link>
				</div>
			</div>
		</div>
	);
};
