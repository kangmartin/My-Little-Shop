const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const fs = require('fs');
const app = express();


const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)){
    fs.mkdirSync(imagesDir, { recursive: true });
}

app.use(bodyParser.json());
app.use(cors());

multer.diskStorage({
    destination: function(req, file, cb) {
        const dest = path.join(__dirname, 'image');
        cb(null, dest);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

app.use('/api/auth', require('./routes/memberRoutes'));

app.use('/images', express.static('images'))

app.use('/api/products', productRoutes);

app.use('/api/members', require('./routes/memberRoutes'));

app.get('/', (req, res) => {
    res.send('Express server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
