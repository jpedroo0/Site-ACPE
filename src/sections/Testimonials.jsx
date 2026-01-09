import React, { useState, useRef, useEffect } from 'react'

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
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
    }
  ]

  // Para mostrar 2 cards por vez, calculamos quantos slides podemos ter
  // Com cards de 35%, podemos mostrar aproximadamente 2.8 cards, então fazemos loop
  const maxSlides = testimonials.length - 1
  
  const goToSlide = (index) => {
    // Loop: se passar do fim, volta ao início; se passar do início, vai ao fim
    if (index > maxSlides) {
      setCurrentSlide(0)
    } else if (index < 0) {
      setCurrentSlide(maxSlides)
    } else {
      setCurrentSlide(index)
    }
    setDragOffset(0)
  }

  const nextSlide = () => {
    if (currentSlide >= maxSlides) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + 1)
    }
    setDragOffset(0)
  }

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(maxSlides)
    } else {
      setCurrentSlide(currentSlide - 1)
    }
    setDragOffset(0)
  }

  // Calcula o deslocamento: cada card tem 35% + gap de 2rem (1rem de cada lado)
  const getTransform = () => {
    let baseTransform = 'translateX(0)'
    
    if (currentSlide > 0) {
      // Move 35% por slide + gap de 1rem por slide
      const percentage = currentSlide * 35
      const gap = currentSlide * 1
      baseTransform = `translateX(calc(-${percentage}% - ${gap}rem))`
    }
    
    // Adiciona o offset do drag em pixels
    if (isDragging && dragOffset !== 0) {
      return `${baseTransform} translateX(${dragOffset}px)`
    }
    
    return baseTransform
  }

  // Drag functionality - cards seguem o mouse em tempo real
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX)
    setDragOffset(0)
  }

  const handleMouseUp = (e) => {
    if (!isDragging) return
    
    const threshold = 100 // Minimum drag distance in pixels to trigger slide change
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

  const handleMouseMove = (e) => {
    if (!isDragging) return
    
    const diff = startX - e.pageX
    // Limita o drag para não ultrapassar muito os limites
    const maxDrag = carouselRef.current?.offsetWidth ? carouselRef.current.offsetWidth * 0.3 : 200
    const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
    setDragOffset(-limitedDiff)
  }

  // Event listeners globais para melhorar o drag
  useEffect(() => {
    if (!isDragging) return
    
    const handleGlobalMouseMove = (e) => {
      const diff = startX - e.pageX
      const maxDrag = carouselRef.current?.offsetWidth ? carouselRef.current.offsetWidth * 0.3 : 200
      const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
      setDragOffset(-limitedDiff)
    }
    
    const handleGlobalMouseUp = (e) => {
      const threshold = 100
      const currentX = e?.pageX || e?.clientX || startX
      const diff = startX - currentX
      
      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Dragged left, go to next
          if (currentSlide >= maxSlides) {
            setCurrentSlide(0)
          } else {
            setCurrentSlide(currentSlide + 1)
          }
        } else {
          // Dragged right, go to previous
          if (currentSlide <= 0) {
            setCurrentSlide(maxSlides)
          } else {
            setCurrentSlide(currentSlide - 1)
          }
        }
      }
      setDragOffset(0)
      setIsDragging(false)
    }
    
    document.addEventListener('mousemove', handleGlobalMouseMove)
    document.addEventListener('mouseup', handleGlobalMouseUp)
    
    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [isDragging, startX, currentSlide, maxSlides])

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
    const maxDrag = carouselRef.current?.offsetWidth ? carouselRef.current.offsetWidth * 0.3 : 200
    const limitedDiff = Math.max(-maxDrag, Math.min(maxDrag, diff))
    setDragOffset(-limitedDiff)
  }

  const handleTouchEnd = (e) => {
    if (!isDragging) return
    
    const threshold = 100
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
          className={`testimonials__carousel ${isDragging ? 'dragging' : ''}`}
          style={{ transform: getTransform() }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-card__header">
                <div className="testimonial-card__icon">⚙️</div>
                <h3 className="testimonial-card__category">{testimonial.category}</h3>
              </div>
              <p className="testimonial-card__quote">"{testimonial.quote}"</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{testimonial.avatar}</div>
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
              className={`testimonials__dot ${index === currentSlide ? 'testimonials__dot--active' : ''}`}
              onClick={() => goToSlide(index)}
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

