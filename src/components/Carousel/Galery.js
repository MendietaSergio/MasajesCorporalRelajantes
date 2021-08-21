import "./Galery.css";
const Galery = () => {
  return (
    <>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide my-3"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="./img/img_01.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="./img/img_02.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src="./img/img_03.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img src="./img/img_04.jpg" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container section  ">
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item mx-lg-4 px-4 py-4 text-light">Alivia el dolor</li>
          <li className="nav-item mx-lg-4 px-4 py-4 text-light">Reduce el estrés</li>
          <li className="nav-item mx-lg-4 px-4 py-4 text-light">Duerme mejor</li>
        </ul>
      </div>
    </>
  );
};

export default Galery;
