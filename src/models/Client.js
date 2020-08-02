const Sequelize  = require('sequelize');
const connection = require('../database/connection');
const Product = require('../models/Product');

const Client = connection.define('Client', {

firstName: {
    type: Sequelize.STRING,
    allowNull: false
},

lastName: {
    type: Sequelize.STRING,
    allowNull: false   
},

cpf: {
    type: Sequelize.STRING,
    allowNull: false
},

income: {
    type: Sequelize.INTEGER,
    allowNull: false
}
});

// Client.hasMany(Product);  //Um cliente tem muitos produtos 
Client.belongsTo(Product); //Um cliente compra um produto

Client.sync({force: false});


module.exports = Client;