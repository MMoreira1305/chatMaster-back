const express = require('express');
const dotenv = require('dotenv');
const chatRoutes = require('./routes/chatRoutes');
const imageRoutes = require('./routes/imageRoutes');
require('dotenv').config();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/chat', chatRoutes);
app.use('/api/images', imageRoutes);

app.listen(PORT, () => {
    console.log(`Backend rodando na porta ${PORT}`);
});
