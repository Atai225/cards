import React, { useEffect, useState } from 'react';
import { BsShuffle, BsEyeFill, BsClock } from "react-icons/bs";
import { cards } from '../../utils';
import './Cards.css'

function Cards() {
    const [cardList, setCardList] = useState(null);
    const [currentCard, setCurrentCard] = useState(null);

    useEffect(() => {
        console.log(cards);
        setCardList(cards);
    }, [])

    const dragStartHandler = (e, item) => {
        if(item.id !== 5){
            setCurrentCard(item)
        }
      }
      const dragEndHandler = (e) => {
      }
      const dragOverHandler = (e) => {
        e.preventDefault();
      }
      const dropHandler = (e, item) => {
        e.preventDefault();
        setCardList(cardList.map((card)=>{
          if(item.id !== 5){
            if(card.id === item.id){
            return {...card, id: currentCard.id}
            }
            if(card.id === currentCard.id){
                return {...card, id: item.id}
            }
            }
            return card
        }))
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
                <span className='shuffle'><BsShuffle/> shuffle</span>
                <h1 className='title'>Popular</h1>
            </div>
            <div className='cards'>
                {cardList &&
                    cardList.sort(sortField).map((card, index) => {
                        return (
                            <div
                                draggable={true}
                                onDragStart={(e) => dragStartHandler(e, card)}
                                onDragLeave={(e) => dragEndHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, card)}
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
                                    <span className='date'>
                                        <BsClock className='clock'/> {card.date}
                                    </span>
                                    <span className='views'>
                                        <BsEyeFill/> {card.viewers}
                                    </span>
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