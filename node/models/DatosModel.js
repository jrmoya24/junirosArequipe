import db from "../database/db.js";
//Importamos Sequilize
import {  DataTypes } from "sequelize";

const DatosModel = db.define('datos',{
    id :  { type: DataTypes.NUMBER,  primaryKey: true } , 
    title: { type: DataTypes.STRING },
    price:{ type: DataTypes.NUMBER },
    image: { type: DataTypes.STRING },
    category: { type: DataTypes.STRING },
    cantidad: { type: DataTypes.NUMBER },
},{
    timestamps: false
})


export default DatosModel