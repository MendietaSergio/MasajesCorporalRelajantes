import './Card.css'

const Card = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-6 vertical-line">
            <h3 className="text-center trato">Trato</h3>
            <span>
              Cada cliente tendrá su propio tratamiento específico adaptado a
              sus necesidades.</span>
              <br/>
              <br/>
              <span>
              Hay una variedad de técnicas que se pueden
              utilizar, según el resultado de la sesión. </span>
              <br/>
              <br/>
              <span>
              Ya sea que desee un
              masaje de mantenimiento para mantener sus músculos relajados y
              flexibles, una sesión de rehabilitación para ayudar a la
              recuperación de una lesión o un masaje para ayudarlo a estar listo
              antes de su evento deportivo.
            </span>
          </div>
          <div className="col-6 vertical-line">
            <ul className="list-group ">
              <div className="row m-1">
                <div className="col-2 correct">
                  <i className="far fa-check-circle "></i>
                </div>
                <div className="col-10 h6">
                  <li className="list-group-item">Descontracturante</li>
                </div>
              </div>
              <div className="row m-1">
                <div className="col-2 correct">
                  <i className="far fa-check-circle "></i>
                </div>
                <div className="col-10">
                  <li className="list-group-item">Drenaje Lifatico</li>
                </div>
              </div>
              <div className="row m-1">
                <div className="col-2 correct">
                  <i className="far fa-check-circle "></i>
                </div>
                <div className="col-10">
                  <li className="list-group-item">Reductor</li>
                </div>
              </div>
              <div className="row m-1">
                <div className="col-2 correct">
                  <i className="far fa-check-circle "></i>
                </div>
                <div className="col-10">
                  <li className="list-group-item">Reflexologia                  
                  </li>
                </div>
              </div>
              <div className="row m-1">
                <div className="col-2 correct">
                  <i className="far fa-check-circle "></i>
                </div>
                <div className="col-10">
                  <li className="list-group-item">Efecto calmante y relajante</li>
                </div>
              </div>
              <div className="row m-1">
                <div className="col-2 correct">
                  <i className="far fa-check-circle "></i>
                </div>
                <div className="col-10">
                  <li className="list-group-item">
                    Terapia para mejorar circularion sanguinea
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
