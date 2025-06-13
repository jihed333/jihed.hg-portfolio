'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent } from '@/components/ui/card' 
import { Code, Palette, Server, Zap,  } from 'lucide-react'
import { Skill } from '@/types'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 95, category: 'frontend' },
    { name: 'Next.js', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 88, category: 'frontend' },
    { name: 'Tailwind CSS', level: 92, category: 'frontend' },
    { name: 'Vue.js', level: 85, category: 'frontend' },
    { name: 'JavaScript', level: 93, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 87, category: 'backend' },
    { name: 'Python', level: 82, category: 'backend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'MongoDB', level: 85, category: 'backend' },
    { name: 'Flask', level: 88, category: 'backend' },
    { name: 'Django', level: 75, category: 'backend' },
    
    // Design
    { name: 'Figma', level: 90, category: 'design' },
    { name: 'Adobe XD', level: 85, category: 'design' },
    { name: 'Photoshop', level: 80, category: 'design' },
    { name: 'Illustrator', level: 78, category: 'design' },
    
    // Tools
    { name: 'Git', level: 92, category: 'tools' },
    { name: 'Windsurf codeium', level: 83, category: 'tools' },
    { name: 'Claude sonnet', level: 79, category: 'tools' },
    { name: 'Qwen', level: 79, category: 'tools' },
    { name: 'Vercel', level: 88, category: 'tools' }
  ]

  const categories = [
    {
      name: 'Frontend',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: skills.filter(skill => skill.category === 'frontend')
    },
    {
      name: 'Backend',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      skills: skills.filter(skill => skill.category === 'backend')
    },
    {
      name: 'Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: skills.filter(skill => skill.category === 'design')
    },
    {
      name: 'Tools',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      skills: skills.filter(skill => skill.category === 'tools')
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Mastering cutting-edge technologies to build exceptional digital experiences across web development, design, and modern frameworks.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full backdrop-blur-md border border-white/10 bg-black/40 hover:bg-gradient-to-r hover:${category.color} hover:bg-opacity-30 transition-all duration-300`}
              >
                <div className="flex items-center gap-2">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className={`text-xl font-bold bg-gradient-to-r from-${category.color} bg-clip-text text-transparent`}>
                  {category.name} Expertise
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ x: 10 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.2 + (skillIndex * 0.1), ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Advanced Skills Visualization */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold gradient-text text-center mb-8">Skill Distribution & Proficiency</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Radar Chart */}
              <Card className="p-6 backdrop-blur-sm border border-white/10 bg-black/40 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-80">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full max-w-xs max-h-xs">
                        {/* Simple SVG radar chart visualization */}
                        <svg viewBox="0 0 200 200" className="w-full h-full">
                          {/* Hexagon background */}
                          <polygon 
                            points="100,10 173.2,55 173.2,145 100,190 26.8,145 26.8,55" 
                            fill="none" 
                            stroke="rgba(129, 140, 248, 0.2)" 
                            strokeWidth="1"
                          />
                          <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(129, 140, 248, 0.2)" strokeWidth="1" />
                          <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(129, 140, 248, 0.1)" strokeWidth="1" />
                          <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(129, 140, 248, 0.1)" strokeWidth="1" />
                          
                          {/* Axes */}
                          {[...Array(6)].map((_, i) => {
                            const angle = (i * Math.PI / 3) - Math.PI/2;
                            const x = 100 + 80 * Math.cos(angle);
                            const y = 100 + 80 * Math.sin(angle);
                            return (
                              <line 
                                key={i}
                                x1="100" 
                                y1="100" 
                                x2={x} 
                                y2={y} 
                                stroke="rgba(129, 140, 248, 0.2)"
                                strokeWidth="1"
                              />
                            );
                          })}
                          
                          {/* Data points */}
                          <polygon 
                            points={[
                              [100, 40],     // Top
                              [150, 70],    // Top-right
                              [130, 130],   // Bottom-right
                              [70, 130],    // Bottom-left
                              [50, 70],     // Top-left
                              [100, 40]     // Back to top
                            ].map(([x, y]) => `${x},${y}`).join(' ')}
                            fill="url(#radarGradient)"
                            opacity="0.7"
                          />
                          
                          {/* Gradient definition */}
                          <defs>
                            <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.8"/>
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Axis labels */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-full h-full max-w-xs max-h-xs">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-xs text-purple-400 whitespace-nowrap">Frontend</div>
                        <div className="absolute top-1/4 right-0 transform translate-x-4 translate-y-1/4 text-xs text-green-400">Backend</div>
                        <div className="absolute bottom-1/4 right-0 transform translate-x-4 -translate-y-1/4 text-xs text-pink-400">Design</div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-xs text-yellow-400">Tools</div>
                        <div className="absolute bottom-1/4 left-0 transform -translate-x-8 -translate-y-1/4 text-xs text-blue-400">Frameworks</div>
                        <div className="absolute top-1/4 left-0 transform -translate-x-8 translate-y-1/4 text-xs text-indigo-400">Database</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center text-sm text-gray-400">
                    Multidimensional view of core competencies
                  </div>
                </CardContent>
              </Card>

              {/* Skill Cloud */}
              <Card className="glass p-6 backdrop-blur-md border border-gray-800 hover:border-blue-500/50 transition-all duration-300">
                <CardContent className="p-0">
                  <div className="h-80 flex items-center justify-center">
                    <div className="relative w-full h-full flex flex-wrap items-center justify-center gap-2">
                      {skills.slice(0, 12).map((skill, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, y: -20 }}
                          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                          transition={{ duration: 0.6, delay: 0.5 + (index * 0.05) }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`px-3 py-1 rounded-full text-sm border ${[
                            'border-purple-500/30 text-purple-400',
                            'border-blue-500/30 text-blue-400',
                            'border-green-500/30 text-green-400',
                            'border-pink-500/30 text-pink-400',
                            'border-orange-500/30 text-orange-400',
                            'border-cyan-500/30 text-cyan-400',
                          ][index % 6]}`}
                        >
                          {skill.name}
                        </motion.span>
                      ))}
                      
                      {/* Animated orbiting elements */}
                      <motion.div 
                        className="absolute w-3 h-3 bg-purple-500 rounded-full"
                        animate={{
                          rotate: 360,
                          transition: { duration: 20, repeat: Infinity, ease: 'linear' }
                        }}
                        style={{ left: '50%', top: '50%', x: '-50%', y: '-50%' }}
                      >
                        <motion.div 
                          className="absolute w-1.5 h-1.5 bg-blue-500 rounded-full"
                          style={{ left: '100%', top: '50%', y: '-50%' }}
                          animate={{
                            rotate: -360,
                            transition: { duration: 10, repeat: Infinity, ease: 'linear' }
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center text-sm text-gray-400">
                    Dynamic representation of primary technical capabilities
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills