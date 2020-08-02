const Sequelize  = require('sequelize');

const sequelize = new Sequelize('sistemadevendas', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
  });

  
module.exports = sequelize;