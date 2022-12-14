// importamos conexion de la BD
import db from "../database/db.js";
//Importamos Sequilize
import {  DataTypes } from "sequelize";

const BlogModel = db.define('productos',{
    id :  { type: DataTypes.NUMBER,  primaryKey: true } , 
    title: { type: DataTypes.STRING },
    cantidad: { type: DataTypes.NUMBER },
    price:{ type: DataTypes.NUMBER },
    user_name: { type: DataTypes.STRING },
    user_email: { type: DataTypes.STRING },
    user_address: { type: DataTypes.STRING },
    user_city: { type: DataTypes.STRING },
    user_barrio: { type: DataTypes.STRING }


},{
    timestamps: false
});

export default BlogModel
