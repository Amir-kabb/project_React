import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="animate-fade-in pl-[60px] pt-[60px]">
      <h2 className="text-4xl font-bold mb-8 text-center">Me Contacter</h2>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="glassmorphism p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Votre nom"
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Votre message"
              className="w-full p-2 rounded h-32"
              required
            ></textarea>
          </div>
          <button type="submit" className="w-full p-2 rounded transition-colors">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact