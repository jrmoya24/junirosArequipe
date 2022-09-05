import {Sequelize} from 'sequelize'


const db = new Sequelize('juniros', 'root', 'Nior1042455', {
    hoost: 'localhost',
    dialect: 'mysql'
} )

export default db