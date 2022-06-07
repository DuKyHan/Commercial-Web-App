module.exports = (sequelize, DataTypes) => {
  const Customers = sequelize.define("Customers", {
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
  Customers.associate = (models) => {
    Customers.hasMany(models.Orders, {
      onDelete: "cascade",
    });
    Customers.hasOne(models.Accounts, {
      onDelete: "cascade",
    });
  };

  return Customers;
};
