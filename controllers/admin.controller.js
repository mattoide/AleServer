exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

const db = require("../models");
const { errori, messaggi } = require("../constants/constants.js");

const Utente = db.utente;
const ScaglionePrezzo = db.scaglionePrezzo;
var bcrypt = require("bcryptjs");

exports.registraUtente = (req, res) => {
  
  Utente.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    mitt_nominativo:req.body.mitt_nominativo,
    mitt_localita:req.body.mitt_localita,
    mitt_indirizzo:req.body.mitt_indirizzo,
    mitt_cap:req.body.mitt_cap,
    mitt_provincia:req.body.mitt_provincia,
    mitt_numero_tel:req.body.mitt_numero_tel,

  }).then(utente => {

    utente.setRuolis([3]).then(() => {

      req.body.scaglioni.forEach(element => {

        ScaglionePrezzo.create({
          id_utente:utente.id,
          da:element.da,
          a:element.a,
          prezzo:element.prezzo
        })
      })
    });

    }).then(()=>{
      res.send({ message: messaggi.ok_regist_user });
    })
    .catch(err => {
      res.status(500).send({ error:errori.generic, message: err.message });
    });
};

