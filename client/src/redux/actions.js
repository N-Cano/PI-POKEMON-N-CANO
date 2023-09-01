import axios from 'axios'
import {
    GET_POKEMONS,
    GET_POKEMON_DETAIL,
} from './action-types';

export const getPokemons = () => {
    return async function (dispatch) {
        const apiData = await axios.get('http://localhost:3001/pokemons')
        const pokemons = apiData.data

        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
    }
}

export const getPokemonDetail = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`)
        const pokemonDetail = apiData.data

        dispatch({
            type: GET_POKEMON_DETAIL,
            payload: pokemonDetail
        })
    }
}