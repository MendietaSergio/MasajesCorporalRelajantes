import "./Footer.css";
import { FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-column about-column">
            <h5 className="footer-title">Sobre mí</h5>
            <p className="footer-text">
              Brindo la mejor experiencia adquirida para ayudarlo a ser
              saludable, productivo y vivir mejor.
            </p>
          </div>

          <div className="footer-column hours-column">
            <h5 className="footer-title">Horarios de apertura</h5>
            <p className="footer-text">Lunes a Viernes de 09:00hs. a 20hs.</p>
          </div>

          <div className="footer-column contact-column">
            <h5 className="footer-title">Contacto</h5>
            <p className="footer-text contact-item">
              <FaMapMarkerAlt className="footer-icon" />
              Calle 836 N° 2540, San Francisco Solano, Provincia de Buenos Aires
            </p>
            <p className="footer-text contact-item">
              <FaMobileAlt className="footer-icon" />
              1134585757
            </p>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-copyright-wrapper">
          <p className="footer-copyright">
            &copy; {currentYear}{" "}
            <a
              href="https://dev-mendietasergio.com.ar/?utm_source=relax-olvidatusproblemas&utm_medium=footer_referral"
              target="_blank"
              rel="noopener noreferrer"
              className="developer-link"
            >
              Sergio Mendieta - Dev
            </a>
            . Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
