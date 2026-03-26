import { useState } from 'react'
import './Contact.css'

const subjects = [
  'Devis — Centrales SSI (BALTIC / KARA / PACIFIC)',
  'Devis — Detecteurs (CAP / CORAIL)',
  'Devis — Supervision ScanServer',
  'Devis — Extinction automatique',
  'Devis — Accessoires (CALYPSO, SEXTANT...)',
  'Formation technique Finsecur',
  'Projet SSI complet',
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
    lines: ['13-15, rue des Entrepreneurs', '91560 Crosne, France'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
      </svg>
    ),
    label: 'Telephone',
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
  const [form, setForm] = useState({ name: '', email: '', phone: '', pays: '', objet: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', phone: '', pays: '', objet: '', message: '' })
      setTimeout(() => setSent(false), 7000)
    }, 1400)
  }

  return (
    <section id="contact" className="contact section">
      <div className="container contact-inner">

        <div className="contact-info">
          <span className="section-tag">Parlons de votre projet</span>
          <h2 className="section-title">Contactez-nous</h2>
          <p className="contact-intro">
            Besoin d'un devis, d'une information sur un produit Finsecur ou d'une inscription
            a nos formations ? Notre equipe vous repond sous 24h.
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
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h3>Soumettre une demande</h3>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input id="name" name="name" type="text" placeholder="Votre nom" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" placeholder="votre@email.com" value={form.email} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Telephone</label>
              <input id="phone" name="phone" type="tel" placeholder="+33 / +213 / +212..." value={form.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="pays">Pays</label>
              <input id="pays" name="pays" type="text" placeholder="Ex: Algerie, Maroc, Senegal..." value={form.pays} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="objet">Objet *</label>
            <select id="objet" name="objet" value={form.objet} onChange={handleChange} required>
              <option value="">Choisir l'objet</option>
              {subjects.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message" name="message" rows={5}
              placeholder="Decrivez votre besoin : type d'etablissement, superficie, nombre de zones, delais..."
              value={form.message} onChange={handleChange} required
            />
          </div>

          <button type="submit" className="btn btn-fire btn-full" disabled={sending}>
            <span>{sending ? 'Envoi en cours...' : 'Envoyer la demande'}</span>
            {!sending && (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
            )}
          </button>

          <p className="form-note">* Champs obligatoires. Reponse sous 24h ouvrables.</p>

          {sent && (
            <div className="form-success">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                <path d="M22 4L12 14.01l-3-3"/>
              </svg>
              Demande envoyee ! Notre equipe vous repondra tres prochainement.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
