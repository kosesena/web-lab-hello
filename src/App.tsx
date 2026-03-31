import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import ProjectList from './components/sections/ProjectList'
import ContactSection from './components/sections/ContactSection'
import './index.css'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark')
    setIsDark(prev => !prev)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana icerize atla
      </a>

      <Header isDark={isDark} onToggleDark={toggleDark} />

      <main id="main-content" role="main">
        <Hero />
        <About />
        <Skills />
        <ProjectList />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
