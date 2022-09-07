import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
//import Data from "Data2.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [productos, setProductos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [user, setUser] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)
	const [showCreate, setShowCreate] = useState(false)
	const [showEdit, setShowEdit] = useState(false)
	



   // Solicitar productos a la base de datos
	const URI = 'http://localhost:8000/productos/admin/'

	const getProducts = async () => {
		const res =  await axios.get(URI)
		setProductos(res.data)
	}
	const setData = () => getProducts(setProductos)

  useEffect(() => {
		setData()
	}, []);

	const addCarrito = (id) =>{
		const check = carrito.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = productos.filter(producto =>{
				return producto.id === id
			})
			setCarrito([...carrito, ...data])
		}else{
			alert("El producto se ha añadido al carrito")
		}
	}
	useEffect(() =>{
		const dataCarrito = JSON.parse(localStorage.getItem('dataCarrito'))
		if(dataCarrito){
			setCarrito(dataCarrito)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCarrito', JSON.stringify(carrito))
	},[carrito])

	useEffect(() =>{
		const getTotal = () =>{
			const res = carrito.reduce((prev, item) =>{
				return prev + (item.price * item.cantidad)
			},0)
			setTotal(res)
		}
		getTotal()
	},[carrito])
	
	const value = {
		productos : [productos, setProductos],
		menu: [menu, setMenu],
		user: [user, setUser],
		showCreate: [showCreate, setShowCreate],
		showEdit: [showEdit, setShowEdit],
		carrito: [carrito, setCarrito],
		addCarrito: addCarrito,
		getProducts: getProducts,
		URI: URI,
		total: [total, setTotal]
	}
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};
