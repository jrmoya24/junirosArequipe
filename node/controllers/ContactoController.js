// Importamos el Modelo
import ContactoModel from '../models/ContactoModel.js'




export const createMessage = async (req, res) => {
    try {
        await  ContactoModel.create(req.body)
        res.json({
            "message":"¡Mensaje generado!"
        })
    } catch (error) {
        res.json ({message: error.message})
    }
}