"use client"

import { motion } from "motion/react"
import { Zap, Trophy, Timer, Users, Sword, Target } from "lucide-react"
import { Button } from "@/components/atoms/button"

export default function ClanMashupTeaserSection() {
  const clanLogos = [
    { id: 1, name: "Shadow Phoenix", color: "#FF6B6B" },
    { id: 2, name: "Neon Wolves", color: "#4ECDC4" },
    { id: 3, name: "Cyber Dragons", color: "#FF8C42" },
    { id: 4, name: "Storm Raiders", color: "#6A5ACD" },
    { id: 5, name: "Void Hunters", color: "#FF69B4" },
    { id: 6, name: "Steel Titans", color: "#00CED1" },
  ]

  const stats = [
    { label: "Active Clans", value: "248", icon: Users },
    { label: "Battles Won", value: "15.2K", icon: Trophy },
    { label: "Live Matches", value: "42", icon: Sword },
    { label: "Average Score", value: "2.8K", icon: Target },
  ]

  return (
    <section className="relative min-h-screen bg-background py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-secondary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-foreground">Clan </span>
            <span className="text-secondary animate-pulse">Mashup</span>
            <span className="text-foreground"> Arena</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where the best clans clash for ultimate glory
          </motion.p>

          {/* Countdown Timer */}
          <motion.div
            className="inline-flex items-center gap-4 bg-muted/30 backdrop-blur-sm rounded-full px-8 py-4 border border-primary/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Timer className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold text-foreground">Next Battle in:</span>
            <div className="flex gap-2 text-2xl font-black">
              <span className="text-secondary">24</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-secondary">15</span>
              <span className="text-muted-foreground">:</span>
              <span className="text-secondary">37</span>
            </div>
          </motion.div>
        </div>

        {/* Clan Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {clanLogos.map((clan, index) => (
            <motion.div
              key={clan.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="relative bg-muted/20 backdrop-blur-sm rounded-xl p-8 border border-muted/50 hover:border-primary/50 transition-all duration-300 group-hover:bg-muted/30">
                {/* Neon Border Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-sm" />
                </div>
                
                {/* Clan Logo Placeholder */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div
                    className="w-20 h-20 rounded-full border-4 border-muted/50 flex items-center justify-center group-hover:border-primary/70 transition-all duration-300"
                    style={{ backgroundColor: clan.color + "20" }}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      boxShadow: [
                        `0 0 0 rgba(${clan.color}, 0)`,
                        `0 0 20px rgba(${clan.color.replace('#', '')}, 0.3)`,
                        `0 0 0 rgba(${clan.color}, 0)`,
                      ],
                    }}
                    transition={{
                      boxShadow: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse",
                      },
                    }}
                  >
                    <Zap className="w-10 h-10" style={{ color: clan.color }} />
                  </motion.div>
                  
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {clan.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">Elite Clan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Battle Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-muted/20 backdrop-blur-sm rounded-xl border border-muted/50 hover:border-secondary/50 transition-all duration-300 group"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-secondary group-hover:text-primary transition-colors" />
              <motion.div
                className="text-3xl font-black text-foreground mb-2"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
              >
                {stat.value}
              </motion.div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-foreground font-bold text-xl px-12 py-6 rounded-full relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
            <span className="relative z-10 flex items-center gap-3">
              <Sword className="w-6 h-6" />
              Join the Battle
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6" />
              </motion.div>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}