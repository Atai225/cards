import React from 'react';
import './Card.css';
import eye from '../../assets/icons/eye.svg';
import clock from '../../assets/icons/clock.svg';



function Card({size, color, img, title, text, date, views }, index) {
    return (
        <div 
            className={`cards__item card cards__item--${size} cards__item--${color}`}
        >
            <div className='card__img-box'><img src={img} className='card__img' alt='' /></div>
            <div className='card__info'>
                <h3 className='card__title'>
                    {title}
                </h3>
                <p className='card__text text'>
                    {text}
                </p>
                <span className='date'>
                      <img className='clock-icon' src={clock} alt='clock'/>
                      {date}
                </span>
                <span className='views'>
                    <img className='eye-icon' src={eye} alt='eye'/>
                    {views}
                </span>
            </div>
        </div>
    )
}

export default Card;