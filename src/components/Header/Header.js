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
                href="https://web.whatsapp.com/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.facebook.com"
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
