import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Main/Main';
import { cards } from './utils';


function App() {
  const [cardList, setCardList] = useState(null);

  useEffect(() => {
    setCardList(cards);
}, [])

  return (
    <div className="App">
      <div className='container'>
        <Cards cardList={cardList}/>
      </div>
    </div>
  );
}

export default App;
