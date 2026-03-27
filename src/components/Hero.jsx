import './Hero.css'

const certs = ['NF SSI certifié', 'EN 54 conforme', 'ISO 9001', 'Formation agréée']

const kpis = [
  { value: '15+', label: "ans d'expertise" },
  { value: '40+', label: 'pays desservis' },
  { value: '6',   label: 'gammes Finsecur' },
  { value: '24h', label: 'réponse garantie' },
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
        {/* ── Copy ── */}
        <div className="hero-copy">
          <div className="hero-badge fade-up">
            <span className="badge-dot" />
            Distributeur Exclusif Finsecur — Afrique &amp; Moyen-Orient
          </div>

          <h1 className="hero-title fade-up-1">
            Protégez vos<br />
            établissements avec<br />
            <span className="gradient-text">l'expertise Finsecur</span>
          </h1>

          <p className="hero-subtitle fade-up-2">
            DamanTech est le partenaire technique de référence pour les systèmes SSI
            en Afrique et au Moyen-Orient. Centrales BALTIC, KARA, PACIFIC —
            de la conception à la mise en service.
          </p>

          <div className="hero-actions fade-up-3">
            <a href="#produits" className="btn btn-fire btn-lg">
              Voir les produits
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost btn-lg">Demander un devis</a>
          </div>

          <div className="hero-certs fade-up-4">
            {certs.map(c => (
              <div key={c} className="cert-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                  <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                {c}
              </div>
            ))}
          </div>
        </div>

        {/* ── Panel SSI ── */}
        <div className="hero-panel fade-up-2">
          <div className="hero-panel-header">
            <div className="panel-dots">
              <span className="panel-dot panel-dot--green" />
              <span className="panel-dot panel-dot--amber" />
              <span className="panel-dot panel-dot--dim" />
            </div>
            <span className="panel-label">DamanTech — Supervision SSI</span>
          </div>

          <div className="hero-panel-body">
            <svg viewBox="0 0 280 155" fill="none" className="net-svg" aria-hidden="true">
              {/* Grid */}
              {[40,80,120].map(y => (
                <line key={y} x1="0" y1={y} x2="280" y2={y} stroke="rgba(231,76,60,0.06)" strokeWidth="1"/>
              ))}
              {[70,140,210].map(x => (
                <line key={x} x1={x} y1="0" x2={x} y2="155" stroke="rgba(231,76,60,0.06)" strokeWidth="1"/>
              ))}
              {/* Connection lines */}
              <line x1="140" y1="77" x2="70" y2="38"  stroke="rgba(231,76,60,0.22)" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="140" y1="77" x2="210" y2="38" stroke="rgba(231,76,60,0.22)" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="140" y1="77" x2="50"  y2="118" stroke="rgba(231,76,60,0.18)" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="140" y1="77" x2="230" y2="118" stroke="rgba(231,76,60,0.18)" strokeWidth="1" strokeDasharray="4 3"/>
              <line x1="140" y1="77" x2="140" y2="18"  stroke="rgba(231,76,60,0.28)" strokeWidth="1" strokeDasharray="4 3"/>
              {/* Central node */}
              <circle cx="140" cy="77" r="11" fill="rgba(231,76,60,0.12)" stroke="#e74c3c" strokeWidth="1.5"/>
              <circle cx="140" cy="77" r="5"  fill="#e74c3c"/>
              <circle cx="140" cy="77" r="18" fill="none" stroke="rgba(231,76,60,0.18)" strokeWidth="1" className="net-pulse"/>
              {/* Peripheral nodes */}
              {[[70,38],[210,38],[50,118],[230,118],[140,18]].map(([cx,cy]) => (
                <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="rgba(231,76,60,0.18)" stroke="rgba(231,76,60,0.45)" strokeWidth="1"/>
              ))}
              {/* Labels */}
              <text x="140" y="96" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="6.5" fontFamily="monospace">BALTIC-1024</text>
              <text x="70"  y="30" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="6" fontFamily="monospace">DET-01</text>
              <text x="210" y="30" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="6" fontFamily="monospace">DET-02</text>
              <text x="50"  y="135" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="6" fontFamily="monospace">DEC-01</text>
              <text x="230" y="135" textAnchor="middle" fill="rgba(255,255,255,0.28)" fontSize="6" fontFamily="monospace">DEC-02</text>
            </svg>

            <div className="panel-status">
              <span className="panel-dot panel-dot--green pulse-dot-anim" />
              <span>Système nominal — Zones 1–8 surveillées</span>
            </div>
          </div>

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
