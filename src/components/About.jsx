import './About.css'

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Exclusivite garantie',
    desc: 'Seul distributeur Finsecur agree pour l\'Afrique et le Moyen-Orient.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
        <path d="M22 4L12 14.01l-3-3"/>
      </svg>
    ),
    title: 'Produits 100% authentiques',
    desc: 'Garantie fabricant Finsecur sur l\'ensemble des produits fournis.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Expertise certifiee',
    desc: 'Formations agreees Finsecur pour les professionnels de la securite incendie.',
  },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-inner">

        {/* Visual */}
        <div className="about-visual">
          <div className="about-card">
            <div className="about-card-bg" />
            <div className="about-illustration">
              <svg viewBox="0 0 220 220" fill="none">
                <circle cx="110" cy="110" r="95" stroke="rgba(231,76,60,0.1)" strokeWidth="1.5"/>
                <circle cx="110" cy="110" r="68" stroke="rgba(231,76,60,0.15)" strokeWidth="1.5" strokeDasharray="6 4"/>
                <path
                  d="M110 38 L160 65 L160 123 C160 153 138 174 110 182 C82 174 60 153 60 123 L60 65 Z"
                  fill="rgba(231,76,60,0.08)" stroke="rgba(231,76,60,0.3)" strokeWidth="1.5"
                />
                <path
                  d="M110 80C110 80 130 100 130 118C130 129 121 137 110 138.5C99 137 90 129 90 118C90 100 110 80 110 80Z"
                  fill="rgba(231,76,60,0.5)"
                />
                <path
                  d="M110 118C110 118 120 128 120 136C120 141 115.5 144 110 145C104.5 144 100 141 100 136C100 128 110 118 110 118Z"
                  fill="#ff8c42" opacity="0.88"
                />
              </svg>
            </div>
          </div>
          <div className="about-float-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
              <path d="M22 4L12 14.01l-3-3"/>
            </svg>
            <span>Exclusivite Finsecur</span>
          </div>
          <div className="about-float-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
            </svg>
            <span>Afrique &amp; Moyen-Orient</span>
          </div>
        </div>

        {/* Text */}
        <div className="about-content">
          <span className="section-tag">Qui sommes-nous</span>
          <h2 className="section-title">
            DamanTech,<br />votre partenaire<br />securite incendie
          </h2>
          <p className="about-text">
            DamanTech est une societe specialisee dans la <strong>distribution et la supervision
            des systemes de securite incendie</strong>, basee en France (Crosne, Essonne). Nous sommes
            le <strong>distributeur exclusif agree Finsecur</strong> pour l'ensemble de l'Afrique
            et du Moyen-Orient.
          </p>
          <p className="about-text">
            Nous proposons une offre complete : fourniture des equipements Finsecur, conseil technique,
            gestion de projets SSI et formations certifiees pour les installateurs et exploitants.
          </p>

          <div className="about-values">
            {values.map(v => (
              <div key={v.title} className="about-value">
                <div className="about-value-icon">{v.icon}</div>
                <div>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-address">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>13-15, rue des Entrepreneurs, 91560 Crosne — France</span>
          </div>

          <a href="#contact" className="btn btn-fire">Soumettre un projet</a>
        </div>
      </div>
    </section>
  )
}
