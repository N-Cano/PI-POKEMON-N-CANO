const axios = require('axios');
const { Pokemon, Type } = require('../db.js');
const { API_POKE } = require('../utils/globals.js');
const { Op } = require('sequelize');

const getPokemonDetails = async (url) => { // Función para obtener los detalles de cada pokemon
    try {
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
        return pokemon; // Retorno el pokemon
    } catch (error) {
        throw new Error(`No se pudieron recuperar los detalles de Pokémon de ${url}`);
    }
}


const getPokemons = async () => { // Función para obtener los pokemones
    const { name } = req.query;

    try {
        const response = await axios.get(API_POKE) // Obtengo los pokemones de la API
        const pokemons = await Promise.all(response.data.results.map(async (pk) => {
            return await getPokemonDetails(pk.url) // Obtengo los detalles de cada pokemon
        })); // Obtengo los resultados de la API

        const db = await Pokemon.findAll({ // Obtengo los pokemones de la base de datos
            include: {
                model: Type,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        });

        const pokeDb = db.map((pk) => { // Mapeo los pokemones de la base de datos
            return {
                id: pk.id,
                name: pk.name,
                image: pk.image,
                life: pk.life,
                attack: pk.attack,
                defense: pk.defense,
                speed: pk.speed,
                height: pk.height,
                weight: pk.weight,
                types: pk.types.map((type) => type.name),
            };
        });

        if (!name) {
            const allPoke = [...pokemons, ...pokeDb]; // Creo un array con todos los pokemones de la API y de la DB
            res.status(200).json(allPoke); // Retorno todos los pokemones y muestro un status 200
        } else {
            let pokeName = await Pokemon.findOne({ // Busco el pokemon por nombre en la base de datos
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`,
                    },
                },
                include: [{
                    model: Type,
                    attributes: ['name'],
                    through: {
                        attributes: []
                    },
                }],
            });

            !pokeName ? pokeName = pokemons.find((pk) => pk.name === name.toLowerCase()) : null; // Busco el pokemon por nombre en la API
            !pokeName ? res.status(404).json({ message: 'No se encontró ningún Pokémon con ese nombre' }) : null; // Si no se encuentra el pokemon, muestro un status 404

            res.status(200).json(pokeName); // Retorno el pokemon y muestro un status 200
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' }); // Si hay un error, muestro un status 500
    }
};

module.exports = getPokemons; // Exporto la función getPokemons para poder usarla en otros archivos