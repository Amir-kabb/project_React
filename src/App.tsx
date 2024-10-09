import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Background from './components/Background'
import { LanguageProvider } from './contexts/LanguageContext'

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [language, setLanguage] = useState('FR')

  const toggleTheme = () => setIsDarkMode(!isDarkMode)
  const toggleLanguage = () => setLanguage(language === 'FR' ? 'EN' : 'FR')

  return (
    <LanguageProvider value={{ language, toggleLanguage }}>
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-yellow-400' : 'bg-white text-purple-800'}`}>
        <Background isDarkMode={isDarkMode} />
        <Header 
          currentTab={currentTab} 
          setCurrentTab={setCurrentTab}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          language={language}
          toggleLanguage={toggleLanguage}
        />
        <div className="relative z-10 pt-[60px]">
          {currentTab === 'home' && <Home />}
          {currentTab === 'projects' && <Projects />}
          {currentTab === 'about' && <About />}
          {currentTab === 'contact' && <Contact />}
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App