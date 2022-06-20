import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Cyberpage from "./Pages/Flashcard/Cyberpage";
import Profile from "./Pages/Profile/Profile";
import { auth } from "./firebase";
import { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import Sexualpage from "./Pages/Flashcard/Sexualpage";
import Physicalpage from "./Pages/Flashcard/Physicalpage";
import Verbalpage from "./Pages/Flashcard/Verbalpage";


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <body>
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
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
          <Footer />
        </div>
      </Router>
    </body>
  );
}

export default App;
