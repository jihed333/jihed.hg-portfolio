'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card'
import { Code, Palette, Brain, Coffee, Heart, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const passions = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and elegant code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating visually stunning interfaces that provide exceptional user experiences.'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Tackling complex challenges with innovative solutions and creative thinking.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies and staying ahead of industry trends.'
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Putting users first in every design and development decision.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing every aspect for lightning-fast, smooth user experiences.'
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Left Column - Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Passionate Developer & Creative Designer
                </h3>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Hello! I&apos;m <span className="gradient-text font-semibold">Jihed Hagui</span>, 
                    a passionate full-stack developer and designer based in Tunisia. With over 2 years 
                    of experience in the tech industry, I specialize in creating digital experiences 
                    that are not just functional, but truly extraordinary.
                  </p>
                  <p>
                    My journey began with a curiosity about how things work on the web, and it has 
                    evolved into a deep passion for crafting pixel-perfect interfaces and robust 
                    backend systems. I believe that great software is not just about writing code – 
                    it&apos;s about solving real problems and creating meaningful impact.
                  </p>
                  <p>
                    When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to 
                    open source projects, or learning about emerging technologies. I&apos;m always excited 
                    to take on new challenges and push the boundaries of what&apos;s possible.
                  </p>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Experience', value: '2+ Years' },
                  { label: 'Location', value: 'Tunisia' },
                  { label: 'Projects', value: '14+ Completed' },
                  { label: 'Availability', value: 'Open to Work' }
                ].map((fact, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-4 rounded-xl text-center"
                  >
                    <div className="text-2xl font-bold gradient-text">{fact.value}</div>
                    <div className="text-gray-400 text-sm">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Passions Grid */}
          <motion.div variants={itemVariants} className="space-y-12">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                What Drives <span className="gradient-text">Me</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These are the core principles and passions that fuel my work every day
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {passions.map((passion, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full bg-black/40 backdrop-blur-sm border border-white/10">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <passion.icon size={32} className="text-purple-400 group-hover:text-purple-300" />
                      </div>
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                        {passion.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                        {passion.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About