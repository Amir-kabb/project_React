import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-opacity-10 bg-current p-4 text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
          <Github size={24} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
          <Linkedin size={24} />
        </a>
        <a href="mailto:amir.kabbouri@example.com" className="hover:opacity-70">
          <Mail size={24} />
        </a>
      </div>
      <p>&copy; 2024 Amir Kabbouri. All rights reserved.</p>
    </footer>
  )
}

export default Footer