import Cards from "../../components/Cards/Cards"
import logoImage from '../../assets/logo-pokedex.svg'
import style from './Home.module.css'
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPokemons } from "../../redux/actions"

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])
    return (
        <main className={style.mainContainer}>
            <img className={style.logoImage} src={logoImage} alt="" />
            <Cards />
        </main>
    )
}

export default Home