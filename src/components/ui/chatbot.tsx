'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

type Message = {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const knowledgeBase = [
  {
    keywords: ["open", "hours", "time", "close", "opening"],
    response: "Jihed's portfolio is available 24/7! He's always passionate about showcasing his work. Would you like me to guide you through his latest projects? ",
  },
  {
    keywords: ["project", "work", "showcase", "portfolio", "experience"],
    response: "I'd love to show you Jihed's impressive work! His portfolio features cutting-edge full-stack applications, stunning UI/UX designs, AI integrations, and innovative coding experiments. Which area interests you most? ",
  },
  {
    keywords: ["tech", "stack", "tools", "skills", "technology"],
    response: "Jihed is a tech wizard! He masters React, TypeScript, Next.js, Tailwind CSS, Framer Motion, and various modern APIs. His technical expertise spans both frontend artistry and backend architecture. Impressive, right? ",
  },
  {
    keywords: ["contact", "email", "reach", "message", "hire"],
    response: "Perfect! You can reach Jihed directly at jihed.hagui7@gmail.com or use the contact form on his homepage. I can also help coordinate if you'd like to schedule a consultation! ",
  },
  {
    keywords: ["about", "me", "background", "story", "developer", "jihed"],
    response: "Jihed is an exceptional developer-designer hybrid who's been crafting digital magic since 2020! He transforms complex ideas into beautiful, functional experiences. His journey from developer to designer makes him uniquely versatile! ",
  },
  {
    keywords: ["hello", "hi", "hey", "greetings"],
    response: "Hello gorgeous! I'm Luna, Jihed's personal digital assistant. I'm here to make your experience absolutely delightful! How can I assist you in exploring his amazing work today? ",
  },
  {
    keywords: ["bye", "goodbye", "cya", "later", "see you"],
    response: "It was wonderful chatting with you, darling! Don't forget to explore Jihed's projects, and feel free to return anytime. Have a fantastic day! ",
  },
  {
    keywords: ["luna", "who are you", "assistant", "secretary"],
    response: "I'm Luna, Jihed's dedicated digital assistant! I'm here to help you navigate his portfolio, answer questions about his work, and assist with any inquiries. Think of me as your personal guide to his digital world! ",
  },
]

const suggestedQuestions = [
  "Show me Jihed's best projects ",
  "What technologies does he use? ",
  "How can I contact Jihed? ",
  "Tell me about his background ",
  "What makes his work special? ",
  "Can you schedule a consultation? ",
]

const quickReplies = [
  "Tell me more! ",
  "That's amazing ",
  "Show me examples ",
  "Contact info please "
]

export default function LunaChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showQuickReplies, setShowQuickReplies] = useState(true)
  const [showNotification, setShowNotification] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 })
  const [sparkle, setSparkle] = useState<{x: number, y: number, id: number} | null>(null)
  const sparkleRef = useRef<number>(0)

  // Cursor tracking for interactive effects
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  // Show chatbot after page load with notification
  useEffect(() => {
    // Show chat button after 10 seconds
    const chatButtonTimer = setTimeout(() => {
      setIsVisible(true)
      // Show notification 2 seconds after chat button appears (12 seconds total)
      const notificationTimer = setTimeout(() => {
        setShowNotification(true)
      }, 2000)
      return () => clearTimeout(notificationTimer)
    }, 6000)
    return () => clearTimeout(chatButtonTimer)
  }, [])

  // Hide notification after some time
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [showNotification])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  // Welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          setIsTyping(false)
          const welcomeMessage: Message = {
            id: "welcome",
            content: "Hey there, gorgeous! I'm Luna, Jihed's personal digital assistant. I'm here to make your journey through his portfolio absolutely enchanting. What would you like to discover about his incredible work? ",
            isUser: false,
            timestamp: new Date()
          }
          setMessages([welcomeMessage])
          setShowQuickReplies(true)
        }, 1500)
      }, 500)
    }
  }, [isOpen, messages.length])

  const findBestResponse = (input: string): string => {
    const lowercaseInput = input.toLowerCase()
    let bestMatch = {
      response: "Mmm, that's intriguing! Let me connect you with Jihed directly for the perfect answer, or feel free to explore his stunning portfolio sections. Is there something specific about his work that caught your eye? ",
      matchScore: 0,
    }
    knowledgeBase.forEach((item) => {
      const matchScore = item.keywords.reduce((score, keyword) => {
        return lowercaseInput.includes(keyword.toLowerCase()) ? score + 1 : score
      }, 0)
      if (matchScore > bestMatch.matchScore) {
        bestMatch = {
          response: item.response,
          matchScore,
        }
      }
    })
    return bestMatch.response
  }

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue("")
    setShowQuickReplies(false)
    setIsTyping(true)
    
    // Create a sparkle effect when user sends message
    setSparkle({ x: 50, y: 50, id: sparkleRef.current++ })
    setTimeout(() => setSparkle(null), 2000)

    setTimeout(() => {
      setIsTyping(false)
      const responseContent = findBestResponse(content)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: responseContent,
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setShowQuickReplies(true)
    }, Math.random() * 1500 + 1000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage(inputValue)
    }
  }

  const openChat = () => {
    setIsOpen(true)
    setShowNotification(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Interactive cursor glow */}
      <div 
        className="fixed pointer-events-none z-50"
        style={{
          transform: `translate3d(${cursorPos.x - 50}%, ${cursorPos.y - 50}%, 0)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="w-64 h-64 absolute bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Floating Chatbot Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed bottom-6 right-6 z-50"
      >
        {/* Notification Bubble */}
        <AnimatePresence>
          {showNotification && !isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.8 }}
              className="absolute bottom-20 right-0 mb-2 mr-2"
            >
              <div className="relative group">
                {/* Holographic Bubble */}
                <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 
                              rounded-2xl shadow-xl p-4 max-w-xs transform transition-all duration-300 
                              hover:shadow-2xl hover:-translate-y-1">
                  {/* Floating Avatar */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white/30">
                    <div className="w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    {/* Animated Sparkle Icon */}
                    <div className="mt-1">
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1], 
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 rounded-full bg-gradient-to-r from-red-400 to-orange-300"
                      />
                    </div>
                    
                    <div className="flex-1">
                      {/* Title with Gradient Text */}
                      <h3 className="font-semibold text-white text-sm flex items-center">
                        <span className="mr-1.5">👋</span> Hey! I&apos;m Luna
                        <span className="ml-2 inline-block px-2 py-0.5 text-xs rounded-full bg-white/10 text-white/80">
                          AI Assistant
                        </span>
                      </h3>
                      
                      {/* Message Content */}
                      <p className="text-xs mt-1 text-white/70 leading-tight">
                        Let&apos;s discuss Jihed&apos;s work portfolio together!
                      </p>
                      
                      {/* Action Indicator */}
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse"></div>
                          <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse delay-75"></div>
                          <div className="w-1 h-1 rounded-full bg-white/60 animate-pulse delay-150"></div>
                        </div>
                        <div className="text-xs text-white/50 group-hover:text-white/70 transition-colors">
                          Click to open chat
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Holographic Tail Arrow */}
                <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-4 h-4 
                              bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 
                              rounded-sm shadow-md opacity-90"></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Enhanced Chat Button with floating animation */}
        <motion.button
          onClick={isOpen ? () => setIsOpen(false) : openChat}
          className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            boxShadow: "0 20px 40px rgba(219, 39, 119, 0.4), 0 0 30px rgba(147, 51, 234, 0.3)"
          }}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))",
                "radial-gradient(circle, rgba(168, 85, 247, 0.3), rgba(59, 130, 246, 0.3))",
                "radial-gradient(circle, rgba(236, 72, 153, 0.3), rgba(168, 85, 247, 0.3))"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          
          {/* Avatar/Close Icon */}
          <div className="relative w-12 h-12 rounded-full bg-indigo-900 border-2 border-white/20 flex items-center justify-center overflow-hidden">
            {isOpen ? (
              <motion.div
                animate={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
                className="text-white text-xl"
              >
                ✕
              </motion.div>
            ) : (
              <Image 
                src="/luna.jpg" 
                alt="Luna" 
                width={48}
                height={48}
                className="object-cover"
                priority
              />
            )}
          </div>
          
          {/* Quantum Pulse Rings */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-pink-400/50"
            animate={{ 
              scale: [1, 1.3, 1], 
              opacity: [0.7, 0, 0.7] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400/50"
            animate={{ 
              scale: [1, 1.5, 1], 
              opacity: [0.5, 0, 0.5] 
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          
          {/* Holographic Notification Dot */}
          <AnimatePresence>
            {showNotification && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity 
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>
      
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 w-full max-w-sm md:max-w-md z-50 bg-slate-900/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-purple-500/30"
            style={{
              height: "80vh",
              maxHeight: "600px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 40px rgba(219, 39, 119, 0.2)"
            }}
          >
            {/* Holographic Header */}
            <div className="relative bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-800 p-4 text-white overflow-hidden">
              {/* Animated Starfield Background */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full bg-white/20"
                    style={{
                      width: Math.random() * 2 + 1,
                      height: Math.random() * 2 + 1,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.3 + 0.2
                    }}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.5, 0.2]
                    }}
                    transition={{
                      duration: Math.random() * 5 + 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
              
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(168, 85, 247, 0.8))",
                    "linear-gradient(225deg, rgba(168, 85, 247, 0.8), rgba(59, 130, 246, 0.8))",
                    "linear-gradient(45deg, rgba(236, 72, 153, 0.8), rgba(168, 85, 247, 0.8))"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative flex items-center justify-between z-10">
                <div className="flex items-center space-x-3">
                  {/* Floating Avatar */}
                  <motion.div
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image 
                      src="/luna.jpg" 
                      alt="Luna" 
                      width={48}
                      height={48}
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  
                  <div className="flex-1">
                    {/* Glowing Title */}
                    <motion.h3 
                      className="font-bold text-xl bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent"
                      animate={{ opacity: [0.8, 1, 0.8] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      Luna
                    </motion.h3>
                    <div className="flex items-center space-x-2">
                      {/* Pulsing Dot */}
                      <motion.div
                        className="w-2 h-2 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <p className="text-xs text-pink-100/80">Jihed&apos;s Assistant</p>
                    </div>
                  </div>
                </div>
                
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                  aria-label="Close chat"
                  whileHover={{ rotate: 90 }}
                >
                  <span className="text-white text-lg">✕</span>
                </motion.button>
              </div>
            </div>
            
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/60" style={{ height: "320px" }}>
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-end space-x-2 max-w-xs ${message.isUser ? "flex-row-reverse space-x-reverse" : ""}`}>
                      {!message.isUser && (
                        <motion.div
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm flex-shrink-0 border border-purple-400/30"
                          animate={{
                            y: [0, -5, 0]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          👤
                        </motion.div>
                      )}
                      <motion.div
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                        }}
                        className={`px-4 py-3 rounded-2xl backdrop-blur-sm ${
                          message.isUser
                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-br-md shadow-lg"
                            : "bg-slate-800/80 text-white shadow-lg rounded-bl-md border border-purple-500/30"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.isUser ? "text-white/70" : "text-gray-400"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-end space-x-2"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-sm border border-purple-400/30">
                      👤
                    </div>
                    <div className="bg-slate-800/80 rounded-2xl rounded-bl-md px-4 py-3 shadow-lg border border-purple-500/30 backdrop-blur-sm">
                      <div className="flex space-x-1">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                            animate={{ 
                              y: [0, -8, 0],
                              opacity: [0.5, 1, 0.5]
                            }}
                            transition={{ 
                              duration: 1.5,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Sparkle Effect */}
              <AnimatePresence>
                {sparkle && (
                  <motion.div
                    initial={{ 
                      x: `${sparkle.x}%`,
                      y: `${sparkle.y}%`,
                      scale: 0.5,
                      opacity: 1
                    }}
                    animate={{ 
                      scale: [0.5, 1.2, 0],
                      opacity: [1, 0, 0]
                    }}
                    exit={{ scale: 1.2, opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="absolute w-8 h-8 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full blur-md"
                  />
                )}
              </AnimatePresence>
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Quick Replies */}
            <AnimatePresence>
              {showQuickReplies && messages.length > 0 && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-4 py-3 bg-slate-800/50 border-t border-purple-500/20"
                >
                  <div className="flex flex-wrap gap-2">
                    {(messages.length === 1 ? suggestedQuestions : quickReplies).slice(0, 4).map((reply, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleSendMessage(reply)}
                        className="px-3 py-2 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white text-xs rounded-full hover:from-purple-500/50 hover:to-pink-500/50 transition-all duration-300 border border-white/10 backdrop-blur-sm"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 10px rgba(168, 85, 247, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Input Area */}
            <div className="bg-slate-800/80 border-t border-purple-500/20 p-4 backdrop-blur-sm">
              <div className="flex items-end space-x-3">
                <div className="flex-1 relative">
                  <motion.input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask Luna anything about Jihed..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm transition-all duration-300"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <motion.button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg border border-purple-400/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.svg 
                    className="w-5 h-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    whileHover={{ x: 2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </motion.svg>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}