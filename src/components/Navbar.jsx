import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <span>ACPE</span>
      </div>
      <div className="navbar__nav">
        <a href="#inicio" className="navbar__link">Início</a>
        <a href="#servicos" className="navbar__link">Soluções</a>
        <a href="#equipe" className="navbar__link">Blog</a>
        <a href="#contato" className="navbar__link">Acervo digital</a>
      </div>
      <button className="navbar__cta">FALE CONOSCO</button>
    </nav>
  )
}

export default Navbar







