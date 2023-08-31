import style from './Card.module.css'

const Card = ({ pokemon }) => {
    return (
        <section className={style.card}>
            <div key={pokemon.id}>
                <img src={pokemon.image} alt={pokemon.name} />
                <div className={style.container}>
                    <h3>{pokemon.name}</h3>
                    <p>{pokemon.types}</p>
                </div>
            </div>
        </section>
    )
}

export default Card