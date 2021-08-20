import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container main-container">

      </div>
    </BrowserRouter>
  );
}

export default App;
