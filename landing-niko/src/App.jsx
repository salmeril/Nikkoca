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

      <section className="section dark">
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

      <section className="section booking">
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