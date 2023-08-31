import { Link } from 'react-router-dom'
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <section className={style.sectionCont}>
            <Link to='/home'>HOME</Link>
            <Link to='/create'>CREATE</Link>
            <Link to='/'>SALIR</Link>
        </section>
    )
}

export default NavBar;