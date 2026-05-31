import "./index.css";
import { useEffect, useMemo } from "react";
import Particles from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

function App() {
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
        <a href="#" className="nav-logo">NK</a>

        <div className="nav-links">
          <a href="#trabajos">Trabajos</a>
          <a href="#estudio">Estudio</a>
          <a href="#turnos">Turnos</a>
          <a href="https://instagram.com/nnikocaceres" target="_blank" rel="noreferrer">
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

      <section id="trabajos" className="section">
        <h2>Últimos Trabajos</h2>

        <p className="section-text">
          Tattoos reales realizados por Niko Cáceres.
        </p>

        <div
          className="elfsight-app-218a40ad-a8a5-4e08-adce-ce4e6d618485"
          data-elfsight-app-lazy
        ></div>
      </section>

      <section id="especialidades" className="section specialties">
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
  </section>

  <section className="section process dark">
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
        <p>Definimos fecha, horario y detalles de la sesión en el estudio privado.</p>
      </div>
    
      <div className="process-step">
        <span>4</span>
        <h3>Venís a tatuarte</h3>
        <p>Te esperamos con todo listo para que vivas una experiencia cómoda.</p>
      </div>
    </div>
  </section>

      <section id="estudio" className="section dark">S
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
      </section>

      <section id="turnos" className="section booking">
        <h2>Reservá tu Turno</h2>

        <p className="section-text">
          Consultá disponibilidad, presupuestos o dejá tu idea para coordinar
          una sesión.
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
      </section>

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