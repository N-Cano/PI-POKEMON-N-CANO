const { Pokemon, Type } = require('../db');
const validateRequest = require('../requests/createPokemonRequest');

const createPoke = async (req, res) => {
    try {
        const payload = req.body;

        validateRequest(payload);

        const pokemon = await createPokemonService(payload);
        
        return res.status(200).json({
            success: true,
            pokemon
        });

    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}

module.exports = createPoke