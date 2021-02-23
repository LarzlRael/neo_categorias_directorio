import React, { useContext, useEffect, useState } from 'react'
import { SearchContext } from '../context/SearchContext';




export const Cards = () => {

    const { cards_s, getCards } = useContext(SearchContext);

    useEffect(() => {
        getCards()
    }, [])

    return (
        <div className="row">
            {cards_s.map(card => (
                <div className="col-md-3">
                    <Card
                        card={card}
                        key={card.id}

                    />
                </div>
            ))}
            {cards_s.length === 0 && <h2>No se encontraron resultados</h2>}
        </div>
    )
}


const Card = ({ card: { title, content, className, benefits } }) => {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        setCheck(!check);
    }
    return (

        <div

            className={`card-product ${className}`} >
            <div className="title">
                <img src="https://urubo.noticias.bo/wp-content/uploads/2020/02/clasificados_300x283.png" alt="" />
                <h3>{title}</h3>
            </div>
            <p className="desc">
                {content}
            </p>
            <div className="benefits">
                <ul>
                    {/* <li><i class="fas fa-check-circle"></i>Lorem, ipsum dolor.</li>
                    <li><i class="fas fa-check-circle"></i>Lorem, ipsum dolor.</li>
                    <li><i class="fas fa-check-circle"></i>Lorem, ipsum dolor.</li>
                    <li><i class="fas fa-times-circle"></i>Lorem, ipsum dolor.</li>
                    <li><i class="fas fa-times-circle"></i>Lorem, ipsum dolor.</li> */}
                    {benefits.map((benefit, i) => (
                        <li><i className="fas fa-times-circle"></i>{benefit}</li>
                    ))}
                </ul>

            </div>
            <div className="button-container">
                <button className="order-now">
                    Order Now
            </button>
            </div>
        </div>
    )
}
