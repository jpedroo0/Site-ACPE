
import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column footer__column--brand">
          <div className="footer__brand-header">
            <div className="footer__logo">
              <span className="footer__logo-icon">ACPE</span>
            </div>
            <h3 className="footer__brand-name">ACPE Consultoria</h3>
          </div>
          <p className="footer__description">
            Empresa júnior comprometida em oferecer soluções inovadoras e de qualidade.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link">FB</a>
            <a href="#" className="footer__social-link">IG</a>
            <a href="#" className="footer__social-link">LI</a>
          </div>
        </div>
        
        <div className="footer__column">
          <h4 className="footer__title">Empresa</h4>
          <ul className="footer__list">
            <li><a href="#inicio" className="footer__link">Início</a></li>
            <li><a href="#sobre" className="footer__link">Quem somos</a></li>
            <li><a href="#servicos" className="footer__link">Soluções</a></li>
            <li><a href="#equipe" className="footer__link">Acervo digital</a></li>
          </ul>
        </div>
        
        <div className="footer__column">
          <h4 className="footer__title">Contato</h4>
          <ul className="footer__list footer__list--contact">
            <li className="footer__contact-item">
              <span className="footer__contact-icon material-symbols-rounded">email</span>
              <span>Ver no Google Maps</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon material-symbols-rounded">phone</span>
              <span> contato@acpeconsultoria.com.br</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon material-symbols-rounded">location_on</span>
              <span>(34) 99695 2868</span>
            </li>
          </ul>
        </div>
        
        <div className="footer__column">
          <h4 className="footer__title">Nosso Blog</h4>
          <p className="footer__blog-description">
            Saiba sobre as novidades <br></br>e notícias da ACPE.
          </p>
          <a href="#" className="footer__blog-cta">Ver Blog</a>
        </div>
      </div>
      
      <div className="footer__copyright">
        <div className="footer__copyright-divider"></div>
        <span className="footer__copyright-text">
          © 2025 ACPE. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}

export default Footer







