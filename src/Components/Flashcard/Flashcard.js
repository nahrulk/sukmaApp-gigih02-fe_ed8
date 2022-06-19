import React, { useState } from 'react';
import Flashcard from './Card/Card';
import PropTypes from 'prop-types';
import './Flashcard.css';


const Flashcards = (props) => {
  const [flipped, setFlipped] = useState(false);
  const { items } = props;
  
  const handleClick = () => {
    setFlipped(true);
  }
  
  // navigation in cards
  const [current, setCurrent] = useState(0);
  function previousCard() {
    setCurrent(current - 1);
  }
  function nextCard() {
    setCurrent(current + 1);
  }

  const loading = <div className="loading">Loading flashcard content...</div>;

  const cards = items.map((item) => {
    return <Flashcard
    key={String(item.id)}
    setFlippedState={handleClick}
    front={item.front}
    back={item.back} />;
  });


  return (
    <div>
      {/* number of cards */}
      {/* {items && items.length > 0 ? (
        <div className="cardNumber">
          Card {current + 1} of {items.length}
        </div>
      ) : (
        ""
      )} */}

      {/* render cards */}
      {items && items.length > 0 ? cards[current] : loading}

      {/* render nav buttons */}
      <div className="nav">
        {current > 0 ? (
          <button onClick={previousCard}>Previous</button>
        ) : (
          <button className="disabled" disabled>
            Previous
          </button>
        )}
        {current < items.length - 1 ? (
          <button onClick={nextCard}>Next</button>
        ) : (
          <button className="disabled" disabled>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

Flashcard.propTypes = {
  items: PropTypes.array,
}


export default Flashcards;