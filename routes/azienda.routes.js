const { authJwt } = require("../middleware");
const controller = require("../controllers/azienda.controller");

module.exports = function(app) {

  app.post(
    "/api/azienda/registra",
    //[authJwt.verifyToken, authJwt.isAdmin],
    controller.registraAzienda
  );
};