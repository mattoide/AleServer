// express
const express = require('express')
const app = express()

// CORS
var cors = require('cors')
app.use(cors())

// boh
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// middleware
const authRouters = require('./routes/auth.routes')
const userRouters = require('./routes/user.routes')

const { ruoli, categorie, prodotti, servizi, toponimi } = require("./constants/constants.js");
var bcrypt = require("bcryptjs");


const db = require("./models");
const { categoria } = require('./models');
const Admin = db.admin;
const Categorie = db.categoria;
const Prodotti = db.prodotto;
const Servizi = db.servizio;
const Toponimi = db.toponimo;

// db.sequelize.query('CREATE DATABASE' + 'express');

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  admin();
  catProdServTop(categorie, prodotti, servizi, toponimi);
});


require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/admin.routes')(app);
require('./routes/azienda.routes')(app);
require('./routes/options.routes')(app);

app.use(function(req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "token, Origin, Content-Type, Accept"
  );
  next();

});


function admin(){
Admin.create({
  nome:"admin",
  password: bcrypt.hashSync("password", 8)
}).then(admin => {
  admin.setRuolis([1]).then(() => {
   console.log("Ruolo admin inserito")
  });
})
}

function ruolis(ruoli) {
  console.log(ruoli)
  Ruolo.create({
    id: 1,
    nome: ruoli.ADMIN
  });
 
  Ruolo.create({
    id: 2,
    nome: ruoli.DRIVER
  });
 
  Ruolo.create({
    id: 3,
    nome: ruoli.UTENTE
  });
}

function catProdServTop(categorie, prodotti, servizi, toponimi) {
  categorie.forEach(element => {
    
    Categorie.create({
      categoria: element.categoria
    });
});

prodotti.forEach(element => {
    
  Prodotti.create({
    prodotto: element.prodotto
  });
});

servizi.forEach(element => {
    
  Servizi.create({
    servizio: element.servizio
  });
});

toponimi.forEach(element => {
    
  Toponimi.create({
    toponimo: element.toponimo
  });
});

}

module.exports = app;

