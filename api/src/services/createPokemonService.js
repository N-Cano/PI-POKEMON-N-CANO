const createPokemonService = async (payload) => {
    const { name, image, life, attack, defense, speed, height, weight } = payload; 

    const types = await getTypes(payload.types);

    const newPokemon = await Pokemon.create({
        name,
        image,
        life,
        attack,
        defense,
        speed,
        height,
        weight,
        types
    });
    
    await newPokemon.addTypes(arrayTypes);
}

async function getTypes() {
    return await Promise.all(type.map(async (type) => {
        const typeDb = await Type.findOne({
            where: {
                name: type,
            },
        });
        
        return typeDb;
    }));
}

module.exports = createPokemonService