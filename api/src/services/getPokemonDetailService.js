const axios = require('axios');

const getPokemonDetailService = async (url) => {
    const response = await axios.get(url); // Obtengo los detalles de cada pokemon
    const { id, name, height, weight, types, sprites, stats } = response.data; // Destructuro los datos que necesito

    const pokemon = { // Creo el objeto pokemon
        id,
        name,
        image: sprites.other.dream_world.front_default,
        life: stats.find((stat) => stat.stat.name === "hp").base_stat,
        attack: stats.find((stat) => stat.stat.name === "attack").base_stat,
        defense: stats.find((stat) => stat.stat.name === "defense").base_stat,
        speed: stats.find((stat) => stat.stat.name === "speed").base_stat,
        height,
        weight,
        types: types.map((type) => type.type.name),
    };

    return pokemon;
}

module.exports = getPokemonDetailService;