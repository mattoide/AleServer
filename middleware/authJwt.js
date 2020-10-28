const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Utente = db.utente;
const Admin = db.admin;
const { ruoli, errori } = require("../constants/constants.js");


verifyToken = (req, res, next) => {
  let token = req.headers["token"];

  if (!token) {
    return res.status(403).send({
      message: errori.no_token
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: errori.unauthorized
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = (req, res, next) => {
  Admin.findByPk(req.userId).then(admin => {
    admin.getRuolis().then(ruolis => {
      console.log(ruolis)
      for (let i = 0; i < ruolis.length; i++) {
        if (ruolis[i].nome === ruoli.ADMIN) {
          next();
          return;
        }
      }

      res.status(403).send({
        error: errori.require_admin
      });
      return;
    });
  });
};

isDriver = (req, res, next) => {
  Utente.findByPk(req.userId).then(utente => {
    utente.getRoles().then(ruolis => {
      for (let i = 0; i < ruolis.length; i++) {
        if (ruolis[i].name === ruoli.DRIVER) {
          next();
          return;
        }
      }

      res.status(403).send({
        error:  errori.require_driver
      });
    });
  });
};

isUtente = (req, res, next) => {
  Utente.findByPk(req.userId).then(Utente => {
    utente.getRoles().then(ruolis => {
      for (let i = 0; i < ruolis.length; i++) {
        if (ruolis[i].name === ruoli.UTENTE) {
          next();
          return;
        }
      }

      res.status(403).send({
        error:  errori.require_utente
      });
    });
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isDriver: isDriver,
  isUtente: isUtente
};
module.exports = authJwt;