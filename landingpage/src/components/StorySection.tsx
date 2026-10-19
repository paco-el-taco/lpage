import Arrow from './Arrow'

function StorySection() {
  return (
    <section className="story-section section-pad" id="proceso">
      <div className="story-image-wrap">
        <img
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85"
          alt="Ingredientes frescos preparados para una comida compartida"
          loading="lazy"
        />
        <span className="image-tag">COCINA CON CARÁCTER</span>
      </div>
      <div className="story-copy">
        <p className="eyebrow">02 — NUESTRA IDEA</p>
        <h2>De toda la vida.<br /><em>Con otra mirada.</em></h2>
        <p>
          Antes de que todo viniera en un empaque complicado, la cocina
          empezaba con buenos ingredientes y recetas compartidas. Candela
          nace de esa idea: volver a lo esencial y disfrutar el proceso.
        </p>
        <p>
          Una propuesta honesta alrededor de la manteca de cerdo, para darle
          a cada preparación un sabor familiar y un toque propio.
        </p>
        <a className="text-link text-link-dark" href="#preguntas">
          Conoce más <Arrow />
        </a>
      </div>
    </section>
  )
}

export default StorySection
