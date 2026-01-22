import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faUsers, faRocket, faAward, faHandshake, faGears } from '@fortawesome/free-solid-svg-icons'

// Imagens para o carrossel da seção About
import a1 from '../assets/fotos/IMG_9360.JPG'
import a2 from '../assets/fotos/IMG_9356.JPG'
import a3 from '../assets/fotos/IMG_9353.JPG'
import a4 from '../assets/fotos/IMG_8383.JPG'
import a5 from '../assets/fotos/56B1754B-A2A6-4DDF-85DA-115DE9C7EA50.jpeg'
import a6 from '../assets/fotos/3480A4F7-51F2-4484-A534-595DA12F535E.jpeg'
import a7 from '../assets/fotos/IMG_1111.png'

function About() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselRef = useRef(null)
  const [slideWidth, setSlideWidth] = useState(0)

  const photos = [a1, a2, a3, a4, a5, a6, a7]
  const totalSlides = photos.length
  const gapSize = 24 // gap em pixels

  const duplicatedPhotos = [...photos, ...photos, ...photos]

  // inicia no meio (segunda cópia)
  useEffect(() => {
    setCurrentIndex(totalSlides)
  }, [totalSlides])

  // calcula largura do slide (container + gap)
  useEffect(() => {
    const calculate = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.parentElement.clientWidth
        setSlideWidth(containerWidth + gapSize)
      }
    }
    calculate()
    window.addEventListener('resize', calculate)
    return () => window.removeEventListener('resize', calculate)
  }, [])

  const getRealIndex = () => currentIndex % totalSlides

  const goToSlide = (index) => {
    setIsTransitioning(true)
    setCurrentIndex(totalSlides + index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1
        if (next >= totalSlides * 2) {
          setTimeout(() => {
            setIsTransitioning(false)
            setCurrentIndex(totalSlides)
            setTimeout(() => setIsTransitioning(true), 20)
          }, 600)
          return next
        }
        return next
      })
    }, 4000)

    return () => clearInterval(interval)
  }, [totalSlides])

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
            <div
              className="about__carousel"
              ref={(el) => (carouselRef.current = el)}
              style={{
                transform: `translateX(-${currentIndex * slideWidth}px)`,
                transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
              }}
            >
              {duplicatedPhotos.map((photo, idx) => (
                <img
                  key={idx}
                  src={photo}
                  alt={`Sobre - Foto ${(idx % totalSlides) + 1}`}
                  className="about__carousel-image"
                />
              ))}
            </div>
            <div className="about__dots" role="tablist" aria-label="Controles do carrossel">
              {photos.map((_, i) => (
                <button
                  key={i}
                  className={`about__dot ${getRealIndex() === i ? 'about__dot--active' : ''}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Ir para slide ${i + 1}`}
                ></button>
              ))}
            </div>
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


