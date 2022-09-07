const express = require("express");
const morgan = require("morgan");
const app = express();
const productRoutes = require("./routes/productRoutes");

//middleware
app.use(express.json());

app.use(morgan("dev"));
//Nuestro middleware
app.use((request, response, next) => {
    request.requestTime = new Date().toISOString;
    next();
});
//routes
app.use("/api/v1/products/", productRoutes);

module.exports = app;