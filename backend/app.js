const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

multer.diskStorage({
    destination: function(req, file, cb) {
        const dest = path.join(__dirname, '../public/images');
        cb(null, dest);
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});


app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Express server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
