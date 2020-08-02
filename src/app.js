const express = require('express');
const app = express();
const ejs = require('ejs');
const connection = require('../database/connection');
const Client = require('../models/Client');
const Product = require('../models/Product');
const ClientController = require('../models/ClientController');
const ProductController = require('../models/ProductController');



app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs')  
app.use('/', ClientController );
app.use('/', ProductController );

app.get('/', (req, res) => {

Product.findAll().then( Product => {
Client.findAll({
}).then( Client => {
res.render('index', {Client: Client, Product: Product});
})});
})



app.listen(8080, () => {
console.log('Pricefy server is running!');
})