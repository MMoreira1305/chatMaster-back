const axios = require('axios');
require('dotenv').config();
const openaiApiKey = process.env.OPENAI_API_KEY;

async function enviarMensagemTexto(description) {
    try {
        console.log("openApiKey - " + openaiApiKey);
		const response = await axios.post('https://api.openai.com/v1/chat/completions', {
			model: 'gpt-3.5-turbo',
			messages: [{ role: 'user', content: description }]
		}, {
			headers: { 'Authorization': `Bearer ${openaiApiKey}` }
		});
		return response.data.choices[0].message.content;
	} catch (error) {
		console.error('Erro ao gerar resposta de texto:', error);
		return 'Erro ao gerar resposta de texto.';
	}
}

async function enviarMensagemImagem(description) {
    try {
        console.log("Description: " + description)
        const response = await axios.post(
            'https://api.openai.com/v1/images/generations',
            {
                prompt: description,
                n: 1,
                size: '256x256',
            },
            {
                headers: { Authorization: `Bearer ${openaiApiKey}` },
            }
        );
        return response.data.data[0].url;
    } catch (error) {
        console.error('Erro ao gerar imagem:', error);
        return 'Erro ao gerar imagem.';
    }
}

module.exports = { enviarMensagemTexto, enviarMensagemImagem };
