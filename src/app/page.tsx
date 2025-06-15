'use client'

import { useState, useEffect } from 'react'

// Extend the React video element props to include non-standard attributes
declare module 'react' {
  interface VideoHTMLAttributes<T> extends HTMLAttributes<T> {
    // For iOS Safari
    webkitPlaysInline?: boolean;
    // For WeChat
    'x5-playsinline'?: string;
    'x5-video-player-fullscreen'?: string;
  }
}
import dynamic from 'next/dynamic'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Experience from '../components/sections/Experience'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'
import ScrollProgress from '../components/animations/ScrollProgress'
import LoadingScreen from '../components/ui/LoadingScreen'

// Dynamically import LunaChatbot with SSR disabled
const DynamicOllamaChat = dynamic(
  () => import('../components/ui/chatbot'),
  { ssr: false }
)

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [sparkle, setSparkle] = useState(false);


  useEffect(() => {
    // Simulate loading progress
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
      
      // Toggle sparkle effect randomly
      if (Math.random() > 0.7) {
        setSparkle(true);
        setTimeout(() => setSparkle(false), 300);
      }
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen progress={progress} sparkle={sparkle} />;
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30"
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          onContextMenu={(e) => e.preventDefault()}
          webkitPlaysInline={true}
          x5-playsinline="true"
          x5-video-player-fullscreen="true"
        >
          <source src="/background.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black"></div>
        </video>
      </div>
      <ScrollProgress />
      <div className="relative z-10">
        <Navbar />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="skills">
        <Skills />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      <Footer />
      <DynamicOllamaChat />
      </div>
    </main>
  )
}