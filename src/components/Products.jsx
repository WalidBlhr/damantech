import { useEffect, useRef, useState } from 'react'
import './Products.css'

const BASE = import.meta.env.BASE_URL

const categories = [
  { id: 'all',         label: 'Tous' },
  { id: 'centrales',   label: 'Centrales SSI' },
  { id: 'detection',   label: 'Détection' },
  { id: 'echo',        label: 'Gamme ECHO' },
  { id: 'declencheur', label: 'Déclencheurs' },
  { id: 'habitation',  label: 'Habitation' },
]

const products = [
  /* ── CENTRALES ─────────────────────────────────────── */
  {
    id: 'ssi-cat-a',
    cat: 'centrales',
    name: 'SSI Catégorie A / Type 1',
    badge: 'Centrale SSI',
    badgeColor: '#e74c3c',
    desc: 'Centrales ECS, ECS/CMSI et CMSI avec l\'ensemble des périphériques associés pour établissements recevant du public.',
    img: `${BASE}products/cat_centrales_a.webp`,
    specs: ['BALTIC 512 UP & BALTIC 1024', 'KARA 8 UP Type A & B', 'Adressable & conventionnel', 'EN 54 / NF SSI Cat. A'],
    applications: ['ERP grande capacité', 'Hôpitaux & établissements de santé', 'Hôtels & immeubles de bureaux', 'Sites industriels classés'],
    certifications: ['NF SSI Catégorie A', 'EN 54-2 / EN 54-4', 'Marquage CE', 'Certification CNPP'],
    details: 'Les centrales SSI Catégorie A représentent le plus haut niveau de protection incendie. Elles intègrent un Équipement de Contrôle et de Signalisation (ECS) couplé à un Centralisateur de Mise en Sécurité Incendie (CMSI), permettant la gestion complète des mises en sécurité. Compatible avec toute la gamme de détecteurs adressables Finsecur (SEXTANT, CAP) et les équipements de mise en sécurité.',
    finsecurUrl: 'https://www.finsecur.com/produits/ssi-erp',
  },
  {
    id: 'ssi-cat-b',
    cat: 'centrales',
    name: 'SSI Catégorie B / Type 2A',
    badge: 'Centrale SSI',
    badgeColor: '#e74c3c',
    desc: 'Centrales CMSI et périphériques associés pour équipements d\'alarme de type 2A — établissements de taille moyenne.',
    img: `${BASE}products/cat_centrales_b.webp`,
    specs: ['PACIFIC & PACIFIC Type B', 'EGEE II habitation', 'Configuration par logiciel', 'EN 54 / NF SSI Cat. B'],
    applications: ['ERP de taille moyenne', 'Collectivités locales', 'Écoles & universités', 'Bâtiments administratifs'],
    certifications: ['NF SSI Catégorie B', 'EN 54-2 / EN 54-4', 'Marquage CE'],
    details: 'La gamme Catégorie B offre une solution complète pour les établissements nécessitant une mise en sécurité automatique. La centrale PACIFIC se distingue par sa simplicité de configuration via logiciel PC et sa fiabilité éprouvée. Idéale pour les ERP de moyenne envergure avec des exigences réglementaires strictes.',
    finsecurUrl: 'https://www.finsecur.com/produits/ssi-erp',
  },
  {
    id: 'type-2b',
    cat: 'centrales',
    name: 'SONORA II — Type 2B',
    badge: 'Alarme Type 2B',
    badgeColor: '#c0392b',
    desc: 'Nouvelle gamme SONORA II alliant simplicité, conformité et efficacité — mise en œuvre rapide, architecture simplifiée.',
    img: `${BASE}products/cat_centrales_sonora.webp`,
    specs: ['Gamme SONORA II', 'Mise en œuvre rapide', 'Architecture simplifiée', 'Conformité NF'],
    applications: ['Petits ERP', 'Commerces & boutiques', 'Bureaux', 'Établissements scolaires'],
    certifications: ['NF S 61-936', 'Alarme de Type 2B', 'Marquage CE'],
    details: 'La gamme SONORA II constitue la solution idéale pour les établissements de type 2B. Son architecture simplifiée permet une installation rapide sans qualification spécifique. Le tableau de commande intègre toutes les fonctions nécessaires : diffusion d\'alarme, temporisation, commandes manuelles.',
    finsecurUrl: 'https://www.finsecur.com/produits/alarme-type-2',
  },

  /* ── DETECTION ─────────────────────────────────────── */
  {
    id: 'cap-112a',
    cat: 'detection',
    name: 'CAP 112A',
    badge: 'Détecteur fumée',
    badgeColor: '#e67e22',
    desc: 'Détecteur ponctuel adressable de fumée en 12V. Haute fiabilité pour systèmes SSI adressables.',
    img: `${BASE}products/cap_112a.webp`,
    specs: ['Adressable 12V', 'Optique ponctuel', 'EN 54-7 certifié', 'Compatible BALTIC / KARA'],
    applications: ['Couloirs & circulations', 'Bureaux & salles de réunion', 'Chambres hôtelières', 'Locaux techniques'],
    certifications: ['EN 54-7', 'NF SSI', 'Marquage CE', 'Compatible Classe A & B'],
    details: 'Le CAP 112A est un détecteur optique ponctuel adressable alimenté en 12V, conçu pour les systèmes SSI adressables Finsecur. Son algorithme de traitement du signal garantit une détection précoce des fumées claires tout en minimisant les fausses alarmes. Compatible avec les centrales BALTIC et KARA.',
    finsecurUrl: 'https://www.finsecur.com/produits/detection',
  },
  {
    id: 'cap-200',
    cat: 'detection',
    name: 'CAP 200',
    badge: 'Détecteur chaleur',
    badgeColor: '#e67e22',
    desc: 'Détecteur ponctuel conventionnel de chaleur en 24V — fiable et robuste pour environnements exigeants.',
    img: `${BASE}products/cap_200.webp`,
    specs: ['Conventionnel 24V', 'Thermique ponctuel', 'EN 54-5 certifié', 'Idéal industrie'],
    applications: ['Cuisines professionnelles', 'Locaux industriels', 'Parkings couverts', 'Locaux poussiéreux'],
    certifications: ['EN 54-5', 'Marquage CE', 'NF SSI'],
    details: 'Le CAP 200 est un détecteur thermique conventionnel 24V particulièrement adapté aux environnements où la présence de fumées non liées à un incendie pourrait provoquer des fausses alarmes. Sa robustesse et sa fiabilité en font le choix idéal pour les environnements industriels et les cuisines professionnelles.',
    finsecurUrl: 'https://www.finsecur.com/produits/detection',
  },
  {
    id: 'cap-312a',
    cat: 'detection',
    name: 'CAP 312A',
    badge: 'Détecteur combiné',
    badgeColor: '#e67e22',
    desc: 'Détecteur ponctuel adressable combiné fumée-chaleur en 12V — double technologie pour détection optimale.',
    img: `${BASE}products/cap_312a.webp`,
    specs: ['Adressable 12V', 'Fumée + Chaleur', 'EN 54-7 & EN 54-5', 'Haute sensibilité'],
    applications: ['Locaux à risques mixtes', 'Data centers', 'Salles de contrôle', 'Archives & bibliothèques'],
    certifications: ['EN 54-7', 'EN 54-5', 'NF SSI', 'Marquage CE'],
    details: 'Le CAP 312A intègre deux technologies de détection dans un seul boîtier : optique fumée et thermique chaleur. Cette combinaison permet une analyse plus précise et une réduction significative des fausses alarmes. Idéal pour les environnements où les conditions varient ou pour renforcer la sécurité des zones sensibles.',
    finsecurUrl: 'https://www.finsecur.com/produits/detection',
  },
  {
    id: 'sextant-doa',
    cat: 'detection',
    name: 'SEXTANT-DOA',
    badge: 'Détecteur optique',
    badgeColor: '#e67e22',
    desc: 'Détecteur optique de fumée adressable à 7 seuils de sensibilité réglables — technologie avancée Finsecur.',
    img: `${BASE}products/sextant_doa.webp`,
    specs: ['Adressable', '7 seuils réglables', 'Optique de fumée', 'EN 54-7'],
    applications: ['Bâtiments tertiaires', 'Hôtels', 'Résidences services', 'Établissements de santé'],
    certifications: ['EN 54-7', 'NF SSI', 'Marquage CE'],
    details: 'Le SEXTANT-DOA se distingue par ses 7 niveaux de sensibilité configurables depuis la centrale, permettant d\'adapter finement le comportement du détecteur à son environnement. Sa technologie optique avancée assure une détection précoce des fumées lentes tout en résistant aux polluants atmosphériques courants.',
    finsecurUrl: 'https://www.finsecur.com/produits/detection',
  },
  {
    id: 'boreal-lr',
    cat: 'detection',
    name: 'BOREAL LR',
    badge: 'Détecteur linéaire',
    badgeColor: '#8e44ad',
    desc: 'Détecteur optique linéaire de fumée avec réflecteur — idéal pour grandes salles, entrepôts et halls industriels.',
    img: `${BASE}products/boreal_lr.webp`,
    specs: ['Linéaire avec réflecteur', 'Grande portée', 'Halls & entrepôts', 'EN 54-12'],
    applications: ['Entrepôts logistiques', 'Grandes surfaces', 'Halls industriels', 'Atriums & galeries'],
    certifications: ['EN 54-12', 'Marquage CE', 'NF SSI'],
    details: 'Le BOREAL LR est un détecteur linéaire de fumée par faisceau infrarouge, idéal pour la protection de volumes importants où l\'installation de détecteurs ponctuels serait coûteuse ou difficile. Sa portée étendue et son système à réflecteur simplifient l\'installation en ne nécessitant qu\'un seul point de câblage.',
    finsecurUrl: 'https://www.finsecur.com/produits/detection',
  },
  {
    id: 'mistral-200',
    cat: 'detection',
    name: 'MISTRAL 200 LCD',
    badge: 'Haute sensibilité',
    badgeColor: '#27ae60',
    desc: 'Détecteur de fumée par aspiration de haute sensibilité (DFHS) avec écran LCD — pour salles informatiques et archives.',
    img: `${BASE}products/mistral_200.webp`,
    specs: ['Aspiration DFHS', 'Écran LCD', 'Très haute sensibilité', 'Salles serveurs'],
    applications: ['Salles informatiques', 'Data centers', 'Archives & musées', 'Salles blanches'],
    certifications: ['EN 54-20', 'Classe A & B', 'Marquage CE', 'NF SSI'],
    details: 'Le MISTRAL 200 LCD est un système de détection précoce par aspiration (DFHS) offrant une sensibilité jusqu\'à 100 fois supérieure aux détecteurs ponctuels classiques. Son écran LCD intégré permet un suivi en temps réel du niveau de fumée et facilite la maintenance. Idéal pour les environnements où une détection ultrarapide est critique.',
    finsecurUrl: 'https://www.finsecur.com/produits/detection-aspiration',
  },

  /* ── ECHO TYPE 4 ───────────────────────────────────── */
  {
    id: 'echo-et4r',
    cat: 'echo',
    name: 'ECHO-ET4R',
    badge: 'Alarme Type 4 Radio',
    badgeColor: '#3498db',
    desc: 'Centrale radio d\'alarme type 4 — solution ultra performante alliant design, compacité et connectivité sans fil.',
    img: `${BASE}products/echo_et4r.webp`,
    specs: ['Radio sans fil', 'Alarme Type 4', 'Design compact', 'ERP & petits ERT'],
    applications: ['Petits ERP', 'Cabinets médicaux', 'Commerces', 'Salles de sport'],
    certifications: ['NF S 61-936', 'Alarme de Type 4', 'Radio 868 MHz', 'Marquage CE'],
    details: 'La centrale ECHO-ET4R représente l\'état de l\'art en matière d\'alarme incendie radio de type 4. Son architecture sans fil simplifie considérablement l\'installation, sans travaux ni cablage. La liaison radio bidirectionnelle garantit une supervision permanente de tous les équipements. Interface intuitive et design soigné s\'intégrant dans tout type d\'environnement.',
    finsecurUrl: 'https://www.finsecur.com/produits/echo-type-4',
    featured: true,
  },
  {
    id: 'echo-et4s-4z',
    cat: 'echo',
    name: 'ECHO ET4S-4Z',
    badge: 'Alarme Type 4 Secteur',
    badgeColor: '#3498db',
    desc: 'Centrale d\'alarme de type 4 avec 4 zones configurables — idéal pour commerces, bureaux et ERP de taille moyenne.',
    img: `${BASE}products/echo_et4s_4z.webp`,
    specs: ['4 zones configurables', 'Alimentation secteur', 'Alarme Type 4', 'Simple à installer'],
    applications: ['Commerces', 'Bureaux', 'Restaurants', 'ERP de taille moyenne'],
    certifications: ['NF S 61-936', 'Alarme de Type 4', 'Marquage CE'],
    details: 'La centrale ECHO ET4S-4Z offre une flexibilité maximale grâce à ses 4 zones indépendantes configurables. Son alimentation secteur avec batterie de secours garantit un fonctionnement continu même en cas de coupure électrique. Compatible avec tous les équipements de la gamme ECHO.',
    finsecurUrl: 'https://www.finsecur.com/produits/echo-type-4',
  },
  {
    id: 'echo-edslr',
    cat: 'echo',
    name: 'ECHO-EDSLR',
    badge: 'Diffuseur S+L Radio',
    badgeColor: '#3498db',
    desc: 'Diffuseur sonore et lumineux d\'alarme type 4 et PPMS radio — signalisation d\'évacuation complète.',
    img: `${BASE}products/echo_edslr.webp`,
    specs: ['Sonore + Lumineux', 'Radio adressable', 'PPMS compatible', 'Très haute visibilité'],
    applications: ['Couloirs d\'évacuation', 'Zones à fort bruit ambiant', 'ERP accessibles PMR', 'Établissements scolaires'],
    certifications: ['EN 54-3', 'EN 54-23', 'Marquage CE', 'NF S 61-936'],
    details: 'Le diffuseur ECHO-EDSLR combine signal sonore puissant et flash lumineux pour une signalisation d\'évacuation optimale, particulièrement adaptée aux environnements bruyants ou pour les personnes malentendantes. Sa communication radio bidirectionnelle permet une supervision permanente depuis la centrale.',
    finsecurUrl: 'https://www.finsecur.com/produits/echo-type-4',
  },
  {
    id: 'echo-edmr',
    cat: 'echo',
    name: 'ECHO-EDMR',
    badge: 'Déclencheur Radio T4',
    badgeColor: '#3498db',
    desc: 'Déclencheur manuel d\'alarme type 4 radio — transmission instantanée de l\'alarme sans câblage.',
    img: `${BASE}products/echo_edmr.webp`,
    specs: ['Manuel radio', 'Alarme Type 4', 'Sans câblage', 'Transmission instantanée'],
    applications: ['Issues de secours', 'Circulations', 'Points stratégiques', 'Bâtiments anciens'],
    certifications: ['EN 54-11', 'NF S 61-936', 'Radio 868 MHz', 'Marquage CE'],
    details: 'Le déclencheur manuel ECHO-EDMR permet une installation sans câblage, idéale pour les bâtiments anciens ou les rénovations. La transmission radio bidirectionnelle assure une fiabilité maximale. Boîtier robuste au design contemporain, conforme aux exigences réglementaires.',
    finsecurUrl: 'https://www.finsecur.com/produits/echo-type-4',
  },

  /* ── DECLENCHEURS ──────────────────────────────────── */
  {
    id: 'sextant-dma',
    cat: 'declencheur',
    name: 'SEXTANT DMA',
    badge: 'Déclencheur adressable',
    badgeColor: '#c0392b',
    desc: 'Déclencheur manuel adressable (DM) — haute fiabilité assurant transmission instantanée de l\'alarme. Certifié EN 54-11.',
    img: `${BASE}products/sextant_dma.webp`,
    specs: ['Adressable', 'EN 54-11 certifié', 'Transmission instantanée', 'Compatible BALTIC / KARA'],
    applications: ['Issues de secours ERP', 'Couloirs & escaliers', 'Toutes installations adressables'],
    certifications: ['EN 54-11', 'NF SSI', 'Marquage CE'],
    details: 'Le SEXTANT DMA est un déclencheur manuel adressable permettant l\'identification précise du point d\'alarme depuis la centrale. Son double actionnement (bris de glace ou pression directe selon version) prévient les déclenchements accidentels. Boîtier rouge normalisé avec indicateur d\'action visible.',
    finsecurUrl: 'https://www.finsecur.com/produits/declencheurs',
  },
  {
    id: 'sextant-dmc',
    cat: 'declencheur',
    name: 'SEXTANT DMC',
    badge: 'Déclencheur conventionnel',
    badgeColor: '#c0392b',
    desc: 'Déclencheur manuel conventionnel — solution fiable et économique pour systèmes d\'alarme incendie conventionnels.',
    img: `${BASE}products/sextant_dmc.webp`,
    specs: ['Conventionnel', 'EN 54-11', 'Rouge standard', 'Toutes installations'],
    applications: ['ERP toutes catégories', 'Bâtiments conventionnels', 'Remplacement & renovation'],
    certifications: ['EN 54-11', 'NF SSI', 'Marquage CE'],
    details: 'Le SEXTANT DMC est le déclencheur manuel conventionnel de référence, offrant fiabilité et économie pour les systèmes conventionnels. Son design robuste et son installation simple en font le choix idéal pour les nouvelles installations et les remplacements. Entièrement conforme aux normes françaises et européennes.',
    finsecurUrl: 'https://www.finsecur.com/produits/declencheurs',
  },
  {
    id: 'sextant-bcm',
    cat: 'declencheur',
    name: 'SEXTANT BCM — Désenfumage',
    badge: 'Commande désenfumage',
    badgeColor: '#7f8c8d',
    desc: 'Boîtier de commande manuelle conventionnel conçu pour le désenfumage — déclenchement manuel des volets et exutoires.',
    img: `${BASE}products/sextant_bcm.webp`,
    specs: ['Désenfumage', 'Commande manuelle', 'Conventionnel', 'EN 12101 compatible'],
    applications: ['Parkings', 'Halls & atriums', 'Cages d\'escalier', 'Couloirs de désenfumage'],
    certifications: ['EN 12101-9', 'NF S 61-932', 'Marquage CE'],
    details: 'Le SEXTANT BCM permet la commande manuelle des installations de désenfumage : volets de désenfumage, exutoires de toit, trappes. Sa conception robuste garantit un fonctionnement fiable dans les situations d\'urgence. Conforme aux exigences du désenfumage naturel des parcs de stationnement et des circulations horizontales.',
    finsecurUrl: 'https://www.finsecur.com/produits/declencheurs',
  },

  /* ── HABITATION ────────────────────────────────────── */
  {
    id: 'calypso-ii',
    cat: 'habitation',
    name: 'CALYPSO-II',
    badge: 'DAAF Autonome',
    badgeColor: '#f39c12',
    desc: 'Détecteur Avertisseur Autonome de Fumée (DAAF) pour habitations. Technologie optique professionnelle. Norme NF EN 14604.',
    img: `${BASE}products/calypso_ii.webp`,
    specs: ['DAAF autonome', 'Optique professionnel', 'NF EN 14604', 'Logements & copropriétés'],
    applications: ['Logements individuels', 'Appartements', 'Copropriétés', 'Résidences'],
    certifications: ['NF EN 14604', 'Marquage CE', 'Conforme loi Morange'],
    details: 'Le CALYPSO-II est un détecteur avertisseur autonome de fumée (DAAF) de qualité professionnelle, certifié NF EN 14604. Sa technologie optique avancée garantit une détection fiable des fumées avec un minimum de fausses alarmes. Batterie longue durée 10 ans, signal sonore puissant conforme aux exigences réglementaires.',
    finsecurUrl: 'https://www.finsecur.com/produits/daaf',
  },
  {
    id: 'calypso-ii-r',
    cat: 'habitation',
    name: 'CALYPSO-II-R',
    badge: 'DAAF Radio',
    badgeColor: '#f39c12',
    desc: 'Détecteur Avertisseur Autonome de Fumée avec liaison radio — interconnexion sans fil entre détecteurs du logement.',
    img: `${BASE}products/calypso_ii_r.webp`,
    specs: ['Liaison radio intégrée', 'Interconnexion sans fil', 'Optique professionnel', 'NF EN 14604'],
    applications: ['Maisons individuelles', 'Logements multi-pièces', 'Résidences secondaires', 'Appartements T3+'],
    certifications: ['NF EN 14604', 'Marquage CE', 'Radio 868 MHz'],
    details: 'Le CALYPSO-II-R reprend toutes les qualités du CALYPSO-II en ajoutant une liaison radio pour l\'interconnexion entre détecteurs. Lorsqu\'un détecteur se déclenche, tous les autres du même logement sonnent simultanément, garantissant l\'alerte dans toutes les pièces. Idéal pour les grandes surfaces habitables.',
    finsecurUrl: 'https://www.finsecur.com/produits/daaf',
    featured: true,
  },
  {
    id: 'egee-lcd',
    cat: 'habitation',
    name: 'EGEE-LCD',
    badge: 'Désenfumage habitat',
    badgeColor: '#27ae60',
    desc: 'Système de désenfumage 20 niveaux pour immeuble d\'habitation (3ème famille B) — gestion complète de l\'évacuation des fumées.',
    img: `${BASE}products/egee_lcd.webp`,
    specs: ['20 niveaux', 'Immeuble 3ème famille B', 'Adressable', 'Désenfumage complet'],
    applications: ['Immeubles 3ème famille B', 'Résidences >28m', 'Logements collectifs', 'Parkings résidentiels'],
    certifications: ['NF S 61-932', 'EN 12101', 'Marquage CE', 'NF SSI'],
    details: 'L\'EGEE-LCD est une centrale de gestion du désenfumage spécialement conçue pour les immeubles d\'habitation de 3ème famille B (hauteur > 28m). Elle gère jusqu\'à 20 niveaux avec une commande indépendante de chaque niveau. Son écran LCD intégré facilite la gestion et le diagnostic. Conforme au règlement de sécurité incendie pour les IGH.',
    finsecurUrl: 'https://www.finsecur.com/produits/desenfumage',
  },
]

/* ── Modal ───────────────────────────────────────────────── */
function ProductModal({ product, onClose }) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <div className="modal-inner">
          {/* Image */}
          <div className="modal-img-wrap">
            {!imgError ? (
              <img src={product.img} alt={product.name} onError={() => setImgError(true)} />
            ) : (
              <div className="product-img-fallback">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M24 4C24 4 14 14 14 22a10 10 0 0020 0c0-8-10-18-10-18z"/>
                  <circle cx="24" cy="40" r="3" fill="currentColor"/>
                </svg>
              </div>
            )}
            {product.featured && <div className="featured-label">⭐ Produit phare</div>}
          </div>

          {/* Contenu */}
          <div className="modal-content">
            <div
              className="product-badge"
              style={{ color: product.badgeColor, background: `${product.badgeColor}18`, border: `1px solid ${product.badgeColor}28` }}
            >
              {product.badge}
            </div>

            <h2 className="modal-title">{product.name}</h2>
            <p className="modal-details">{product.details}</p>

            <div className="modal-sections">
              {/* Specs techniques */}
              <div className="modal-section">
                <h4>Caractéristiques</h4>
                <ul className="modal-list">
                  {product.specs.map(s => (
                    <li key={s}>
                      <span className="dot" style={{ background: product.badgeColor }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="modal-section">
                <h4>Applications</h4>
                <ul className="modal-list">
                  {product.applications.map(a => (
                    <li key={a}>
                      <span className="dot" style={{ background: '#e8621a' }} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="modal-section modal-section--full">
                <h4>Certifications & normes</h4>
                <div className="modal-certs">
                  {product.certifications.map(c => (
                    <span key={c} className="modal-cert-tag">{c}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              <a href="#contact" className="btn btn-fire" onClick={onClose}>
                Demander un devis
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href={product.finsecurUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                Voir sur Finsecur.com ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Card ───────────────────────────────────────────────── */
function ProductCard({ product, visible, onClick }) {
  const [imgError, setImgError] = useState(false)

  return (
    <article
      className={`product-card${product.featured ? ' featured' : ''}${visible ? ' visible' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') onClick() }}
      aria-label={`Voir les détails de ${product.name}`}
    >
      {product.featured && <div className="featured-label">⭐ Produit phare</div>}
      <div className="product-expand-hint">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
        </svg>
        Détails
      </div>

      <div className="product-img-wrap">
        {!imgError ? (
          <img src={product.img} alt={product.name} loading="lazy" onError={() => setImgError(true)} />
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
        <span className="product-cta">En savoir plus &rarr;</span>
      </div>
    </article>
  )
}

/* ── Section ────────────────────────────────────────────── */
export default function Products() {
  const [activeCat, setActiveCat]         = useState('all')
  const [visible, setVisible]             = useState(new Set())
  const [selectedProduct, setSelected]    = useState(null)
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
    <>
      <section id="produits" className="products section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Gamme Finsecur</span>
            <h2 className="section-title">Nos Produits</h2>
            <p className="section-subtitle">
              Toute la gamme Finsecur distribuée par DamanTech pour l'Afrique et le Moyen-Orient.
              Cliquez sur une fiche pour en savoir plus.
            </p>
          </div>

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
                <ProductCard
                  product={p}
                  visible={visible.has(p.id)}
                  onClick={() => setSelected(p)}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
