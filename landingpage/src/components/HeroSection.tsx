import Arrow from './Arrow'

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-copy">
        <p className="eyebrow"><span /> UN CLÁSICO, A TU MANERA</p>
        <h1>El sabor de siempre. <em>Hecho para hoy.</em></h1>
        <p className="hero-description">
          Conoce Candela: una propuesta de manteca de cerdo para cocinar con
          más sabor, más intención y ese toque que hace que todos quieran repetir.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#beneficios">
            Conoce Candela <Arrow />
          </a>
          <a className="text-link" href="#proceso">Nuestra filosofía</a>
        </div>
        <div className="hero-note">
          <span className="note-star" aria-hidden="true">✳</span>
          <span>Un ingrediente noble.<br />Infinitas formas de disfrutarlo.</span>
        </div>
      </div>

      <div className="hero-visual" id="producto">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=85"
          alt="Preparación de alimentos en una cocina cálida y luminosa"
        />
        <div className="hero-image-wash" />
        <div className="product-jar" aria-label="Propuesta visual del envase de Candela">
          <div className="jar-lid" />
          <div className="jar-body">
            <span className="jar-brand">candela<span>.</span></span>
            <span className="jar-rule" />
            <span className="jar-name">MANTECA<br />DE CERDO</span>
            <span className="jar-weight">COCINA CON CARÁCTER</span>
          </div>
          <div className="jar-base" />
        </div>
        <div className="visual-caption">
          <span>01 — EL INGREDIENTE</span>
          <span>Simple. Versátil. Nuestro.</span>
        </div>
        <span className="visual-stamp" aria-hidden="true">DE LA<br />CASA<br /><b>✳</b></span>
      </div>
    </section>
  )
}

export default HeroSection
