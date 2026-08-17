import './Navbar.css'
import { useState } from 'react'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <h1 className="logo">Nicolas_Teles.dev</h1>

      {/* Menu */}
      <ul id="main-navigation" className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#hero" onClick={() => setOpen(false)}>Início</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>Sobre</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projetos</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contato</a></li>
      </ul>

      <div className="nav-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
          title={theme === 'light' ? 'Ativar tema escuro' : 'Ativar tema claro'}
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {theme === 'light' ? 'moon_stars' : 'wb_sunny'}
          </span>
        </button>

        <button
          type="button"
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          <span className={open ? "line line1 active" : "line line1"}></span>
          <span className={open ? "line line2 active" : "line line2"}></span>
          <span className={open ? "line line3 active" : "line line3"}></span>
        </button>
      </div>
    </nav>
  )
}
