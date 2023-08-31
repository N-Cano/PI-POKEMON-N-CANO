import Card from "../Card/Card";
import style from "./Cards.module.css";

const Cards = () => {

    const poke = [
        {
            "id": 1,
            "name": "bulbasaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
            "life": 45,
            "attack": 49,
            "defense": 49,
            "speed": 45,
            "height": 7,
            "weight": 69,
            "types": [
                "grass",
                "poison"
            ]
        },
        {
            "id": 2,
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg",
            "life": 60,
            "attack": 62,
            "defense": 63,
            "speed": 60,
            "height": 10,
            "weight": 130,
            "types": [
                "grass",
                "poison"
            ]
        },
        {
            "id": 3,
            "name": "venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg",
            "life": 80,
            "attack": 82,
            "defense": 83,
            "speed": 80,
            "height": 20,
            "weight": 1000,
            "types": [
                "grass",
                "poison"
            ]
        },
        {
            "id": 4,
            "name": "charmander",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
            "life": 39,
            "attack": 52,
            "defense": 43,
            "speed": 65,
            "height": 6,
            "weight": 85,
            "types": [
                "fire"
            ]
        },
        {
            "id": 5,
            "name": "charmeleon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg",
            "life": 58,
            "attack": 64,
            "defense": 58,
            "speed": 80,
            "height": 11,
            "weight": 190,
            "types": [
                "fire"
            ]
        },
        {
            "id": 6,
            "name": "charizard",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg",
            "life": 78,
            "attack": 84,
            "defense": 78,
            "speed": 100,
            "height": 17,
            "weight": 905,
            "types": [
                "fire",
                "flying"
            ]
        },
        {
            "id": 7,
            "name": "squirtle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
            "life": 44,
            "attack": 48,
            "defense": 65,
            "speed": 43,
            "height": 5,
            "weight": 90,
            "types": [
                "water"
            ]
        },
        {
            "id": 8,
            "name": "wartortle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg",
            "life": 59,
            "attack": 63,
            "defense": 80,
            "speed": 58,
            "height": 10,
            "weight": 225,
            "types": [
                "water"
            ]
        },
        {
            "id": 9,
            "name": "blastoise",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg",
            "life": 79,
            "attack": 83,
            "defense": 100,
            "speed": 78,
            "height": 16,
            "weight": 855,
            "types": [
                "water"
            ]
        },
        {
            "id": 10,
            "name": "caterpie",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
            "life": 45,
            "attack": 30,
            "defense": 35,
            "speed": 45,
            "height": 3,
            "weight": 29,
            "types": [
                "bug"
            ]
        },
        {
            "id": 11,
            "name": "metapod",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg",
            "life": 50,
            "attack": 20,
            "defense": 55,
            "speed": 30,
            "height": 7,
            "weight": 99,
            "types": [
                "bug"
            ]
        },
        {
            "id": 12,
            "name": "butterfree",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
            "life": 60,
            "attack": 45,
            "defense": 50,
            "speed": 70,
            "height": 11,
            "weight": 320,
            "types": [
                "bug",
                "flying"
            ]
        },
        {
            "id": 13,
            "name": "weedle",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg",
            "life": 40,
            "attack": 35,
            "defense": 30,
            "speed": 50,
            "height": 3,
            "weight": 32,
            "types": [
                "bug",
                "poison"
            ]
        },
        {
            "id": 14,
            "name": "kakuna",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg",
            "life": 45,
            "attack": 25,
            "defense": 50,
            "speed": 35,
            "height": 6,
            "weight": 100,
            "types": [
                "bug",
                "poison"
            ]
        },
        {
            "id": 15,
            "name": "beedrill",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg",
            "life": 65,
            "attack": 90,
            "defense": 40,
            "speed": 75,
            "height": 10,
            "weight": 295,
            "types": [
                "bug",
                "poison"
            ]
        },
        {
            "id": 16,
            "name": "pidgey",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
            "life": 40,
            "attack": 45,
            "defense": 40,
            "speed": 56,
            "height": 3,
            "weight": 18,
            "types": [
                "normal",
                "flying"
            ]
        },
        {
            "id": 17,
            "name": "pidgeotto",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg",
            "life": 63,
            "attack": 60,
            "defense": 55,
            "speed": 71,
            "height": 11,
            "weight": 300,
            "types": [
                "normal",
                "flying"
            ]
        },
        {
            "id": 18,
            "name": "pidgeot",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg",
            "life": 83,
            "attack": 80,
            "defense": 75,
            "speed": 101,
            "height": 15,
            "weight": 395,
            "types": [
                "normal",
                "flying"
            ]
        },
        {
            "id": 19,
            "name": "rattata",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg",
            "life": 30,
            "attack": 56,
            "defense": 35,
            "speed": 72,
            "height": 3,
            "weight": 35,
            "types": [
                "normal"
            ]
        },
        {
            "id": 20,
            "name": "raticate",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg",
            "life": 55,
            "attack": 81,
            "defense": 60,
            "speed": 97,
            "height": 7,
            "weight": 185,
            "types": [
                "normal"
            ]
        },
        {
            "id": 21,
            "name": "spearow",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg",
            "life": 40,
            "attack": 60,
            "defense": 30,
            "speed": 70,
            "height": 3,
            "weight": 20,
            "types": [
                "normal",
                "flying"
            ]
        },
        {
            "id": 22,
            "name": "fearow",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg",
            "life": 65,
            "attack": 90,
            "defense": 65,
            "speed": 100,
            "height": 12,
            "weight": 380,
            "types": [
                "normal",
                "flying"
            ]
        },
        {
            "id": 23,
            "name": "ekans",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
            "life": 35,
            "attack": 60,
            "defense": 44,
            "speed": 55,
            "height": 20,
            "weight": 69,
            "types": [
                "poison"
            ]
        },
        {
            "id": 24,
            "name": "arbok",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg",
            "life": 60,
            "attack": 95,
            "defense": 69,
            "speed": 80,
            "height": 35,
            "weight": 650,
            "types": [
                "poison"
            ]
        },
        {
            "id": 25,
            "name": "pikachu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
            "life": 35,
            "attack": 55,
            "defense": 40,
            "speed": 90,
            "height": 4,
            "weight": 60,
            "types": [
                "electric"
            ]
        },
        {
            "id": 26,
            "name": "raichu",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg",
            "life": 60,
            "attack": 90,
            "defense": 55,
            "speed": 110,
            "height": 8,
            "weight": 300,
            "types": [
                "electric"
            ]
        },
        {
            "id": 27,
            "name": "sandshrew",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
            "life": 50,
            "attack": 75,
            "defense": 85,
            "speed": 40,
            "height": 6,
            "weight": 120,
            "types": [
                "ground"
            ]
        },
        {
            "id": 28,
            "name": "sandslash",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg",
            "life": 75,
            "attack": 100,
            "defense": 110,
            "speed": 65,
            "height": 10,
            "weight": 295,
            "types": [
                "ground"
            ]
        },
        {
            "id": 29,
            "name": "nidoran-f",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg",
            "life": 55,
            "attack": 47,
            "defense": 52,
            "speed": 41,
            "height": 4,
            "weight": 70,
            "types": [
                "poison"
            ]
        },
        {
            "id": 30,
            "name": "nidorina",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg",
            "life": 70,
            "attack": 62,
            "defense": 67,
            "speed": 56,
            "height": 8,
            "weight": 200,
            "types": [
                "poison"
            ]
        },
        {
            "id": 31,
            "name": "nidoqueen",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/31.svg",
            "life": 90,
            "attack": 92,
            "defense": 87,
            "speed": 76,
            "height": 13,
            "weight": 600,
            "types": [
                "poison",
                "ground"
            ]
        },
        {
            "id": 32,
            "name": "nidoran-m",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/32.svg",
            "life": 46,
            "attack": 57,
            "defense": 40,
            "speed": 50,
            "height": 5,
            "weight": 90,
            "types": [
                "poison"
            ]
        },
        {
            "id": 33,
            "name": "nidorino",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/33.svg",
            "life": 61,
            "attack": 72,
            "defense": 57,
            "speed": 65,
            "height": 9,
            "weight": 195,
            "types": [
                "poison"
            ]
        },
        {
            "id": 34,
            "name": "nidoking",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/34.svg",
            "life": 81,
            "attack": 102,
            "defense": 77,
            "speed": 85,
            "height": 14,
            "weight": 620,
            "types": [
                "poison",
                "ground"
            ]
        },
        {
            "id": 35,
            "name": "clefairy",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
            "life": 70,
            "attack": 45,
            "defense": 48,
            "speed": 35,
            "height": 6,
            "weight": 75,
            "types": [
                "fairy"
            ]
        },
        {
            "id": 36,
            "name": "clefable",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/36.svg",
            "life": 95,
            "attack": 70,
            "defense": 73,
            "speed": 60,
            "height": 13,
            "weight": 400,
            "types": [
                "fairy"
            ]
        },
        {
            "id": 37,
            "name": "vulpix",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/37.svg",
            "life": 38,
            "attack": 41,
            "defense": 40,
            "speed": 65,
            "height": 6,
            "weight": 99,
            "types": [
                "fire"
            ]
        },
        {
            "id": 38,
            "name": "ninetales",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/38.svg",
            "life": 73,
            "attack": 76,
            "defense": 75,
            "speed": 100,
            "height": 11,
            "weight": 199,
            "types": [
                "fire"
            ]
        },
        {
            "id": 39,
            "name": "jigglypuff",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/39.svg",
            "life": 115,
            "attack": 45,
            "defense": 20,
            "speed": 20,
            "height": 5,
            "weight": 55,
            "types": [
                "normal",
                "fairy"
            ]
        },
        {
            "id": 40,
            "name": "wigglytuff",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/40.svg",
            "life": 140,
            "attack": 70,
            "defense": 45,
            "speed": 45,
            "height": 10,
            "weight": 120,
            "types": [
                "normal",
                "fairy"
            ]
        }
    ]

    return (
        <main className={style.mainCards}>
            {poke.map(pokemon => {
                return <Card pokemon={pokemon} />
            })}
        </main>
    )
}

export default Cards;