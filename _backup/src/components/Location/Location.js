import Button from "../Button/Button";
import "./Location.css";
import Banner from '../../img/img_02.jpg'
const Location = () => {
  return (
    <>
      <div className="toCome ">
        <img src={Banner} title="Productos" className="img" />
        <div className="row">
          <div className="container">
            <div className="card-img-overlay list-group nav d-flex justify-content-center align-items-center">
              <div className="col-12">
                <span className="justify-content-center align-items-center  h5 d-flex mb-28">
                  Gracias!
                </span>
              </div>
              <div className="col-12">
                <span className="justify-content-center align-items-center h5 d-flex mb-24 ">
                  ESPERAMOS SU VISITA!
                </span>
              </div>
              <div className="col-12 btn_reserva">
                <a className="a_reserva"
                href="https://api.whatsapp.com/send?phone=+5491134585757&text=Hola%20Bas%C3%AD%20!!%20%F0%9F%91%8B%F0%9F%8F%BC%20Quiero%20reservar/averiguar%20un%20turno%20%F0%9F%98%81"
                rel="noopener noreferrer"
                target="_blank"><Button
                  type="button"
                  className="mx-auto btn  h5 d-flex list-group-item"
                  text="Reserva"
                ></Button></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12">
          <h5 className="text-center location_title">Ubicación</h5>
        </div>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.8600316948423!2d-58.32079658476559!3d-34.784298780412996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32c643eee69eb%3A0xe6bf0a2b9ecce05!2sHumberto%20Primo%206496%2C%20B1843BML%20San%20Francisco%20Solano%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1629582371291!5m2!1ses-419!2sar"
            width="100%"
            height="100%"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          </div>
      </div>
    </>
  );
};

export default Location;
