const express = require("express");
const productController = require("./../controllers/productController");
const productRoutes = express.Router();
//routes
productRoutes
    .route("/")
    .get(productController.getAllProducts)
    .post(productController.addProduct);
productRoutes.route("/:id").get(productController.getProductById);

module.exports = productRoutes;