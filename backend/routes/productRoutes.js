const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const { addProducts, getAllProducts } = require('../controllers/controllerProducts');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const dest = path.join(__dirname, '../../public/images');
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

module.exports = router;
