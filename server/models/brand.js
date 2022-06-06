module.exports = (sequelize, DataTypes) => {
  const Brand = sequelize.define("Brands", {
    brand_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Brand;
};
