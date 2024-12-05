const express = require('express');
const { receberFotosGatos, receberFotosCachorros, receberFotosRaposas, receberFotosArte } = require('../services/imageService');

const router = express.Router();

router.get('/gato', async (req, res) => {
    const imageUrl = await receberFotosGatos();
    res.json({ imageUrl });
});

router.get('/cachorro', async (req, res) => {
    const imageUrl = await receberFotosCachorros();
    res.json({ imageUrl });
});

router.get('/raposa', async (req, res) => {
    const imageUrl = await receberFotosRaposas();
    res.json({ imageUrl });
});

router.get('/arte', async (req, res) => {
    const imageUrl = await receberFotosArte();
    res.json({ imageUrl });
});

module.exports = router;
