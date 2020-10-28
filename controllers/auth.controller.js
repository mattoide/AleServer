const db = require("../models");
const config = require("../config/auth.config");
const { errori, messaggi } = require("../constants/constants.js");

const Utente = db.utente;
const Admin = db.admin;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  // Save Utente to Database
  Utente.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(utente => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          utente.setRuolis(roles).then(() => {
            res.send({ message: messaggi.ok_regist_user });
          });
        });
      } else {
        // utente role = 1
        utente.setRuolis([1]).then(() => {
          res.send({ message: messaggi.ok_regist_user });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ error:errori.generic, message: err.message });
    });
};

exports.signin = (req, res) => {
  Utente.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(utente => {
      if (!utente) {
        return res.status(404).send({ message: errori.not_found_user });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        utente.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: errori.invalid_login
        });
      }

      var token = jwt.sign({ id: utente.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      utente.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: utente.id,
          email: utente.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ error:errori.generic, message: err.message });
    });
};

exports.adminLogin = (req, res) => {
  Admin.findOne({
    where: {
      nome: req.body.nome
    }
  })
    .then(admin => {
      if (!admin) {
        return res.status(404).send({ message: errori.not_found_user });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        admin.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          //accessToken: null,
          error: errori.invalid_login
        });
      }

      var token = jwt.sign({ id: admin.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

        res.status(200).send({
          //id: admin.id,
          //nome: admin.nome,
          token: token
        });
      }).catch(err => {
        res.status(500).send({ error:errori.generic, message: err.message });
      });
};