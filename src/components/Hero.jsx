import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
        <div className="hero-orb orb-3" />
      </div>

      <div className="container hero-content">
        <div className="hero-badge fade-up">
          <span className="badge-dot" />
          Distributeur Exclusif Finsecur — Afrique &amp; Moyen-Orient
        </div>

        <h1 className="hero-title fade-up-1">
          Solutions avancees de<br />
          <span className="gradient-text">supervision securite</span><br />
          incendie
        </h1>

        <p className="hero-subtitle fade-up-2">
          DamanTech distribue exclusivement les produits Finsecur en Afrique et au Moyen-Orient.
          Centrales SSI BALTIC / KARA / PACIFIC, supervision ScanServer, detection et formations certifiees.
        </p>

        <div className="hero-actions fade-up-3">
          <a href="#produits" className="btn btn-fire btn-lg">
            Voir nos produits
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost btn-lg">Nous contacter</a>
        </div>

        <div className="hero-certs fade-up-4">
          {['Norme EN 54', 'NF SSI certifie', 'ISO 9001', 'Formation agreee'].map(c => (
            <div key={c} className="cert-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
              <span>{c}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Defiler</span>
      </div>
    </section>
  )
}
