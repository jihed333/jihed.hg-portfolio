'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Zap, Rocket, Star, Heart } from 'lucide-react'

const FloatingElements = () => {
  const icons = [
    { Icon: Code, delay: 0, x: 100, y: 200 },
    { Icon: Palette, delay: 0.5, x: 200, y: 100 },
    { Icon: Zap, delay: 1, x: 300, y: 300 },
    { Icon: Rocket, delay: 1.5, x: 150, y: 400 },
    { Icon: Star, delay: 2, x: 400, y: 150 },
    { Icon: Heart, delay: 2.5, x: 350, y: 250 }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute text-purple-500/20"
          initial={{ opacity: 0, scale: 0, x, y }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [y, y - 100, y - 200],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            repeatDelay: 8,
            ease: "easeInOut"
          }}
        >
          <Icon size={32} />
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements