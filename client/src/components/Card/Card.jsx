import style from './Card.module.css'
import { Link } from 'react-router-dom'

const Card = (props) => {
    return (
        <section className={style.card}>
            <div key={props.id}>
                <Link to={`/pokemon/${props.id}`} className={style.link}>
                    <img src={props.image} alt={props.name} />
                    <div className={style.container}>
                        <h3>{props.name}</h3>
                        <p>{props.types}</p>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Card