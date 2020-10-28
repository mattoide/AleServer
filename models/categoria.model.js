module.exports = (sequelize, Sequelize) => {

  const Categoria = sequelize.define("categorie", {


    categoria: {
      type: Sequelize.STRING,
      allowNull:false
    }
  },{
    freezeTableName: true
  });

  return Categoria;
};