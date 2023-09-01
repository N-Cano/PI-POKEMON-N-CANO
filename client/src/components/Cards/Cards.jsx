import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = () => {

    const poke = useSelector(state => state.pokemons)

    return (
        <main className={style.mainCards}>
            {poke.map(pokemon => {
                return <Card
                    key={pokemon.id}
                    pokemon={pokemon}
                />
            })}
        </main>
    )
}

export default Cards;