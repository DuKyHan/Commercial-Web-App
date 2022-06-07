module.exports = (sequelize, DataTypes) => {
  const Statuses = sequelize.define("Statuses", {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Statuses;
};
