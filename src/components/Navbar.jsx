import React from 'react'
import logo from '../assets/illustrations/logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <div className="navbar__logo-container">
          <img src={logo} alt="ACPE Consultoria" className="navbar__logo" />
        </div>
      </div>
      <div className="navbar__nav">
        <a href="#inicio" className="navbar__link">Início</a>
        <a href="#servicos" className="navbar__link">Soluções</a>
        <a href="#sobre" className="navbar__link">Blog</a>
        <a href="#feedbacks" className="navbar__link">Acervo digital</a>
      </div>
      <button className="navbar__cta">FALE CONOSCO</button>
    </nav>
  )
}

export default Navbar







