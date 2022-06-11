import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
