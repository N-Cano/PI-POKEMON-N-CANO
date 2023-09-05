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

const initialState = {
    pokemons: [],
    pokemonDetail: {},
    allPokemons: [],
    filteredPokemons: [],
    types: ''
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_POKEMONS: // Traigo los pokemons de la Action y los guardo en el estado
            return {
                ...state,
                pokemons: action.payload,
                allPokemons: action.payload,
                filteredPokemons: action.payload
            }

        case GET_ALL_POKEMONS: // Actualiza el estado con todos los pokemons sin filtrar
            return {
                ...state,
                filteredPokemons: state.allPokemons,
                pokemons: state.allPokemons
            }

        case GET_POKEMON_NAME: // Actualiza el estado con el pokemon buscado
            return {
                ...state,
                pokemons: action.payload
            }

        case GET_POKEMON_DETAIL: // Traigo el detalle de un pokemon y lo guardo en el estado
            return {
                ...state,

                pokemonDetail: action.payload
            }
        case FILTER_TYPE: // Filtra los pokemons por tipo
            const filteredTypePoke = action.payload === ''
                ? state.pokemons
                : state.pokemons.filter(poke => {
                    if (action.payload === 'All Types') { // Si el tipo es 'All Types' devuelve todos los pokemons
                        return state.pokemons
                    }
                    return poke.types.includes(action.payload)
                })
            return {
                ...state,
                filteredPokemons: filteredTypePoke
            }

        case ORDER_BY_ATTACK: // Ordena los pokemons por ataque
            const orderedAttackAsc = action.payload === 'asc'
            const orderPokeByAttack = [...state.filteredPokemons].sort((a, b) => { // Utilizo sort para ordenar los pokemons por ataque de forma ascendente o descendente, uso parseInt para convertir los valores de ataque a números
                const attackA = parseInt(a.attack)
                const attackB = parseInt(b.attack)
                if (isNaN(attackA) || isNaN(attackB)) return 0
                if (orderedAttackAsc) {
                    return attackA - attackB
                } else {
                    return attackB - attackA
                }
            })
            return {
                ...state,
                filteredPokemons: orderPokeByAttack
            }

        case ORDER_BY_NAME: // Ordena los pokemons por nombre
            const orderedNameAsc = action.payload === 'asc'
            const orderPokeByName = [...state.filteredPokemons].sort((a, b) => { // Utilizo sort para ordenar los pokemons por nombre de forma ascendente o descendente, uso toUpperCase para convertir los valores de nombre a mayúsculas y evitar errores de ordenamiento
                const nameA = a.name.toUpperCase()
                const nameB = b.name.toUpperCase()
                if (nameA < nameB) {
                    return orderedNameAsc ? -1 : 1
                }
                if (nameA > nameB) {
                    return orderedNameAsc ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                filteredPokemons: orderPokeByName
            }

        case GET_POKEMON_TYPE: // Traigo los tipos de la API y los guardo en el estado
            return {
                ...state,
                types: action.payload
            }

        case FILTER_DBAPI: // Filtra los pokemons por origen (API o DB)
            if (action.payload !== '') {
                const filteredDBAPI = state.pokemons.filter(poke => {
                    if (action.payload === 'API') { // Si el origen es 'API' devuelve todos los pokemons cuyo id no es numerico
                        return !isNaN(poke.id)
                    }
                    if (action.payload === 'DATABASE') { // Si el origen es 'DATABASE' devuelve todos los pokemons cuyo id es numerico
                        return isNaN(poke.id)
                    }
                })
                return {
                    ...state,
                    filteredPokemons: filteredDBAPI
                }
            }
            return {
                ...state,
                filteredPokemons: state.pokemons
            }
        default:
            return { ...state };
    }
};

export default rootReducer;