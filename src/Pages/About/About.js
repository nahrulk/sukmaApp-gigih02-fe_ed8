import React from 'react';
import { dataCard } from "./data";
import Person from "./Person"; 
import "./About.css";

const About = () => {
  return (
    <div>
      <h1 className="pb-5"> About Us</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <section className=" py-4 py-xl-3 rounded">
              <div className="container">
                <div className="card p-4 p-md-5 text-dark">
                  <h4 className="fw-bolder mb-3">SUKMA.</h4>
                  <p className="fs-5 mb-4">
                    Berawal dari kekhawatiran dan semakin banyaknya angka perundungan di Indonesia
                    khususnya di wilayah yang vital yaitu pendidikan. Kami sebagai team memutuskan
                    untuk menciptakan sebuah website yang kami harapkan nantinya, bisa menjadi
                    Safe-place bagi mereka yang menjadi korban. Dan juga menjadi tempat dimana akan
                    menyediakan berbagai macam informasi untuk meningkatkan kesadaran banyaknya
                    perundungan di dunia pendidikan Indonesia.
                  </p>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-6">
            <section className="py-4 py-xl-4 rounded">
              <div className="container">
                <div className="card text-dark p-4 p-md-5">
                  <h4 className="fw-bolder mb-3">Visi dan Misi</h4>
                  <p className="fs-5 mb-4">
                    Sukma adalah aplikasi berbasis website yang tim kami ciptakan untuk meningkatkan
                    kesadaran remaja akan tingginya angka perundungan atau pembullyan yang sangat
                    marak terjadi khususnya di dunia pendidikan. Tentunya kami harapkan dengan
                    diluncurkannya SUKMA, kami bisa menambahkan awareness kepada banyak orang dan
                    bisa mengurangi angka perundungan di indonesia, khususnya di dunia pendidikan.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="container">
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h1 className="pb-5">Our Team</h1>
            <p className="fs-5 w-lg-50 text-dark fw-bold">
              Perkenalkan, kami dari SUKMA team! Kami selalu berusaha untuk melakukan yang terbaik
              demi mencapai tujuan kami. Inilah kami!
            </p>
          </div>
        </div>

        <div className="aboutcard">
            {dataCard.map((item) => (
            <Person item={item} />
            ))}

        </div>
        
      </div>
      {/* End our Team */}
    </div>
  );
};

export default About;
