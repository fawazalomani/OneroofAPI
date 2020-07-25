const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//DB

const db = require("./db/db");
const { Product } = require("./db/models");

//Router
const productRouter = require("./routes/products");

//Create Express App instance
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRouter);

const run = async () => {
  try {
    await db.sync();
    //const newProduct = Product.create({ name: "Keybord", price: 55 });
    const products = await Product.findAll();
    console.log("run=>products", products);
    app.listen(8000, () => {
      console.log("the  app  running on localhost:8000");
    });
  } catch (error) {
    console.log(" run -> error", error);
  }
};
run();
