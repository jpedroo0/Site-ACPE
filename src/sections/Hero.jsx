import React from 'react'

function Hero() {
  return (
    <section id="inicio" className="section hero">
      <div className="hero__content">
        <span className="eyebrow">Bem-vindo à ACPE</span>
        <h1>Transformando ideias em soluções inovadoras</h1>
        <p>
          Somos uma empresa júnior comprometida em oferecer serviços de qualidade 
          e desenvolver talentos através de projetos reais.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary">Nossos Serviços</button>
          <button className="btn btn--ghost">Saiba Mais</button>
        </div>
      </div>
      <div className="hero__media">
        {/* Espaço para ilustração ou imagem */}
      </div>
    </section>
  )
}

export default Hero

