const { json } = require('express');
const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'ta03.json');
let elements = [];

const getItems = (cb) => {
    fs.readFile(p, (err, data) => {
        if (err) {
            return cb([]);
        }

        elements = JSON.parse(data);

        cb(elements);
    });
};

const sanitize = (key) => {
    key = key.toLowerCase();
    key = key.charAt(0).toUpperCase() + key.slice(1);
    key = key.trim()
    return key;
}

exports.getElements = (cb) => {
    getItems(cb);
}

exports.findProduct = (name) => {
    let product = elements.filter((element) => {
        return element.name === name;
    });

    if (product.length > 0) {
        return product[0];
    }
    return;
}

exports.filter = (key) => {
    key = sanitize(key)
    console.log(key)
    return elements.filter((element) => {
        return element.tags.includes(key);
    });
}