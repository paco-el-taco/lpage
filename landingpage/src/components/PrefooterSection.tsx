import Arrow from './Arrow'

function PrefooterSection() {
  return (
    <section className="prefooter-section" id="contacto">
      <div className="prefooter-content">
        <span className="prefooter-mark" aria-hidden="true">C.</span>
        <p className="eyebrow eyebrow-light">CANDELA — MANTECA DE CERDO</p>
        <h2>El buen sabor<br />siempre <em>encuentra su lugar.</em></h2>
        <a className="button button-outline-light" href="#inicio">
          Volver al inicio <Arrow />
        </a>
      </div>
    </section>
  )
}

export default PrefooterSection
