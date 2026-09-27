import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer' 
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { motion } from "framer-motion";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) return savedTheme

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [language, setLanguage] = useState('en')
  const MotionMain = motion.main

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
  }, [language])

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}
        language={language}
        onToggleLanguage={() => setLanguage((currentLanguage) => currentLanguage === 'pt' ? 'en' : 'pt')}
      />
      <MotionMain
        className="site-main"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      <Hero language={language} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
      <ScrollToTop />
      </MotionMain>
    </>
  )
}

export default App
