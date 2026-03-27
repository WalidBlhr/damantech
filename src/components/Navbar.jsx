import { useState, useEffect } from 'react'
import './Navbar.css'

const Logo = () => (
  <a href="#home" className="logo">
    <span className="logo-icon">
      <svg viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="lg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1a6fc4"/><stop offset="1" stopColor="#0e4a8a"/>
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
    </span>
    <div className="logo-text-group">
      <span className="logo-name">
        <span className="logo-daman">Daman</span><span className="logo-tech">Tech</span>
      </span>
      <span className="logo-sub">Supervision Securite</span>
    </div>
  </a>
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
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Verrouille le scroll quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <Logo />

        {/* Overlay cliquable pour fermer */}
        {open && <div className="nav-backdrop" onClick={close} aria-hidden="true" />}

        <nav className={`nav-links${open ? ' open' : ''}`} aria-label="Navigation principale">
          {links.map(l => (
            <a key={l.label} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href="#contact" className="btn btn-fire nav-cta" onClick={close}>
            Contactez-nous
          </a>
        </nav>

        <button
          className={`hamburger${open ? ' active' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}
