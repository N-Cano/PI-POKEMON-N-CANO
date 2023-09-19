const axios = require('axios');
const { API_POKE } = require('../utils/globals');

const getPokemonsFromAPIService = async (getPokemonDetails) => {
    const response = await axios.get(API_POKE)
    const pokemons = await Promise.all(response.data.results.map(async (pk) => {
        return await getPokemonDetails(pk.url)
    }));

    return pokemons
}

module.exports = getPokemonsFromAPIService;