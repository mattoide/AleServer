module.exports = (sequelize, Sequelize) => {

  const Ruolo = sequelize.define("ruoli", {

    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nome: {
      type: Sequelize.STRING
    }
  },{
    freezeTableName: true
  });

  return Ruolo;
};