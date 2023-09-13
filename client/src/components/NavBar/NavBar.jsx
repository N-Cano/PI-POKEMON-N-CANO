import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { getPokemonName, getPokemons, getAllPokemons } from '../../redux/actions';

import SearchBar from '../SearchBar/SearchBar'
import style from './NavBar.module.css'
import FilterSortButton from '../FilterSortButton/FilterSortButton';

const NavBar = ({ setPage }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const [name, setName] = useState('')

    // useEffect(() => {
    //     dispatch(getPokemons());
    // }, [dispatch]);

    const handleSearchSubmit = name => {
        dispatch(getPokemonName(name));
        setName('');
    };

    const handleLogoClick = () => {
        dispatch(getAllPokemons()); // Llama a la acción para obtener todos los pokemons sin filtrar
    };


    return (
        <section className={style.sectionCont}>
            <div className={style.containerBtn}>
                <Link className={style.home} to='/home' onClick={handleLogoClick}>HOME</Link>
                <Link className={style.create} to='/create'>CREATE</Link>
                <Link className={style.out} to='/'>GO OUT</Link>
            </div>
            {(location.pathname !== '/create' && location.pathname !== '/detail') ?
                <>
                    <SearchBar className={style.searchBar} handleSearchSubmit={handleSearchSubmit} />
                    <FilterSortButton style="display: none;" setPage={setPage} />
                </>
                : null
            }
        </section>
    )
}

export default NavBar;