const { Pokemon, Type } = require('../db');
const axios = require('axios');
const { API_POKE_NAME_OR_ID } = require('../utils/globals.js');

const getDetail = async (req, res) => {
    const { idPokemon } = req.params;

    try {
        if (isNaN(idPokemon)) { // Verifico si el id no es un número -> significa que es UUID
            const pokeByDb = await Pokemon.findByPk(idPokemon, { // Busco el pokemon en la base de datos
                include: {
                    model: Type,
                    attribute: ["name"],
                    through: { attribute: [] }
                },
                attribute: { exclude: ['Types'] }
            });

            if (pokeByDb) {// Formatear respuesta para devolver al usuario

                const formattedPokemon = {
                    id: pokeByDb.id,
                    name: pokeByDb.name,
                    image: pokeByDb.image,
                    life: pokeByDb.life,
                    attack: pokeByDb.attack,
                    defense: pokeByDb.defense,
                    speed: pokeByDb.speed,
                    height: pokeByDb.height,
                    weight: pokeByDb.weight,
                    types: pokeByDb.types.map((type) => type.name).join(', '),
                };

                return res.status(200).json(formattedPokemon);
            }

            return res.status(404).json({ message: 'No se encontró el pokemon' }); // Retorno un status 404 si no se encotnro el pokemon en la base de datos
        }

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
            types: data.types.map((type) => type.type.name).join(', '), // Mapeo los tipos y los uno con una coma
        };

        return res.status(200).json(formatedPoke); // Retorno el pokemon y muestro un status 200
    } catch (error) {
        res.status(404).json({ message: 'No se encontró el pokemon' }); // Retorno un status 404 si no se encotnro el pokemon en la API
    }
}

module.exports = getDetail;