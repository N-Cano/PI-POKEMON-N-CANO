const { Type } = require('../db');
const axios = require('axios');
const { API_POKE_TYPE } = require('../utils/globals.js');

const getTypes = async (req, res) => {
    try {
        let types = await Type.findAll(); // Obtengo los tipos de la base de datos

        if (types.length === 0) { // Si no hay tipos en la base de datos
            const response = await axios.get(`${API_POKE_TYPE}`); // Obtengo los tipos de la API
            const apiTypes = response.data.results.map((type) => ({ name: type.name })); // Mapeo los tipos

            types = await Type.bulkCreate(apiTypes); // Creo los tipos en la base de datos
        }

        return res.status(200).json(types); // Retorno los tipos y muestro un status 200
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error interno del servidor' }); // Si hay un error, muestro un status 500
    }
}

module.exports = getTypes