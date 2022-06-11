import React from "react";
import CategoryIcon from "../../Components/CategoryIcon/CategoryIcon";
import News from "../../Components/News/News";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="container py-4 py-xl-5">
        <div class="row gy-4 gy-md-0">
          <div class="col-md-6">
            <div class="p-xl-5 m-xl-5">
              <img
                class="rounded img-fluid w-100 fit-cover min300"
                src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              />
            </div>
          </div>
          <div class="col-md-6 d-md-flex align-items-md-center">
            <div className="max350">
              <h2 class="text-uppercase fw-bold">
                Biben dum
                <br />
                fringi dictum, augue purus
              </h2>
              <p class="my-3">
                Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus
                sapien, risus donec ad fusce augue interdum.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* iport component */}
      <CategoryIcon />
      <News />
    </div>
  );
};

export default Home;
