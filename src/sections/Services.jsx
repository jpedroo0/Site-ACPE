import React from 'react'

function Services() {
  const services = [
    {
      title: 'Plano de negócios',
      description: 'Transformamos ideias em projetos estruturados. Elaboramos desde o posicionamento estratégico até o plano de marketing operacional, com estudos de viabilidade, objetivos claros e projeções para curto, médio e longo prazo.  ',
      icon: '📊',
      iconBg: 'blue'
    },
    {
      title: 'Comex',
      description: 'Leve sua marca para o mundo. Estruturamos sua operação internacional com times de alta performance prontos para novos mercados.',
      icon: '🌐',
      iconBg: 'blue'
    },
    {
      title: 'Gestão Financeira',
      description: 'Tenha controle total do seu lucro. Saia do escuro com uma gestão inteligente que maximiza sua rentabilidade e proteja seu caixa.',
      icon: '$',
      iconBg: 'yellow'
    },
    {
      title: 'Plano de Marketing',
      description: 'Atraia os clientes certos. Estratégias poderosas para posicionar sua marca, engajar seu público e alavancar suas vendas.',
      icon: '💼',
      iconBg: 'yellow'
    }
  ]

  return (
    <section id="servicos" className="section services">
      <div className="services__header">
        <div className="services__badge">Nossos Serviços</div>
        <h2 className="services__title">Conheça Alguns dos Nossos Serviços</h2>
        <p className="services__description">
          Oferecemos uma gama completa de serviços de consultoria para otimizar processos e maximizar resultados
        </p>
      </div>
      <div className="services__grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className={`service-card__icon service-card__icon--${service.iconBg}`}>
              {service.icon}
            </div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__description">{service.description}</p>
            <a href="#" className="service-card__link">
              Saiba mais →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services





