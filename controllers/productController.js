const fs = require("fs");

//Handlers
exports.getAllProducts = (request, response) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
    );

    response.status(200).json({
        status: "success",
        timeOfRequest: request.requestTime,
        results: products.length,
        data: {
            products,
        },
    });
};

exports.addProduct = (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
    );
    products.push(req.body);
    fs.writeFileSync(
        `${__dirname}/../data/products.json`,
        JSON.stringify(products)
    );

    res.status(200).json({
        status: "success",
        data: {
            products,
        },
    });
};

exports.getProductById = (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
    );

    const foundProduct = products.find((p) => p.id == req.params.id);
    if (foundProduct) {
        res.status(200).json({
            status: "success",
            data: {
                product: foundProduct,
            },
        });
    } else {
        res.status(404).json({
            status: "not found",
        });
    }
};

exports.editProduct = (req, res) => {
    const products = JSON.parse(
        fs.readFileSync(`${__dirname}/../data/products.json`)
    );
    const foundProduct = products.find((p) => p.id == req.params.id);
    if (foundProduct) {
        const auxProducts = [];

        products.forEach((producto) => {
            if (producto.id == foundProduct.id) {
                producto.name = req.body.name;
                producto.price = req.body.price;
                producto.category = req.body.category;
                auxProducts.push(producto);
            } else {
                auxProducts.push(producto);
            }
        });

        fs.writeFileSync(
            `${__dirname}/../data/products.json`,
            JSON.stringify(auxProducts)
        );
        res.status(200).json({
            status: "success",
            data: {
                product: req.body,
            },
        });
    } else {
        res.status(404).json({
            status: "not found",
        });
    }
};