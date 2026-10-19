import Arrow from './Arrow'

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Candela, inicio">
        <span className="brand-mark" aria-hidden="true">C</span>
        <span>candela<span className="brand-period">.</span></span>
      </a>

      <nav className="main-nav" aria-label="Navegación principal">
        <a href="#beneficios">Por qué Candela</a>
        <a href="#proceso">Nuestra idea</a>
        <a href="#preguntas">Preguntas</a>
      </nav>

      <a className="button button-small button-dark header-cta" href="#producto">
        Descúbrela <Arrow />
      </a>
    </header>
  )
}

export default SiteHeader
