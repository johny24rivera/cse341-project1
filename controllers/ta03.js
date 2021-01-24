const Elements = require('../models/ta03');

exports.getTA03 = (req, res, next) => {
    const products = Elements.getElements((products) => {
        res.render('pages/ta03', {
            title: 'Team Activity 03',
            path: '/ta03', // For pug, EJS 
            activeTA03: true, // For HBS
            contentCSS: true, // For HBS
            products: products,
        });
    });
}

exports.getProduct = (req, res, next) => {
    const prod = req.params.productName;
    console.log(prod);
    let product = Elements.findProduct(prod);
    console.log(product);

    res.render('pages/productView', {
        title: product.name + ' Product Details',
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        name: product.name,
        price: product.price,
        img: product.imageUrl,
        description: product.description,
    });
};

exports.getResults = (req, res, next) => {
    key = req.body.key;
    console.log(key);
    let products = Elements.filter(key);

    res.render('pages/ta03', {
        title: 'Team Activity 03',
        path: '/ta03', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        products: products,
    });
};