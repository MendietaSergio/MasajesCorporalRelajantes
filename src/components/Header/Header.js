import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const closeNav = () => setShow(false);
  return (
    <>
      <header className="header shadow">
        <section className="container">
          <div className="logos">
            <Link to="/" onClick={closeNav}>
              <img id="logo1" src="logo.png" alt="Logo" title="Logo" />
            </Link>
          </div>
          <button className="btn-menu" onClick={handleShow}>
            <span>
              <i className={show ? "fas fa-times" : "far fa-bars"}></i>
            </span>
          </button>
          <nav
            className={`menu d-flex align-items-center w-100 p-3 ${
              show ? "is-active" : ""
            }`}
          >
            <>
              <Link to="/" onClick={closeNav}>
                Relax
              </Link>
            </>
            <div className="flex-grow-1 d-flex justify-content-end">
              <a className="a_whatsapp"
                href="https://api.whatsapp.com/send?phone=+5491134585757&text=Hola%20Bas%C3%AD%20!!%20%F0%9F%91%8B%F0%9F%8F%BC%20Quiero%20reservar/averiguar%20un%20turno%20%F0%9F%98%81"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com/Masajes-Corporal-y-Relajante-100340772233615"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </nav>
        </section>
      </header>
      {show ? (<div className="active-nav-background" aria-hidden="true" onClick={handleShow} />) : null}
    </>
  );
};
export default Header;
