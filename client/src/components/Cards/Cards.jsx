import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Card from "../Card/Card";
import Pagination from '../Pagination/Pagination';

import style from "./Cards.module.css";

const Cards = () => {

    const poke = useSelector(state => state.pokemons)
    const dispatch = useDispatch();
    const filteredPokemons = useSelector(state => state.filteredPokemons);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const max = Math.ceil(filteredPokemons.length / perPage); // Calculamos el número máximo de páginas

    if (!Array.isArray(poke)) { // Si pokemons no es un array, significa que se recibió un único pokemon
        if (typeof poke === 'object' && Object.keys(poke).length > 0) {
            return (
                <div className={style.pokemonContainer}>
                    <div className={style.pokemonSelected}>
                        <Card
                            key={poke.id}
                            id={poke.id}
                            name={poke.name}
                            image={poke.image}
                            attack={poke.attack}
                            defense={poke.defense}
                            speed={poke.speed}
                            height={poke.height}
                            weight={poke.weight}
                            types={poke.types}
                            setPage={setPage}
                        />
                    </div>
                </div>
            );
        }
    }

    return (
        <main className={style.mainCards}>
            {poke.map(pokemon => {
                return <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    speed={pokemon.speed}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    types={pokemon.types}
                    setPage={setPage}
                />
            })}

            {poke.length > 0 && (
                <div className={style.paginationContainer}>
                    <Pagination page={page} setPage={setPage} max={max} />
                </div>
            )}
        </main>
    )
}

export default Cards;