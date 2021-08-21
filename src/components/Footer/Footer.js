import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container my-4">
          <div className="row">
            <div className="col-4 ">
              <h5 className="text-center">Sobre mí</h5>
              <p className="footer_about">
                Brindamos la mejor experiencia posible para ayudarlo a ser
                saludable, productivo y vivir mejor.
              </p>
            </div>
            <div className="col-4 ">
              <h5 className="text-center">Horarios de apertura</h5>
              <p className="footer_openHours">
                Lunes a Viernes de 09:00hs. a 20hs.
              </p>
            </div>
            <div className="col-4 ">
              <h5 className="text-center">Contacto</h5>
              <p className="footer_contact">
                <i class="fas fa-map-marker-alt"></i> Humberto Primo 6496, San
                Francisco Solano, Provincia de Buenos Aires
              </p>
              <p className="footer_contactPhone">
                <i class="fas fa-mobile-alt"></i> 1134585757
              </p>
            </div>
            <hr className="shadow"/>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
