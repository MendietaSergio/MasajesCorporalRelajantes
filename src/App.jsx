import { BrowserRouter } from "react-router-dom";
import {Header} from "./components/Header/Header";
import {Galery} from "./components/Carousel/Galery";
import {Presentation} from "./components/Presentation/Presentation";
import {Card} from "./components/Card/Card";
import {Location} from "./components/Location/Location";
import {Footer} from "./components/Footer/Footer.jsx";
import "./App.css";

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