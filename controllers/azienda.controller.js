const db = require("../models");
const config = require("../config/auth.config");
const { errori, messaggi, categorie } = require("../constants/constants.js");
const Azienda = db.azienda;
const Categoia = db.categoria;
const Prodotto = db.prodotto;
const Servzio = db.servizio;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.registraAzienda = (req, res) => {

  Azienda.create({
    ragioneSociale: req.body.azienda.ragioneSociale,
    //password: bcrypt.hashSync(req.body.azienda.password, 8),
    email: req.body.azienda.email,
    cel: req.body.azienda.cel,
    tel: req.body.azienda.tel,
    toponimo: req.body.azienda.toponimo,
    indirizzo: req.body.azienda.indirizzo,
    civico: req.body.azienda.civico,
    provincia: req.body.azienda.provincia,
    cap: req.body.azienda.cap,
    apertura: req.body.azienda.apertura,
    chiusura: req.body.azienda.chiusura,
    descrizione: req.body.azienda.descrizione,

  }).then(azienda => {

    if (req.body.azienda.categorie && req.body.azienda.categorie.length > 0) {

      Categoia.findAll({
        where: {
          categoria: {
            [Op.or]: req.body.azienda.categorie
          }
        }
      }).then(categorie => {
        azienda.setCategories(categorie);
        // .then(() => {
        //   res.send({ message: messaggi.ok_regist_user });
        // });
      });
    }

    if (req.body.azienda.prodotti && req.body.azienda.prodotti.length > 0) {

      Prodotto.findAll({
        where: {
          prodotto: {
            [Op.or]: req.body.azienda.prodotti
          }
        }
      }).then(prodotti => {
        azienda.setProdottis(prodotti);
      });
    }

    if (req.body.azienda.servizi && req.body.azienda.servizi.length > 0) {

      Servzio.findAll({
        where: {
          servizio: {
            [Op.or]: req.body.azienda.servizi
          }
        }
      }).then(servizi => {
        azienda.setServizis(servizi);
      });
    }

  })
    .then(()=>{
      res.send({ message: messaggi.ok_regist_azienda });
    })
    .catch(err => {
      res.status(500).send({ error: errori.generic, message: err.message });
    });
};