import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByAttack, orderByName, filterType, getPokemonsByType, filterDbApi, getAllPokemons } from '../../redux/actions';
import style from './FilterSortButton.module.css';

function FilterSortButton() {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [selectedType, setSelectedType] = React.useState('');
    const [selectedOrigin, setSelectedOrigin] = React.useState('');

    useEffect(() => {
        dispatch(getPokemonsByType()); // Realiza una solicitud para obtener los tipos de Pokémon
    }, [dispatch]);

    const handleOrderAttackUP = () => { // Ordena los Pokémon por puntos de ataque en orden ascendente
        dispatch(orderByAttack("asc"));
    };

    const handleOrderAttackDOWN = () => { // Ordena los Pokémon por puntos de ataque en orden descendente
        dispatch(orderByAttack("desc"));
    };

    const handleOrderNameUP = () => {  // Ordena los Pokémon por nombre en orden ascendente (A-Z)
        dispatch(orderByName("asc"));
    };

    const handleOrderNameDOWN = () => { // Ordena los Pokémon por nombre en orden descendente (Z-A)
        dispatch(orderByName("desc"));
    };

    const handleFilterType = (event) => { // Filtra los Pokémon por tipo según la opción seleccionada
        const type = event.target.value;
        setSelectedType(type);
        dispatch(filterType(type));
    };

    const handleFilterDbApi = (event) => { // Filtra los Pokémon según su origen (API o Base de Datos)
        const origin = event.target.value;
        setSelectedOrigin(origin);
        dispatch(filterDbApi(origin));
    };

    const deleteFilters = () => { // Elimina todos los filtros y muestra todos los Pokémon
        setSelectedType('');
        setSelectedOrigin('');
        dispatch(getAllPokemons());
    }

    return (
        <div className={style.FilterSortButton}>
            <h2>FILTERS:</h2>
            <div className={style.containerInput}>
                <h3>TYPE</h3>
                <select value={selectedType} onChange={handleFilterType} className={style.btnType}>
                    <option value="">All Types</option>
                    {types && types.split(',').map((type) => (
                        <option key={type.trim()} value={type.trim()}>
                            {type.trim()}
                        </option>
                    ))}
                </select>
                <h3>ORIGIN</h3>
                <select value={selectedOrigin} onChange={handleFilterDbApi} className={style.btnType}>
                    <option value="">All Origins</option>
                    <option value="API">ORIGINALS</option>
                    <option value="DATABASE">CREATED BY YOU</option>
                </select>
                <h3>BY ATTACK</h3>
                <div className={style.buttonAttack}>
                    <button onClick={handleOrderAttackDOWN}>+</button>
                    <button onClick={handleOrderAttackUP}>-</button>
                </div>
                <h3>BY NAME</h3>
                <div className={style.buttonOrder}>
                    <button onClick={handleOrderNameUP}>A-Z</button>
                    <button onClick={handleOrderNameDOWN}>Z-A</button>
                </div>
            </div>
            <button className={style.btnFilterSort} onClick={deleteFilters}>DELETE FILTERS</button>
        </div>
    );
}

export default FilterSortButton;
