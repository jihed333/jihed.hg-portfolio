'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Facebook, ExternalLink } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  // Floating orbs animation
  const FloatingOrbs = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute w-20 h-20 rounded-full bg-purple-500/10 blur-2xl"
        animate={{
          y: [0, -10, 0],
          x: [0, 8, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '10%', left: '15%' }}
      />
      <motion.div 
        className="absolute w-24 h-24 rounded-full bg-pink-500/10 blur-2xl"
        animate={{
          y: [0, 10, 0],
          x: [0, -10, 0],
          scale: [1, 0.95, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: '10%', right: '20%' }}
      />
    </div>
  )

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/jihed333',  icon: Github, color: 'hover:text-purple-400' },
    { name: 'LinkedIn', href: 'https://linkedin.com',  icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://www.facebook.com/jihed.haggui.7',  icon: Facebook, color: 'hover:text-blue-500' },
    { name: 'Email', href: 'mailto:jihed.hagui7@gmail.com', icon: Mail, color: 'hover:text-amber-400' }
  ]

  return (
    <footer className="relative py-12 overflow-hidden text-white font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full opacity-5">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.2"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Floating Orbs */}
      <FloatingOrbs />

      <div className="container relative z-10 mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {/* Brand Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="relative">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400"
                whileHover={{ 
                  scale: 1.03,
                  textShadow: "0 0 8px rgba(147, 51, 234, 0.4), 0 0 15px rgba(236, 72, 153, 0.2)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Jihed Hagui
              </motion.h3>
              <motion.div 
                className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-md"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            
            <p className="mt-3 text-gray-300 text-center md:text-left max-w-xs">
              Crafting digital experiences that blend creativity and technology. Let&apos;s build something amazing together.
            </p>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              Quick Links
            </h4>
            
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "Projects", href: "/projects" },
                { name: "Contact", href: "/contact" },
                { name: "Privacy Policy", href: "/privacy" }
              ].map((link, i) => (
                <motion.li 
                  key={i}
                  className="group"
                >
                  <a 
                    href={link.href}
                    className="relative text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-3">{link.name}</span>
                    <span className="w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-8 transition-all duration-300"></span>
                  </a>
                </motion.li>
              ))} 
            </ul>
          </motion.div>

          {/* Contact Info Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center md:items-start"
          >
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
              Contact Info
            </h4>
            
            <div className="space-y-3">
              <a href="mailto:jihed.hagui7@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={16} className="text-purple-400" />
                <span>jihed.hagui7@gmail.com</span>
              </a>
              <a href="tel:+21699730452" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <span className="text-purple-400">+</span>
                <span>216 99 730 452</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Social Network Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <social.icon 
                    size={18} 
                    className={`transition-transform duration-300 group-hover:scale-110 ${social.color}`} 
                  />
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity"></div>
                </div>
                <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.name}
                </span>
              </motion.a>
            ))} 
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative pt-4 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Jihed Hagui. All rights reserved.
            </p>
            
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-gray-500 text-sm justify-center">
                <span>Handcrafted with</span>
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <motion.div whileHover={{ rotate: 180 }} transition={{ duration: 0.5 }}>
                    <svg className="w-4 h-4 text-pink-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </motion.div>
                </motion.span>
                <span>and</span>
                <motion.span
                  animate={{ 
                    scale: [1, 1.1, 1],
                    y: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.span>
              </div>
            </div>
          </div>
          
          {/* Scroll to Top Button (Centered) */}
          <motion.a 
            href="#top"
            className="flex justify-center mt-6"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <span className="text-sm font-medium">Back to top</span>
              <ExternalLink size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer