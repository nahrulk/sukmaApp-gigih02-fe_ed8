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
  

  return (
    <div className="Flashcards">
      {items.map((item, index) => (
        <Flashcard
          key={item.id}
          setFlippedState={handleClick}
          front={item.front}
          back={item.back}
        />
      ))}
    </div>
  );
}

Flashcard.propTypes = {
  items: PropTypes.array,
}


export default Flashcards;