import axios from 'axios'
import {
    GET_POKEMONS,
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    FILTER_TYPE,
    FILTER_DBAPI,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    GET_POKEMON_TYPE,
} from './action-types';

export const getPokemons = () => { // Traigo los pokemons de la API y los guardo en el estado
    return async function (dispatch) {
        const apiData = await axios.get('http://localhost:3001/pokemons')
        const pokemons = apiData.data

        dispatch({
            type: GET_POKEMONS,
            payload: pokemons
        })
    }
}

export const getAllPokemons = () => { // Actualiza el estado con todos los pokemons sin filtrar
    return { type: GET_ALL_POKEMONS }
}

export const getPokemonDetail = (id) => { // Traigo el detalle de un pokemon y lo guardo en el estado
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons/${id}`)
        const pokemonDetail = apiData.data

        dispatch({
            type: GET_POKEMON_DETAIL,
            payload: pokemonDetail
        })
    }
}

export const getPokemonName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        const pokemonName = apiData.data

        dispatch({
            type: GET_POKEMON_NAME,
            payload: pokemonName
        })
    }
}

export const getPokemonsByType = (type) => { // Traigo los pokemons de un tipo y los guardo en el estado
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/types`)
        const pokeTypes = apiData.data.map(type => type.name).join(',')

        dispatch({
            type: GET_POKEMON_TYPE,
            payload: pokeTypes
        })
    }
}

export const filterType = (type) => { // Filtra los pokemons por tipo
    return {
        type: FILTER_TYPE,
        payload: type
    }
}

export const filterDBAPI = (value) => { // Filtra los pokemons por origen (API o DB)
    return {
        type: FILTER_DBAPI,
        payload: value
    }
}

export const orderByName = (name) => { // Ordena los pokemons por nombre
    return {
        type: ORDER_BY_NAME,
        payload: name
    }
}

export const orderByAttack = (value) => { // Ordena los pokemons por ataque
    return {
        type: ORDER_BY_ATTACK,
        payload: value
    }
}