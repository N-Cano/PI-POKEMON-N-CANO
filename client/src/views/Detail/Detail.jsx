import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetail } from '../../redux/actions';
import style from './Detail.module.css';

const Detail = () => {
    const dispatch = useDispatch();
    const { pokemonsDetail } = useSelector((state) => state);
    const { id } = useParams(); // Obtiene el ID del Pokémon de los parámetros de la URL

    useEffect(() => {
        dispatch(getPokemonDetail(id))// Cuando el componente se monta o cuando cambia el ID en la URL,
    }, [id, dispatch]); // se dispara una acción para obtener los detalles del Pokémon con ese ID

    function isEmptyObject(obj) { // Función para verificar si un objeto está vacío
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    return (
        <div className={style.detailContainer}>
            <Link className={style.btnHome} to='/home'>HOME</Link>
            {(
                !isEmptyObject(pokemonsDetail) ? ( // Si los detalles del Pokémon no están vacíos, se muestran
                    <div>
                        <div className={style.detailTitle}>{pokemonsDetail.name}</div>
                        <div className={style.detailContent}>
                            <img
                                className={style.detailImg}
                                src={pokemonsDetail.image}
                                alt={pokemonsDetail.name}
                            />
                            <div className={style.detailInfo}>
                                <p>
                                    HP: {pokemonsDetail.life}
                                </p>
                                <p>
                                    ATTACK: {pokemonsDetail.attack}
                                </p>
                                <p>
                                    DEFENSE: {pokemonsDetail.defense}
                                </p>
                                <p>
                                    SPEED: {pokemonsDetail.speed}
                                </p>
                                <p>
                                    HEIGHT: {pokemonsDetail.height}
                                </p>
                                <p>
                                    WEIGHT: {pokemonsDetail.weight}
                                </p>
                                <div className={style.detailTyles}>
                                    <p>TYPE:</p>
                                    {pokemonsDetail.types && (
                                        <div>
                                            {pokemonsDetail.types.split(', ').map((type, index) => ( // Mapea y muestra los tipos del Pokémon
                                                <p key={index}>{type}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div> // Si los detalles del Pokémon están vacíos (cargando), se muestra "Loading..."
                        <p>Loading...</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Detail;
