import { ref, remove } from 'firebase/database';
import React, { useState } from 'react';
import { dbLive } from '../../firebase';
import './FavCard.css';

function FavCard({ front }) {
  const [fav] = useState('');

  const deleteFav = (fav) => {
    remove(ref(dbLive, `/${fav.uuid}`));
  };

  return (
    <div className="flip-front border-primary">
      <h2>{front}</h2>
      <button className="btn btn-primary text-white " onClick={() => deleteFav(fav)}>
        Hapus
      </button>
    </div>
  );
}

export default FavCard;
