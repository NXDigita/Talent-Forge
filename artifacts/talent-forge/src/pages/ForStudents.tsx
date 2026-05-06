import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Brain, Gamepad2, IndianRupee, Trophy, Bot, Users, BarChart3, Rocket, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const domainRates: Record<string, Record<string, number>> = {
  ECE: { Explorer: 150, Apprentice: 300, Practitioner: 600, Expert: 1000 },
  Mechanical: { Explorer: 130, Apprentice: 260, Practitioner: 520, Expert: 850 },
  CS: { Explorer: 200, Apprentice: 400, Practitioner: 800, Expert: 1300 },
  Business: { Explorer: 120, Apprentice: 240, Practitioner: 480, Expert: 800 },
};

const features = [
  { icon: Brain, label: "Adaptive AI Assessment", desc: "Tests that adapt to your level in real time" },
  { icon: Gamepad2, label: "Gamified Skill Missions", desc: "Real challenges with XP, tiers, and leaderboards" },
  { icon: IndianRupee, label: "Earn While Learning", desc: "Get paid for projects while building skills" },
  { icon: Trophy, label: "NFT Skill Badges", desc: "Blockchain-backed credentials that prove your skills" },
  { icon: Bot, label: "AI Career Coaching", desc: "Personalized guidance on your next best step" },
  { icon: Users, label: "Peer Community", desc: "Learn alongside 50,000+ engineers across India" },
  { icon: BarChart3, label: "Portfolio Dashboard", desc: "One link to share your complete skill profile" },
  { icon: Rocket, label: "Direct Job Matching", desc: "AI matches you to jobs and gigs you'll actually get" },
];

const journeySteps = [
  "Sign Up Free",
  "Take AI Assessment",
  "Get TFES Score",
  "Complete Missions",
  "Get Project + Job Matches",
];

export default function ForStudents() {
  const [hours, setHours] = useState(20);
  const [domain, setDomain] = useState("CS");
  const [tier, setTier] = useState("Practitioner");

  const rate = domainRates[domain]?.[tier] ?? 600;
  const monthlyEarnings = Math.round(hours * 4 * rate);
  const projects = Math.round(hours / 10);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      <Navbar />

      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-6">
              For Students
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white mb-6">
              From Graduate to Hired —<br /><span className="text-gradient">In Weeks, Not Months.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Get AI-assessed, earn real project income, build a blockchain portfolio, and get matched to jobs — all in one place.
            </motion.p>
            <motion.div variants={fadeUp}>
              <button data-testid="btn-start-assessment" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg btn-gradient text-white font-bold text-lg">
                Start Free Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 overflow-x-auto">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-16">
            Your Journey to First Income
          </motion.h2>
          <div className="flex items-center min-w-max mx-auto max-w-5xl px-4">
            {journeySteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="flex flex-col items-center w-36">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg mb-3 shadow-lg shadow-blue-500/30">
                    {i + 1}
                  </div>
                  <div className="text-sm font-semibold text-white text-center leading-tight">{step}</div>
                </motion.div>
                {i < journeySteps.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 mx-2 min-w-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-4">
            How Much Can You Earn?
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-400 text-center mb-12">
            Estimate your monthly income based on your availability and domain.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Hours available per week: <span className="text-blue-400">{hours} hrs</span>
                  </label>
                  <input data-testid="slider-hours" type="range" min={5} max={40} value={hours} onChange={e => setHours(Number(e.target.value))} className="w-full accent-blue-500 h-2" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1"><span>5 hrs</span><span>40 hrs</span></div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">Select Domain</label>
                  <select data-testid="select-domain" value={domain} onChange={e => setDomain(e.target.value)} className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500">
                    <option value="ECE">ECE / Electronics</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="CS">Computer Science</option>
                    <option value="Business">Business / Non-Tech</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">Select Tier</label>
                  <select data-testid="select-tier" value={tier} onChange={e => setTier(e.target.value)} className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500">
                    <option value="Explorer">Explorer</option>
                    <option value="Apprentice">Apprentice</option>
                    <option value="Practitioner">Practitioner</option>
                    <option value="Expert">Expert</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="glass-card rounded-2xl p-8 text-center border border-green-500/20 bg-green-500/5">
                  <div className="text-slate-400 text-sm font-medium mb-2">Estimated Monthly Earnings</div>
                  <div className="text-5xl font-black text-green-400 mb-1">₹{monthlyEarnings.toLocaleString()}</div>
                  <div className="text-slate-500 text-sm mb-8">based on {hours} hrs/week at {tier} tier</div>
                  <div className="grid grid-cols-2 gap-4 text-sm text-left">
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-slate-400 text-xs mb-1">Available Projects</div>
                      <div className="text-white font-bold text-lg">{projects * 3}+</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3">
                      <div className="text-slate-400 text-xs mb-1">Avg Duration</div>
                      <div className="text-white font-bold text-lg">7–14 days</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-16">
            Everything You Need to Succeed
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <motion.div key={f.label} variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 hover-glow transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.label}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
