const { authJwt, verifySignUp } = require("../middleware");
const controller = require("../controllers/admin.controller");

module.exports = function(app) {


  app.post(
    "/api/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.post(
    "/api/admin/registra-utente",
    [
      verifySignUp.checkDuplicateOrNullUsernameOrEmail,
      authJwt.verifyToken, 
      authJwt.isAdmin
    ],
    controller.registraUtente
  );
  
};