module.exports = (sequelize, DataTypes) => {
  const ManageOrder = sequelize.define("ManageOrders", {
    total_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sale_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    payment_price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return ManageOrder;
};
