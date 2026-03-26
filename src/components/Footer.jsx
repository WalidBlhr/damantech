import './Footer.css'

const productLinks = [
  { label: 'Centrales SSI (BALTIC / KARA / PACIFIC)', href: '#centrales' },
  { label: 'Detecteurs (CAP / CORAIL)', href: '#detecteurs' },
  { label: 'Supervision ScanServer', href: '#supervision' },
  { label: 'Extinction automatique', href: '#extinction' },
  { label: 'Diffuseurs CALYPSO / SEXTANT', href: '#accessoires' },
  { label: 'DAAF autonomes', href: '#daaf' },
]

const serviceLinks = [
  { label: 'Gestion de projets SSI', href: '#projets' },
  { label: 'Formation — Definition SSI', href: '#formations' },
  { label: 'Formation — Zones de securite', href: '#formations' },
  { label: 'Formation — Parametrage KARA 8 UP', href: '#formations' },
  { label: 'Formation — Parametrage BALTIC', href: '#formations' },
  { label: 'Formation — Parametrage PACIFIC', href: '#formations' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">

        <div className="footer-brand">
          <a href="#home" className="logo">
            <span className="logo-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <defs>
                  <linearGradient id="flg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#c0392b"/><stop offset="1" stopColor="#e74c3c"/>
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="10" fill="url(#flg)"/>
                <path d="M20 6L30 11L30 21C30 26.5 25.5 31 20 33C14.5 31 10 26.5 10 21L10 11Z" fill="white" opacity="0.12" stroke="white" strokeWidth="1"/>
                <path d="M20 14C20 14 23 17 23 20C23 21.6 21.7 22.8 20 23C18.3 22.8 17 21.6 17 20C17 18 18.5 15.5 20 14Z" fill="white" opacity="0.92"/>
                <path d="M20 20C20 20 21.5 21.5 21.5 23C21.5 24 20.8 24.8 20 25C19.2 24.8 18.5 24 18.5 23C18.5 21.5 20 20 20 20Z" fill="#ff8c42" opacity="0.9"/>
              </svg>
            </span>
            <div className="logo-text-group">
              <span className="logo-name">Daman<strong>Tech</strong></span>
              <span className="logo-sub">Supervision Securite</span>
            </div>
          </a>

          <p>
            Distributeur exclusif Finsecur pour l'Afrique et le Moyen-Orient.
            Systemes de securite incendie, supervision et formations.
          </p>

          <address>
            13-15, rue des Entrepreneurs<br/>
            91560 Crosne — France<br/>
            <a href="tel:+33169243921">+33 (0) 1 69 24 39 21</a><br/>
            <a href="mailto:Contact@damantech.com">Contact@damantech.com</a>
          </address>
        </div>

        <div className="footer-cols">
          <div className="footer-col">
            <h4>Produits Finsecur</h4>
            <ul>
              {productLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
          </div>
          <div className="footer-col">
            <h4>Informations</h4>
            <ul>
              <li><a href="#about">A propos de DamanTech</a></li>
              <li><a href="#finsecur">Partenariat Finsecur</a></li>
              <li><a href="#contact">Formulaire de contact</a></li>
              <li><a href="tel:+33169243921">+33 (0) 1 69 24 39 21</a></li>
              <li><a href="mailto:Contact@damantech.com">Contact@damantech.com</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} DamanTech. Tous droits reserves. Distributeur exclusif Finsecur — Afrique &amp; Moyen-Orient.</p>
          <div className="footer-legal">
            <a href="#">Mentions legales</a>
            <a href="#">Termes et conditions</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
