import Cards from "../../components/Cards/Cards"
import NavBar from "../../components/NavBar/NavBar"
import logoImage from '../../assets/logo-pokedex.svg'
import style from './Home.module.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons, getPokemonsByType } from "../../redux/actions"

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons(), getPokemonsByType())
    }, [dispatch])
    return (
        <main className={style.mainContainer}>
            <img className={style.logoImage} src={logoImage} alt="" />
            <NavBar />

            <Cards />
        </main>
    )
}

export default Home