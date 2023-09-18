const validate = require('../requests/createPokemonRequest');
const createPokemonService = require('../services/createPokemonService');

const createPoke = async (req, res) => {
    try {
        const payload = req.body;

        validate(payload);

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