import './Hero.css'

const kpis = [
  { value: '15+', label: "ans d'expertise" },
  { value: '40+', label: 'pays desservis' },
  { value: '6',   label: 'gammes produits' },
  { value: '24h', label: 'délai de réponse' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-grid" />
        <div className="hero-orb orb-1" />
        <div className="hero-orb orb-2" />
      </div>

      <div className="container hero-inner">

        {/* ── Colonne gauche ── */}
        <div className="hero-copy">

          {/* Badge distributeur exclusif */}
          <div className="hero-badge fade-up">
            <span className="badge-dot" />
            Distributeur Exclusif Agréé
          </div>

          {/* Logo Finsecur mis en avant */}
          <div className="hero-finsecur fade-up-1">
            <img
              src={`${import.meta.env.BASE_URL}finsecur-logo.svg`}
              alt="Finsecur"
              className="hero-finsecur-logo"
            />
          </div>

          <h1 className="hero-title fade-up-2">
            Équipements SSI certifiés<br />
            <span className="gradient-text">livrés en Afrique</span><br />
            &amp; Moyen-Orient
          </h1>

          <p className="hero-subtitle fade-up-3">
            DamanTech distribue l'intégralité de la gamme Finsecur — centrales BALTIC,
            KARA, PACIFIC, détecteurs, déclencheurs — et assure la formation certifiée
            de vos équipes.
          </p>

          <div className="hero-actions fade-up-4">
            <a href="#produits" className="btn btn-fire btn-lg">
              Voir le catalogue
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost btn-lg">Demander un devis</a>
          </div>

          {/* Certifications */}
          <div className="hero-certs fade-up-4">
            {['NF SSI certifié', 'EN 54 conforme', 'ISO 9001', 'Formation agréée'].map(c => (
              <div key={c} className="cert-badge">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* ── Colonne droite — KPIs + zone ── */}
        <div className="hero-right fade-up-2">

          {/* Card partenaire */}
          <div className="hero-partner-card">
            <div className="partner-card-header">
              <span className="partner-card-label">Partenaire officiel</span>
            </div>
            <div className="partner-card-body">
              <img
                src={`${import.meta.env.BASE_URL}finsecur-logo.svg`}
                alt="Finsecur"
                className="partner-card-logo"
              />
              <p>Seul distributeur agréé Finsecur pour l'ensemble du continent africain et du Moyen-Orient.</p>
            </div>
            <div className="partner-card-zone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              </svg>
              Afrique &amp; Moyen-Orient — Stock disponible
            </div>
          </div>

          {/* KPIs */}
          <div className="hero-kpis">
            {kpis.map(k => (
              <div key={k.label} className="hero-kpi">
                <strong>{k.value}</strong>
                <span>{k.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="hero-scroll">
        <div className="scroll-mouse"><div className="scroll-wheel" /></div>
        <span>Défiler</span>
      </div>
    </section>
  )
}
