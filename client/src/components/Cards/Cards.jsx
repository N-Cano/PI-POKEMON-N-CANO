import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions';

import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import NavBar from '../NavBar/NavBar';

import style from "./Cards.module.css";

const Cards = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons)
    const filteredPokemons = useSelector(state => state.filteredPokemons);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(12);

    const max = Math.ceil(filteredPokemons.length / perPage); // Calculamos el número máximo de páginas

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

    if (!Array.isArray(pokemons)) { // Si pokemons no es un array, significa que se recibió un único pokemon
        if (typeof pokemons === 'object' && Object.keys(pokemons).length > 0) {
            return (
                <div className={style.pokemonContainer}>
                    <div className={style.divNav}>
                        <NavBar setPage={setPage} />
                    </div>
                    <div className={style.pokemonSelected}>
                        <Card
                            key={pokemons.id}
                            id={pokemons.id}
                            name={pokemons.name}
                            image={pokemons.image}
                            attack={pokemons.attack}
                            defense={pokemons.defense}
                            speed={pokemons.speed}
                            height={pokemons.height}
                            weight={pokemons.weight}
                            types={pokemons.types}
                            setPage={setPage}
                        />
                    </div>
                </div>
            );
        }
    }

    return (
        <main className={style.mainCards}>
            <div className={style.divNav}>
                <NavBar setPage={setPage} />
            </div>
            {(filteredPokemons.length > 0 ? filteredPokemons : pokemons)
                .slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                .map(pokemon => (
                    <Card
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
                ))}

            {pokemons.length > 0 && (
                <div className={style.pagination}>
                    <Pagination className={style.paginationButton} page={page} setPage={setPage} max={max} />
                </div>
            )}
        </main>
    )
}

export default Cards;