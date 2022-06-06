module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Orders", {
    quantity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Order;
};
