import './FinsecurSection.css'

const certs = ['EN 54', 'NF SSI', 'ISO 9001', 'ISO 14001', 'CE']

const values = [
  {
    color: '#e74c3c',
    title: 'Fiabilite',
    desc: 'Produits testes pour les environnements les plus exigeants.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <path d="M22 4L12 14.01l-3-3"/>
      </svg>
    ),
  },
  {
    color: '#e67e22',
    title: 'Simplicite',
    desc: "Systemes con&#231;us pour etre simples a installer et maintenir.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
  {
    color: '#27ae60',
    title: 'Robustesse',
    desc: 'Materiaux haute qualite pour une durabilite maximale.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function FinsecurSection() {
  return (
    <section id="finsecur" className="finsecur-section section">
      <div className="container finsecur-inner">

        {/* Content */}
        <div className="finsecur-content">
          <span className="section-tag">Notre partenaire fabricant</span>
          <h2 className="section-title">
            Finsecur —{' '}
            <span className="gradient-text">25 ans d'innovation</span>
          </h2>
          <p className="finsecur-text">
            <strong>Fabricant francais independant</strong>, Finsecur concoit et fabrique depuis
            plus de 25 ans des systemes de securite incendie et d'extinction automatique a gaz,
            reconnus pour leur <strong>fiabilite, simplicite et robustesse</strong>. Certifies
            EN 54, NF SSI, ISO 9001 et ISO 14001.
          </p>
          <p className="finsecur-text">
            DamanTech est le{' '}
            <strong>distributeur exclusif agree Finsecur pour l'Afrique et le Moyen-Orient</strong>.
            Ce partenariat garantit l'authenticite des produits, la disponibilite du stock et un
            support technique de qualite pour toute la region.
          </p>

          <div className="finsecur-values">
            {values.map(v => (
              <div key={v.title} className="fval">
                <div className="fval-icon" style={{ '--fc': v.color }}>{v.icon}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: v.desc }} />
                </div>
              </div>
            ))}
          </div>

          <div className="finsecur-certs">
            {certs.map(c => <span key={c} className="fcert">{c}</span>)}
          </div>
        </div>

        {/* Visual — simulated central panel */}
        <div className="finsecur-visual">
          <div className="panel">
            <div className="panel-header">
              <div className="panel-dots">
                <span style={{ background: '#e74c3c' }} />
                <span style={{ background: '#f39c12' }} />
                <span style={{ background: '#27ae60' }} />
              </div>
              <span>BALTIC 1024 — Centrale SSI Finsecur</span>
            </div>
            <div className="panel-body">
              <div className="panel-brand">
                <div className="panel-brand-name">FINSECUR</div>
                <div className="panel-brand-model">BALTIC 1024 SSI</div>
              </div>
              <div className="panel-alert">
                <div className="alert-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/>
                    <line x1="12" y1="17" x2="12.01" y2="17"/>
                  </svg>
                </div>
                <div className="alert-text">
                  <div className="alert-title">ALARME INCENDIE</div>
                  <div className="alert-loc">Zone 02 — Niveau R+1</div>
                </div>
                <span className="alert-badge">ALARME</span>
              </div>
              <div className="panel-zones">
                {[
                  { label: 'Zone 1 — RDC', status: 'ok' },
                  { label: 'Zone 3 — R+2', status: 'ok' },
                  { label: 'Zone 4 — Parking', status: 'ok' },
                  { label: 'Zone 5 — Toiture', status: 'fault' },
                ].map(z => (
                  <div key={z.label} className={`zone zone-${z.status}`}>
                    <span>{z.label}</span>
                    <span className="zone-status">{z.status === 'ok' ? 'OK' : 'DEFAUT'}</span>
                  </div>
                ))}
              </div>
              <div className="panel-footer">
                <span>&#128737; 24 detecteurs actifs</span>
                <span>&#128267; 72h autonomie</span>
                <span>&#128279; ScanServer</span>
              </div>
            </div>
          </div>
          <div className="float-badge badge-l">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <div>
              <strong>Distributeur Exclusif</strong>
              <span>Afrique &amp; Moyen-Orient</span>
            </div>
          </div>
          <div className="float-badge badge-r">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <div>
              <strong>25+ ans</strong>
              <span>Finsecur</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
