import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUsers, faRocket, faAward, faHandshake, faGears } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section id="sobre" className="section about">
      {/* Seção 1: Conheça Nossa Empresa */}
      <div className="about__company">
        <div className="about__company-content">
          <div className="about__badge">Sobre a ACPE</div>
          <h2 className="about__title">Conheça Nossa Empresa!</h2>
          <p className="about__description">
            A ACPE Consultoria é uma Empresa Júnior de Ciências Econômicas, Relações Internacionais e Ciências Contábeis, 
            fundada em 2002 na Universidade Federal de Uberlândia (UFU). Com mais de 20 anos de experiência no mercado, 
            ajudamos empresas a construir ou expandir seus negócios.
          </p>
          <div className="about__features">
            <div className="about__feature">
              <div className="about__feature-icon">
                <FontAwesomeIcon icon={faCheck} />
              </div>
              <div className="about__feature-text">
                <h3>Metodologia Comprovada</h3>
                <p>Processos testados e validados</p>
              </div>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <FontAwesomeIcon icon={faUsers} />
              </div>
              <div className="about__feature-text">
                <h3>Equipe Especializada</h3>
                <p>Consultores certificados</p>
              </div>
            </div>
          </div>
          <button className="btn btn--about">CONHECER</button>
        </div>
        <div className="about__company-image">
          <div className="about__image-placeholder">
            {/* Espaço para imagem */}
          </div>
          <div className="about__carousel-dots">
            <span className="about__dot"></span>
            <span className="about__dot"></span>
            <span className="about__dot"></span>
            <span className="about__dot"></span>
            <span className="about__dot"></span>
          </div>
        </div>
      </div>

      {/* Seção 2: Nossos Números */}
      <div className="about__numbers">
        <h2 className="about__section-title">Nossos Números</h2>
        <div className="about__stats-grid">
          <div className="about__stat-card">
            <div className="about__stat-number">+22</div>
            <div className="about__stat-label">Anos de Empresa</div>
          </div>
          <div className="about__stat-card">
            <div className="about__stat-number">+250</div>
            <div className="about__stat-label">Soluções Geradas</div>
          </div>
          <div className="about__stat-card">
            <div className="about__stat-number">100%</div>
            <div className="about__stat-label">Satisfação do Cliente</div>
          </div>
        </div>
      </div>

      {/* Seção 3: Nosso Blog */}
      <div className="about__blog">
        <h2 className="about__section-title">Nosso Blog</h2>
        <p className="about__section-subtitle">
          Fique de olho nas nossas atualizações em tempo real!
        </p>
        <button className="btn btn--about">ACESSAR</button>
      </div>

      {/* Seção 4: Por Que Escolher a ACPE */}
      <div className="about__why">
        <h2 className="about__section-title">Por Que Escolher a ACPE?</h2>
        <p className="about__section-subtitle">
          Escolher a consultoria certa faz toda a diferença no crescimento do seu negócio.
        </p>
        <div className="about__benefits-grid">
          <div className="about__benefit-card">
            <div className="about__benefit-icon">
              <FontAwesomeIcon icon={faRocket} />
            </div>
            <h3>Resultados Rápidos</h3>
            <p>Metodologias ágeis para implementação eficiente e resultados mensuráveis em curto prazo.</p>
          </div>
          <div className="about__benefit-card">
            <div className="about__benefit-icon">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <h3>Qualidade Garantida</h3>
            <p>Certificações internacionais e equipe altamente qualificada para entregar excelência.</p>
          </div>
          <div className="about__benefit-card">
            <div className="about__benefit-icon">
              <FontAwesomeIcon icon={faHandshake} />
            </div>
            <h3>Parceria de Longo Prazo</h3>
            <p>Relacionamento duradouro com suporte contínuo e acompanhamento de resultados.</p>
          </div>
          <div className="about__benefit-card">
            <div className="about__benefit-icon">
              <FontAwesomeIcon icon={faGears} />
            </div>
            <h3>Soluções Personalizadas</h3>
            <p>Cada projeto é único e desenvolvido sob medida para as necessidades do seu negócio.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


