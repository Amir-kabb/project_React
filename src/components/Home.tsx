import React from 'react'

const Home: React.FC = () => {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-start pl-24">
      <div className="relative z-10 max-w-3xl glassmorphism p-8 rounded-lg">
        <h1 className="title text-7xl mb-6 font-pixel font-bold tracking-wide">KABBOURI Amir</h1>
        <h2 className="subtitle text-3xl mb-4">Etudiant informatique & Développeur Web</h2>
        <p className="content text-xl mb-8">Je suis étudiant à l'UPEC dans la formation de BUT Informatique</p>
      </div>
    </main>
  )
}

export default Home