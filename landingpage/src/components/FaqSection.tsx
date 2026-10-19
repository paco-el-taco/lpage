const questions = [
  {
    question: '¿Qué es la manteca de cerdo?',
    answer:
      'Es la grasa obtenida del cerdo y utilizada tradicionalmente para cocinar. Esta página presenta una propuesta de marca para este ingrediente.',
  },
  {
    question: '¿Cómo puedo usarla?',
    answer:
      'Puedes probarla para saltear vegetales, dorar papas o preparar masas y recetas tradicionales. Empieza con poca cantidad y ajústala a tu gusto.',
  },
  {
    question: '¿Tiene sabor fuerte?',
    answer:
      'El sabor puede variar según el origen y el proceso de elaboración. La propuesta de Candela busca un perfil equilibrado que acompañe tus recetas.',
  },
  {
    question: '¿Dónde la puedo comprar?',
    answer:
      'La disponibilidad, presentación y canales de compra se definirán cuando el producto esté listo para salir al mercado.',
  },
]

function FaqSection() {
  return (
    <section className="faq-section section-pad" id="preguntas">
      <div className="faq-intro">
        <p className="eyebrow">¿TE QUEDÓ ALGUNA DUDA?</p>
        <h2>Preguntas<br /><em>frecuentes.</em></h2>
        <p>Lo esencial, sin vueltas.</p>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }) => (
          <details className="faq-item" key={question}>
            <summary>{question}<span aria-hidden="true" /></summary>
            <p>{answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
