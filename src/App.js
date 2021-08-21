import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Galery from "./components/Carousel/Galery";
import Presentation from "./components/Presentation";
import Card from "./components/Card/Card";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container main-container">
      <Presentation />
        <Galery />
        <Card/>
      </div>
    </BrowserRouter>
  );
}

export default App;
