import React, { useEffect, useState } from 'react';
import shuffle from '../../assets/icons/shuffle.svg'
import { cards } from '../../utils';
import Card from '../Card/Card';
import './Main.css'

function Cards() {
    const [cardList, setCardList] = useState(null);
    const [shuffled, setShuffled] = useState(0);

    useEffect(() => {
        cardList ? setCardList(cardList.sort(() => 0.5 - Math.random())) : setCardList(cards)
    }, [shuffled])

    return (
        <div className='container'>
            <div className='container__head'>
                <span className='shuffle' onClick={() => setShuffled(shuffled+1)}><img className='shuffle-icon' src={shuffle} alt='shuffle'/>shuffle</span>
                <h1 className='title'>Popular</h1>
            </div>
            <main className='cards'>
                {cardList && cardList.map((card, index) => {
                        return (
                            <Card key={index} {...card} index={index}/>
                        )
                    })
                }
            </main>
        </div>
    )
}

export default Cards