import React from "react";
import CategoryIcon from "../../Components/CategoryIcon/CategoryIcon";
import News from "../../Components/News/News";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div class="container py-4 py-xl-5">
        <div class="col">
          
          <div class="d-flex flex-column flex-lg-row">
            <div class="p-xl-5 m-xl-5">
              <img
                class="homeimg align-items-md-center min300"
                src={require('../../Components/CategoryIcon/homeimggg.png')}
              />
            </div>
          </div>
        </div>

          <div class="col">
            <div class="py-4 py-lg-0 px-lg-4">
              <div className="max500">
                <h2 class="headtext text-uppercase">
                  Bersatu melawan bullying!
                </h2>
              </div>
            <p class="bodytext">
                  Bullying merupakan segala bentuk penindasan atau kekerasan yang dilakukan dengan 
                  sengaja oleh satu atau sekelompok orang yang lebih kuat atau berkuasa terhadap orang lain, 
                  bertujuan untuk menyakiti dan dilakukan secara terus menerus. 
                  Sejauh ini kita mengenal 4 jenis bullying, yaitu: Bullying Verbal, Bullying Fisik, Bullying Sexual, dan Cyber Bullying.
                  Dengan Sukma kami ingin menyampaikan berbagai macam edukasi mengenai bullying.
            </p>
            </div>
        </div>
       
      </div>
      <CategoryIcon />
      <News />
    </div>
  );
};

export default Home;
