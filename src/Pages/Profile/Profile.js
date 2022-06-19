import React, { useState } from "react";
import { Link } from "react-router-dom";
import FavCard from "../../Components/FavCard/FavCard";
import { auth } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import "./Profile.css";

const Profile = () => {
  const [{ fav, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  // console.log(user.email);

  return (
    <div>
      <div class="continer">
        <div class="row">
          <div class="col.md-4 mt-1">
            <div class="card border-primary text-white bg-dark text-center sidebar">
              <div class="card-body ">
                {/* <img
                  src="user picture.jpg"
                  class="rounded-circle"
                  width="150"
                /> */}
                <div class="mt-6 text-white bg-dark">
                  {/* <h3>Jane Doe</h3> */}

                  {!user ? <h4>Guest</h4> : <h4>{user?.email}</h4>}

                  <div
                    id="btn-container"
                    className="handleAuthenticaton"
                    onClick={handleAuthenticaton}
                  >
                    <Link to={!user && "/login"}>
                      {!user ? (
                        <button className="btn btn-primary">Log In</button>
                      ) : (
                        <button className="btn btn-danger">Log out</button>
                      )}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card text-white bg-dark">
            <h2>Favorites ({fav?.length})</h2>
            <div class="flipcard">
              {fav.map((item) => (
                <FavCard front={item.front.display} id={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
