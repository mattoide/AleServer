module.exports = (sequelize, Sequelize) => {

  const Admin = sequelize.define("admins", {

    token:{
      type: Sequelize.STRING,
      allowNull:true
    },
    nome: {
      type: Sequelize.STRING,
      allowNull:false
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false
    }
  },
  {
    freezeTableName: true
  });

  return Admin;
};