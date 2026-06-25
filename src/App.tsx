import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Philosophy from './components/Philosophy'
import Services from './components/Services'
import Process from './components/Process'
import Gallery from './components/Gallery'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Services />
        <Process />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
