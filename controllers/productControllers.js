const slugify = require("slugify");
//Data
const { Product } = require("../db/models");
const { _attributes } = require("../db");

exports.productCreate = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

exports.productUpdate = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByPk(productId);
    if (foundProduct) {
      await foundProduct.update(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

exports.priductDelete = async (req, res) => {
  try {
    const { productId } = req.params;
    const foundProduct = await Product.findByPk(productId);
    if (foundProduct) {
      await foundProduct.destroy(req.body);
      res.status(204).end();
    } else {
      res.status(404).json({ message: "not found" });
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};
exports.productList = async (req, res) => {
  try {
    const _products = await Product.findAll({
      attributes: { exclude: ["cratedAt", "updatedAt"] },
    });
    res.json(_products);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};
