// Importamos el Modelo
import DatosPedidoModel from "../models/DatosPedidoModel.js"




export const createUserPedido = async (req, res) => {
    try {
        await  DatosPedidoModel.create(req.body)
        res.json({
            "message":"informacion pedido generado!"
        })
    } catch (error) {
        res.json ({message: error.message})
    }
}