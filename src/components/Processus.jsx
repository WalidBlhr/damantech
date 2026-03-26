import './Processus.css'

const steps = [
  {
    num: '01',
    color: '#e74c3c',
    title: 'Audit & Etude',
    desc: "Visite technique, analyse des risques et etude des besoins reglementaires selon la classification de votre etablissement.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
        <rect x="9" y="3" width="6" height="4" rx="1" ry="1"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
  {
    num: '02',
    color: '#e67e22',
    title: 'Preconisation',
    desc: "Proposition de solution Finsecur adaptee, plans d'implantation des equipements et devis detaille avec phasage des travaux.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    num: '03',
    color: '#3498db',
    title: 'Fourniture',
    desc: "Livraison rapide des equipements Finsecur d'origine depuis notre stock France. Produits certifies avec garantie fabricant.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    num: '04',
    color: '#27ae60',
    title: 'Installation & Mise en service',
    desc: "Pose et cablage par des techniciens certifies Finsecur, parametrage de la centrale et tests de fonctionnement en conditions reelles.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    num: '05',
    color: '#9b59b6',
    title: 'Formation',
    desc: "Formation certifiee du personnel sur la centrale Finsecur : exploitation, gestion des alarmes, evitement des fausses alarmes.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    num: '06',
    color: '#f39c12',
    title: 'SAV & Maintenance',
    desc: "Contrats de maintenance preventive et corrective, verifications annuelles reglementaires et support technique Finsecur.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
]

export default function Processus() {
  return (
    <section id="processus" className="processus section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Notre approche</span>
          <h2 className="section-title">De l'audit a la maintenance</h2>
          <p className="section-subtitle">
            Un accompagnement complet en 6 etapes pour securiser vos biens et respecter la reglementation.
          </p>
        </div>
        <div className="processus-grid">
          {steps.map((s, i) => (
            <div key={s.num} className="proc-card" style={{ '--c': s.color, '--i': i }}>
              <div className="proc-num">{s.num}</div>
              <div className="proc-icon-wrap" style={{ background: `${s.color}18`, border: `1px solid ${s.color}30` }}>
                <div style={{ color: s.color }}>{s.icon}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {i < steps.length - 1 && <div className="proc-connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
