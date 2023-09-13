import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderByAttack, orderByName, filterType, getPokemonsByType, filterDbApi, getAllPokemons } from '../../redux/actions';
import style from './FilterSortButton.module.css';

function FilterSortButton({ setPage }) {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [selectedType, setSelectedType] = React.useState('');
    const [selectedOrigin, setSelectedOrigin] = React.useState('');
    const userPokemons = useSelector(state => state.userPokemons);

    useEffect(() => {
        dispatch(getPokemonsByType());
    }, [dispatch]);

    const handleOrderAttackUP = () => {
        dispatch(orderByAttack("asc"));
    };

    const handleOrderAttackDOWN = () => {
        dispatch(orderByAttack("desc"));
    };

    const handleOrderNameUP = () => {
        dispatch(orderByName("asc"));
    };

    const handleOrderNameDOWN = () => {
        dispatch(orderByName("desc"));
    };

    const handleFilterType = (event) => {
        const type = event.target.value;
        setSelectedType(type);
        dispatch(filterType(type));
    };

    const handleFilterDbApi = (event) => {
        const origin = event.target.value;
        console.log(origin);
        setSelectedOrigin(origin);
        dispatch(filterDbApi(origin));
    };

    const deleteFilters = () => {
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
