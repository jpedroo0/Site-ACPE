import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Importando as imagens
import foto1 from '../assets/fotos/IMG_8501.JPG'
import foto2 from '../assets/fotos/IMG_9351.JPG'
import foto3 from '../assets/fotos/IMG_9369.JPG'

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [fadeIn, setFadeIn] = useState(true)

  const photos = [foto1, foto2, foto3]

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false)
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % photos.length)
        setFadeIn(true)
      }, 500) // Aguarda a transição de fade out antes de trocar a imagem
    }, 5000) // Troca a imagem a cada 5 segundos

    return () => {
      clearInterval(interval)
    }
  }, [photos.length])

  return (
    <section id="inicio" className="section hero">
      <div className="hero__content">
        <div className="hero__badge">
          <span className="hero__badge-icon">
            <FontAwesomeIcon icon={faAward} />
          </span>
          <span className="hero__badge-text">Excelência em Consultoria</span>
        </div>
        <h1 className="hero__title">
          Entregamos <span className="hero__title-highlight">soluções</span>{' '}<br /> 
          <span className="hero__title-highlight">inteligentes</span> para seus <br /> desafios empresariais.
        </h1>
        <p className="hero__description">
          Oferecemos soluções acessíveis e personalizadas, com acompanhamento próximo em cada etapa para garantir que seus objetivos sejam atingidos
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary">
            NOSSOS SERVICOS
            <span className="btn__arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
          <button className="btn btn--secondary">
            AGENDAR CONSULTA
          </button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-number hero__stat-number--blue">22+</div>
            <div className="hero__stat-label">Anos de Experiência</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number hero__stat-number--yellow">250+</div>
            <div className="hero__stat-label">Projetos Concluídos</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-number hero__stat-number--blue">100%</div>
            <div className="hero__stat-label">Satisfação Cliente</div>
          </div>
        </div>
      </div>
      <div className="hero__media">
        <div className="hero__image-placeholder">
          <img 
            src={photos[currentImageIndex]} 
            alt={`Equipe ACPE - Foto ${currentImageIndex + 1}`}
            className={`hero__image ${fadeIn ? 'hero__image--fade-in' : 'hero__image--fade-out'}`}
          />
        </div>
        <div className="hero__testimonial-card">
          <div className="hero__testimonial-avatars">
            <div className="hero__testimonial-avatar"></div>
            <div className="hero__testimonial-avatar"></div>
            <div className="hero__testimonial-avatar"></div>
          </div>
          <div className="hero__testimonial-info">
            <div className="hero__testimonial-clients">+200 Clientes</div>
            <div className="hero__testimonial-rating">
              <span className="hero__testimonial-stars">★★★★★</span>
              <span className="hero__testimonial-score">5.0 Avaliação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero





