const config = require("../config/db.config.js");
const { ruoli } = require("../constants/constants.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.ruolo = require("../models/ruolo.model.js")(sequelize, Sequelize);
db.admin = require("../models/admin.model.js")(sequelize, Sequelize);
db.utente = require("../models/utente.model.js")(sequelize, Sequelize);
db.azienda = require("../models/azienda.model.js")(sequelize, Sequelize);
db.categoria = require("../models/categoria.model.js")(sequelize, Sequelize);
db.prodotto = require("../models/prodotto.model.js")(sequelize, Sequelize);
db.servizio = require("../models/servizio.model.js")(sequelize, Sequelize);
db.toponimo = require("../models/toponimo.model.js")(sequelize, Sequelize);


db.azienda.belongsToMany(db.categoria, {
  through: "azienda_categoria",
  foreignKey: "azienda_id",
  otherKey: "categoria_id"
});

db.azienda.belongsToMany(db.prodotto, {
  through: "azienda_prodotto",
  foreignKey: "azienda_id",
  otherKey: "prodotto_id"
});

db.azienda.belongsToMany(db.servizio, {
  through: "azienda_servizio",
  foreignKey: "azienda_id",
  otherKey: "servizio_id"
});

// db.ruolo.belongsToMany(db.admin, {
//   through: "admin_ruolo",
//   foreignKey: "ruoloId",
//   otherKey: "adminId"
// });

// db.utente.hasMany(db.scaglionePrezzo, {
//   foreignKey: 'id_utente'
// });

db.ruoli = [ruoli.ADMIN, ruoli.UTENTE, ruoli.DRIVER];

module.exports = db;