const slugify = require("slugify");
//Data
let products = require("../products");

exports.productCreate = (req, res) => {
  const id = products[products.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newProduct = { id, slug, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.productUpdate = (req, res) => {
  const { productId } = req.params;
  const foundProduct = products.find((product) => product.id === +productId);
  if (foundProduct) {
    for (const key in req.body) foundProduct[key] = req.body[key];
    res.status(204).end();
    console.log("foundProduct", foundProduct);
  } else {
    res.status(404).json({ message: "not found" });
  }
};

exports.priductDelete = (req, res) => {
  const { productId } = req.params;

  const foundproduct = products.find((product) => product.id === +productId);

  if (foundproduct) {
    products = products.filter((product) => product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ massage: "not found" });
  }
};
exports.productList = (req, res) => {
  res.json(products);
};
