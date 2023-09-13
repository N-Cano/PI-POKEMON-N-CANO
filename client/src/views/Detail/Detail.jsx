import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getPokemonDetail } from '../../redux/actions';
import style from './Detail.module.css';
import NavBar from '../../components/NavBar/NavBar';

const Detail = () => {
    const dispatch = useDispatch();
    const { pokemonsDetail } = useSelector((state) => state);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getPokemonDetail(id))
    }, [id, dispatch]);

    function isEmptyObject(obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }

    return (
        <div className={style.detailContainer}>
            <Link className={style.btnHome} to='/home'>HOME</Link>
            {(
                !isEmptyObject(pokemonsDetail) ? (
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
                                            {pokemonsDetail.types.split(', ').map((type, index) => (
                                                <p key={index}>{type}</p>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <p>Loading...</p>
                    </div>
                )
            )}
        </div>
    );
};

export default Detail;
