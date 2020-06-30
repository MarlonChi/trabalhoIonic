const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const esteticRouter = express.Router();

const routes = require('./routes');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://usrmongo:C0nnect123@cluster0-bvtgd.mongodb.net/estetica-beleza?retryWrites=true&w=majority',
 {useCreateIndex: true, useNewUrlParser: true});


app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

app.use(function(req, res, next) {
    console.log('Algo está acontecendo aqui.', req.url);
    // Garantir que o próximo comando seja executado.
    next();
});

app.get('/', function(req, res){
    res.send("Inicio da API");
});

app.use('/estetica', routes(esteticRouter));

app.listen(port, function(req, res){
    console.log("Servidor rodando na porta ", port);
});