const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Router
const productRouter = require("./routes/products");

//Create Express App instance
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/products", productRouter);

app.listen(8000, () => {
  console.log("the  app  running on localhost:8000");
});
