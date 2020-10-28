const db = require("../models");
const { errori, messaggi, toponimi } = require("../constants/constants.js");

const Categoria = db.categoria;
const Prodotto = db.prodotto;
const Servizio = db.servizio;
const Toponimo = db.toponimo;


exports.getCategorie = (req, res) => {
    Categoria.findAll().then(categorie => {
        res.send({ categorie: categorie })
    })
};

exports.getProdotti = (req, res) => {
    Prodotto.findAll().then(prodotti => {
        res.send({ prodotti: prodotti })
    })
};

exports.getServizi = (req, res) => {
    Servizio.findAll().then(servizi => {
        res.send({ servizi: servizi })
    })
};

exports.getToponimi = (req, res) => {
    Toponimo.findAll().then(toponimi => {
        res.send({ toponimi: toponimi })
    })
};