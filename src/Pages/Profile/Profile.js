import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavCard from "../../Components/FavCard/FavCard";
import { dbLive } from "../../firebase";
import { uid } from "uid";
import { ref, onValue, remove } from "firebase/database";
import "./Profile.css";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  const [favs, setFavs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  let { userFav } = useState([]);

  useEffect(() => {
    onValue(ref(dbLive), (snapshot) => {
      setFavs([]);
      const data = snapshot.val();
      if (currentUser && data !== null) {
        Object.values(data).map((fav) => {
          setFavs((oldArray) => [...oldArray, fav]);
        });
      }
    });
  }, []);

  const deleteFav = (item) => {
    remove(ref(dbLive, `/${item.uuid}`));
  };

  userFav = favs.filter((item) => item.userId === currentUser.uid);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col.md-4 mt-1">
            <div class="card">
              <h1>PROFILE</h1>
              <div class="card-body ">
                <div class=" border-right">
                  <div class="d-flex flex-column align-items-center text-center ">
                    <img
                      class="rounded-circle "
                      width="100px"
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                    <span class="font-weight-bold fw-bold fs-5">Edogaru</span>
                    <span class="fs-6 fst-italic">@Edogaru</span>
                    {!currentUser ? (
                      <span class="text-black-50">Email</span>
                    ) : (
                      <span class="text-black-50">{currentUser?.email}</span>
                    )}
                    <Link to="/update">
                      <div>
                        <button className="btn btn-primary">Setting</button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1>FAVORITE CARDS ({userFav?.length})</h1>
          <div class="flipcard">
            {userFav.map((item) => (
              <div class="flip-front border-primary">
                <h2 key={item.userId}>{item.fav.front.display}</h2>
                <span>{item.userId}</span>
                <button
                  className="btn btn-primary text-white "
                  onClick={() => deleteFav(item)}
                >
                  Hapus
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
