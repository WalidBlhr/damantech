import './MapSection.css'

const ADDRESS = '15 rue des Entrepreneurs, 91560 Crosne, France'
const GMAPS_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed&z=16`
const GMAPS_LINK  = `https://www.google.com/maps/search/${encodeURIComponent(ADDRESS)}`

export default function MapSection() {
  return (
    <div className="map-section">
      <div className="container map-inner">
        {/* Info bloc */}
        <div className="map-info">
          <span className="section-tag">Localisation</span>
          <h3>Siege social</h3>

          <div className="map-detail">
            <div className="map-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <strong>Adresse</strong>
              <span>15, rue des Entrepreneurs</span>
              <span>91560 Crosne — Ile-de-France, France</span>
            </div>
          </div>

          <div className="map-detail">
            <div className="map-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
              </svg>
            </div>
            <div>
              <strong>Telephone</strong>
              <a href="tel:+33169243921">+33 (0) 1 69 24 39 21</a>
            </div>
          </div>

          <div className="map-detail">
            <div className="map-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:Contact@damantech.com">Contact@damantech.com</a>
            </div>
          </div>

          <div className="map-detail">
            <div className="map-detail-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
            </div>
            <div>
              <strong>Horaires</strong>
              <span>Lundi – Vendredi, 9h – 18h</span>
            </div>
          </div>

          <div className="map-detail">
            <div className="map-detail-icon globe">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
              </svg>
            </div>
            <div>
              <strong>Zone desservie</strong>
              <span>Afrique &amp; Moyen-Orient</span>
            </div>
          </div>

          <a
            href={GMAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline map-gmaps-btn"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            Ouvrir dans Google Maps
          </a>
        </div>

        {/* Carte Google Maps */}
        <div className="map-embed-wrap">
          <div className="map-embed-header">
            <span>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 14s-6-4-6-8a6 6 0 0112 0c0 4-6 8-6 8z"/>
                <circle cx="8" cy="6" r="2"/>
              </svg>
              Crosne, Essonne — France
            </span>
            <a href={GMAPS_LINK} target="_blank" rel="noopener noreferrer" className="map-external">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 3H3v10h10V9M10 2h4v4M14 2L8 8"/>
              </svg>
              Agrandir
            </a>
          </div>
          <iframe
            title="Localisation DamanTech — Crosne, France"
            src={GMAPS_EMBED}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="map-embed-footer">
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5C4.4 14.5 1.5 11.6 1.5 8S4.4 1.5 8 1.5 14.5 4.4 14.5 8 11.6 14.5 8 14.5z"/>
              <path d="M7.3 10.7l-2-2 1.1-1.1.9.9 2.1-2.1 1.1 1.1z"/>
            </svg>
            Carte © Google Maps
          </div>
        </div>
      </div>
    </div>
  )
}
