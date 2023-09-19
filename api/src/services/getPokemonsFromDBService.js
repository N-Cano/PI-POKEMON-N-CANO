const { Pokemon, Type } = require('../db.js');

const getPokemonsFromDBService = async () => {
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

    return pokeDb;
}

module.exports = getPokemonsFromDBService;

