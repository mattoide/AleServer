const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {

  app.post(
    "/signup",
    [
      verifySignUp.checkDuplicateOrNullUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  app.post("/signin", controller.signin);
  app.post("/api/admin/login/", controller.adminLogin);
};