import axios from 'axios';
import {
    GET_POKEMONS,
    GET_ALL_POKEMONS,
    GET_POKEMON_DETAIL,
    GET_POKEMON_NAME,
    FILTER_TYPE,
    FILTER_DBAPI,
    GET_POKEMON_TYPE,
    ORDER_BY_NAME,
    ORDER_BY_ATTACK,
    GET_POKEMON_IMG,
} from './action-types';

export const getPokemons = () => { // Obtiene una lista de Pokémon y actualiza el estado
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/pokemons');
            const pokemons = response.data;
            dispatch({ type: GET_POKEMONS, payload: pokemons });
        } catch (error) {
            console.log('Error fetching Pokemons:', error);
            throw new Error('Failed to fetch Pokemons');
        }
    };
};

export const getAllPokemons = () => { // Devuelve una acción para mostrar todos los Pokémon
    return { type: GET_ALL_POKEMONS };
};

export const getPokemonDetail = (id) => { // Obtiene detalles de un Pokémon por su ID y actualiza el estado
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
            const pokemonDetail = response.data;
            dispatch({ type: GET_POKEMON_DETAIL, payload: pokemonDetail });
        } catch (error) {
            console.log(`Error fetching Pokemon detail for ID ${id}:`, error);
            throw new Error('Failed to fetch Pokemon detail');
        }
    };
};

export const getPokemonName = (name) => { // Busca un Pokémon por nombre y actualiza el estado
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            const pokemonName = response.data;
            dispatch({ type: GET_POKEMON_NAME, payload: pokemonName });
        } catch (error) {
            console.log(`Error fetching Pokemon name for "${name}":`, error);
            throw new Error('Failed to fetch Pokemon name');
        }
    };
};

export const getPokemonsByType = () => { // Obtiene una lista de tipos de Pokémon y actualiza el estado
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/types`);
            const pokemonTypes = response.data.map((type) => type.name).join(","); // Convierte la lista de tipos en un string separado por comas
            dispatch({ type: GET_POKEMON_TYPE, payload: pokemonTypes });
        } catch (error) {
            console.log('Error fetching Pokemon types:', error);
            throw new Error('Failed to fetch Pokemon types');
        }
    };
};

export const getPokemonImages = () => { // Obtiene imágenes de Pokémon y actualiza el estado
    return async function (dispatch) {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
            const pokemonData = response.data.results;
            const pokemonImages = await Promise.all( // Utiliza "Promise.all" para realizar múltiples solicitudes GET simultáneas para obtener las imágenes de los Pokémon
                pokemonData.map(async (result) => {
                    // Realiza una solicitud GET a la URL específica del Pokémon para obtener más detalles, incluyendo la imagen
                    const pokemonResponse = await axios.get(result.url);
                    // Retorna la URL de la imagen de los Pokémon en el formato deseado
                    return pokemonResponse.data.sprites.other.dream_world.front_default;
                })
            );
            dispatch({ type: GET_POKEMON_IMG, payload: pokemonImages });
        } catch (error) {
            console.log('Error fetching Pokemon images:', error);
            throw new Error('Failed to fetch Pokemon images');
        }
    };
};

export const filterType = (value) => { // Devuelve una acción para filtrar por tipo de Pokémon
    return { type: FILTER_TYPE, payload: value };
};

export const filterDbApi = (value) => { // Devuelve una acción para filtrar por algún criterio específico de la base de datos o API
    return { type: FILTER_DBAPI, payload: value };
};

export const orderByAttack = (value) => { // Devuelve una acción para ordenar por puntos de ataque
    return { type: ORDER_BY_ATTACK, payload: value };
};

export const orderByName = (name) => { // Devuelve una acción para ordenar por nombre
    return { type: ORDER_BY_NAME, payload: name };
};
