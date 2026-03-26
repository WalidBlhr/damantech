import { useEffect, useRef, useState } from 'react'
import './Products.css'

const categories = [
  { id: 'all',        label: 'Tous' },
  { id: 'centrales',  label: 'Centrales SSI' },
  { id: 'detection',  label: 'Detection' },
  { id: 'echo',       label: 'Gamme ECHO' },
  { id: 'declencheur',label: 'Declencheurs' },
  { id: 'habitation', label: 'Habitation' },
]

const products = [
  /* ── CENTRALES ─────────────────────────────────────── */
  {
    id: 'ssi-cat-a',
    cat: 'centrales',
    name: 'SSI Categorie A / Type 1',
    badge: 'Centrale SSI',
    badgeColor: '#e74c3c',
    desc: 'Centrales ECS, ECS/CMSI et CMSI avec l\'ensemble des peripheriques associes pour etablissements recevant du public.',
    img: '/products/cat_centrales_a.webp',
    specs: ['BALTIC 512 UP & BALTIC 1024', 'KARA 8 UP Type A & B', 'Adressable & conventionnel', 'EN 54 / NF SSI Cat. A'],
  },
  {
    id: 'ssi-cat-b',
    cat: 'centrales',
    name: 'SSI Categorie B / Type 2A',
    badge: 'Centrale SSI',
    badgeColor: '#e74c3c',
    desc: 'Centrales CMSI et peripheriques associes pour equipements d\'alarme de type 2A — etablissements de taille moyenne.',
    img: '/products/cat_centrales_b.webp',
    specs: ['PACIFIC & PACIFIC Type B', 'EGEE II habitation', 'Configuration par logiciel', 'EN 54 / NF SSI Cat. B'],
  },
  {
    id: 'type-2b',
    cat: 'centrales',
    name: 'SONORA II — Type 2B',
    badge: 'Alarme Type 2B',
    badgeColor: '#c0392b',
    desc: 'Nouvelle gamme SONORA II alliant simplicite, conformite et efficacite — mise en oeuvre rapide, architecture simplifiee.',
    img: '/products/cat_centrales_sonora.webp',
    specs: ['Gamme SONORA II', 'Mise en oeuvre rapide', 'Architecture simplifiee', 'Conformite NF'],
  },

  /* ── DETECTION ─────────────────────────────────────── */
  {
    id: 'cap-112a',
    cat: 'detection',
    name: 'CAP 112A',
    badge: 'Detecteur fumee',
    badgeColor: '#e67e22',
    desc: 'Detecteur ponctuel adressable de fumee en 12V. Haute fiabilite pour systemes SSI adressables.',
    img: '/products/cap_112a.webp',
    specs: ['Adressable 12V', 'Optique ponctuel', 'EN 54-7 certifie', 'Compatible BALTIC / KARA'],
  },
  {
    id: 'cap-200',
    cat: 'detection',
    name: 'CAP 200',
    badge: 'Detecteur chaleur',
    badgeColor: '#e67e22',
    desc: 'Detecteur ponctuel conventionnel de chaleur en 24V — fiable et robuste pour environnements exigeants.',
    img: '/products/cap_200.webp',
    specs: ['Conventionnel 24V', 'Thermique ponctuel', 'EN 54-5 certifie', 'Ideal industrie'],
  },
  {
    id: 'cap-312a',
    cat: 'detection',
    name: 'CAP 312A',
    badge: 'Detecteur combine',
    badgeColor: '#e67e22',
    desc: 'Detecteur ponctuel adressable combine fumee-chaleur en 12V — double technologie pour detection optimale.',
    img: '/products/cap_312a.webp',
    specs: ['Adressable 12V', 'Fumee + Chaleur', 'EN 54-7 & EN 54-5', 'Haute sensibilite'],
  },
  {
    id: 'sextant-doa',
    cat: 'detection',
    name: 'SEXTANT-DOA',
    badge: 'Detecteur optique',
    badgeColor: '#e67e22',
    desc: 'Detecteur optique de fumee adressable a 7 seuils de sensibilite reglables — technologie avancee Finsecur.',
    img: '/products/sextant_doa.webp',
    specs: ['Adressable', '7 seuils reglables', 'Optique de fumee', 'EN 54-7'],
  },
  {
    id: 'boreal-lr',
    cat: 'detection',
    name: 'BOREAL LR',
    badge: 'Detecteur lineaire',
    badgeColor: '#8e44ad',
    desc: 'Detecteur optique lineaire de fumee avec reflecteur — ideal pour grandes salles, entrepots et halls industriels.',
    img: '/products/boreal_lr.webp',
    specs: ['Lineaire avec reflecteur', 'Grande portee', 'Halls & entrepots', 'EN 54-12'],
  },
  {
    id: 'mistral-200',
    cat: 'detection',
    name: 'MISTRAL 200 LCD',
    badge: 'Haute sensibilite',
    badgeColor: '#27ae60',
    desc: 'Detecteur de fumee par aspiration de haute sensibilite (DFHS) avec ecran LCD — pour salles informatiques et archives.',
    img: '/products/mistral_200.webp',
    specs: ['Aspiration DFHS', 'Ecran LCD', 'Tres haute sensibilite', 'Salles serveurs'],
  },

  /* ── ECHO TYPE 4 ───────────────────────────────────── */
  {
    id: 'echo-et4r',
    cat: 'echo',
    name: 'ECHO-ET4R',
    badge: 'Alarme Type 4 Radio',
    badgeColor: '#3498db',
    desc: 'Centrale radio d\'alarme type 4 — solution ultra performante alliant design, compacite et connectivite sans fil.',
    img: '/products/echo_et4r.webp',
    specs: ['Radio sans fil', 'Alarme Type 4', 'Design compact', 'ERP & petits ERT'],
    featured: true,
  },
  {
    id: 'echo-et4s-4z',
    cat: 'echo',
    name: 'ECHO ET4S-4Z',
    badge: 'Alarme Type 4 Secteur',
    badgeColor: '#3498db',
    desc: 'Centrale d\'alarme de type 4 avec 4 zones configurables — ideal pour commerces, bureaux et ERP de taille moyenne.',
    img: '/products/echo_et4s_4z.webp',
    specs: ['4 zones configurables', 'Alimentation secteur', 'Alarme Type 4', 'Simple a installer'],
  },
  {
    id: 'echo-edslr',
    cat: 'echo',
    name: 'ECHO-EDSLR',
    badge: 'Diffuseur S+L Radio',
    badgeColor: '#3498db',
    desc: 'Diffuseur sonore et lumineux d\'alarme type 4 et PPMS radio — signalisation d\'evacuation complete.',
    img: '/products/echo_edslr.webp',
    specs: ['Sonore + Lumineux', 'Radio adressable', 'PPMS compatible', 'Tres haute visibilite'],
  },
  {
    id: 'echo-edmr',
    cat: 'echo',
    name: 'ECHO-EDMR',
    badge: 'Declencheur Radio T4',
    badgeColor: '#3498db',
    desc: 'Declencheur manuel d\'alarme type 4 radio — transmission instantanee de l\'alarme sans cablage.',
    img: '/products/echo_edmr.webp',
    specs: ['Manuel radio', 'Alarme Type 4', 'Sans cablage', 'Transmission instantanee'],
  },

  /* ── DECLENCHEURS ──────────────────────────────────── */
  {
    id: 'sextant-dma',
    cat: 'declencheur',
    name: 'SEXTANT DMA',
    badge: 'Declencheur adressable',
    badgeColor: '#c0392b',
    desc: 'Declencheur manuel adressable (DM) — haute fiabilite assurant transmission instantanee de l\'alarme. Certifie EN 54-11.',
    img: '/products/sextant_dma.webp',
    specs: ['Adressable', 'EN 54-11 certifie', 'Transmission instantanee', 'Compatible BALTIC / KARA'],
  },
  {
    id: 'sextant-dmc',
    cat: 'declencheur',
    name: 'SEXTANT DMC',
    badge: 'Declencheur conventionnel',
    badgeColor: '#c0392b',
    desc: 'Declencheur manuel conventionnel — solution fiable et economique pour systemes d\'alarme incendie conventionnels.',
    img: '/products/sextant_dmc.webp',
    specs: ['Conventionnel', 'EN 54-11', 'Rouge standard', 'Toutes installations'],
  },
  {
    id: 'sextant-bcm',
    cat: 'declencheur',
    name: 'SEXTANT BCM — Desenfumage',
    badge: 'Commande desenfumage',
    badgeColor: '#7f8c8d',
    desc: 'Boitier de commande manuelle conventionnel con&#231;u pour le desenfumage — declenchement manuel des volets et exutoires.',
    img: '/products/sextant_bcm.webp',
    specs: ['Desenfumage', 'Commande manuelle', 'Conventionnel', 'EN 12101 compatible'],
  },

  /* ── HABITATION ────────────────────────────────────── */
  {
    id: 'calypso-ii',
    cat: 'habitation',
    name: 'CALYPSO-II',
    badge: 'DAAF Autonome',
    badgeColor: '#f39c12',
    desc: 'Detecteur Avertisseur Autonome de Fumee (DAAF) pour habitations. Technologie optique professionnelle. Norme NF EN 14604.',
    img: '/products/calypso_ii.webp',
    specs: ['DAAF autonome', 'Optique professionnel', 'NF EN 14604', 'Logements & coproprietes'],
  },
  {
    id: 'calypso-ii-r',
    cat: 'habitation',
    name: 'CALYPSO-II-R',
    badge: 'DAAF Radio',
    badgeColor: '#f39c12',
    desc: 'Detecteur Avertisseur Autonome de Fumee avec liaison radio — interconnexion sans fil entre detecteurs du logement.',
    img: '/products/calypso_ii_r.webp',
    specs: ['Liaison radio integree', 'Interconnexion sans fil', 'Optique professionnel', 'NF EN 14604'],
    featured: true,
  },
  {
    id: 'egee-lcd',
    cat: 'habitation',
    name: 'EGEE-LCD',
    badge: 'Desenfumage habitat',
    badgeColor: '#27ae60',
    desc: 'Systeme de desenfumage 20 niveaux pour immeuble d\'habitation (3eme famille B) — gestion complete de l\'evacuation des fumees.',
    img: '/products/egee_lcd.webp',
    specs: ['20 niveaux', 'Immeuble 3eme famille B', 'Adressable', 'Desenfumage complet'],
  },
]

function ProductCard({ product, visible }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article className={`product-card${product.featured ? ' featured' : ''}${visible ? ' visible' : ''}`}>
      {product.featured && <div className="featured-label">⭐ Produit phare</div>}

      <div className="product-img-wrap">
        {!imgError ? (
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="product-img-fallback">
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M24 4C24 4 14 14 14 22a10 10 0 0020 0c0-8-10-18-10-18z"/>
              <circle cx="24" cy="40" r="3" fill="currentColor"/>
            </svg>
          </div>
        )}
        <div className="product-img-overlay" />
      </div>

      <div className="product-body">
        <div
          className="product-badge"
          style={{ color: product.badgeColor, background: `${product.badgeColor}18`, border: `1px solid ${product.badgeColor}28` }}
        >
          {product.badge}
        </div>
        <h3>{product.name}</h3>
        <p>{product.desc}</p>
        <ul>
          {product.specs.map(s => (
            <li key={s}>
              <span className="dot" style={{ background: product.badgeColor }} />
              {s}
            </li>
          ))}
        </ul>
        <a href="#contact" className="product-cta">Demander un devis &rarr;</a>
      </div>
    </article>
  )
}

export default function Products() {
  const [activeCat, setActiveCat] = useState('all')
  const [visible, setVisible] = useState(new Set())
  const gridRef = useRef(null)

  const filtered = activeCat === 'all' ? products : products.filter(p => p.cat === activeCat)

  useEffect(() => {
    setVisible(new Set())
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id
            setTimeout(() => setVisible(v => new Set([...v, id])), parseInt(entry.target.dataset.delay || 0))
          }
        })
      }, { threshold: 0.08 })
      if (gridRef.current) {
        gridRef.current.querySelectorAll('[data-id]').forEach(el => observer.observe(el))
      }
      return () => observer.disconnect()
    }, 50)
    return () => clearTimeout(timer)
  }, [activeCat])

  return (
    <section id="produits" className="products section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Gamme Finsecur</span>
          <h2 className="section-title">Nos Produits</h2>
          <p className="section-subtitle">
            Toute la gamme Finsecur distribuee par DamanTech pour l'Afrique et le Moyen-Orient.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="product-filters">
          {categories.map(c => (
            <button
              key={c.id}
              className={`filter-btn${activeCat === c.id ? ' active' : ''}`}
              onClick={() => setActiveCat(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="products-grid" ref={gridRef}>
          {filtered.map((p, i) => (
            <div key={p.id} data-id={p.id} data-delay={i * 60}>
              <ProductCard product={p} visible={visible.has(p.id)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
