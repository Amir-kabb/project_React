import React from 'react'
import { Sun, Moon, Globe } from 'lucide-react'

interface HeaderProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentTab, setCurrentTab, isDarkMode, toggleTheme, language, toggleLanguage }) => {
  const navItems = {
    home: 'Accueil',
    projects: 'Mes Projets',
    about: 'À Propos',
    contact: 'Me Contacter',
  }

  return (
    <header className="absolute top-0 left-0 w-full z-20 flex items-center justify-between" style={{ height: '60px' }}>
      <nav className="flex space-x-6 ml-[90px]">
        {Object.entries(navItems).map(([key, value]) => (
          <a
            key={key}
            href="#"
            className={`nav-link ${isDarkMode ? 'text-yellow-400' : 'text-purple-800'} ${currentTab === key ? 'font-bold' : ''}`}
            onClick={() => setCurrentTab(key)}
          >
            {value}
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-4 mr-8">
        <button 
          onClick={toggleTheme} 
          className="flex items-center space-x-2 px-3 py-1 rounded-full transition-colors duration-200"
        >
          <span className={`font-medium ${isDarkMode ? 'text-yellow-400' : 'text-purple-800'} mr-2`}>
            {isDarkMode ? 'Dark' : 'Light'}
          </span>
          <div className={`w-14 h-7 flex items-center bg-black border-2 ${
            isDarkMode ? 'border-yellow-400' : 'border-purple-800'
          } rounded-full p-0.5 transition-colors duration-200`}>
            <div className={`bg-yellow-400 w-5 h-5 rounded-full shadow-md transform transition-transform duration-200 ${
              isDarkMode ? 'translate-x-7' : 'translate-x-0'
            }`}></div>
          </div>
        </button>
        <button onClick={toggleLanguage} className={`p-2 rounded-full ${
          isDarkMode ? 'text-yellow-400 hover:bg-yellow-900' : 'text-purple-800 hover:bg-purple-200'
        } transition-colors duration-200`}>
          <Globe size={20} />
          <span className="ml-1">{language}</span>
        </button>
      </div>
    </header>
  )
}

export default Header