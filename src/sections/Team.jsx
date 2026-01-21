import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCheck } from '@fortawesome/free-solid-svg-icons'

function Team() {
  const teamMembers = [
    { name: 'Membro 1', role: 'Diretor' },
    { name: 'Membro 2', role: 'Coordenador' },
    { name: 'Membro 3', role: 'Desenvolvedor' },
    { name: 'Membro 4', role: 'Designer' }
  ]

  const teamFeatures = [
    'Profissionais qualificados',
    'Experiência comprovada',
    'Comprometimento com resultados',
    'Atendimento personalizado'
  ]

  return (
    <section id="equipe" className="section">
      <div className="team__header">
        <span className="eyebrow">
          <FontAwesomeIcon icon={faUsers} />
          Nossa Equipe
        </span>
        <h2>Conheça nosso time</h2>
      </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <div style={{ 
              width: '120px', 
              height: '120px', 
              background: '#e2e8f0', 
              borderRadius: '999px', 
              margin: '0 auto 0.75rem' 
            }}></div>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
      <div className="team__features">
        <ul className="team__features-list">
          {teamFeatures.map((feature, index) => (
            <li key={index} className="team__feature-item">
              <FontAwesomeIcon icon={faCheck} className="team__check-icon" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Team








