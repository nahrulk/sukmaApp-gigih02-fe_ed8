import React from 'react';
import CategoryIcon from '../../Components/CategoryIcon/CategoryIcon';
import Guidance from '../../Components/Guidance/Guidance';
import './Home.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sexualpage from '../Flashcard/Sexualpage';
import Physicalpage from '../Flashcard/Physicalpage';
import Verbalpage from '../Flashcard/Verbalpage';
import Cyberpage from '../Flashcard/Cyberpage';

const Home = () => {
  return (
    <div>
      <div className="container py-4 py-xl-5">
        <div className="col">
          <div className="d-flex flex-column flex-lg-row">
            <div className="p-xl-5 m-xl-5">
              <img
                className="homeimg align-items-md-center min300"
                src={require('../../Components/CategoryIcon/homeimggg.png')}
              />
            </div>
          </div>
        </div>

        <div className="col">
          <div className="py-4 py-lg-0 px-lg-4">
            <div className="max500">
              <h2 className="headtext text-uppercase">Bersatu melawan bullying!</h2>
            </div>
            <p className="bodytext">
              Bullying merupakan segala bentuk penindasan atau kekerasan yang dilakukan dengan
              sengaja oleh satu atau sekelompok orang yang lebih kuat atau berkuasa terhadap orang
              lain, bertujuan untuk menyakiti dan dilakukan secara terus menerus. Sejauh ini kita
              mengenal 4 jenis bullying, yaitu: Bullying Verbal, Bullying Fisik, Bullying Sexual,
              dan Cyber Bullying. Dengan Sukma kami ingin menyampaikan berbagai macam edukasi
              mengenai bullying.
            </p>
          </div>
        </div>
      </div>
      <CategoryIcon />
      <Switch>
        <Route path="/Cybercard">
          <Cyberpage />
        </Route>
        <Route path="/Sexualcard">
          <Sexualpage />
        </Route>
        <Route path="/Physicalcard">
          <Physicalpage />
        </Route>
        <Route path="/Verbalcard">
          <Verbalpage />
        </Route>
      </Switch>
      <Guidance />
    </div>
  );
};

export default Home;
