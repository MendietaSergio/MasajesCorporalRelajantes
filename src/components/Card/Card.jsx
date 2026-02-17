import { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Card.css";

const Card = () => {
  const treatments = [
    "Descontracturante",
    "Drenaje Linfático",
    "Reductor",
    "Reflexología",
    "Efecto Calmante y Relajante",
    "Terapia para mejorar circulación sanguínea",
  ];

  const descriptions = [
    {
      title: "Tratamientos a tu Medida",
      text1:
        "Tu cuerpo es único, y tu tratamiento también debería serlo. Adaptamos cada sesión específicamente a tus necesidades, combinando las técnicas más efectivas para ti.",
      text2:
        "Ya sea que busques mantener tus músculos relajados y flexibles, necesites rehabilitación tras una lesión o quieras preparar tu cuerpo para rendir al máximo en el deporte, diseñamos el plan perfecto para tu bienestar.",
    },
    {
      title: "Un Espacio Pensado para Ti",
      text1:
        "Cada sesión es una experiencia personalizada. Nos tomamos el tiempo para entender lo que tu cuerpo necesita y seleccionamos las mejores técnicas para lograrlo.",
      text2:
        "Desde un masaje de mantenimiento para liberar tensiones, hasta terapias de recuperación o preparación deportiva; nuestro objetivo es que te sientas renovado, sin dolor y listo para seguir adelante.",
    },
    {
      title: "Atención Personalizada",
      text1:
        "Recibe un tratamiento exclusivo adaptado a tus objetivos. Utilizamos una variedad de técnicas especializadas según lo que tu cuerpo requiera en cada visita.",
      text2:
        "Ideal para quienes buscan desde un masaje de relajación y mantenimiento, hasta terapias de rehabilitación específicas o preparación física de alto rendimiento.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % descriptions.length);
    }, 6000); // Change every 6 seconds

    return () => clearInterval(timer);
  }, [descriptions.length]);

  return (
    <div className="treatment-container">
      <div className="treatment-content">
        <div className="treatment-info relative-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="slider-content"
            >
              <h3 className="section-title">
                {descriptions[currentIndex].title}
              </h3>
              <p className="treatment-text">
                {descriptions[currentIndex].text1}
              </p>
              <p className="treatment-text">
                {descriptions[currentIndex].text2}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="slider-indicators">
            {descriptions.map((_, index) => (
              <span
                key={index}
                className={`indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="treatment-list-wrapper">
          <ul className="treatment-list">
            {treatments.map((item, index) => (
              <li key={index} className="treatment-item">
                <FaCheckCircle className="check-icon" size={20} />
                <span className="treatment-name">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
