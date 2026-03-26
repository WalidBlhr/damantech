import { useEffect, useRef, useState } from 'react'
import './StatsBar.css'

function CountUp({ target, suffix = '' }) {
  const [val, setVal] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const duration = 1600
        const start = performance.now()
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          setVal(Math.round(ease * target))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref} className="stat-number">{val}{suffix}</span>
}

const stats = [
  { target: 25, suffix: '+', label: "Annees d'experience Finsecur" },
  { target: 50, suffix: '+', label: 'Pays couverts' },
  { target: 6,  suffix: '',  label: 'Gammes de produits' },
  { target: 100, suffix: '%', label: 'Conformite reglementaire' },
]

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container stats-bar-inner">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <CountUp target={s.target} suffix={s.suffix} />
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
