const express = require('express');
const { enviarMensagemTexto, enviarMensagemImagem } = require('../services/chatService');

const router = express.Router();

router.post('/text', async (req, res) => {
    const { message } = req.body;
    const response = await enviarMensagemTexto(message);
    res.json({ response });
});

router.post('/image', async (req, res) => {
    const { message } = req.body;
    const imageUrl = await enviarMensagemImagem(message);
    res.json({ imageUrl });
});

module.exports = router;
