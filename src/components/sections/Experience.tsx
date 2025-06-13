'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Semi-transparent overlay with blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey and roles I&apos;ve taken on over the years.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
        {/* Experience Item 2 - Hackathon Leadership */}
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Coding Team Leader</h3>
              <div className="text-purple-400 font-medium">Certified Hackathon Competition • 2025</div>
            </div>
            <p className="text-gray-300 mb-4">
              Led a team of developers in a high-pressure coding competition, coordinating development efforts
              and ensuring projects milestones were met. Guided the team in implementing best practices and
              maintaining clean, efficient code. Our projects were recognized for their innovative approach and
              technical excellence among competing teams.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm">
                Team Leadership
              </span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm">
                Project Management
              </span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm">
                Problem Solving
              </span>
              <span className="bg-purple-900/40 text-purple-300 px-3 py-1 rounded-full text-sm">
                Technical Strategy
              </span>
            </div>
          </motion.div>

          {/* Experience Item - Code Marketplace Platform */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-black/40 backdrop-blur-sm p-6 rounded-lg mb-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-lg"
          >
            <div className="flex flex-col md:flex-row justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Platform Developer</h3>
              <div className="text-blue-400 font-medium">J_Code Marketplace • 2025 - Present</div>
            </div>
            <p className="text-gray-300 mb-4">
              Currently developing a comprehensive marketplace platform tailored for developers to buy and sell code snippets, templates, and components. 
              The platform features secure transactions, code versioning, and a robust review system to ensure quality and reliability.
              Focused on creating an intuitive interface that simplifies code discovery and integration for developers of all skill levels.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">
                Full-Stack Development
              </span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">
                E-commerce Integration
              </span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">
                API Development
              </span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">
                Code Quality
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience