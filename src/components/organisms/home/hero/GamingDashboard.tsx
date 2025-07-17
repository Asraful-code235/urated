"use client";
import { motion } from 'motion/react';
import { Trophy, Zap, Users } from 'lucide-react';

export function GamingDashboard() {
  return (
    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
      <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-304 rounded-md bg-[#1A202C] shadow-2xl ring-1 ring-[#00B7EB]/20 shadow-[#00B7EB]/10 border border-[#00B7EB]/30"
        >
          {/* Gaming Dashboard Mockup */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-[#A0AEC0] text-sm">URated Dashboard</div>
            </div>
            
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-white text-xl font-bold">Welcome back, Player</h2>
                <div className="flex items-center gap-2 text-[#39FF14]">
                  <Trophy className="h-5 w-5" />
                  <span className="font-semibold">Rank: Diamond</span>
                </div>
              </div>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#2D3748] rounded-lg p-4 border border-[#00B7EB]/20">
                  <div className="text-[#A0AEC0] text-sm">Win Rate</div>
                  <div className="text-white text-2xl font-bold">87%</div>
                </div>
                <div className="bg-[#2D3748] rounded-lg p-4 border border-[#39FF14]/20">
                  <div className="text-[#A0AEC0] text-sm">Matches</div>
                  <div className="text-white text-2xl font-bold">342</div>
                </div>
                <div className="bg-[#2D3748] rounded-lg p-4 border border-[#00B7EB]/20">
                  <div className="text-[#A0AEC0] text-sm">Points</div>
                  <div className="text-white text-2xl font-bold">2,847</div>
                </div>
              </div>
              
              {/* Live Matches */}
              <div className="bg-[#2D3748] rounded-lg p-4 border border-[#39FF14]/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Live Matches</h3>
                  <Zap className="h-5 w-5 text-[#39FF14]" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A0AEC0]">Team Alpha vs Team Beta</span>
                    <span className="text-[#39FF14]">LIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#A0AEC0]">Solo Queue Ranked</span>
                    <span className="text-[#00B7EB]">Searching...</span>
                  </div>
                </div>
              </div>
              
              {/* Clan Members */}
              <div className="bg-[#2D3748] rounded-lg p-4 border border-[#00B7EB]/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-semibold">Clan Members</h3>
                  <Users className="h-5 w-5 text-[#00B7EB]" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#39FF14] rounded-full"></div>
                    <span className="text-[#A0AEC0] text-sm">ProGamer_X</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#39FF14] rounded-full"></div>
                    <span className="text-[#A0AEC0] text-sm">SkillMaster</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-[#A0AEC0] text-sm">EliteSniper</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
