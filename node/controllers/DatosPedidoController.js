// Importamos el Modelo
import DatosPedidoModel from "../models/DatosPedidoModel"




export const createUserPedido = async (req, res) => {
    try {
        await  DatosPedidoModel.create(req.body)
        res.json({
            "message":"informacion generado!"
        })
    } catch (error) {
        res.json ({message: error.message})
    }
}