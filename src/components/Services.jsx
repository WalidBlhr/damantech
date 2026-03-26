import './Services.css'

const formations = [
  'Definition des systemes SSI',
  'Definition des zones de securite',
  'Parametrage ECS-CMSI KARA 8 UP',
  'Parametrage ECS-CMSI BALTIC 512 / 1024',
  'Parametrage CMSI PACIFIC',
]

export default function Services() {
  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Expertise</span>
          <h2 className="section-title">Nos Services</h2>
          <p className="section-subtitle">
            Au-dela de la fourniture, DamanTech vous accompagne de la conception jusqu'a la mise en service.
          </p>
        </div>

        <div className="services-grid">
          {/* Projets */}
          <div className="service-card">
            <div className="service-icon-wrap" style={{ '--sc': '#e74c3c' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            <div className="service-content">
              <span className="service-tag" id="projets">Projets SSI</span>
              <h3>Gestion de Projets SSI</h3>
              <p>
                Prise en charge complete de vos projets de securite incendie : etude technique,
                selection des equipements Finsecur adaptes, coordination des travaux et reception du
                systeme en conformite avec la reglementation.
              </p>
              <ul className="service-list">
                <li>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l3 3 7-6"/>
                  </svg>
                  Audit et analyse des risques
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l3 3 7-6"/>
                  </svg>
                  Definition du systeme SSI adapte
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l3 3 7-6"/>
                  </svg>
                  Plans d'implantation des equipements
                </li>
                <li>
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l3 3 7-6"/>
                  </svg>
                  Suivi de chantier et reception
                </li>
              </ul>
              <a href="#contact" className="btn btn-outline">Soumettre un projet</a>
            </div>
          </div>

          {/* Formations */}
          <div className="service-card">
            <div className="service-icon-wrap" style={{ '--sc': '#3498db' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <div className="service-content">
              <span className="service-tag" id="formations">Formations</span>
              <h3>Formations Techniques Finsecur</h3>
              <p>
                Modules de formation certifies sur les produits Finsecur destines aux installateurs,
                mainteneurs et exploitants de systemes de securite incendie.
              </p>
              <ul className="service-list formation-list">
                {formations.map(f => (
                  <li key={f}>
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 8l3 3 7-6"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-outline">S'inscrire a une formation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
