import React from 'react'
import { Book, Code, Server } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pl-[60px] pt-[60px]">
      <h2 className="text-4xl font-bold mb-8 text-center">À Propos de Moi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div className="glassmorphism p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Mon Parcours</h3>
          <p className="mb-4">En tant qu'étudiant en informatique à l'UPEC, je me suis plongé dans le monde de la technologie, apprenant et évoluant constamment. Ma passion pour la résolution de problèmes et l'innovation me pousse à explorer divers aspects de l'informatique.</p>
          <p className="mb-4">Du développement web à l'intelligence artificielle, je suis toujours désireux de relever de nouveaux défis et d'élargir mes compétences.</p>
        </div>
        <div className="glassmorphism p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Compétences & Intérêts</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><Code size={20} className="mr-2" /> Développement Web Full-stack</li>
            <li className="flex items-center"><Server size={20} className="mr-2" /> Cloud Computing</li>
            <li className="flex items-center"><Book size={20} className="mr-2" /> Machine Learning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About