import React, { useEffect, useState } from 'react';
import { BsShuffle, BsEyeFill, BsClock } from "react-icons/bs";
import { cards } from '../../utils';
import './Cards.css'

function Cards() {
    const [cardList, setCardList] = useState(null);

    useEffect(() => {
        console.log(cards);
        setCardList(cards);
    }, [])

      const shuffle = () => {
        for (let i = cardList.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i-1));
            const elem = cardList[i];
            cardList[i] = cardList[j];
            cardList[j] = elem;
        }
        return cardList;
      }

      const sortField = (a, b) => {
        if(a.id > b.id){
          return 1;
        }else{
          return -1;
        }
      }

    return (
        <div className='container'>
            <div className='container__head'>
                <span className='shuffle' onClick={shuffle}><BsShuffle/> shuffle</span>
                <h1 className='title'>Popular</h1>
            </div>
            <div className='cards'>
                {cardList &&
                    cardList.sort(sortField).map((card, index) => {
                        return (
                            <div
                                 className={index === 4 ? `cards__item card cards__item--big cards__item--${card.color}` : `cards__item card cards__item--${card.color}`} 
                                 key={card.id}
                                 >
                                <div className='card__img-box'><img src={card.img} className='card__img' alt='' /></div>
                                <div className='card__info'>
                                    <h3 className='card__title'>
                                        {card.title}
                                    </h3>
                                    <p className='card__text'>
                                        {card.text}
                                    </p>
                                    <div className='card__footer'>
                                        <span className='date'>
                                            <BsClock className='clock'/> {card.date}
                                        </span>
                                        <span className='views'>
                                            <BsEyeFill/> {card.viewers}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Cards