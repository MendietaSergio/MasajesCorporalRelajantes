import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mt-4 mb-2">
          <div className="row">
            <div className="col-4 vertical-line">
              <h5 className="text-center footer_title">Sobre mí</h5>
              <p className="footer_about">
                Brindo la mejor experiencia adquirida para ayudarlo a ser
                saludable, productivo y vivir mejor.
              </p>
            </div>
            <div className="col-4 vertical-line">
              <h5 className="text-center footer_title">Horarios de apertura</h5>
              <p className="footer_openHours">
                Lunes a Viernes de 09:00hs. a 20hs.
              </p>
            </div>
            <div className="col-4 vertical-line">
              <h5 className="text-center footer_title">Contacto</h5>
              <p className="footer_contact">
                <i class="fas fa-map-marker-alt"></i> Humberto Primo 6496, San
                Francisco Solano, Provincia de Buenos Aires
              </p>
              <p className="footer_contactPhone">
                <i class="fas fa-mobile-alt"></i> 1134585757
              </p>
            </div>
            <hr className="horizontal-line" />
          </div>
          <div className="copyright">
            <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <p className="footer-copyright">
                  Plantilla Copyright © Portafolio{" "}
                  <a
                    className="footer-a"
                    href="http://linkedin.com/in/mendietasergio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mendieta Sergio
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
