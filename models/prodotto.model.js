module.exports = (sequelize, Sequelize) => {

  const Prodotto = sequelize.define("prodotti", {


    prodotto: {
      type: Sequelize.STRING,
      allowNull:false
    }
  },{
    freezeTableName: true
  });

  return Prodotto;
};