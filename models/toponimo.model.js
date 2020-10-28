module.exports = (sequelize, Sequelize) => {

  const Toponimo = sequelize.define("toponimi", {


    toponimo: {
      type: Sequelize.STRING,
      allowNull:false
    }
  },{
    freezeTableName: true
  });

  return Toponimo;
};