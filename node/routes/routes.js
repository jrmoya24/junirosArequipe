import express from 'express'
import { createPedido } from '../controllers/BlogController.js'
import { getAllDatos, getDato, createDato, updateDato, deleteDato } from '../controllers/DatosController.js'

const router = express.Router()

router.post('/compra', createPedido)

//***** */
router.get('/productos/admin/', getAllDatos)
router.get('/productos/admin/:id', getDato)
router.post('/productos/admin', createDato)
router.put('/productos/admin/:id', updateDato)
router.delete('/productos/admin/:id', deleteDato)



export default router