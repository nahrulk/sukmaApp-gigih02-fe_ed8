import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavCard from "../../Components/FavCard/FavCard";
import { auth } from "../../firebase";
import { dbLive } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
// import { useStateValue } from "../../StateProvider";
import "./Profile.css";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  // const [{ fav, user }, dispatch] = useStateValue();
  // const [fav, setFav] = useState("");
  const [favs, setFavs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  let { userFav } = useState([]);

  // const handleAuthenticaton = () => {
  //   if (user) {
  //     auth.signOut();
  //   }
  // };

  // console.log(user.email);

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

  // asasas
  //   if (currentUser) {
  //     db.collection("users")
  //       .doc(user?.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) =>
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);

  const deleteFav = (item) => {
    remove(ref(dbLive, `/${item.uuid}`));
  };

  userFav = favs.filter((item) => item.userId === currentUser.uid);

  console.log(userFav);

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col.md-4 mt-1">
            <div class="card">
              <h1>PROFILE</h1>
              <div class="card-body ">
                <div class="mt-6">
                  <h3>Username</h3>
                  {!currentUser ? (
                    <h4>Guest</h4>
                  ) : (
                    <h4>{currentUser?.email}</h4>
                  )}

                  <div
                    id="btn-container"
                    className="handleAuthenticaton"
                    // onClick={handleAuthenticaton}
                  >
                    {" "}
                    <br></br>
                    {/* <Link to={!user && "/login"}>
                      {!user ? (
                        <button className="btn btn-primary">Log In</button>
                      ) : (
                        <button className="btn btn-danger">Log out</button>
                      )}
                    </Link> */}
                    <button className="btn btn-primary">Log In</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1>FAVORITE CARDS ({userFav.length})</h1>
          <div class="flipcard">
            {userFav.map((item) => (
              // <FavCard
              //   front={item.fav.front.display}
              //   id={fav}
              //   key={String(item.uuid)}
              // />
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
