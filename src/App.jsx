import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  )
}

export default App
