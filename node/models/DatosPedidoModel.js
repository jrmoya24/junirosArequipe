// importamos conexion de la BD
import db from "../database/db.js";
//Importamos Sequilize
import {  DataTypes } from "sequelize";


// importamos conexion de la BD
import db from "../database/db.js";
//Importamos Sequilize
import {  DataTypes } from "sequelize";


const DatosPedidoModel = db.define('datospedido',{
    id :  { type: DataTypes.NUMBER,  primaryKey: true } , 
    user_name: { type: DataTypes.STRING },
    user_email: { type: DataTypes.STRING },
    user_address: { type: DataTypes.STRING },
    user_city: { type: DataTypes.STRING },
    user_barrio: { type: DataTypes.STRING }
},{
    timestamps: false
});

export default DatosPedidoModel