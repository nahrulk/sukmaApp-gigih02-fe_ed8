import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";

function App() {
  return (
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
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
