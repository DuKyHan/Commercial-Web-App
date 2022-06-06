module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define("Accounts", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  //findAll{ where :{id: iduser}}
  // findOne
  // destroy{}
  //
  return Account;
};
