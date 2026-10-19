import Arrow from './Arrow'

function ClosingCtaSection() {
  return (
    <section className="closing-cta-section" id="cta-final">
      <div className="closing-cta-inner">
        <span className="closing-asterisk" aria-hidden="true">✳</span>
        <div>
          <p className="eyebrow eyebrow-light">TU COCINA, TUS REGLAS</p>
          <h2>Haz espacio para<br /><em>un nuevo clásico.</em></h2>
        </div>
        <a className="button button-light" href="#producto">
          Conoce Candela <Arrow />
        </a>
      </div>
    </section>
  )
}

export default ClosingCtaSection
