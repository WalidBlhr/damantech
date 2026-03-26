import { useEffect, useState } from 'react'
import './Intro.css'

export default function Intro({ onDone }) {
  // phases: 'flame' → 'text-in' → 'extinguish' → 'done'
  const [phase, setPhase] = useState('flame')

  useEffect(() => {
    // 1. Flamme s'allume (0 → 1.2s)
    // 2. Texte "DAMAN TECH" entre (1.2s)
    // 3. Flamme s'éteint (2.4s)
    // 4. Tout disparaît (3.4s) → onDone
    const t1 = setTimeout(() => setPhase('text-in'),    1200)
    const t2 = setTimeout(() => setPhase('extinguish'), 2400)
    const t3 = setTimeout(() => setPhase('done'),       3800)
    const t4 = setTimeout(() => onDone(),               4200)
    return () => [t1, t2, t3, t4].forEach(clearTimeout)
  }, [onDone])

  if (phase === 'done') return null

  return (
    <div className={`intro intro--${phase}`}>
      {/* Particules de braise */}
      <div className="sparks">
        {Array.from({ length: 18 }).map((_, i) => (
          <div key={i} className="spark" style={{ '--i': i }} />
        ))}
      </div>

      {/* Flamme SVG animée */}
      <div className="flame-wrap">
        <svg className="flame-svg" viewBox="0 0 120 180" fill="none">
          <defs>
            <linearGradient id="fo" x1="60" y1="170" x2="60" y2="4" gradientUnits="userSpaceOnUse">
              <stop stopColor="#c0392b"/>
              <stop offset="0.4" stopColor="#e74c3c"/>
              <stop offset="0.7" stopColor="#ff8c42"/>
              <stop offset="1" stopColor="#f1c40f"/>
            </linearGradient>
            <linearGradient id="fi" x1="60" y1="155" x2="60" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e74c3c"/>
              <stop offset="0.5" stopColor="#ff8c42"/>
              <stop offset="1" stopColor="#fff176"/>
            </linearGradient>
          </defs>
          {/* Flamme extérieure */}
          <path className="flame-outer" d="
            M60 170
            C30 160 10 140 8 115
            C5 90 20 70 25 55
            C28 42 22 28 20 18
            C35 30 38 45 42 38
            C46 30 44 12 50 4
            C54 18 56 35 60 40
            C64 35 66 18 70 4
            C76 12 74 30 78 38
            C82 45 85 30 100 18
            C98 28 92 42 95 55
            C100 70 115 90 112 115
            C110 140 90 160 60 170Z
          "/>
          {/* Flamme intérieure */}
          <path className="flame-inner" d="
            M60 155
            C42 148 30 132 30 112
            C30 94 42 78 46 64
            C49 54 47 42 50 34
            C54 44 56 58 60 62
            C64 58 66 44 70 34
            C73 42 71 54 74 64
            C78 78 90 94 90 112
            C90 132 78 148 60 155Z
          "/>
          {/* Coeur */}
          <path className="flame-core" d="
            M60 140
            C50 134 44 122 46 108
            C48 96 56 86 60 80
            C64 86 72 96 74 108
            C76 122 70 134 60 140Z
          "/>
          {/* Etincelle centrale */}
          <circle className="flame-spark" cx="60" cy="95" r="6"/>
        </svg>

        {/* Effet de chaleur / halo */}
        <div className="flame-halo" />
      </div>

      {/* Texte DAMAN TECH */}
      <div className="intro-text">
        <div className="intro-logo-icon">
          <svg viewBox="0 0 48 48" fill="none">
            <rect width="48" height="48" rx="12" fill="url(#ilg)"/>
            <path d="M24 7L34 13L34 25C34 31.5 29.5 37 24 39C18.5 37 14 31.5 14 25L14 13Z"
                  fill="white" opacity="0.15" stroke="white" strokeWidth="1.2"/>
            <path d="M24 17C24 17 27.5 21 27.5 24.5C27.5 26.5 26 28 24 28.2C22 28 20.5 26.5 20.5 24.5C20.5 21 24 17 24 17Z"
                  fill="white" opacity="0.95"/>
            <path d="M24 24.5C24 24.5 26 26.5 26 28.5C26 30 25.1 31 24 31.2C22.9 31 22 30 22 28.5C22 26.5 24 24.5 24 24.5Z"
                  fill="#ff8c42"/>
            <defs>
              <linearGradient id="ilg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c0392b"/><stop offset="1" stopColor="#e74c3c"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="intro-name">
          <span className="intro-daman">DAMAN</span>
          <span className="intro-tech">TECH</span>
        </div>
        <div className="intro-tagline">Supervision Securite Incendie</div>
      </div>

      {/* Smoke (phase extinguish) */}
      <div className="smoke-wrap">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="smoke-puff" style={{ '--si': i }} />
        ))}
      </div>

      {/* Overlay fade-out */}
      <div className="intro-overlay" />
    </div>
  )
}
