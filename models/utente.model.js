module.exports = (sequelize, Sequelize) => {
  
  const Utente = sequelize.define("utenti", {

    token:{
      type: Sequelize.STRING,
      allowNull:true
    },email: {
      type: Sequelize.STRING,
      allowNull:false
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false
    },
    credito_spedizioni: {
      type: Sequelize.DOUBLE,
      defaultValue: 0
    },
    credito_contrassegni: {
      type: Sequelize.DOUBLE
    },
    mitt_nominativo: {
      type: Sequelize.STRING
    },
    mitt_localita: {
      type: Sequelize.STRING
    },
    mitt_indirizzo: {
      type: Sequelize.STRING
    },
    mitt_cap: {
      type: Sequelize.STRING
    },
    mitt_provincia: {
      type: Sequelize.STRING
    },
    mitt_numero_tel: {
      type: Sequelize.STRING
    }
  },
    {
      freezeTableName: true
    });

  return Utente;
};