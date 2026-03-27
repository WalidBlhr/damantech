import { useEffect, useState, useCallback } from 'react'
import './Intro.css'

export default function Intro({ onDone }) {
  const [phase, setPhase] = useState('radar')  // radar → reveal → partner → out

  const skip = useCallback(() => onDone(), [onDone])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { onDone(); return }
    if (sessionStorage.getItem('dt_intro_v2')) { onDone(); return }
    sessionStorage.setItem('dt_intro_v2', '1')

    const t1 = setTimeout(() => setPhase('reveal'),  500)
    const t2 = setTimeout(() => setPhase('partner'), 1100)
    const t3 = setTimeout(() => setPhase('out'),     1900)
    const t4 = setTimeout(() => onDone(),            2500)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [onDone])

  return (
    <div className={`intro intro--${phase}`} onClick={skip} aria-hidden="true">

      {/* ── Radar ────────────────────────────── */}
      <div className="radar-wrap">
        <div className="radar-ring r1" />
        <div className="radar-ring r2" />
        <div className="radar-ring r3" />
        <div className="radar-sweep" />
        {/* Points de détection qui s'allument */}
        <div className="radar-dot d1" />
        <div className="radar-dot d2" />
        <div className="radar-dot d3" />
        <div className="radar-dot d4" />
        <div className="radar-dot d5" />
        <div className="radar-cross" />
      </div>

      {/* ── Logo ─────────────────────────────── */}
      <div className="intro-logo">
        <div className="intro-icon">
          <svg viewBox="0 0 48 48" fill="none">
            <defs>
              <linearGradient id="ig2" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1a6fc4"/><stop offset="1" stopColor="#0e4a8a"/>
              </linearGradient>
            </defs>
            <rect width="48" height="48" rx="11" fill="url(#ig2)"/>
            <path d="M24 8L33 13V24C33 29.5 29 34 24 36C19 34 15 29.5 15 24V13Z"
                  fill="white" opacity="0.15" stroke="white" strokeWidth="1"/>
            <path d="M24 18C24 18 27 21.5 27 24.5C27 26.4 25.7 27.8 24 28C22.3 27.8 21 26.4 21 24.5C21 21.5 24 18 24 18Z"
                  fill="white" opacity="0.95"/>
            <path d="M24 24.5C24 24.5 25.8 26.3 25.8 28C25.8 29.2 25 30 24 30.2C23 30 22.2 29.2 22.2 28C22.2 26.3 24 24.5 24 24.5Z"
                  fill="#d94035"/>
          </svg>
        </div>

        <div className="intro-wordmark">
          <span className="intro-daman">DAMAN</span>
          <span className="intro-tech">TECH</span>
        </div>

        <div className="intro-tagline">Supervision Sécurité Incendie</div>
      </div>

      {/* ── Badge Finsecur ───────────────────── */}
      <div className="intro-partner">
        <div className="partner-line" />
        <span>Distributeur Exclusif</span>
        <div className="partner-brand">
          <svg viewBox="0 0 16 16" fill="none" width="10" height="10">
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M5 8l2.5 2.5L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          FINSECUR
        </div>
        <div className="partner-zone">Afrique &amp; Moyen-Orient</div>
        <div className="partner-line" />
      </div>

      <div className="intro-skip">Cliquer pour passer</div>
    </div>
  )
}
