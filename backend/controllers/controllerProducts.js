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

async function deleteProduct(productId) {
    try {
        const result = await Product.destroy({
            where: { id: productId }
        });

        if (result === 0) {
            console.log('No product found with the given ID.');
            return false;
        }

        console.log('Product deleted successfully!');
        return true;
    } catch (error) {
        console.error('Error when trying to delete product', error);
        return false;
    }
}

async function updateProduct(productId, newName, newImage, newOldPrice, newActualPrice, newRate) {
    try {
        const productToUpdate = await Product.findByPk(productId);

        if (!productToUpdate) {
            console.log('No product found with the given ID.');
            return false;
        }

        productToUpdate.name = newName ?? productToUpdate.name;
        productToUpdate.image = newImage ?? productToUpdate.image;
        productToUpdate.old_price = newOldPrice ?? productToUpdate.old_price;
        productToUpdate.actual_price = newActualPrice ?? productToUpdate.actual_price;
        productToUpdate.rate = newRate ?? productToUpdate.rate;

        console.log('aaaaaaaaaaaaaaaaa:', productToUpdate.toJSON());

        await productToUpdate.save();
        console.log('Product updated successfully!', productToUpdate.toJSON());
        return true;
    } catch (error) {
        console.error('Error when trying to update product', error);
        return false;
    }
}


module.exports = { addProducts, getAllProducts, deleteProduct, updateProduct};
