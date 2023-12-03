const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { addProducts, getAllProducts, deleteProduct, updateProduct } = require('../controllers/controllerProducts');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dest = 'images';
        cb(null, dest);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname); 
    }
});

const upload = multer({ storage: storage });

router.post('/add', upload.single('image'), async (req, res) => {
    try {
        const { name, oldPrice, actualPrice, rate } = req.body;
        const image = req.file ? req.file.filename : null;
        await addProducts(name, image, oldPrice, actualPrice, rate);
        console.log('Product added successfully');
        res.status(201).send({ message: "Product added successfully" });
    } catch (error) {
       console.error(error);
       res.status(500).send({ error: "Error adding product" });
    }
});

router.get('/all', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error fetching products" });
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const success = await deleteProduct(productId);

        if (success) {
            res.status(200).send({ message: "Product deleted successfully" });
        } else {
            res.status(404).send({ error: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error deleting product" });
    }
});


router.put('/update/:id', upload.single('image'), async (req, res) => {
    try {
        const productId = req.params.id;
        const { name, oldPrice, actualPrice, rate } = req.body;
        const image = req.file ? req.file.filename : null;

        const success = await updateProduct(productId, name, image, oldPrice, actualPrice, rate);
        console.log("req.body:", req.body);
        console.log("req.params:", req.params);
        if (success) {
            res.status(200).send({ message: "Product updated successfully" });
        } else {
            res.status(404).send({ error: "Product not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Error updating product" });
    }
});

module.exports = router;
