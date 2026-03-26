import './Secteurs.css'

const secteurs = [
  {
    id: 'erp',
    gradient: 'linear-gradient(135deg,#7b0000,#c0392b)',
    title: 'ERP — Etablissements Recevant du Public',
    desc: 'Hotels, centres commerciaux, restaurants, cinemas — mise en conformite SSI complete avec alarme et evacuation reglementaire.',
    items: ['Systeme d\'alarme Type 1 a 4', 'Desenfumage reglementaire', 'Maintenance annuelle obligatoire'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <path d="M9 22V12h6v10"/>
      </svg>
    ),
  },
  {
    id: 'industrie',
    gradient: 'linear-gradient(135deg,#1a2a40,#2980b9)',
    title: 'Industrie & Sites Petroliers',
    desc: 'Usines, entrepots, raffineries — detection gaz et flamme, extinction automatique et systemes ATEX pour zones a risques.',
    items: ['Detecteurs gaz & flamme ATEX', 'Extinction CO2 & gaz inertes', 'Equipements certifies ATEX'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
      </svg>
    ),
  },
  {
    id: 'tertiaire',
    gradient: 'linear-gradient(135deg,#0d2b1a,#27ae60)',
    title: 'Tertiaire & Data Centers',
    desc: 'Bureaux, banques, salles serveurs — extinction propre a gaz Novec ou FM200 sans dommages sur les equipements.',
    items: ['Extinction FM200 / Novec 1230', 'Detection tres haute sensibilite', 'MISTRAL DFHS par aspiration'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4M6 8l2 4 2-6 2 4 1-2h3"/>
      </svg>
    ),
  },
  {
    id: 'sante',
    gradient: 'linear-gradient(135deg,#2c0854,#8e44ad)',
    title: 'Hopitaux & Sante',
    desc: 'Protection des patients et du personnel : detection precoce, alarme zonee et procedures d\'evacuation adaptees.',
    items: ['Detection adressable zonee', 'Signalisation sonore/visuelle', 'Interfaçage CMSI / GTB'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: 'residentiel',
    gradient: 'linear-gradient(135deg,#7f2e00,#e67e22)',
    title: 'Residentiel & Coproprietes',
    desc: 'Logements individuels et collectifs — DAAF autonomes CALYPSO, interconnectables par radio, simples a installer.',
    items: ['DAAF CALYPSO-II / II-R', 'Liaison radio sans fil', 'EGEE-LCD desenfumage habitat'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
        <path d="M2 20h20M4 20V10l8-6 8 6v10"/>
        <path d="M10 20v-6h4v6"/>
      </svg>
    ),
  },
  {
    id: 'administration',
    gradient: 'linear-gradient(135deg,#003050,#0ea5e9)',
    title: 'Administration & Collectivites',
    desc: 'Mairies, universites, prefectures — systemes SSI complets avec maintenance preventive et formations du personnel.',
    items: ['SSI categorie A certifie', 'Contrats de maintenance Finsecur', 'Formation des utilisateurs'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
  },
]

export default function Secteurs() {
  return (
    <section id="secteurs" className="secteurs section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Secteurs d'activite</span>
          <h2 className="section-title">Solutions par Secteur</h2>
          <p className="section-subtitle">
            Des systemes adaptes a chaque environnement, conformes aux reglementations en vigueur.
          </p>
        </div>
        <div className="secteurs-grid">
          {secteurs.map(s => (
            <div key={s.id} className="secteur-card">
              <div className="secteur-img" style={{ background: s.gradient }}>
                <div className="secteur-icon">{s.icon}</div>
                <div className="secteur-overlay" />
              </div>
              <div className="secteur-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul>
                  {s.items.map(item => (
                    <li key={item}>
                      <span className="secteur-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="secteur-link">Nous contacter &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
