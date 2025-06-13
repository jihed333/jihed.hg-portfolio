'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  progress: number;
  sparkle: boolean;
}

const LoadingScreen = ({ progress, sparkle }: LoadingScreenProps) => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [stars, setStars] = React.useState<Array<{
    size: number;
    left: number;
    top: number;
    opacity: number;
    duration: number;
    delay: number;
    speed: number;
  }>>([]);

  const [nebulaClouds, setNebulaClouds] = React.useState<Array<{
    size: number;
    left: number;
    top: number;
    opacity: number;
    duration: number;
    delay: number;
    color: string;
  }>>([]);

  React.useEffect(() => {
    setIsMounted(true);
    
    // Generate stars with ascending movement
    setStars(
      Array(150).fill(0).map(() => ({
        size: Math.random() * 3 + 1,
        left: Math.random() * 100,
        top: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
        speed: Math.random() * 20 + 10, // Speed for upward movement
      }))
    );

    // Generate nebula clouds
    setNebulaClouds(
      Array(8).fill(0).map(() => ({
        size: Math.random() * 200 + 100,
        left: Math.random() * 120 - 10, // Allow some overflow
        top: Math.random() * 120 - 10,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 15 + 10,
        delay: Math.random() * 5,
        color: ['purple', 'blue', 'indigo', 'violet'][Math.floor(Math.random() * 4)],
      }))
    );
  }, []);

  // Prevent hydration mismatch by not rendering dynamic content on server
  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-900 to-black flex items-center justify-center z-50 overflow-hidden">
        <div className="flex flex-col items-center justify-center">
          <div className="w-32 h-32 mb-8 rounded-full bg-white/10 animate-pulse" />
          <div className="text-4xl md:text-6xl font-bold text-white mb-8">
            {progress}%
          </div>
          <div className="w-64 h-1 bg-gray-700 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-900 to-black flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Galaxy Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Nebula Clouds */}
        {nebulaClouds.map((cloud, i) => (
          <motion.div
            key={`cloud-${i}`}
            className={`absolute rounded-full blur-3xl bg-gradient-to-r from-${cloud.color}-500/20 to-${cloud.color}-600/10`}
            style={{
              width: `${cloud.size}px`,
              height: `${cloud.size}px`,
              left: `${cloud.left}%`,
              top: `${cloud.top}%`,
            }}
            initial={{ 
              opacity: 0,
              y: 0,
              scale: 0.8 
            }}
            animate={{ 
              opacity: [cloud.opacity, cloud.opacity * 1.5, cloud.opacity],
              y: [-50, -100, -50],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360]
            }}
            transition={{
              duration: cloud.duration,
              repeat: Infinity,
              delay: cloud.delay,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Descending Stars (creates ascending illusion) */}
        {stars.map((star, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: `${star.left}%`,
            }}
            initial={{ 
              opacity: 0,
              y: -20,
              scale: 0.5 
            }}
            animate={{ 
              opacity: [0, star.opacity, star.opacity, 0],
              y: [-20, window.innerHeight + 50],
              scale: [0.5, 1, 1.2, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "linear"
            }}
          />
        ))}

        {/* Shooting Stars */}
        {Array(5).fill(0).map((_, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute w-1 h-20 bg-gradient-to-t from-transparent via-white to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0,
              x: 0,
              y: 0,
              rotate: -45 
            }}
            animate={{ 
              opacity: [0, 1, 0],
              x: [-100, 100],
              y: [-100, 100],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 3 + Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Floating Icon with Galaxy Effect */}
        <motion.div
          className="relative w-32 h-32 mb-8"
          initial={{ y: 0, scale: 1 }}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          {/* Orbital Rings */}
          <motion.div 
            className="absolute -inset-8 rounded-full border border-purple-400/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -inset-12 rounded-full border border-blue-400/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Main Icon Container */}
          <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm">
            <Image
              src="/icon.jpg"
              alt="Loading..."
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          
          {/* Pulsing Glow */}
          <motion.div 
            className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl -z-10"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
        
        {/* Progress Display */}
        <motion.div 
          className="text-4xl md:text-6xl font-bold mb-8 text-center"
          animate={{ 
            textShadow: sparkle 
              ? "0 0 20px #a855f7, 0 0 40px #a855f7" 
              : "0 0 10px rgba(255,255,255,0.5)" 
          }}
          transition={{ duration: 0.5 }}
        >
          <span className={`${sparkle ? 'text-purple-400' : 'text-white'} transition-colors duration-500`}>
            {progress}%
          </span>
        </motion.div>
        
        {/* Progress Bar */}
        <div className="relative w-64 h-2 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ 
              width: `${progress}%`,
              backgroundPosition: ['0% 50%', '100% 50%']
            }}
            transition={{ 
              width: { duration: 0.5 },
              backgroundPosition: { duration: 2, repeat: Infinity }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
        </div>
        
        {/* Loading Text */}
        <motion.p 
          className="mt-6 text-gray-300 text-sm md:text-base text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Ascending through the cosmos...
          </motion.span>
        </motion.p>
      </div>

      {/* Custom CSS for enhanced effects */}
      <style jsx global>{`
        @keyframes galaxyShimmer {
          0%, 100% { 
            background-position: 0% 50%; 
            opacity: 0.5;
          }
          50% { 
            background-position: 100% 50%; 
            opacity: 0.8;
          }
        }
        
        .galaxy-bg {
          background: linear-gradient(45deg, 
            rgba(147, 51, 234, 0.1), 
            rgba(59, 130, 246, 0.1), 
            rgba(147, 51, 234, 0.1));
          background-size: 200% 200%;
          animation: galaxyShimmer 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;