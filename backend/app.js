const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Express server is running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
