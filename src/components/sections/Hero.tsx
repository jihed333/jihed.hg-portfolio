import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail, Download, Rocket } from 'lucide-react'
import FloatingElements from '@/components/animations/FloatingElements'

const Hero = () => {
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  const controls = useAnimation()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Array of profile images (replace with actual image paths)
  const profileImages = [
    'jihedhero.jpg',
    'ozama.jpg',
    'bebo.jpg',
    'fallenleaf.jpg'
  ]

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  }, [controls])

  useEffect(() => {
    const titles = [
      'Full Stack Developer',
      'UI/UX Designer', 
      'Creative Coder',
      'Digital Artist',
      'Problem Solver'
    ]

    const handleTyping = () => {
      const i = loopNum % titles.length
      const fullText = titles[i]

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      )

      setTypingSpeed(isDeleting ? 30 : 150)

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && text === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleTyping, typingSpeed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, loopNum, typingSpeed])

  // Handle image cycling while hovering
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null
    if (isHovering) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % profileImages.length
        )
      }, 700) // Change image every 1.4 seconds
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isHovering, profileImages.length])

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <FloatingElements />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2"
            >
              <motion.p 
                className="text-purple-400 text-lg sm:text-xl font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I&apos;m
              </motion.p>
              
              <motion.h1 
                className="text-5xl sm:text-7xl lg:text-8xl font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="gradient-text">Jihed Hagui</span>
              </motion.h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-16 flex items-center justify-center lg:justify-start"
            >
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-white">
                I&apos;m a{' '}
                <span className="gradient-text font-mono">
                  {text}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-4xl leading-relaxed"
            >
              Crafting extraordinary digital experiences with cutting-edge technologies. 
              I transform ideas into stunning, interactive realities that push the boundaries of what&apos;s possible.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 max-w-lg mx-auto lg:mx-0"
            >
              {[
                { number: '14+', label: 'Projects' },
                { number: '2+', label: 'Years' },
                { number: '99%', label: 'Satisfaction' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="text-center glass p-4 rounded-xl"
                >
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="xl"
                variant="glow"
                onClick={() => scrollToNext()}
                className="group"
              >
                <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Explore My Work
              </Button>
              
              <Button
                size="xl"
                variant="outline"
                className="group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#contact', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center text-purple-400 hover:text-white transition-colors duration-300 glass"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="lg:w-1/2 flex justify-center relative"
            onHoverStart={() => setIsHovering(true)}
            onHoverEnd={() => setIsHovering(false)}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/30 backdrop-blur-md bg-black/20 group">
              <motion.img
                key={currentImageIndex}
                src={profileImages[currentImageIndex]}
                alt="Jihed Hagui"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              />
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/50 blur-sm pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={controls}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center space-y-2 text-purple-400 hover:text-purple-300 transition-colors">
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown size={24} className="animate-bounce" />
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-gray-900"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="currentColor"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="currentColor"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero