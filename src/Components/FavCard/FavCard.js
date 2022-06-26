import React, { useState } from "react";
// import { useStateValue } from "../../StateProvider";
import "./FavCard.css";
import { dbLive } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";

function FavCard({ id, front }) {
  // const [{ fav }, dispatch] = useStateValue();
  const [fav, setFav] = useState("");

  // const removeFav = () => {
  //   dispatch({
  //     type: "REMOVE_FAV",
  //     id: id,
  //   });
  // };

  const deleteFav = (fav) => {
    remove(ref(dbLive, `/${fav.uuid}`));
  };

  return (
    <div class="flip-front border-primary">
      <h2>{front}</h2>
      <button
        className="btn btn-primary text-white "
        onClick={() => deleteFav(fav)}
      >
        Hapus
      </button>
    </div>
  );
}

export default FavCard;
