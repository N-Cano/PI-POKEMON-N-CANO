const { Router } = require('express');
const getPokemons = require('../controllers/getPokemons');
const getDetail = require('../controllers/getDetail');
const createPoke = require('../controllers/createPoke');
const getTypes = require('../controllers/getTypes');

const router = Router();

router.get('/pokemons', getPokemons);
router.get('/pokemons/:idPokemon', getDetail);
router.post('/pokemons', createPoke);
router.get('/types', getTypes);

module.exports = router;
