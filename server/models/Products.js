module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fastDelivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ratings: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Products.associate = (models) => {
    Products.hasMany(models.Orders, {
      onDelete: "cascade",
    });
  };

  return Products;
};
