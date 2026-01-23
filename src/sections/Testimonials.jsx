import React, { useState, useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGears } from '@fortawesome/free-solid-svg-icons'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const carouselRef = useRef(null)

  const testimonials = [
    {
      category: 'Mapeamento de Processos',
      quote: 'Profissionalismo e competência definem a ACPE. A consultoria estratégica foi fundamental para nosso crescimento de 150% no último ano.',
      name: 'Mariana Oliveira',
      role: 'Diretora, ZUP Inovation',
      avatar: '👩'
    },
    {
      category: 'Gestão Financeira',
      quote: 'A ACPE transformou nossa gestão financeira. Com suas soluções, conseguimos otimizar custos e aumentar nossa rentabilidade em 40%.',
      name: 'Carlos Silva',
      role: 'CEO, TechSolutions',
      avatar: '👨'
    },
    {
      category: 'Plano de Marketing',
      quote: 'Excelente trabalho da equipe ACPE. Nosso plano de marketing superou todas as expectativas e aumentou significativamente nossa base de clientes.',
      name: 'Ana Paula Santos',
      role: 'Diretora de Marketing, InovaCorp',
      avatar: '👩'
    },
    {
      category: 'Comex',
      quote: 'A ACPE nos ajudou a expandir para mercados internacionais. Profissionais altamente qualificados e resultados excepcionais.',
      name: 'Roberto Mendes',
      role: 'Diretor Comercial, GlobalTrade',
      avatar: '👨'
    },
    {
      category: 'Consultoria Estratégica',
      quote: 'A parceria com a ACPE foi transformadora. Sua abordagem estratégica nos permitiu identificar oportunidades que não estávamos vendo.',
      name: 'Patricia Costa',
      role: 'Diretora Executiva, InnovateNow',
      avatar: '👩'
    },
    {
      category: 'Transformação Digital',
      quote: 'A ACPE nos guiou em nossa jornada de transformação digital. Hoje somos uma empresa muito mais eficiente e competitiva.',
      name: 'Ricardo Almeida',
      role: 'CTO, DigitalFirst',
      avatar: '👨'
    },
    {
      category: 'Gestão de Projetos',
      quote: 'A metodologia da ACPE para gestão de projetos é excepcional. Conquistamos resultados que superaram todas as expectativas.',
      name: 'Fernanda Lima',
      role: 'Gerente de Projetos, ProActive Solutions',
      avatar: '👩'
    },
    {
      category: 'Análise de Dados',
      quote: 'Com a ajuda da ACPE, transformamos nossos dados em insights valiosos. Nossa tomada de decisão nunca foi tão precisa.',
      name: 'Lucas Martins',
      role: 'Diretor de Analytics, DataDriven Corp',
      avatar: '👨'
    }
  ]

  const totalSlides = testimonials.length
  
  // Duplica os cards para criar loop infinito (3 cópias)
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials]
  
  // Inicializa começando no meio (segunda cópia)
  useEffect(() => {
    setCurrentSlide(totalSlides)
  }, [totalSlides])
  
  const goToSlide = (index) => {
    setIsTransitioning(true)
    // Mapeia o índice clicado para a posição na segunda cópia
    setCurrentSlide(totalSlides + index)
    setDragOffset(0)
  }

  const nextSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide(prev => {
      const next = prev + 1
      // Se chegou ao final da segunda cópia, pula instantaneamente para o início da segunda cópia
      if (next >= totalSlides * 2) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentSlide(totalSlides)
          setTimeout(() => setIsTransitioning(true), 10)
        }, 300)
        return totalSlides * 2 - 1
      }
      return next
    })
    setDragOffset(0)
  }

  const prevSlide = () => {
    setIsTransitioning(true)
    setCurrentSlide(prev => {
      const prevSlide = prev - 1
      // Se chegou ao início da segunda cópia, pula instantaneamente para o final da segunda cópia
      if (prevSlide < totalSlides) {
        setTimeout(() => {
          setIsTransitioning(false)
          setCurrentSlide(totalSlides * 2 - 1)
          setTimeout(() => setIsTransitioning(true), 10)
        }, 300)
        return totalSlides
      }
      return prevSlide
    })
    setDragOffset(0)
  }

  // Calcula o deslocamento: cada card tem 380px + gap de 2rem
  const getTransform = () => {
    const cardWidth = 380 // largura fixa do card
    const gap = 32 // 2rem = 32px
    const slideWidth = cardWidth + gap
    
    // Calcula a posição baseada no índice atual
    let baseTransform = currentSlide * slideWidth
    
    // Adiciona o offset do drag em pixels
    if (isDragging && dragOffset !== 0) {
      baseTransform = baseTransform + dragOffset
    }
    
    return `translateX(-${baseTransform}px)`
  }
  
  // Calcula o índice real para mostrar nas bolinhas
  const getRealIndex = () => {
    // Se está na segunda cópia, calcula o índice real
    if (currentSlide >= totalSlides && currentSlide < totalSlides * 2) {
      return currentSlide - totalSlides
    }
    // Se está na primeira ou terceira cópia, também calcula corretamente
    return currentSlide % totalSlides
  }

  // Drag functionality - cards seguem o mouse em tempo real
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setDragOffset(0)
  }

  const handleMouseUp = (e) => {
    // O handler global cuida da lógica principal
    // Este apenas garante que o estado seja resetado se necessário
    if (isDragging) {
      setIsDragging(false)
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    
    const diff = startX - e.pageX
    // Limita o drag para não ultrapassar muito os limites
    const maxDrag = 300 // Limite máximo de arrasto em pixels
    const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
    // sinal invertido para que arrastar para a esquerda mova o carrossel para a esquerda
    setDragOffset(limitedDiff)
  }

  // Event listeners globais para melhorar o drag
  useEffect(() => {
    if (!isDragging) return
    
    const handleGlobalMouseMove = (e) => {
      e.preventDefault()
      const diff = startX - e.pageX
      const maxDrag = 300 // Limite máximo de arrasto em pixels
      const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
      // manter sinal consistente com handleMouseMove
      setDragOffset(limitedDiff)
    }
    
    const handleGlobalMouseUp = (e) => {
      const threshold = 80 // Threshold reduzido para melhor responsividade
      const currentX = e?.pageX || e?.clientX || startX
      const diff = startX - currentX
      
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Dragged left, go to next
          nextSlide()
        } else {
          // Dragged right, go to previous
          prevSlide()
        }
      } else {
        // Snap back to current slide
        setDragOffset(0)
      }
      setIsDragging(false)
    }
    
    document.addEventListener('mousemove', handleGlobalMouseMove, { passive: false })
    document.addEventListener('mouseup', handleGlobalMouseUp)
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, startX, currentSlide, totalSlides])

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].pageX)
    setDragOffset(0)
  }

  const handleTouchMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    
    const diff = startX - e.touches[0].pageX
    const maxDrag = 300 // Limite máximo de arrasto
    const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
    setDragOffset(limitedDiff)
  }

  const handleTouchEnd = (e) => {
    if (!isDragging) return
    
    const threshold = 80
    const diff = startX - e.changedTouches[0].pageX
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    } else {
      setDragOffset(0)
    }
    
    setIsDragging(false)
  }

  return (
    <section id="feedbacks" className="section testimonials">
      <div className="testimonials__header">
        <div className="testimonials__badge">Feedbacks</div>
        <h2 className="testimonials__title">O Que Nossos Clientes Dizem</h2>
      </div>
      
      <div className="testimonials__carousel-container">
        <div 
          ref={carouselRef}
          className={`testimonials__carousel ${isDragging ? 'dragging' : ''} ${!isTransitioning ? 'no-transition' : ''}`}
          style={{ transform: getTransform() }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-card__header">
                <div className="testimonial-card__icon">
                  <FontAwesomeIcon icon={faGears} />
                </div>
                <h3 className="testimonial-card__category">{testimonial.category}</h3>
              </div>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__author">
                  <img className="testimonial-card__avatar" src={testimonial.avatar} alt={testimonial.name}s />
                  <div className="testimonial-card__info">
                    <div className="testimonial-card__name">{testimonial.name}</div>
                    <div className="testimonial-card__role">{testimonial.role}</div>
                  </div>
                </div>
                <div className="testimonial-card__rating">
                  <span className="testimonial-card__stars">★★★★★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials__controls">
        <button
          className="testimonials__arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <div className="testimonials__dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${index === getRealIndex() ? 'testimonials__dot--active' : ''}`}
              onClick={() => {
                setIsTransitioning(true)
                goToSlide(index)
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          className="testimonials__arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>
      </div>
    </section>
  )
}

export default Testimonials

