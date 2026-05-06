import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Team from './components/Team'
import Schedule from './components/Schedule'
import Episodes from './components/Episodes'
import Socials from './components/Socials'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <About />
      <Team />
      <Schedule />
      <Episodes />
      <Socials />
      <Footer />
    </>
  )
}
