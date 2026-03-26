import { useState } from 'react'
import Intro        from './components/Intro'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import StatsBar     from './components/StatsBar'
import Products     from './components/Products'
import Secteurs     from './components/Secteurs'
import Services     from './components/Services'
import Processus    from './components/Processus'
import FinsecurSection from './components/FinsecurSection'
import About        from './components/About'
import UrgenceBand  from './components/UrgenceBand'
import Contact      from './components/Contact'
import MapSection   from './components/MapSection'
import Footer       from './components/Footer'
import BackToTop    from './components/BackToTop'

export default function App() {
  const [introOver, setIntroOver] = useState(false)

  return (
    <>
      {!introOver && <Intro onDone={() => setIntroOver(true)} />}
      <div style={{ opacity: introOver ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <Navbar />
        <main>
          <Hero />
          <StatsBar />
          <Products />
          <Secteurs />
          <Services />
          <Processus />
          <FinsecurSection />
          <About />
          <UrgenceBand />
          <Contact />
          <MapSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
