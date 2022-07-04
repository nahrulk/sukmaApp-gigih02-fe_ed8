import React, { useContext, useEffect, useState } from "react";
import Flashcard from "./Card/Card";
import PropTypes from "prop-types";
import "./Flashcard.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button } from "@mui/material";
import { dbLive } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue } from "firebase/database";
import { AuthContext } from "../../Context/AuthContext";

const Flashcards = (props) => {
  const [fav, setFav] = useState("");
  const [flipped, setFlipped] = useState(false);
  const [current, setCurrent] = useState(0);

  const [favs, setFavs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  let { userFav } = useState([]);

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

  useEffect(() => {
    onValue(ref(dbLive), (snapshot) => {
      setFavs([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((fav) => {
          setFavs((oldArray) => [...oldArray, fav]);
        });
      }
    });
  }, []);

  const writeToFav = () => {
    const uuid = uid();
    const fav = props.items[current];
    const userId = currentUser.uid;
    set(ref(dbLive, `/${uuid}`), {
      userId,
      fav,
      uuid,
    });

    setFav("");
  };

  userFav = favs.filter((item) => item.userId === currentUser.uid);

  let storeFav = userFav.find((fa) => fa.fav.id === props.items[current].id); // melakukan mapping untuk mengecek apakah ada data atau tidak

  const favDisabled = storeFav ? true : false;

  const loading = <div className="loading">Loading flashcard content...</div>;

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
          onClick={writeToFav}
          size="large"
          variant="contained"
          style={{ backgroundColor: "#fafafa", color: "black" }}
          startIcon={<FavoriteIcon style={{ color: "red" }} />}
        >
          {" "}
          Favorite
        </Button>{" "}
        {/* ADD LOVE UI BUTTON FROM MUI */}
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
