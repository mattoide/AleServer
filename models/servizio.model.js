module.exports = (sequelize, Sequelize) => {

  const Servizio = sequelize.define("servizi", {


    servizio: {
      type: Sequelize.STRING,
      allowNull:false
    }
  },{
    freezeTableName: true
  });

  return Servizio;
};