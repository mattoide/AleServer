module.exports = (sequelize, Sequelize) => {

  const Azienda = sequelize.define("aziende", {


    ragioneSociale: {
      type: Sequelize.STRING,
      allowNull:false
    },
    email: {
      type: Sequelize.STRING,
      allowNull:false
    },
    cel: {
      type: Sequelize.STRING,
      allowNull:false
    },
    tel: {
      type: Sequelize.STRING,
      allowNull:false
    },
    toponimo: {
      type: Sequelize.STRING,
      allowNull:false
    },
    indirizzo: {
      type: Sequelize.STRING,
      allowNull:false
    },
    civico: {
      type: Sequelize.STRING,
      allowNull:false
    },
    provincia: {
      type: Sequelize.STRING,
      allowNull:false
    },
    cap: {
      type: Sequelize.STRING,
      allowNull:false
    },
    apertura: {
      type: Sequelize.STRING,
      allowNull:false
    },
    chiusura: {
      type: Sequelize.STRING,
      allowNull:false
    },
    descrizione: {
      type: Sequelize.STRING,
      allowNull:false
    },
   
  },{
    freezeTableName: true
  });

  return Azienda;
};