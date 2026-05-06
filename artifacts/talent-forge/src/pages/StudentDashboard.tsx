import { motion } from "framer-motion";
import { toast } from "sonner";
import { ExternalLink } from "lucide-react";
import DashboardSidebar from "@/components/DashboardSidebar";
import TFESGauge from "@/components/TFESGauge";
import MissionCard from "@/components/MissionCard";
import ProjectCard from "@/components/ProjectCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const stats = [
  { label: "TFES Score", value: null, score: 82, color: "blue" },
  { label: "Total Earned", value: "₹47,500", color: "green" },
  { label: "Projects Done", value: "14", color: "cyan" },
  { label: "Badges Earned", value: "6", color: "amber" },
];

const missions = [
  { title: "Design a Full-Wave Bridge Rectifier", duration: "Due in 3 days", xp: 250, reward: "8,000", progress: 45 },
  { title: "Write Embedded C for UART Communication", duration: "Due in 5 days", xp: 180, reward: "5,500", progress: 20 },
];

const recommended = [
  { title: "Build ESP32-based IoT Dashboard for Factory Floor", company: "IE", domain: "ECE · Embedded", budget: "₹22K–₹28K", duration: "10 days", tier: "Practitioner+", tags: ["ESP32", "MQTT", "Python"], applicants: 5 },
  { title: "React Dashboard for HR Analytics", company: "HR", domain: "CS · Frontend", budget: "₹28K–₹35K", duration: "12 days", tier: "Practitioner+", tags: ["React", "Recharts"], applicants: 9 },
  { title: "ML Model for Churn Prediction", company: "DA", domain: "CS · ML", budget: "₹35K–₹45K", duration: "14 days", tier: "Expert+", tags: ["Python", "sklearn"], applicants: 4 },
];

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex">
      <DashboardSidebar type="student" />

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Header */}
          <motion.div variants={fadeUp} className="mb-8">
            <h1 className="text-3xl font-black text-white">Welcome back, Arjun</h1>
            <p className="text-slate-400 mt-1">Here's your skill progress and active missions today.</p>
          </motion.div>

          {/* Stat Cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map(stat => (
              <motion.div key={stat.label} variants={fadeUp} className="glass-card rounded-2xl p-5 border border-white/5 hover-glow transition-all">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">{stat.label}</div>
                {stat.score !== undefined ? (
                  <div className="flex justify-center">
                    <TFESGauge score={stat.score} size={80} />
                  </div>
                ) : (
                  <div className={`text-3xl font-black ${stat.color === "green" ? "text-green-400" : stat.color === "cyan" ? "text-cyan-400" : "text-amber-400"}`}>
                    {stat.value}
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* XP Progress */}
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 mb-8">
            <div className="flex items-center justify-between mb-3">
              <div>
                <span className="text-sm font-semibold text-white">Level 3 — Practitioner</span>
                <span className="text-slate-500 mx-2">→</span>
                <span className="text-sm text-slate-400">Expert</span>
              </div>
              <span className="text-sm font-mono text-blue-400">3,400 / 5,000 XP</span>
            </div>
            <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
              <motion.div initial={{ width: 0 }} animate={{ width: "68%" }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }} className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            </div>
            <div className="text-xs text-slate-500 mt-1.5">68% to Expert — 1,600 XP remaining</div>
          </motion.div>

          {/* Active Missions */}
          <motion.div variants={fadeUp} className="mb-8">
            <h2 className="text-xl font-bold text-white mb-4">Active Missions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {missions.map((m, i) => <MissionCard key={i} {...m} />)}
            </div>
          </motion.div>

          {/* Recommended Projects */}
          <motion.div variants={fadeUp} className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">AI-Recommended Projects</h2>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 font-semibold">94% Match Score</span>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {recommended.map((p, i) => <ProjectCard key={i} {...p} />)}
            </div>
          </motion.div>

          {/* Recent Badge */}
          <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 border border-amber-500/20 bg-amber-500/5">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🏆</div>
              <div className="flex-1">
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">Recent Badge Earned</div>
                <div className="text-white font-bold text-lg">Circuit Simulation Pro</div>
                <div className="text-slate-400 text-sm mt-0.5">Minted as NFT on Polygon · Earned 2 days ago</div>
              </div>
              <button data-testid="btn-view-nft" onClick={() => toast("🚀 Blockchain explorer coming soon!")} className="flex items-center gap-1.5 text-sm text-blue-400 hover:text-blue-300 font-medium transition-colors">
                View on Polygon <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
