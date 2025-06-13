'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // This is a placeholder for form submission logic
    // In a real implementation, you would send the form data to a server
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setName('')
      setEmail('')
      setMessage('')

      // Reset the submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000)
    }, 1500)
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-2 gradient-text">Contact Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Feel free to reach out if you have any questions or want to work together!
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.div 
          className="flex-1 bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {submitted ? (
            <div className="text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-gray-400">I&apos;ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-purple-600/80 to-indigo-600/80 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition-opacity backdrop-blur-sm border border-white/10 disabled:opacity-70 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          className="flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Looking forward to hearing from you! Whether you have a question about my work, 
              a potential collaboration, or just want to say hello, I&apos;m here to help.            
            </p>
            <div className="space-y-4">
              <motion.a 
                href="mailto:jihed.hagui7@gmail.com" 
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors"
                variants={fadeInUp}
              >
                <FaEnvelope className="mr-3 text-xl text-purple-500" />
                jihed.hagui7@gmail.com
              </motion.a>
            </div>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-white">Follow Me</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl text-white hover:bg-purple-500 transition-colors"
                variants={fadeInUp}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl text-white hover:bg-purple-500 transition-colors"
                variants={fadeInUp}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-xl text-white hover:bg-purple-500 transition-colors"
                variants={fadeInUp}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Contact
