const express = require("express");
const productController = require("./../controllers/productController");
const productRoutes = express.Router();
//routes
productRoutes
    .route("/")
    .get(productController.getAllProducts)
    .post(productController.addProduct);
productRoutes.route("/:id").get(productController.getProductById);
/*
PUT /api/v1/products/:id
DELETE /api/v1/products/:id
*/
productRoutes.route("/:id").put(productController.editProduct);
productRoutes.route("/:id").delete(productController.deleteProduct);

module.exports = productRoutes;