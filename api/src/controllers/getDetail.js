const getDetailFromDBService = require('../services/getDetailFromDBService.js');
const getDetailFromAPIService = require('../services/getDetailFromAPIService.js');

const getDetail = async (req, res) => {
    const { idPokemon } = req.params;
    let pokemon

    if (isNaN(idPokemon)) {
        try {
            pokemon = await getDetailFromDBService(idPokemon)
            return res.status(200).json({
                success: true,
                pokemon
            });
        } catch (error) { }
    }

    try {
        pokemon = await getDetailFromAPIService(idPokemon)
        return res.status(200).json({
            success: true,
            pokemon
        });

    } catch (error) { }

    res.status(404).json({
        success: false,
        message: 'No se encontró el pokemon'
    });
}

module.exports = getDetail;