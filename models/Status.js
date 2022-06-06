module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("Statuses", {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Status;
};
