const { Type } = require('../db');
const axios = require('axios');

const getTypesService = async () => {
    let types = await Type.findAll();

    if (types.length === 0) {

        const response = await axios.get('https://pokeapi.co/api/v2/type');

        const apiTypes = response.data.results.map((type) => ({
            name: type.name,
        }));

        types = await Type.bulkCreate(apiTypes);
    }

    return types;
}

const getTypes = async (req, res) => {
    try {
        const types = await getTypesService();

        res.status(200).json(types);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = getTypes;