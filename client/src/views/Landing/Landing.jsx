import { Link } from "react-router-dom"
import style from './Landing.module.css'

const Landing = () => {
    return (
        <main className={style.landing}>
            <h1 className={style.title}>Welcome to the Pokédex!</h1>
            <Link className={style.btn} to="/home">GO</Link>
        </main>
    )
}

export default Landing