import React from "react";
import { useStateValue } from "../../StateProvider";
import "./FavCard.css";

function FavCard({ id, front }) {
  const [{ fav }, dispatch] = useStateValue();

  const removeFav = () => {
    dispatch({
      type: "REMOVE_FAV",
      id: id,
    });
  };

  return (
    <div class="flip-front border-primary">
      <h2>{front}</h2>
      <button className="btn btn-primary text-white " onClick={removeFav}>
        Hapus
      </button>
    </div>
  );
}

export default FavCard;
