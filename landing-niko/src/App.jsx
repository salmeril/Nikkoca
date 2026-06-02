import "./index.css";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function RevealSection({ children, className = "", id = "" }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    zona: "",
    tamano: "",
    idea: "",
  });

  useEffect(() => {
    loadSlim(tsParticles);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const enviarWhatsApp = (e) => {
    e.preventDefault();

    const mensaje = encodeURIComponent(
      `Hola Niko, quiero consultar por un tattoo.

Nombre: ${formData.nombre}
WhatsApp: ${formData.whatsapp}
Zona del cuerpo: ${formData.zona}
Tamaño aproximado: ${formData.tamano}
Idea: ${formData.idea}`
    );

    window.open(`https://wa.me/541140798101?text=${mensaje}`, "_blank");
  };

  const particlesOptions = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      particles: {
        number: {
          value: 45,
        },
        color: {
          value: "#ffffff",
        },
        links: {
          enable: true,
          color: "#ffffff",
          opacity: 0.15,
        },
        move: {
          enable: true,
          speed: 0.7,
        },
        opacity: {
          value: 0.25,
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
    }),
    []
  );

  return (
    <>
      <Particles className="particles" options={particlesOptions} />

      <a
        href="https://wa.me/541140798101"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        WhatsApp
      </a>

      <nav className="navbar">
        <a href="#" className="nav-logo">
          NK
        </a>

        <div className="nav-links">
          <a href="#trabajos">Trabajos</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#estudio">Estudio</a>
          <a href="#turnos">Turnos</a>
          <a
            href="https://instagram.com/nnikocaceres"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <img src="/logo-nk.png" alt="NK Tattoo Studio" className="logo" />

          <h1>NK TATTOO STUDIO</h1>

          <p>
            Tattoos con identidad, técnica y carácter.
            <br />
            Estudio privado en Berazategui.
          </p>

          <div className="buttons">
            <a
              href="https://wa.me/541140798101"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Reservar Turno
            </a>

            <a href="#trabajos" className="btn btn-outline">
              Ver Trabajos
            </a>
          </div>
        </div>
      </section>

      <RevealSection className="stats">
        <div className="stats-grid">
          <div>
            <h3>+500</h3>
            <p>Tatuajes realizados</p>
          </div>

          <div>
            <h3>+200</h3>
            <p>Clientes satisfechos</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Diseños personalizados</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section featured-gallery">
        <h2>Trabajos Destacados</h2>
        
        <p className="section-text">
          Algunas piezas seleccionadas del estudio.
        </p>
        
        <div className="featured-grid">
          <img src="/gallery/tattoo1.jpg" alt="Tattoo destacado 1" />
          <img src="/gallery/tattoo2.jpg" alt="Tattoo destacado 2" />
          <img src="/gallery/tattoo3.jpg" alt="Tattoo destacado 3" />
          <img src="/gallery/tattoo4.jpg" alt="Tattoo destacado 4" />
          <img src="/gallery/tattoo5.jpg" alt="Tattoo destacado 5" />
          <img src="/gallery/tattoo6.jpg" alt="Tattoo destacado 6" />
        </div>
      </RevealSection>

      <RevealSection id="trabajos" className="section">
        <h2>Últimos Trabajos</h2>

        <p className="section-text">
          Tattoos reales realizados por Niko Cáceres.
        </p>

        <div
          className="elfsight-app-218a40ad-a8a5-4e08-adce-ce4e6d618485"
          data-elfsight-app-lazy
        ></div>
      </RevealSection>

      <RevealSection id="especialidades" className="section specialties">
        <h2>Especialidades</h2>

        <div className="specialties-grid">
          <div className="specialty-card">
            <span>01</span>
            <h3>Black & Grey</h3>
            <p>Sombras, contraste y profundidad en piezas con estética oscura.</p>
          </div>

          <div className="specialty-card">
            <span>02</span>
            <h3>Blackwork</h3>
            <p>Líneas sólidas, negros fuertes y diseños con mucha presencia.</p>
          </div>

          <div className="specialty-card">
            <span>03</span>
            <h3>Tradicional</h3>
            <p>Diseños clásicos, trazos firmes y composiciones con carácter.</p>
          </div>

          <div className="specialty-card">
            <span>04</span>
            <h3>Diseños personalizados</h3>
            <p>Cada idea se trabaja para lograr una pieza única y bien pensada.</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section process dark">
        <h2>Cómo reservar</h2>

        <div className="process-grid">
          <div className="process-step">
            <span>1</span>
            <h3>Mandá tu idea</h3>
            <p>Contanos qué querés tatuarte, zona del cuerpo y tamaño aproximado.</p>
          </div>

          <div className="process-step">
            <span>2</span>
            <h3>Armamos la propuesta</h3>
            <p>Revisamos referencias, estilo y detalles para bajarlo a un diseño.</p>
          </div>

          <div className="process-step">
            <span>3</span>
            <h3>Coordinamos turno</h3>
            <p>
              Definimos fecha, horario y detalles de la sesión en el estudio
              privado.
            </p>
          </div>

          <div className="process-step">
            <span>4</span>
            <h3>Venís a tatuarte</h3>
            <p>Te esperamos con todo listo para que vivas una experiencia cómoda.</p>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="estudio" className="section dark">
        <h2>Estudio Privado</h2>

        <div className="studio-card">
          <p>
            Un espacio pensado para que cada sesión sea cómoda, segura y
            personalizada.
          </p>

          <p>
            Atención individual, higiene profesional y diseños trabajados según
            la idea de cada cliente.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="section testimonials">
        <h2>Lo que dicen nuestros clientes</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              "Excelente atención. Me ayudó a bajar la idea y el resultado quedó
              mejor de lo que imaginaba."
            </p>
            <span>★★★★★</span>
          </div>

          <div className="testimonial-card">
            <p>
              "El estudio es súper cómodo, limpio y privado. Volvería sin
              dudarlo."
            </p>
            <span>★★★★★</span>
          </div>

          <div className="testimonial-card">
            <p>
              "Desde el diseño hasta la sesión fue una experiencia impecable."
            </p>
            <span>★★★★★</span>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section faq dark">
        <h2>Preguntas Frecuentes</h2>

        <div className="faq-list">
          <div className="faq-item">
            <h3>¿Cómo reservo un turno?</h3>
            <p>
              Escribinos por WhatsApp con tu idea, zona del cuerpo, tamaño
              aproximado y algunas referencias. Con eso coordinamos disponibilidad
              y presupuesto.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Tengo que dejar seña?</h3>
            <p>
              Sí, para confirmar el turno se solicita una seña. Eso permite
              reservar el día y horario de la sesión.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Puedo llevar una referencia?</h3>
            <p>
              Sí. Podés mandar imágenes de referencia para orientar el estilo,
              pero el diseño se adapta para que sea una pieza personalizada.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Cómo me preparo para la sesión?</h3>
            <p>
              Recomendamos venir descansado, hidratado y haber comido antes.
              También evitá alcohol o medicamentos no indicados antes de tatuarte.
            </p>
          </div>

          <div className="faq-item">
            <h3>¿Me explican los cuidados posteriores?</h3>
            <p>
              Sí. Al terminar la sesión te indicamos cómo limpiar, hidratar y
              cuidar el tatuaje durante los primeros días.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section contact-form-section">
        <h2>Consultá tu idea</h2>

        <p className="section-text">
          Dejanos algunos datos y te respondemos para coordinar presupuesto y
          turno.
        </p>

        <form className="contact-form" onSubmit={enviarWhatsApp}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
          />

          <select
            name="zona"
            value={formData.zona}
            onChange={handleChange}
            required
          >
            <option value="">Zona del cuerpo</option>
            <option value="Brazo">Brazo</option>
            <option value="Pierna">Pierna</option>
            <option value="Espalda">Espalda</option>
            <option value="Pecho">Pecho</option>
            <option value="Cuello">Cuello</option>
            <option value="Otra zona">Otra zona</option>
          </select>

          <select
            name="tamano"
            value={formData.tamano}
            onChange={handleChange}
            required
          >
            <option value="">Tamaño aproximado</option>
            <option value="Pequeño">Pequeño</option>
            <option value="Mediano">Mediano</option>
            <option value="Grande">Grande</option>
            <option value="Manga / pieza grande">Manga / pieza grande</option>
          </select>

          <textarea
            name="idea"
            placeholder="Contanos tu idea o referencia"
            value={formData.idea}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn">
            Enviar por WhatsApp
          </button>
        </form>
      </RevealSection>

      <RevealSection id="turnos" className="section booking">
        <h2>Reservá tu Turno</h2>

        <p className="section-text">
          Consultá disponibilidad, presupuestos o dejá tu idea para coordinar una
          sesión.
        </p>

        <div className="turnero-box">
          <h3>Espacio para turnero</h3>
          <p>
            Acá después podemos insertar Calendly, Google Calendar, TidyCal o un
            formulario propio.
          </p>
        </div>

        <a
          href="https://wa.me/541140798101"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Hablar por WhatsApp
        </a>
      </RevealSection>

      <RevealSection className="section location dark">
        <h2>Ubicación</h2>

        <p className="section-text">
          Estudio privado en Berazategui, Buenos Aires.
        </p>

        <div className="location-card">
          <div>
            <h3>NK Tattoo Studio</h3>
            <p>Atención con turno previo.</p>
            <p>Dirección exacta al confirmar la reserva.</p>
          </div>

          <a
            href="https://wa.me/541140798101"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Consultar ubicación
          </a>
        </div>
      </RevealSection>

      <footer>
        <h3>NK Tattoo Studio</h3>
        <p>Berazategui • Buenos Aires</p>

        <a
          href="https://instagram.com/nnikocaceres"
          target="_blank"
          rel="noreferrer"
        >
          @nnikocaceres
        </a>
      </footer>
    </>
  );
}

export default App;