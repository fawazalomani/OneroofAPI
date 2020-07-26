const { DataTypes, Model } = require("sequelize");
const db = require("../db");
const SequelizeSlugify = require("sequelize-slugify");

class Product extends Model {}

Product.init(
  {
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      unique: true,
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
SequelizeSlugify.slugifyModel(Product, {
  source: ["name"],
}),
  (module.exports = Product);
