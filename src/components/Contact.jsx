import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

// ── EmailJS config ──────────────────────────────────────────────
// 1. Crée un compte gratuit sur https://www.emailjs.com
// 2. Crée un service (Gmail, Outlook...) → copie le Service ID
// 3. Crée un template avec les variables : {{name}}, {{email}},
//    {{phone}}, {{pays}}, {{objet}}, {{message}}
// 4. Copie Public Key depuis Account > API Keys
// Remplace les 3 valeurs ci-dessous :
const EMAILJS_SERVICE  = 'service_y3s91eu'
const EMAILJS_TEMPLATE = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC   = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────

const subjects = [
  'Devis — Centrales SSI (BALTIC / KARA / PACIFIC)',
  'Devis — Détecteurs (CAP / SEXTANT / BOREAL)',
  'Devis — Gamme ECHO Type 4',
  'Devis — Habitation (CALYPSO / EGEE)',
  'Devis — Supervision ScanServer',
  'Projet SSI complet',
  'Formation technique Finsecur',
  'Autre demande',
]

const details = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Adresse',
    lines: ['15, rue des Entrepreneurs', '91560 Crosne, France'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    label: 'Téléphone',
    lines: ['+33 (0) 1 69 24 39 21'],
    href: 'tel:+33169243921',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    lines: ['Contact@damantech.com'],
    href: 'mailto:Contact@damantech.com',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
      </svg>
    ),
    label: 'Zone de couverture',
    lines: ['Afrique et Moyen-Orient'],
  },
]

export default function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', pays: '', objet: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [honeypot, setHoneypot] = useState('')

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (honeypot) return // bot trap
    if (!form.name || !form.email || !form.objet || !form.message) return

    setStatus('sending')
    try {
      await emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_PUBLIC)
      setStatus('success')
      setForm({ name: '', company: '', email: '', phone: '', pays: '', objet: '', message: '' })
      setTimeout(() => setStatus('idle'), 8000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 6000)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-inner">

        <div className="contact-info">
          <span className="section-tag">Parlons de votre projet</span>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="contact-intro">
            Besoin d'un devis, d'une information sur un produit Finsecur ou d'une inscription
            à nos formations ? Notre équipe vous répond sous 24h ouvrables.
          </p>

          <div className="contact-details">
            {details.map(d => (
              <div key={d.label} className="contact-detail">
                <div className="contact-icon">{d.icon}</div>
                <div>
                  <strong>{d.label}</strong>
                  {d.lines.map(l =>
                    d.href
                      ? <a key={l} href={d.href}>{l}</a>
                      : <span key={l}>{l}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-reassurance">
            <div className="reassurance-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Vos données restent confidentielles</span>
            </div>
            <div className="reassurance-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12,6 12,12 16,14"/>
              </svg>
              <span>Réponse sous 24h ouvrables</span>
            </div>
            <div className="reassurance-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
              <span>Devis gratuit et sans engagement</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} ref={formRef} noValidate>
          <h3>Soumettre une demande</h3>

          {/* Honeypot anti-spam — invisible */}
          <input
            type="text"
            name="_trap"
            value={honeypot}
            onChange={e => setHoneypot(e.target.value)}
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input id="name" name="name" type="text" placeholder="Votre nom"
                value={form.name} onChange={handleChange} required autoComplete="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="company">Société</label>
              <input id="company" name="company" type="text" placeholder="Nom de votre entreprise"
                value={form.company} onChange={handleChange} autoComplete="organization"/>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" placeholder="votre@email.com"
                value={form.email} onChange={handleChange} required autoComplete="email"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Téléphone</label>
              <input id="phone" name="phone" type="tel" placeholder="+33 / +212 / +213..."
                value={form.phone} onChange={handleChange} autoComplete="tel"/>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="pays">Pays *</label>
            <input id="pays" name="pays" type="text" placeholder="Ex : Maroc, Sénégal, Côte d'Ivoire..."
              value={form.pays} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="objet">Objet de la demande *</label>
            <select id="objet" name="objet" value={form.objet} onChange={handleChange} required>
              <option value="">Choisir l'objet</option>
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message" name="message" rows={5}
              placeholder="Décrivez votre besoin : type d'établissement, superficie, nombre de zones, délais, contexte du projet..."
              value={form.message} onChange={handleChange} required
            />
          </div>

          <button
            type="submit"
            className={`btn btn-fire btn-full${status === 'sending' ? ' btn-loading' : ''}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? (
              <>
                <span className="btn-spinner" />
                Envoi en cours...
              </>
            ) : (
              <>
                Envoyer la demande
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </>
            )}
          </button>

          <p className="form-note">* Champs obligatoires — Réponse sous 24h ouvrables</p>

          {status === 'success' && (
            <div className="form-feedback form-success" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
              Demande envoyée ! Notre équipe vous répondra sous 24h ouvrables.
            </div>
          )}
          {status === 'error' && (
            <div className="form-feedback form-error" role="alert">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
              </svg>
              Erreur d'envoi. Merci de nous contacter directement à Contact@damantech.com
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
