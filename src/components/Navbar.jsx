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
        <a href="#" className="navbar__link">Início</a>
        <a href="#servicos" className="navbar__link">Soluções</a>
        <a href="#sobre" className="navbar__link">Blog</a>
        <a href="#feedbacks" className="navbar__link">Acervo digital</a>
      </div>
      <a href="https://api.whatsapp.com/send?phone=5534996952868&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPZ9RpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacll4UKICtMFq3T3iTkKreOaQATXBuRSwsR621409E0OhsGY9R63JHKsU9cYg_aem_wdm5Hynuj1oUCIdXw6daYw " className="navbar__cta">FALE CONOSCO</a>
    </nav>
  )
}

export default Navbar







