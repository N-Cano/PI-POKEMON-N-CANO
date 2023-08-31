import Cards from "../../components/Cards/Cards"
import logoImage from '../../assets/logo-pokedex.svg'
import style from './Home.module.css'

const Home = () => {
    return (
        <div>
            <img className={style.logoImage} src={logoImage} alt="" />
            <Cards />
        </div>
    )
}

export default Home