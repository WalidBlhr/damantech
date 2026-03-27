import './Hero.css'

const kpis = [
  { value: '15+', label: "ans d'expertise" },
  { value: '40+', label: 'pays desservis' },
  { value: '6',   label: 'gammes produits' },
  { value: '24h', label: 'délai de réponse' },
]

/* Wordmark inline dans le hero — plus grand */
const HeroWordmark = () => (
  <svg className="hero-wordmark" viewBox="0 0 300 58" fill="none" aria-label="DamanTech">
    <line x1="0" y1="24" x2="300" y2="24" stroke="#d94035" strokeWidth="3" strokeLinecap="round"/>
    <text x="1" y="51"
      fontFamily="Inter, system-ui, sans-serif"
      fontWeight="900" fontSize="32"
      fill="#f0e8e0" letterSpacing="-0.8">Daman</text>
    <text x="130" y="51"
      fontFamily="Inter, system-ui, sans-serif"
      fontWeight="300" fontSize="32"
      fill="#d94035" letterSpacing="2">Tech</text>
  </svg>
)

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

          {/* DamanTech en grand, en premier */}
          <div className="fade-up">
            <HeroWordmark />
          </div>

          {/* Tag distributeur */}
          <div className="hero-badge fade-up-1">
            <span className="badge-dot" />
            Distributeur Exclusif Agréé Finsecur
          </div>

          <h1 className="hero-title fade-up-2">
            Équipements SSI certifiés<br />
            <span className="gradient-text">livrés en Afrique</span><br />
            &amp; Moyen-Orient
          </h1>

          <p className="hero-subtitle fade-up-3">
            Seul distributeur agréé Finsecur pour toute l'Afrique et le Moyen-Orient.
            Centrales BALTIC, KARA, PACIFIC, détecteurs, déclencheurs et formation certifiée de vos équipes.
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
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/>
                </svg>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* ── Colonne droite ── */}
        <div className="hero-right fade-up-2">

          {/* Card partenaire Finsecur */}
          <div className="hero-partner-card">
            <div className="partner-card-header">
              <span className="partner-card-label">Partenaire officiel exclusif</span>
            </div>
            <div className="partner-card-body">
              <img
                src={`${import.meta.env.BASE_URL}finsecur-logo.svg`}
                alt="Finsecur"
                className="partner-card-logo"
              />
              <p>Finsecur, leader français des systèmes de sécurité incendie. DamanTech assure la distribution exclusive de toute la gamme pour l'Afrique et le Moyen-Orient.</p>
            </div>
            <div className="partner-card-zone">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
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
