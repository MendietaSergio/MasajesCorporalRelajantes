import { useState } from "react";
import "./Header.css";
import Logo from "../../img/logo.png";
import { FaBars, FaTimes, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  const closeNav = () => setShow(false);

  return (
    <>
      <header className={`header ${show ? "active" : ""}`}>
        <div className="container header-container">
          <div className="logo-container">
            <a href="/" onClick={closeNav} className="logo-link">
              <img src={Logo} alt="Logo" className="logo-img" />
              <span className="logo-text">RELAX</span>
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={handleShow}
            aria-label="Toggle menu"
          >
            {show ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <nav className={`nav-menu ${show ? "show" : ""}`}>
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={closeNav}>
                  Relax
                </a>
              </li>
            </ul>

            <div className="social-links">
              <a
                className="social-icon whatsapp"
                href="https://api.whatsapp.com/send?phone=+5491134585757&text=Hola%20Bas%C3%AD%20!!%20%F0%9F%91%8B%F0%9F%8F%BC%20Quiero%20reservar/averiguar%20un%20turno%20%F0%9F%98%81"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                className="social-icon facebook"
                href="https://www.facebook.com/Masajes-Corporal-y-Relajante-100340772233615"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </nav>
        </div>
      </header>
      {show && <div className="overlay" onClick={closeNav} />}
    </>
  );
};

export default Header;
