import './Navbar.css'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <h1 className="logo">Nicolas.dev</h1>

      {/* Botão Hambúrguer */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span className={open ? "line line1 active" : "line line1"}></span>
        <span className={open ? "line line2 active" : "line line2"}></span>
        <span className={open ? "line line3 active" : "line line3"}></span>
      </div>

      {/* Menu */}
      <ul className={open ? "nav-links open" : "nav-links"}>
        <li><a href="#hero" onClick={() => setOpen(false)}>Início</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>Sobre</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projetos</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contato</a></li>
      </ul>
    </nav>
  )
}
