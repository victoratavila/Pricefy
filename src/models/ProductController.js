const express = require('express');
const app = express();
const router = express.Router();
const Product = require('../models/Product');

// Forms ---------------------------------------------------


router.get('/create/product', (req, res) => {
res.render('registerProduct');
})

    
// Lists ---------------------------------------------------


router.get('/products/list', (req, res) => {

Product.findAll({
}).then( Product => {
res.render('productList', {Product: Product});
})
})

    
// Save ---------------------------------------------------
    
router.post('/product/save', (req, res) => {

var productName = req.body.productName;
var priceToBuy = req.body.priceToBuy;
var profitPercent = req.body.profitPercent;
var priceToSell = req.body.priceToSell;
var provider = req.body.provider;
var amount = req.body.amount;

Product.create({
    productName: productName,
    priceToBuy: priceToBuy,
    profitPercent: profitPercent,
    priceToSell: priceToSell,
    provider: provider,
    amount: amount
}).then( () => {
res.redirect('/products/list');
});


})




module.exports = router;