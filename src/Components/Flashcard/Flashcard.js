import React, { useState } from "react";
import Flashcard from "./Card/Card";
import PropTypes from "prop-types";
import "./Flashcard.css";
import { useStateValue } from "../../StateProvider";

const Flashcards = (props) => {
  const [{ fav }, dispatch] = useStateValue();
  const [flipped, setFlipped] = useState(false);
  const [current, setCurrent] = useState(0);
  const { items } = props;

  const handleClick = () => {
    setFlipped(true);
  };

  // navigation in cards

  function previousCard() {
    setCurrent(current - 1);
  }
  function nextCard() {
    setCurrent(current + 1);
  }

  const addToFav = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_FAV",
      item: props.items[current],
    });
  };

  const loading = <div className="loading">Loading flashcard content...</div>;

  console.log(fav);

  const cards = items.map((item) => {
    return (
      <Flashcard
        key={String(item.id)}
        setFlippedState={handleClick}
        front={item.front}
        back={item.back}
      />
    );
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

        <button className="btn btn-primary" onClick={addToFav}>
          Add to favorit
        </button>

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
};

Flashcard.propTypes = {
  items: PropTypes.array,
};

export default Flashcards;
