const express = require('express');
const router = express.Router();
const { addProducts, getAllProducts } = require('../controllers/controllerProducts');


router.post('/add', async (req, res) => {
    try {
        const { name, oldPrice, actualPrice, rate } = req.body;
        addProducts(name, oldPrice, actualPrice, rate);
        console.log('Product added successfully');
    } catch (error) {
       console.log(error);
    }
});


router.get('/all', async (req, res) => {
    try {
        const products = await getAllProducts();
        res.json(products);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



module.exports = router;

