"use client"

import { useState, useEffect } from "react"
import { motion, useAnimation } from "motion/react"
import { Button } from "@/components/atoms/button"
import { Input } from "@/components/atoms/input"
import { Zap, Users, ArrowRight, Sparkles } from "lucide-react"
import { Badge } from "@/components/atoms/badges"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const Particle = ({ index }: { index: number }) => {
  const controls = useAnimation()
  
  useEffect(() => {
    const animateParticle = async () => {
      while (true) {
        await controls.start({
          x: Math.random() * 100 - 50,
          y: Math.random() * 100 - 50,
          scale: Math.random() * 0.5 + 0.5,
          opacity: [0, 1, 0],
          transition: {
            duration: 4 + Math.random() * 3,
            ease: "easeInOut"
          }
        })
        await new Promise(resolve => setTimeout(resolve, Math.random() * 2000))
      }
    }
    
    animateParticle()
  }, [controls])

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full bg-[var(--color-urated-accent-primary)] opacity-30"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={controls}
    />
  )
}

const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate.getTime() - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center space-y-2"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="w-16 h-16 md:w-20 md:h-20 border-2 border-[var(--color-urated-accent-primary)] rounded-lg bg-[var(--color-urated-primary-background)] flex items-center justify-center shadow-lg">
          <span className="text-2xl md:text-3xl font-bold text-[var(--color-urated-text-primary)]">
            {value.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="absolute inset-0 rounded-lg bg-[var(--color-urated-accent-primary)] opacity-20 blur-sm"></div>
      </div>
      <span className="text-sm md:text-base font-medium text-[var(--color-urated-text-secondary)] uppercase tracking-wide">
        {label}
      </span>
    </motion.div>
  )

  return (
    <div className="flex justify-center space-x-4 md:space-x-6">
      <TimeUnit value={timeLeft.days} label="Days" />
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

export default function LaunchBanner() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Set launch date to 30 days from now
  const launchDate = new Date()
  launchDate.setDate(launchDate.getDate() + 30)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsLoading(false)
    setEmail("")
  }

  return (
    <section className="relative min-h-screen bg-[var(--color-urated-primary-background)] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-urated-accent-primary)]/20 via-transparent to-[var(--color-urated-accent-secondary)]/10"></div>
        
        {/* Particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
        
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,183,235,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,183,235,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          
          {/* Social Proof Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Badge variant="secondary" className="px-6 py-2 text-sm font-medium bg-[var(--color-urated-accent-secondary)]/20 text-[var(--color-urated-accent-secondary)] border-[var(--color-urated-accent-secondary)]/30">
              <Users className="w-4 h-4 mr-2" />
              10,000+ players already registered
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[var(--color-urated-text-primary)] leading-tight">
              <span className="block">URated eSports</span>
              <span className="block bg-gradient-to-r from-[var(--color-urated-accent-primary)] to-[var(--color-urated-accent-secondary)] bg-clip-text text-transparent">
                Launches Soon
              </span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex justify-center"
            >
              <Sparkles className="w-8 h-8 text-[var(--color-urated-accent-secondary)] animate-pulse" />
            </motion.div>
          </motion.div>

          {/* Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-urated-text-primary)] uppercase tracking-wide">
              Launch Countdown
            </h2>
            <CountdownTimer targetDate={launchDate} />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-[var(--color-urated-text-secondary)] max-w-2xl mx-auto leading-relaxed"
          >
            Be among the first to experience the future of competitive gaming. 
            Join the revolution that's transforming esports forever.
          </motion.p>

          {/* Email Signup Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-md mx-auto space-y-4"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <div className="w-16 h-16 bg-[var(--color-urated-accent-secondary)] rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-[var(--color-urated-primary-background)]" />
                </div>
                <p className="text-[var(--color-urated-accent-secondary)] font-medium">
                  You're in! We'll notify you when we launch.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-urated-primary-background)] border-2 border-[var(--color-urated-accent-primary)]/30 rounded-lg text-[var(--color-urated-text-primary)] placeholder-[var(--color-urated-text-secondary)] focus:border-[var(--color-urated-accent-primary)] focus:ring-2 focus:ring-[var(--color-urated-accent-primary)]/20 transition-all duration-300"
                  />
                  <div className="absolute inset-0 rounded-lg bg-[var(--color-urated-accent-primary)] opacity-5 blur-sm pointer-events-none"></div>
                </div>
                
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[var(--color-urated-accent-secondary)] hover:bg-[var(--color-urated-accent-secondary)]/90 text-[var(--color-urated-primary-background)] font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[var(--color-urated-accent-secondary)]/25"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-[var(--color-urated-primary-background)] border-t-transparent rounded-full animate-spin mr-2"></div>
                      Getting You Ready...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      Notify Me at Launch
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </div>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Additional Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center space-y-4"
          >
            <div className="flex items-center justify-center space-x-2 text-sm text-[var(--color-urated-text-secondary)]">
              <Zap className="w-4 h-4" />
              <span>No spam, just epic gaming updates</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--color-urated-accent-primary)]/10 to-transparent"></div>
    </section>
  )
}