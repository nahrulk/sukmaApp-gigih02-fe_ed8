import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div class="continer">
        <div class="row">
          <div class="col.md-4 mt-1">
            <div class="card text-center sidebar">
              <div class="card-body">
                <img
                  src="user picture.jpg"
                  class="rounded-circle"
                  width="150"
                />
                <div class="mt-3">
                  <h3>Jane Doe</h3>
                  <h4>Janedoe123@gmail.com</h4>
                  <div id="btn-container">
                    <a href="">
                      <button>Log out</button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h2>Favorites</h2>
            <div class="flipcard">
              <div class="flip-front">
                <h2>Apa itu Cyber Bullying?</h2>
              </div>
              <div class="flip-front">
                <h2>Apa itu Cyber Bullying?</h2>
              </div>
              <div class="flip-front">
                <h2>Apa itu Cyber Bullying?</h2>
              </div>
              <div class="flip-front">
                <h2>Apa itu Cyber Bullying?</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
