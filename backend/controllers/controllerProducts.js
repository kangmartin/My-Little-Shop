const { Product, sequelize } = require('../models/model');


async function addProducts(name, oldPrice, actualPrice, rate) {
    try {
        const produit = await Product.create({
            name: name,
            old_price: oldPrice,
            actual_price: actualPrice,
            rate: rate
        });
        console.log('Produit ajouté avec succès:', produit.toJSON());
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit:', error);
    }
}

async function getAllProducts() {
    try {
        const produits = await Product.findAll();
        console.log('Liste de tous les produits:', produits);
        return produits;
    } catch (error) {
        console.error('Erreur lors de la récupération de la liste des produits:', error);
        return [];
    }
}

module.exports = { addProducts, getAllProducts };
