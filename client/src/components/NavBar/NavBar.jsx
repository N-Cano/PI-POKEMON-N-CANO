import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPokemonName, getPokemons, getAllPokemons } from '../../redux/actions'

import SearchBar from '../SearchBar/SearchBar'

import style from './NavBar.module.css'

const NavBar = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    const handleSearchSubmit = (name) => {
        dispatch(getPokemonName(name))
        setName('') // Limpia el input
    }


    return (
        <section className={style.sectionCont}>
            <div className={style.containerBtn}>
                <Link className={style.home} to='/home'>HOME</Link>
                <Link className={style.create} to='/create'>CREATE</Link>
                <Link to='/'>SALIR</Link>
            </div>
            {location.pathname !== '/create' &&
                <SearchBar className={style.searchBar} handleSearchSubmit={handleSearchSubmit} />}
        </section>
    )
}

export default NavBar;