import  Button  from '../Button/Button';
import "./Location.css";

const Location = () => {
  return (
    <>
      <div className="toCome ">
        <img src="./img/img_02.jpg" title="Productos" className="img" />
        <div className="row">
          <div className="container">
            <div className=" card-img-overlay list-group nav d-flex justify-content-center align-items-center">
              <div className="col-12">
                <span className="justify-content-center align-items-center text-success h5 d-flex ">
                  Gracias por venir...
                </span>
              </div>
              <div className="col-12">
                <span className="justify-content-center align-items-center text-success h5 d-flex ">
                  Esperamos su visita.
                </span>
              </div>
              <div className="col-12">
                <Button className="mx-auto  btn text-success h5 d-flex list-group-item">
                  Esperamos su visita.
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="location mt-2"></div>
    </>
  );
};

export default Location;
