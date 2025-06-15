'use client'

import { motion } from 'framer-motion'

const Projects = () => {
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">My Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects I&apos;ve built.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
        >
          <div className="h-64 bg-gray-800 relative overflow-hidden">
            <div className="relative w-full h-full">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                onContextMenu={(e) => e.preventDefault()}
                webkit-playsinline="true"
                x5-playsinline="true"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="portrait"
              >
                <source src="/jcode.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 flex items-end p-4">
              <h3 className="text-xl font-bold text-white">J_Code</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 mb-4">
              J_Code is a sleek marketplace where developers buy and sell quality code snippets, 3D-templates, and mini-projects. From monetizing your skills to finding ready-to-use solutions, J_Code empowers coders at every level—wrapped in a smooth, mysterious purple gradient experience.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                Next.js
              </span>
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                TypeScript
              </span>
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                Tailwind CSS
              </span>
            </div>
            <div className="flex gap-4">

              <a
                href="#"
                className="text-purple-500 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
        >
          <div className="h-64 bg-gray-800 relative overflow-hidden">
            <div className="relative w-full h-full">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
                preload="auto"
                disablePictureInPicture
                disableRemotePlayback
                onContextMenu={(e) => e.preventDefault()}
                webkit-playsinline="true"
                x5-playsinline="true"
                x5-video-player-type="h5"
                x5-video-player-fullscreen="true"
                x5-video-orientation="portrait"
              >
                <source src="/gambling.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 flex items-end p-4">
              <h3 className="text-xl font-bold text-white">JENterprise</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 mb-4">
           Where Fortune Meets Luxury - An exclusive, high-stakes gambling platform that redefines elegance in online gaming. Experience the thrill of risk with the sophistication of a high-end casino, all from the comfort of your device. For those who don&apos;t just play the game, but live it in style.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                Django
              </span>
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                HTML
              </span>
       
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-purple-500 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Project Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300"
        >
          <div className="h-64 bg-gray-800 relative overflow-hidden">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="groove.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 flex items-end p-4">
              <h3 className="text-xl font-bold text-white">Groove</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-400 mb-4">
            Your AI-powered nightlife companion. Discover and book the hottest clubs and events through an intelligent chatbot, all wrapped in a sleek, 3D interface. Built with Next.js and Express.js for lightning-fast performance. Your VIP night out, simplified.            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                Node.js
              </span>
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                Express.js
              </span>
              <span className="bg-purple-900/30 text-purple-400 px-3 py-1 rounded-full text-sm">
                DRF
              </span>
            </div>
            <div className="flex gap-4">
   
              <a
                href="#"
                className="text-purple-500 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects