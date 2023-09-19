const { Pokemon, Type } = require('../db');

const getDetailFromDBService = async (idPokemon) => {

    const pokeByDb = await Pokemon.findByPk(idPokemon, {
        include: {
            model: Type,
            attribute: ["name"],
            through: { attribute: [] }
        },
        attribute: { exclude: ['Types'] }
    });

    if (!pokeByDb) { throw new Error('No se encontró el pokemon'); }

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
        types: pokeByDb.types.map((type) => type.name),
    };

    return formattedPokemon;
}

module.exports = getDetailFromDBService