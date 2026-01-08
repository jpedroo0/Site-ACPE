import React from 'react'

function Team() {
  const teamMembers = [
    { name: 'Membro 1', role: 'Diretor' },
    { name: 'Membro 2', role: 'Coordenador' },
    { name: 'Membro 3', role: 'Desenvolvedor' },
    { name: 'Membro 4', role: 'Designer' }
  ]

  return (
    <section id="equipe" className="section">
      <span className="eyebrow">Nossa Equipe</span>
      <h2>Conheça nosso time</h2>
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
    </section>
  )
}

export default Team







