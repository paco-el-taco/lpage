import Arrow from './Arrow'

function MidCtaSection() {
  return (
    <section className="mid-cta-section" aria-label="Descubre el sabor Candela">
      <div className="mid-cta-art" aria-hidden="true">
        <span className="art-circle art-circle-one" />
        <span className="art-circle art-circle-two" />
        <span className="art-sun">✳</span>
      </div>
      <div className="mid-cta-copy">
        <p className="eyebrow eyebrow-light">EL SECRETO ESTÁ EN LO ESENCIAL</p>
        <h2>Vuelve a cocinar<br />con <em>intención.</em></h2>
      </div>
      <a className="button button-light" href="#proceso">
        Descubre nuestra idea <Arrow />
      </a>
    </section>
  )
}

export default MidCtaSection
