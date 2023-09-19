const getPokemonDetailService = require('../services/getPokemonDetailService.js');
const getPokemonsFromAPIService = require('../services/getPokemonsFromAPIService.js');
const getPokemonsFromDBService = require('../services/getPokemonsFromDBService.js');

const getPokemonDetails = async (url) => {
    try {
        const pokemon = await getPokemonDetailService(url); // Obtengo los detalles de cada pokemon

        return pokemon; // Retorno los detalles de cada pokemon
    } catch (error) {
        throw new Error(`No se pudieron recuperar los detalles de Pokémon de ${url}`);
    }
}


const getPokemons = async (req, res) => { // Función para obtener los pokemones
    const { name } = req.query;

    try {

        let allPoke = [
            ...await getPokemonsFromAPIService(getPokemonDetails),
            ...await getPokemonsFromDBService()
        ]; // Creo un array con todos los pokemones de la API y de la DB

        if (name) {

            allPoke = allPoke.filter((pk) => pk.name.toLowerCase().includes(name.toLowerCase())); // Filtro los pokemones por nombre

        }

        res.status(200).json(allPoke); // Retorno todos los pokemones y muestro un status 200

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' }); // Si hay un error, muestro un status 500
    }
};

module.exports = getPokemons;