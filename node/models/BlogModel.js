// importamos conexion de la BD
import db from "../database/db.js";
//Importamos Sequilize
import {  DataTypes } from "sequelize";

const BlogModel = db.define('productos',{
    id :  { type: DataTypes.NUMBER,  primaryKey: true } , 
    Title: { type: DataTypes.STRING },
    Cantidad: { type: DataTypes.NUMBER },
    Price:{ type: DataTypes.NUMBER }
},{
    timestamps: false
});

export default BlogModel
