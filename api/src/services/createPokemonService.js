const { Pokemon, Type } = require('../db');

const createPokemonService = async (payload) => {
    const { name, image, life, attack, defense, speed, height, weight, type } = payload;

    const types = await getTypes(payload.type);
    console.log(types);
    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        type
    });

    await newPokemon.addTypes(types);
}

async function getTypes(types) {
    return await Promise.all(types.map(async (type) => {
        const typeDb = await Type.findOne({
            where: {
                name: type,
            },
        });
        console.log(typeDb);
        return typeDb;
    }))
}

module.exports = createPokemonService