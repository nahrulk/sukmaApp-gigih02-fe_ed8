import React, { useState } from "react";
import Flashcard from "./Card/Card";
import PropTypes from "prop-types";
import "./Flashcard.css";
import { useStateValue } from "../../StateProvider";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from "@mui/material";

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

  let storeFav = fav.find((favs) => favs.id === props.items[current].id); // melakukan mapping untuk mengecek apakah ada data atau tidak

  const favDisabled = storeFav ? true : false;

  const loading = <div className="loading">Loading flashcard content...</div>;

  // console.log(fav.front);

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

  // console.log(fav);
  // console.log(items);
  // console.log(props.items[1]);
  // console.log(fav.id === items.id);
  // console.log(storeFav);

  return (
    <div>
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
        
        <Button
          disabled={favDisabled}
          onClick={addToFav}
          size="large" variant="contained" style={{ backgroundColor: "#fafafa", color: 'black',}} 
          startIcon={<FavoriteIcon style={{ color: 'red' }} />}> Favorite
        </Button> {/* ADD LOVE UI BUTTON FROM MUI */}

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
