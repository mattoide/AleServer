const { authJwt } = require("../middleware");
const controller = require("../controllers/options.controller");

module.exports = function(app) {

  app.get(
    "/api/options/categorie",
    controller.getCategorie
  );

  app.get(
    "/api/options/prodotti",
    controller.getProdotti
  );

  app.get(
    "/api/options/servizi",
    controller.getServizi
  );

  app.get(
    "/api/options/toponimi",
    controller.getToponimi
  );
};