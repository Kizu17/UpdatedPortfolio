import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Internship from './pages/Internship'
import Projects from './pages/Projects'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/internship" element={<Internship />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}

export default App
