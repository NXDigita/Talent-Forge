import { motion } from "framer-motion";
import { toast } from "sonner";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import DashboardSidebar from "@/components/DashboardSidebar";
import TalentCard from "@/components/TalentCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const spendData = [
  { month: "Nov", spend: 45000, savings: 30000, industry: 80000 },
  { month: "Dec", spend: 52000, savings: 38000, industry: 90000 },
  { month: "Jan", spend: 38000, savings: 28000, industry: 75000 },
  { month: "Feb", spend: 60000, savings: 44000, industry: 100000 },
  { month: "Mar", spend: 70000, savings: 52000, industry: 115000 },
  { month: "Apr", spend: 59000, savings: 43000, industry: 105000 },
];

const projects = [
  { name: "ESP32 IoT Factory Dashboard", budget: "₹22,000", applicants: 5, status: "Active" },
  { name: "React HR Analytics Dashboard", budget: "₹28,000", applicants: 9, status: "In Review" },
  { name: "ML Churn Prediction Model", budget: "₹35,000", applicants: 4, status: "Completed" },
];

const topTalent = [
  { name: "Arjun K.", location: "Coimbatore", score: 87, tier: "Expert", domain: "ECE · Embedded", tags: ["STM32", "MQTT", "C Embedded"], earned: "1,24,000", projects: 23, badges: 8 },
  { name: "Priya R.", location: "Chennai", score: 91, tier: "Master", domain: "CS · Full-Stack", tags: ["React", "Node.js", "AWS"], earned: "2,10,000", projects: 34, badges: 12 },
  { name: "Ravi S.", location: "Bengaluru", score: 79, tier: "Practitioner", domain: "CS · ML/AI", tags: ["Python", "TensorFlow", "FastAPI"], earned: "65,000", projects: 14, badges: 5 },
];

const statusColors: Record<string, string> = {
  Active: "bg-green-500/20 text-green-400 border-green-500/30",
  "In Review": "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Completed: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

export default function EmployerDashboard() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex">
      <DashboardSidebar type="employer" />

      <main className="flex-1 p-6 md:p-8 overflow-y-auto">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          <motion.div variants={fadeUp} className="mb-8">
            <h1 className="text-3xl font-black text-white">Employer Dashboard</h1>
            <p className="text-slate-400 mt-1">TechCorp Inc. — Pro Plan · 3 active projects</p>
          </motion.div>

          {/* Stat Cards */}
          <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Active Projects", value: "3", color: "text-blue-400" },
              { label: "Pipeline", value: "47", color: "text-cyan-400" },
              { label: "Completed", value: "18", color: "text-green-400" },
              { label: "Total Spend", value: "₹3,24,000", color: "text-amber-400" },
            ].map(stat => (
              <motion.div key={stat.label} variants={fadeUp} className="glass-card rounded-2xl p-5 border border-white/5 hover-glow transition-all">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-3 font-medium">{stat.label}</div>
                <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Active Projects Table */}
          <motion.div variants={fadeUp} className="glass-card rounded-2xl border border-white/5 mb-8 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-white">Active Projects</h2>
              <button data-testid="btn-post-project" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="text-sm px-4 py-2 rounded-lg btn-gradient text-white font-semibold">
                + Post Project
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="text-left px-6 py-3">Project Name</th>
                    <th className="text-left px-6 py-3">Budget</th>
                    <th className="text-left px-6 py-3">Applicants</th>
                    <th className="text-left px-6 py-3">Status</th>
                    <th className="text-left px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((p, i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                      <td className="px-6 py-4 font-medium text-white">{p.name}</td>
                      <td className="px-6 py-4 text-green-400 font-semibold">{p.budget}</td>
                      <td className="px-6 py-4 text-slate-300">{p.applicants}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${statusColors[p.status]}`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button data-testid={`btn-view-${i}`} onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="text-blue-400 hover:text-blue-300 font-medium text-xs transition-colors">
                          View →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Charts + Candidates */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Spend Analytics */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5">
              <h2 className="text-lg font-bold text-white mb-6">Spend Analytics vs Industry</h2>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={spendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" tick={{ fill: "#94A3B8", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "#94A3B8", fontSize: 11 }} axisLine={false} tickLine={false} tickFormatter={v => `₹${Math.round(v / 1000)}K`} />
                  <Tooltip contentStyle={{ background: "#1E293B", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, color: "#F8FAFC", fontSize: 12 }} formatter={(v: number) => [`₹${v.toLocaleString()}`, ""]} />
                  <Legend wrapperStyle={{ fontSize: 12, color: "#94A3B8" }} />
                  <Line type="monotone" dataKey="spend" stroke="#2563EB" strokeWidth={2} dot={false} name="Your Spend" />
                  <Line type="monotone" dataKey="savings" stroke="#22C55E" strokeWidth={2} dot={false} name="Savings" />
                  <Line type="monotone" dataKey="industry" stroke="#F59E0B" strokeWidth={2} strokeDasharray="4 2" dot={false} name="Industry Avg" />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
              <h2 className="text-lg font-bold text-white">Hiring Performance</h2>
              {[
                { label: "First-Pass Acceptance Rate", value: "82%", bar: 82, color: "bg-green-500" },
                { label: "Average TFES Score (Hired)", value: "84/100", bar: 84, color: "bg-blue-500" },
                { label: "Repeat Hire Rate", value: "67%", bar: 67, color: "bg-cyan-500" },
                { label: "On-Time Delivery Rate", value: "94%", bar: 94, color: "bg-amber-500" },
              ].map(m => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-slate-400">{m.label}</span>
                    <span className="text-white font-semibold">{m.value}</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${m.color}`} style={{ width: `${m.bar}%` }} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Top Matched Candidates */}
          <motion.div variants={fadeUp}>
            <h2 className="text-xl font-bold text-white mb-4">Top Matched Candidates</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {topTalent.map((t, i) => <TalentCard key={i} {...t} />)}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
