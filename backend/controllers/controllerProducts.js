const { Product } = require('../models/productsModel');


async function addProducts(name, image, oldPrice, actualPrice, rate) {
    try {
        const produit = await Product.create({
            name: name,
            image: image,
            old_price: oldPrice,
            actual_price: actualPrice,
            rate: rate
        });
        console.log('Product added successfuly !', produit.toJSON());
    } catch (error) {
        console.error('Error when try to add product !', error);
    }
}

async function getAllProducts() {
    try {
        const produits = await Product.findAll();
        console.log('List of all products', produits);
        return produits;
    } catch (error) {
        console.error('Error when fetching all products', error);
        return [];
    }
}

module.exports = { addProducts, getAllProducts };
