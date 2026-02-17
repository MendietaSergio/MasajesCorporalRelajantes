import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Galery from "./components/Carousel/Galery";
import Presentation from "./components/Presentation";
import Card from "./components/Card/";
import Location from "./components/Location/";
import Footer from "./components/Footer/";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container main-container">
        <Presentation />
        <Galery />
        <Card />
        <Location />
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
