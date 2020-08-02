const Sequelize  = require('sequelize');
const connection = require('../database/connection');
const Client = require('../models/Client');
const Product = connection.define('Product', {

productName: {
    type: Sequelize.STRING,
    allowNull: false
},

priceToBuy: {
    type: Sequelize.STRING,
    allowNull: false   
},

profitPercent: {
    type: Sequelize.STRING,
    allowNull: false
},

priceToSell: {
    type: Sequelize.STRING,
    allowNull: false
},

provider: {
    type: Sequelize.STRING,
    allowNull: false
},

amount: {
    type: Sequelize.STRING,
    allowNull: false
}
});


Product.sync({force: false});


module.exports = Product;