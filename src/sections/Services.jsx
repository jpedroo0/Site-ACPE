import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faGlobe, faDollarSign, faBriefcase, faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Services() {
  const services = [
    {
      title: 'Plano de negócios',
      description: 'Transformamos ideias em projetos estruturados. Elaboramos desde o posicionamento estratégico até o plano de marketing operacional, com estudos de viabilidade, objetivos claros e projeções para curto, médio e longo prazo.  ',
      icon: <FontAwesomeIcon icon={faChartLine} />,
      iconBg: 'blue'
    },
    {
      title: 'Comex',
      description: 'Leve sua marca para o mundo. Estruturamos sua operação internacional com times de alta performance prontos para novos mercados.',
      icon: <FontAwesomeIcon icon={faGlobe} />,
      iconBg: 'blue'
    },
    {
      title: 'Gestão Financeira',
      description: 'Tenha controle total do seu lucro. Saia do escuro com uma gestão inteligente que maximiza sua rentabilidade e proteja seu caixa.',
      icon: <FontAwesomeIcon icon={faDollarSign} />,
      iconBg: 'yellow'
    },
    {
      title: 'Plano de Marketing',
      description: 'Atraia os clientes certos. Estratégias poderosas para posicionar sua marca, engajar seu público e alavancar suas vendas.',
      icon: <FontAwesomeIcon icon={faBriefcase} />,
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
            <p className="service-card__description">
              {service.description.split('. ').map((sentence, idx, arr) => {
                const isLast = idx === arr.length - 1;
                const hasPeriod = sentence.endsWith('.');
                const cleanSentence = hasPeriod ? sentence.slice(0, -1) : sentence;
                
                return idx === 0 ? (
                  <React.Fragment key={idx}>
                    <strong>{cleanSentence}</strong>
                    {!isLast && '. '}
                  </React.Fragment>
                ) : (
                  <React.Fragment key={idx}>
                    {cleanSentence}
                    {!isLast && '. '}
                  </React.Fragment>
                );
              })}
            </p>
            <a href="https://api.whatsapp.com/send?phone=5534996952868&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPZ9RpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAacll4UKICtMFq3T3iTkKreOaQATXBuRSwsR621409E0OhsGY9R63JHKsU9cYg_aem_wdm5Hynuj1oUCIdXw6daYw" className={`service-card__link service-card__link--${service.iconBg}`}>
              Saiba mais <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services





