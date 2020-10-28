const db = require("../models");
const { ruoli, errori } = require("../constants/constants.js");

const Ruoli = db.ruoli;
const Utente = db.utente;

checkDuplicateOrNullUsernameOrEmail = (req, res, next) => {
    // Email
    if(!req.body.email){
      return res.status(400).send({
        error: "La mail non può essere vuota"
      });
    }

    if(!req.body.password){
      return res.status(400).send({
        error: "La password non può essere vuota"
      });
    }
    Utente.findOne({
      where: {
        email: req.body.email
      }
    }).then(utente => {
      if (utente) {
        res.status(400).send({
          error: "Failed! Email is already in use!"
        });
        return;
      }

      next();
    });


};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!Ruoli.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateOrNullUsernameOrEmail: checkDuplicateOrNullUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;