const express = require('express');
const app = express();
const router = express.Router();
const Client = require('../models/Client');

// Forms ---------------------------------------------------

router.get('/create/client', (req, res) => {
res.render('registerClients');
})

// Lists ---------------------------------------------------

router.get('/clients/list', (req, res) => {
Client.findAll({
order: [
['id', 'DESC']
]
}).then( Client => {
res.render('clientList', {Client: Client});
})});

// Save ---------------------------------------------------

router.post('/client/save', (req, res) => {
var firstName = req.body.firstName;
var lastName = req.body.lastName;
var cpf = req.body.cpf;
var income = req.body.income;

Client.create({
firstName: firstName,
lastName: lastName,
cpf: cpf,
income: income
}).then(() => {
console.log('Client successfully saved!');
res.redirect('/clients/list')
}).catch( (err) => {
console.log(err);
})
})


module.exports = router;