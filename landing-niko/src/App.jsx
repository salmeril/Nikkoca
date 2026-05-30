import "./index.css";

function App() {
  return (
    <>
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <img src="/logo-nk.png" alt="NK Tattoo Studio" className="logo" />

          <h1>NK TATTOO STUDIO</h1>

          <p>
            Black & Grey • Blackwork • Tradicional
            <br />
            Estudio Privado en Berazategui
          </p>

          <div className="buttons">
            <a
              href="https://wa.me/541140798101"
              target="_blank"
              className="btn"
            >
              Reservar Turno
            </a>

            <a
              href="#trabajos"
              className="btn btn-outline"
            >
              Ver Trabajos
            </a>
          </div>
        </div>
      </section>

      <section id="trabajos" className="section">
        <h2>Trabajos Destacados</h2>

        <div className="gallery">
          <img src="/tattoo1.jpg" alt="" />
          <img src="/tattoo2.jpg" alt="" />
          <img src="/tattoo3.jpg" alt="" />
          <img src="/tattoo4.jpg" alt="" />
          <img src="/tattoo5.jpg" alt="" />
          <img src="/tattoo6.jpg" alt="" />
        </div>
      </section>

      <section className="section dark">
        <h2>El Estudio</h2>

        <p>
          Un espacio privado diseñado para que cada sesión sea cómoda,
          profesional y personalizada.
        </p>

        <p>
          Atención individual, higiene certificada y diseños exclusivos para
          cada cliente.
        </p>
      </section>

      <section className="section">
        <h2>Reservá tu Turno</h2>

        <p>
          Consultanos por disponibilidad, presupuestos y diseños personalizados.
        </p>

        <a
          href="https://wa.me/541140798101"
          target="_blank"
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
        >
          @nnikocaceres
        </a>
      </footer>
    </>
  );
}

export default App;