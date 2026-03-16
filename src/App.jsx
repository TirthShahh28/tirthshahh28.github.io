import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
