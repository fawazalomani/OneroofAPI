const express = require("express");
const cors = require("cors");

//Data
const products = require("./products");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  console.log("Hiiiiiiiii");
  res.json({ message: "Hello Fawaz" });
});

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log("the  app  running on localhost:8000");
});
