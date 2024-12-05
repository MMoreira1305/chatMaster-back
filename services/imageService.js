const axios = require('axios');

async function receberFotosGatos() {
    try {
        const response = await axios.get('https://api.thecatapi.com/v1/images/search');
        console.log("urlGato = " + response.data[0].url);
        return response.data[0].url;
    } catch (error) {
        console.error('Erro ao gerar fotos de gatos!', error);
        return 'Erro ao gerar fotos de gatos!';
    }
}

async function receberFotosCachorros(){
	try {
		const response = await axios.get('https://dog.ceo/api/breeds/image/random');
		return response.data.message;
	} catch (error) {
		console.log('Erro ao gerar fotos de cachorros!', error);
		return 'Erro ao gerar fotos de cachorros!';
	}
}

async function receberFotosRaposas(){
	try {
		const response = await axios.get('https://randomfox.ca/floof/');
		return response.data.image;
	} catch (error) {
		console.log('Erro ao gerar fotos de raposas!', error);
		return 'Erro ao gerar fotos de raposas!';
	}
}


async function receberFotosArte() {
	try {
		const response = await axios.get('https://api.artic.edu/api/v1/artworks', {
			params: { limit: 1, fields: 'image_id' }
		});
		const imageId = response.data.data[0].image_id;
		return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
	} catch (error) {
		console.log('Erro ao gerar fotos de artes!', error);
		return 'Erro ao gerar fotos de artes!';
	}
}

// Outras funções para cachorros, raposas e arte
// ...

module.exports = { receberFotosGatos, receberFotosCachorros, receberFotosRaposas, receberFotosArte };
