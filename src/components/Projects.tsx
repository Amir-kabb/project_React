import React from 'react'

const projects = [
  {
    name: 'Find Your Wave',
    description: 'Projet de formation - Application SPA',
    image: 'https://source.unsplash.com/random/300x200?clock'
  },
  {
    name: 'Portfolio',
    description: 'Site web développeur - Application SPA',
    image: 'https://source.unsplash.com/random/300x200?watch'
  },
  {
    name: 'Markdown Previewer',
    description: 'Site pour traduction Markdown',
    image: 'https://source.unsplash.com/random/300x200?time'
  },
  {
    name: 'Drum Machine',
    description: 'Application machine à samples',
    image: 'https://source.unsplash.com/random/300x200?clocktower'
  },
  {
    name: 'Calculator',
    description: 'Application calculatrice',
    image: 'https://source.unsplash.com/random/300x200?sundial'
  }
]

const Projects: React.FC = () => {
  return (
    <main className="pl-[90px] pt-[80px] pr-[30px]">
      <h2 className="text-4xl font-bold mb-8 text-center">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="glassmorphism p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-sm opacity-80">{project.description}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Projects