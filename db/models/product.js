const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
      validate: {
        min: {
          args: 10,
          msg: "try again",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    sequelize: db,
  }
);

module.exports = Product;
