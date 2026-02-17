import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Galery from "./components/Carousel/Galery";
import Presentation from "./components/Presentation/Presentation"; // Explicit import if index.jsx fails or implicit works
import Card from "./components/Card/Card";
import Location from "./components/Location/Location";
import Footer from "./components/Footer/Footer";
import "./index.css"; // Global styles

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Presentation />
          <Galery />
          <Card />
          <Location />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
