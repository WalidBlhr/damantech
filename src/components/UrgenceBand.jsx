import './UrgenceBand.css'

export default function UrgenceBand() {
  return (
    <div className="urgence-band">
      <div className="urgence-bg">
        <div className="urgence-orb urgence-orb-1" />
        <div className="urgence-orb urgence-orb-2" />
      </div>
      <div className="container urgence-inner">
        <div className="urgence-left">
          <div className="urgence-icon-wrap">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
              <line x1="12" y1="9" x2="12" y2="13"/>
              <line x1="12" y1="17" x2="12.01" y2="17"/>
            </svg>
          </div>
          <div>
            <strong>Vous avez un projet ? Informez-nous.</strong>
            <span>Notre equipe technique vous repond sous 24h pour toute demande de devis ou d'information.</span>
          </div>
        </div>
        <a href="#contact" className="btn btn-fire btn-lg urgence-btn">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
          </svg>
          Contactez-nous
        </a>
      </div>
    </div>
  )
}
