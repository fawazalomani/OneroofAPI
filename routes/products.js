const express = require("express");

const {
  productCreate,
  productUpdate,
  priductDelete,
  productList,
} = require("../controllers/productControllers");

const router = express.Router();
//Products List
router.get("/", productList);

//Prouct Create
router.post("/", productCreate);

// Product Update
router.put("/:productId", productUpdate);

//Products Delete
router.delete("/:productId", priductDelete);

module.exports = router;
