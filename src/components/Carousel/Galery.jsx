import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Galery.css";
import Relax from "../../img/Carrusel/Relax_carrusel.jpeg";
import Tarjeta from "../../img/Carrusel/Tarjeta.jpeg";
import Productos from "../../img/Carrusel/Productos.jpeg";
import Camilla from "../../img/Carrusel/Camilla.jpg";

const Galery = () => {
  return (
    <>
      <div className="gallery-container">
        <AwesomeSlider className="slider" bullets={true}>
          <div data-src={Relax} />
          <div data-src={Tarjeta} />
          <div data-src={Productos} />
          <div data-src={Camilla} />
        </AwesomeSlider>
      </div>

      <div className="benefits-section">
        <ul className="benefits-list">
          <li className="benefit-item">Alivia el dolor</li>
          <li className="benefit-item">Reduce el estrés</li>
          <li className="benefit-item">Duerme mejor</li>
        </ul>
      </div>
    </>
  );
};

export default Galery;
