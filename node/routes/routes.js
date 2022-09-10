import express from 'express'

import { createPedido } from '../controllers/BlogController.js'
import { createMessage } from '../controllers/ContactoController.js'
import { getAllDatos, getDato, createDato, updateDato, deleteDato } from '../controllers/DatosController.js'


const router = express.Router()
// ruta del envio de los productos del carrito
router.post('/compra', createPedido)


// rutas para administrar los productos
router.get('/productos/admin/', getAllDatos)
router.get('/productos/admin/:id', getDato)
router.post('/productos/admin', createDato)
router.put('/productos/admin/:id', updateDato)
router.delete('/productos/admin/:id', deleteDato)

//ruta para enviar datos de mensaje de contacto
router.post('/contacto', createMessage)



export default router