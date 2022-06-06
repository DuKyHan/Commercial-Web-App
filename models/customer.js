module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customers", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customer_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    biography: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Customer;
};
