const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const slugify = require("slugify");

//Data
let products = require("./products");
//Create Express App instance
const app = express();
app.use(cors());
app.use(bodyParser.json());
//Products List
app.get("/products", (req, res) => {
  res.json(products);
});

//Prouct Create
app.post("/products", (req, res) => {
  const id = products[products.length - 1].id + 1;
  const slug = slugify(req.body.name, { lower: true });
  const newProduct = { id, slug, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

//Products Delete
app.delete("/products/:productId", (req, res) => {
  const { productId } = req.params;

  const foundproduct = products.find((product) => product.id === +productId);

  if (foundproduct) {
    products = products.filter((product) => product.id !== +productId);
    res.status(204).end();
  } else {
    res.status(404).json({ massage: "not found" });
  }
});

app.listen(8000, () => {
  console.log("the  app  running on localhost:8000");
});
