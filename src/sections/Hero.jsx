import React, { useState, useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faArrowRight } from '@fortawesome/free-solid-svg-icons'

// Importando as imagens
import foto1 from '../assets/fotos/IMG_85011.JPG'
import foto2 from '../assets/fotos/IMG_9351.JPG'
import foto3 from '../assets/fotos/IMG_9369.JPG'
import foto4 from '../assets/fotos/IMG_1111.png'

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselRef = useRef(null)
  const [slideWidth, setSlideWidth] = useState(0)

  const photos = [foto1, foto2, foto3, foto4]
  const totalSlides = photos.length
  const gapSize = 24 // 1.5rem em pixels
  
  // Duplica os slides para criar loop infinito
  const duplicatedPhotos = [...photos, ...photos, ...photos]
  
  // Inicializa começando no meio (segunda cópia)
  useEffect(() => {
    setCurrentImageIndex(totalSlides)
  }, [totalSlides])

  // Calcula a largura de cada slide incluindo o gap
  useEffect(() => {
    const calculateSlideWidth = () => {
      if (carouselRef.current) {
        const containerWidth = carouselRef.current.parentElement.clientWidth
        const width = containerWidth + gapSize
        setSlideWidth(width)
      }
    }

    calculateSlideWidth()
    window.addEventListener('resize', calculateSlideWidth)
    return () => window.removeEventListener('resize', calculateSlideWidth)
  }, [])

  const getRealIndex = () => {
    return currentImageIndex % totalSlides
  }

  const goToSlide = (index) => {
    setIsTransitioning(true)
    setCurrentImageIndex(totalSlides + index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        const next = prev + 1
        // Se chegar além da segunda cópia, anima até a terceira cópia e depois pula sem animação para a segunda cópia
        if (next >= totalSlides * 2) {
          // permite a animação até a primeira posição da terceira cópia
          setTimeout(() => {
            // após a animação terminar, faz o jump sem transição para a segunda cópia
            setIsTransitioning(false)
            setCurrentImageIndex(totalSlides)
            // reativa transição após um pequeno delay
            setTimeout(() => setIsTransitioning(true), 20)
          }, 600) // espera o tempo da transição
          return next
        }
        return next
      })
    }, 4000) // Troca a imagem a cada 4 segundos

    return () => {
      clearInterval(interval)
    }
  }, [totalSlides])

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
          <a className="btn btn--primary" href="#servicos">
            NOSSOS SERVICOS
            <span className="btn__arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </a>
          <a className="btn btn--secondary" href="https://api.whatsapp.com/send?phone=5534996952868&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPZ9RpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacll4UKICtMFq3T3iTkKreOaQATXBuRSwsR621409E0OhsGY9R63JHKsU9cYg_aem_wdm5Hynuj1oUCIdXw6daYw">
            AGENDAR CONSULTA
          </a>
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
          <div 
            ref={carouselRef}
            className="hero__carousel"
            style={{
              transform: `translateX(-${currentImageIndex * slideWidth}px)`,
              transition: isTransitioning ? 'transform 0.6s ease-in-out' : 'none'
            }}
          >
            {duplicatedPhotos.map((photo, index) => (
              <img 
                key={index}
                src={photo} 
                alt={`Equipe ACPE - Foto ${(index % totalSlides) + 1}`}
                className="hero__carousel-image"
              />
            ))}
          </div>
        </div>
        <div className="hero__dots" role="tablist" aria-label="Controles do carrossel">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`hero__dot ${getRealIndex() === i ? 'hero__dot--active' : ''}`}
              onClick={() => goToSlide(i)}
              aria-label={`Ir para slide ${i + 1}`}
            ></button>
          ))}
        </div>
        <div className="hero__testimonial-card">
          <div className="hero__testimonial-avatars">
            <image className="hero__testimonial-avatar" src={foto1} alt="Cliente satisfeito 1" />
            <image className="hero__testimonial-avatar" src={foto2} alt="Cliente satisfeito 2" />   
            <image className="hero__testimonial-avatar" src={foto2} alt="Cliente satisfeito 2" /> 
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





