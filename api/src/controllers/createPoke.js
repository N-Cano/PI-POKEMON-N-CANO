const { Pokemon, Type } = require('../db');

const createPoke = async (req, res) => {
    try {
        const { name, image, life, attack, defense, speed, height, weight, type } = req.body; // Destructuro los datos enviados por el body
        console.log(type);
        const arrayTypes = Array.isArray(type) ? // Verifico si el tipo es un array
            await Promise.all(type.map(async (type) => {
                const typeDb = await Type.findOne({
                    where: {
                        name: type,
                    },
                });
                return typeDb;
            })) : []

        const newPokemon = await Pokemon.create({ // Creo el pokemon en la base de datos
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
        await newPokemon.addTypes(arrayTypes); // Agrego los tipos al pokemon creado
        return res.status(200).json(newPokemon);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
}

module.exports = createPoke