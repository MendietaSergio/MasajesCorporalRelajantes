import Button from "../Button/Button";
import "./Location.css";
import Banner from "../../img/img_02.jpg";

const Location = () => {
  return (
    <section className="location-section">
      <div className="cta-container">
        <div className="cta-overlay">
          <img src={Banner} alt="Relax Banner" className="cta-bg-image" />
          <div className="cta-content">
            <h2 className="cta-title">¡Gracias!</h2>
            <h3 className="cta-subtitle">ESPERAMOS SU VISITA</h3>
            <div className="cta-action">
              <a
                href="https://api.whatsapp.com/send?phone=+5491134585757&text=Hola%20Bas%C3%AD%20!!%20%F0%9F%91%8B%F0%9F%8F%BC%20Quiero%20reservar/averiguar%20un%20turno%20%F0%9F%98%81"
                rel="noopener noreferrer"
                target="_blank"
                className="cta-link"
              >
                <Button text="Reserva" className="cta-btn" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="map-container">
        <h2 className="section-title text-center">Ubicación</h2>
        <div className="map-wrapper">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.165783439817!2d-58.31955772349659!3d-34.776601566650385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32c5d0cd8c59b%3A0xfb1025081e1d538c!2sC.%20836%202540%2C%20B1881%20San%20Francisco%20Solano%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1771294868388!5m2!1ses!2sar"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="map-iframe"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;
