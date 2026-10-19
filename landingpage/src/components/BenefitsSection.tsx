const benefits = [
  {
    number: '01',
    title: 'Sabor que se queda',
    description:
      'Un toque sabroso y familiar para darle carácter a tus platos de todos los días.',
  },
  {
    number: '02',
    title: 'Hecha para cocinar',
    description:
      'Una grasa versátil para saltear, dorar y llevar tus recetas favoritas a otro nivel.',
  },
  {
    number: '03',
    title: 'Tradición en la mesa',
    description:
      'Recuperamos un ingrediente de siempre y lo ponemos de nuevo en el centro de la cocina.',
  },
]

function BenefitsSection() {
  return (
    <section className="benefits-section section-pad" id="beneficios">
      <div className="section-heading">
        <p className="eyebrow">LO BUENO DE LO SIMPLE</p>
        <h2>Un pequeño cambio.<br /><em>Un gran sabor.</em></h2>
        <p className="section-intro">
          Hay ingredientes que no necesitan complicarse. Solo necesitan
          encontrar su lugar en tu cocina.
        </p>
      </div>
      <div className="benefit-grid">
        {benefits.map((benefit) => (
          <article className="benefit-card" key={benefit.number}>
            <span className="benefit-number">{benefit.number}</span>
            <span className="benefit-spark" aria-hidden="true">✳</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BenefitsSection
