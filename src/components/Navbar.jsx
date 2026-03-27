import { useState, useEffect } from 'react'
import './Navbar.css'

/* ── Wordmark SVG : barre du T passe au-dessus de "Daman" ── */
const Wordmark = () => (
  <svg className="logo-wordmark" viewBox="0 0 160 38" fill="none" aria-label="DamanTech">
    {/* Barre du T — s'étend sur toute la largeur du logo */}
    <line x1="0" y1="6" x2="160" y2="6" stroke="#d94035" strokeWidth="2.2" strokeLinecap="round"/>
    {/* "Daman" en blanc */}
    <text x="0" y="32" fontFamily="Inter, system-ui, sans-serif" fontWeight="800"
          fontSize="22" fill="#e4edf8" letterSpacing="-0.5">Daman</text>
    {/* "Tech" en rouge */}
    <text x="90" y="32" fontFamily="Inter, system-ui, sans-serif" fontWeight="300"
          fontSize="22" fill="#d94035" letterSpacing="1">Tech</text>
  </svg>
)

const links = [
  { label: 'Produits',  href: '#produits' },
  { label: 'Secteurs',  href: '#secteurs' },
  { label: 'Services',  href: '#services' },
  { label: 'Finsecur',  href: '#finsecur' },
  { label: 'A propos',  href: '#about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close  = () => setOpen(false)
  const toggle = () => setOpen(o => !o)

  return (
    <>
      <div
        className={`nav-backdrop${open ? ' nav-backdrop--visible' : ''}`}
        onClick={close}
        aria-hidden="true"
      />

      <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">

          {/* Logo */}
          <a href="#home" className="logo" aria-label="DamanTech - Accueil">
            <div className="logo-icon-wrap">
              <svg viewBox="0 0 40 40" fill="none" width="36" height="36">
                <defs>
                  <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#e8621a"/><stop offset="1" stopColor="#7a3010"/>
                  </linearGradient>
                </defs>
                <rect width="40" height="40" rx="10" fill="url(#lg)"/>
                <path d="M20 6L30 11L30 21C30 26.5 25.5 31 20 33C14.5 31 10 26.5 10 21L10 11Z"
                      fill="white" opacity="0.12" stroke="white" strokeWidth="1"/>
                <path d="M20 14C20 14 23 17 23 20C23 21.6 21.7 22.8 20 23C18.3 22.8 17 21.6 17 20C17 18 18.5 15.5 20 14Z"
                      fill="white" opacity="0.92"/>
                <path d="M20 20C20 20 21.5 21.5 21.5 23C21.5 24 20.8 24.8 20 25C19.2 24.8 18.5 24 18.5 23C18.5 21.5 20 20 20 20Z"
                      fill="#d94035" opacity="0.9"/>
              </svg>
            </div>
            <div className="logo-text-group">
              <Wordmark />
              <span className="logo-sub">Distribution &amp; Formation</span>
            </div>
          </a>

          {/* Nav */}
          <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Navigation">
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={close}>{l.label}</a>
            ))}

            {/* Logo Finsecur dans le nav */}
            <div className="nav-finsecur">
              <span>par</span>
              <img
                src={`${import.meta.env.BASE_URL}finsecur-logo.svg`}
                alt="Finsecur"
                className="nav-finsecur-logo"
              />
            </div>

            <a href="#contact" className="btn btn-fire nav-cta" onClick={close}>
              Contactez-nous
            </a>
          </nav>

          <button
            className={`hamburger${open ? ' active' : ''}`}
            onClick={toggle}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
          >
            <span/><span/><span/>
          </button>
        </div>
      </header>
    </>
  )
}
