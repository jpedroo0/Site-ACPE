import React from 'react'

function Services() {
  const services = [
    {
      title: 'Consultoria',
      description: 'Oferecemos consultoria especializada para ajudar seu negócio a crescer.',
      features: ['Análise de mercado', 'Estratégias personalizadas', 'Acompanhamento contínuo']
    },
    {
      title: 'Desenvolvimento',
      description: 'Criamos soluções tecnológicas sob medida para suas necessidades.',
      features: ['Web e Mobile', 'Sistemas personalizados', 'Manutenção e suporte']
    },
    {
      title: 'Design',
      description: 'Designs modernos e funcionais que comunicam sua marca.',
      features: ['Identidade visual', 'UI/UX Design', 'Material gráfico']
    }
  ]

  return (
    <section id="servicos" className="section">
      <span className="eyebrow">Nossos Serviços</span>
      <h2>O que oferecemos</h2>
      <div className="cards-grid">
        {services.map((service, index) => (
          <div key={index} className="card">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services

