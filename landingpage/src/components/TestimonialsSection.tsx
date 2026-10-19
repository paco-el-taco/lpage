const testimonials = [
  {
    quote: 'La cocina de todos los días también merece ese algo especial.',
    byline: 'COCINA DE CASA',
    featured: false,
  },
  {
    quote: 'Un ingrediente de siempre, para volver a disfrutar cada bocado.',
    byline: 'MESA COMPARTIDA',
    featured: true,
  },
  {
    quote: 'Ese sabor que convierte una receta sencilla en un buen recuerdo.',
    byline: 'AMANTE DE LA COCINA',
    featured: false,
  },
]

function TestimonialsSection() {
  return (
    <section className="testimonials-section section-pad" id="experiencias">
      <div className="testimonials-heading">
        <p className="eyebrow">EN LA MESA, MEJOR</p>
        <h2>El sabor se comparte.</h2>
        <p>Ejemplos de contenido. Se reemplazarán por opiniones reales antes de publicar.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map(({ quote, byline, featured }) => (
          <article
            className={`quote-card${featured ? ' quote-card-featured' : ''}`}
            key={byline}
          >
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>{quote}</p>
            <span className="quote-byline">
              IDEA DE TESTIMONIO <i>·</i> {byline}
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection
