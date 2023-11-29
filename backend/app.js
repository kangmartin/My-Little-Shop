const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes'); // Assurez-vous que le chemin est correct

const app = express();

// Middleware pour le parsing de JSON
app.use(bodyParser.json());

// Middleware pour le CORS (Cross-Origin Resource Sharing)
// À utiliser si votre frontend et backend sont sur des domaines différents
app.use(cors());

// Utilisation des routes pour les produits
app.use('/api/products', productRoutes);

// Route de base pour tester si le serveur fonctionne
app.get('/', (req, res) => {
    res.send('Serveur Express fonctionne !');
});

// Démarrer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
