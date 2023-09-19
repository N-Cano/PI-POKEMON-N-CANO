const axios = require('axios');
const { API_POKE_NAME_OR_ID } = require('../utils/globals.js');

const createPokemonService = async (idPokemon) => {
    const { data } = await axios.get(`${API_POKE_NAME_OR_ID}${idPokemon}`); // Obtengo el pokemon de la API

    const formatedPoke = {
        id: data.id,
        name: data.name,
        image: data.sprites.other.dream_world.front_default,
        life: data.stats.find((stat) => stat.stat.name === 'hp').base_stat,
        attack: data.stats.find((stat) => stat.stat.name === 'attack').base_stat,
        defense: data.stats.find((stat) => stat.stat.name === 'defense').base_stat,
        speed: data.stats.find((stat) => stat.stat.name === 'speed').base_stat,
        height: data.height,
        weight: data.weight,
        types: data.types.map((type) => type.type.name)
    };

    return formatedPoke
}

module.exports = createPokemonService