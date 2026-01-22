
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/illustrations/logo.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__column footer__column--brand">
          <div className="footer__brand-header">
            <div className="footer__logo">
              <div className="footer__logo-container">
                <img src={logo} alt="ACPE Consultoria" className="footer__logo-icon" />
              </div>
            </div>
            <h3 className="footer__brand-name">ACPE Consultoria</h3>
          </div>
          <p className="footer__description">
            Empresa júnior comprometida em oferecer soluções inovadoras e de qualidade.
          </p>
          <div className="footer__social">
            <a href="https://www.linkedin.com/company/acpe-consultoria-jr/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BAxHp0P7%2BQaWRPFsEICFLqg%3D%3D" className="footer__social-link">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com/acpeconsultoria?igsh=MXMyaWR5OTZtb210YQ== 
" className="footer__social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.facebook.com/share/17vdtPKwg2/?mibextid=wwXIfr
" className="footer__social-link">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
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
              <span className="footer__contact-icon">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              <span>Ver no Google Maps</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <span>contato@acpeconsultoria.com.br</span>
            </li>
            <li className="footer__contact-item">
              <span className="footer__contact-icon">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>(34) 99695 2868</span>
            </li>
          </ul>
        </div>
        
        <div className="footer__column footer__column--map">
          <div className="footer__map-container">
            <iframe
              className="footer__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4708.035022178115!2d-48.26074948837954!3d-18.918503882179884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44574eb2d5de3%3A0x11d136c87e5645a1!2sACPE%20Consultoria%20-%20Plano%20de%20Neg%C3%B3cios%2C%20Pesquisa%20de%20Mercado%20e%20Gest%C3%A3o%20Empresarial!5e1!3m2!1spt-PT!2sbr!4v1768957644175!5m2!1spt-PT!2sbr" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ACPE Consultoria"
            ></iframe>
          </div>
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







