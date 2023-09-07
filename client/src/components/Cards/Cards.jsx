import { useSelector } from "react-redux";

import Card from "../Card/Card";

import style from "./Cards.module.css";

const Cards = () => {

    const poke = useSelector(state => state.pokemons)

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
                />
            })}
        </main>
    )
}

export default Cards;