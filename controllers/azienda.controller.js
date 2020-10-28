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
    ragioneSociale: req.body.ragioneSociale,
    //password: bcrypt.hashSync(req.body.password, 8),
    email: req.body.email,
    cel: req.body.cel,
    tel: req.body.tel,
    toponimo: req.body.toponimo,
    indirizzo: req.body.indirizzo,
    civico: req.body.civico,
    provincia: req.body.provincia,
    cap: req.body.cap,
    apertura: req.body.apertura,
    chiusura: req.body.chiusura,
    descrizione: req.body.descrizione,

  }).then(azienda => {

    if (req.body.categorie && req.body.categorie.length > 0) {

      Categoia.findAll({
        where: {
          categoria: {
            [Op.or]: req.body.categorie
          }
        }
      }).then(categorie => {
        azienda.setCategories(categorie);
        // .then(() => {
        //   res.send({ message: messaggi.ok_regist_user });
        // });
      });
    }

    if (req.body.prodotti && req.body.prodotti.length > 0) {

      Prodotto.findAll({
        where: {
          prodotto: {
            [Op.or]: req.body.prodotti
          }
        }
      }).then(prodotti => {
        azienda.setProdottis(prodotti);
      });
    }

    if (req.body.servizi && req.body.servizi.length > 0) {

      Servzio.findAll({
        where: {
          servizio: {
            [Op.or]: req.body.servizi
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