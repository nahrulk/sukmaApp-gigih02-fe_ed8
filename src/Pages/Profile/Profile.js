import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavCard from "../../Components/FavCard/FavCard";
import { dbLive, dbStore } from "../../firebase";
import { uid } from "uid";
import { ref, onValue, remove } from "firebase/database";
import "./Profile.css";
import { AuthContext } from "../../Context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const Profile = () => {
  const [favs, setFavs] = useState([]);
  const { currentUser } = useContext(AuthContext);
  let { userFav } = useState([]);

  //   Database Variable
  const usersCollectionRef = collection(dbStore, "users");
  const [users, setUsers] = useState([]); // Kumpulan data user
  let { userProfiles } = useState([]); // tempat nyimpen user yang terfilter

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

  // get data from users collection
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  // console.log(users);

  const deleteFav = (item) => {
    remove(ref(dbLive, `/${item.uuid}`));
  };

  userFav = favs.filter((item) => item.userId === currentUser.uid); //data card
  userProfiles = users.filter((item) => item.userId === currentUser.uid); // data user

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
                    {userProfiles.map((user) => (
                      <div>
                        <img
                          class="rounded-circle "
                          width="100px"
                          src={user.img}
                        />
                        {!currentUser ? (
                          <div>
                            <span class="font-weight-bold fw-bold fs-5">
                              Anonim
                            </span>
                            <br />
                            <span class="fs-6 fst-italic">@anonim</span>
                          </div>
                        ) : (
                          <div>
                            <span class="font-weight-bold fw-bold fs-5">
                              {user.fullname}
                            </span>
                            <br />
                            <span class="fs-6 fst-italic">{user.username}</span>
                          </div>
                        )}
                      </div>
                    ))}

                    <Link to="/update">
                      <div>
                        <button className="buttonsetting btn btn-primary">Setting</button>
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
              <div class="flashcard  flip-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <h2 key={item.userId}>{item.fav.front.display}</h2>
                  </div>
                  <div class="flip-card-back">
                    <p>{item.fav.back.display}</p>
                  </div>
                </div>
                <Button
                  className="button-delete"
                  onClick={() => deleteFav(item)}
                  size="large"
                  variant="contained"
                  style={{ backgroundColor: "#fafafa", color: "black" }}
                  startIcon={<DeleteIcon style={{ color: "white" }} />}
                >
                  Delete Card
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
