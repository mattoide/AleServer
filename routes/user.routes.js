const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {

  app.get("/all", controller.allAccess);

  app.get(
    "/user",
    [authJwt.verifyToken, authJwt.isUtente],
    controller.userBoard
  );

  app.get(
    "/driver",
    [authJwt.verifyToken, authJwt.isDriver],
    controller.moderatorBoard
  );

  app.get(
    "/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};