'use client'

import { useState, useEffect, useRef, useMemo } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, Home, User, Code, Briefcase, Mail, Award, LucideIcon } from 'lucide-react'

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
  color: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const navItems = useMemo<NavItem[]>(() => [
    { name: 'Home', href: '#home', icon: Home, color: 'from-pink-500 to-purple-600' },
    { name: 'About', href: '#about', icon: User, color: 'from-blue-500 to-cyan-600' },
    { name: 'Skills', href: '#skills', icon: Award, color: 'from-green-500 to-emerald-600' },
    { name: 'Projects', href: '#projects', icon: Code, color: 'from-orange-500 to-red-600' },
    { name: 'Experience', href: '#experience', icon: Briefcase, color: 'from-purple-500 to-indigo-600' },
    { name: 'Contact', href: '#contact', icon: Mail, color: 'from-yellow-500 to-orange-600' },
  ], [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = navItems.map(item => item.href.substring(1))
      const current = sections.find(section => {
        const element = document.getElementById(section) as HTMLElement | null
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems]) 

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (navRef.current) {
      const rect = navRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }
  }

  useEffect(() => {
    const handleDocumentMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect()
        mouseX.set(e.clientX - rect.left)
        mouseY.set(e.clientY - rect.top)
      }
    }

    document.addEventListener('mousemove', handleDocumentMouseMove)
    return () => document.removeEventListener('mousemove', handleDocumentMouseMove)
  }, [mouseX, mouseY, navRef])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Cosmic Background Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-pink-900/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.05)_0%,transparent_50%)]"></div>
      </div>

      <motion.nav 
        ref={navRef}
        className={`fixed top-0 w-full z-40 transition-all duration-300 h-14 ${
          scrolled ? 'bg-black/10 backdrop-blur-sm' : 'bg-black/30 backdrop-blur-sm'
        }`}
        onMouseMove={handleMouseMove}
        style={{
          WebkitBackdropFilter: 'blur(8px)',
          backdropFilter: 'blur(8px)'
        }}
      >
        {/* Floating Orb Cursor Follower */}
        <motion.div
          className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full pointer-events-none opacity-10"
          style={{ x, y, translateX: '-50%', translateY: '-50%' }}
          animate={{ scale: hoveredItem ? 1.5 : 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />

        <div className="flex items-center justify-between h-full px-4">
          {/* JH Logo */}
          <a 
            href="#home" 
            className="block text-2xl font-black tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-500"
          >
            JH
          </a>

          {/* Desktop Navigation - Floating Pills */}
          <div className="hidden lg:block">
            <motion.div 
              className="flex items-center space-x-2 rounded-2xl bg-gray-900/40 backdrop-blur-md border border-white/10 shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }}
                  onClick={() => scrollToSection(item.href)}
                  onHoverStart={() => setHoveredItem(item.name)}
                  onHoverEnd={() => setHoveredItem(null)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center gap-2 group overflow-hidden ${
                    activeSection === item.href.substring(1)
                      ? 'text-white bg-gradient-to-r from-purple-900/30 to-pink-900/30 shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {/* Dynamic Background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    layoutId={activeSection === item.href.substring(1) ? "activeTab" : undefined}
                    animate={{
                      opacity: activeSection === item.href.substring(1) ? 1 : 0
                    }}
                  />
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  />
                  
                  {/* Icon with Micro Animation */}
                  <motion.div
                    animate={{ 
                      rotate: hoveredItem === item.name ? 360 : 0,
                      scale: activeSection === item.href.substring(1) ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon size={16} className="relative z-10" />
                  </motion.div>
                  
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active Indicator */}
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 w-2 h-2 bg-white rounded-full shadow-lg"
                      style={{ translateX: '-50%' }}
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Mobile menu button - Morphing Animation */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Slide Down Masterpiece */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden backdrop-blur-2xl bg-black/40 border-t border-white/10 shadow-2xl"
            >
              <div className="px-4 pt-4 pb-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    onClick={() => scrollToSection(item.href)}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full text-left px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-500 flex items-center gap-3 group relative overflow-hidden ${
                      activeSection === item.href.substring(1)
                        ? 'text-white bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-400/50'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="relative z-10"
                    >
                      <item.icon size={20} />
                    </motion.div>
                    
                    <span className="relative z-10">{item.name}</span>
                    
                    {/* Slide Indicator */}
                    <motion.div
                      className="absolute right-0 top-1/2 w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"
                      style={{ translateY: '-50%' }}
                      animate={{ 
                        scale: activeSection === item.href.substring(1) ? 1 : 0,
                        opacity: activeSection === item.href.substring(1) ? 1 : 0
                      }}
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ambient Light Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/2 via-transparent to-pink-500/2 pointer-events-none"></div>
      </motion.nav>

      {/* Spacer for fixed navbar */}
      <div className="h-14 relative z-0"></div>
    </>
  )
}

export default Navbar