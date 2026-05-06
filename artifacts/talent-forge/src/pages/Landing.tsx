import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, Zap, ShieldCheck, CheckCircle2, Star, Lock, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";
import TFESGauge from "@/components/TFESGauge";

const handleWaitlist = () => toast("🚀 Feature coming soon! Join the waitlist.");

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const domains = [
  { icon: "⚡", name: "ECE / Electronics", skills: ["Circuit Simulations", "Embedded Systems", "IoT Prototyping"] },
  { icon: "🔌", name: "EEE / Electrical", skills: ["Power Systems", "Motor Control", "SCADA"] },
  { icon: "⚙️", name: "Mechanical", skills: ["CAD Challenges", "FEA Analysis", "Process Optimization"] },
  { icon: "💻", name: "Computer Science", skills: ["DSA & Algorithms", "Full-Stack Dev", "ML Pipelines"] },
  { icon: "📊", name: "Business / Non-Tech", skills: ["Sales Simulations", "Case Studies", "Communication"] },
  { icon: "🤖", name: "AI / Data", skills: ["Model Building", "Data Analytics", "Python Challenges"] },
];

const tiers = [
  { color: "#3B82F6", label: "Explorer", level: 1, earnings: "₹5K–₹12K/mo" },
  { color: "#22C55E", label: "Apprentice", level: 2, earnings: "₹12K–₹25K/mo" },
  { color: "#EAB308", label: "Practitioner", level: 3, earnings: "₹25K–₹50K/mo" },
  { color: "#F97316", label: "Expert", level: 4, earnings: "₹50K–₹1L/mo" },
  { color: "#EF4444", label: "Master", level: 5, earnings: "₹1L+/mo" },
];

const testimonials = [
  {
    quote: "I got my first ₹25,000 project within 3 weeks of joining. The AI matched me perfectly.",
    name: "Priya R.",
    role: "ECE Graduate, Coimbatore",
    initial: "P",
    color: "from-purple-500 to-pink-500",
  },
  {
    quote: "We hired 4 interns through Talent Forge. Zero bad hires. The skill scores are actually real.",
    name: "Rahul M.",
    role: "CTO, SaaS Startup, Pune",
    initial: "R",
    color: "from-blue-500 to-cyan-500",
  },
  {
    quote: "Our placement rate jumped 38% in one semester after integrating Talent Forge.",
    name: "Dr. Anitha K.",
    role: "TPO, Engineering College, Madurai",
    initial: "A",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Landing() {
  const [notifVisible, setNotifVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setNotifVisible(v => !v), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-6">
                  🚀 India's First AI + Blockchain Talent Platform
                </span>
              </motion.div>
              <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black leading-tight mb-6">
                <span className="text-white">Hire Smarter.</span><br />
                <span className="text-gradient">Prove Your Skills.</span><br />
                <span className="text-white">Get Hired Faster.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                The AI-powered marketplace that connects skill-verified engineers with top companies — using gamified assessments, real-world simulations, and blockchain credentials.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-8">
                <Link href="/assessment">
                  <button data-testid="hero-cta-primary" className="flex items-center gap-2 px-7 py-3.5 rounded-lg btn-gradient text-white font-semibold text-base shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all">
                    Start Your Free Assessment <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <button data-testid="hero-cta-secondary" onClick={handleWaitlist} className="px-7 py-3.5 rounded-lg border border-slate-600 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all">
                  Post a Project
                </button>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 text-sm text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                Trusted by 500+ Companies · 50,000+ Students · 200+ Colleges
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden md:flex flex-col gap-4 items-end">
              <div className="glass-card rounded-2xl p-6 w-80 border border-white/10 shadow-2xl">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white">AK</div>
                  <div>
                    <div className="text-sm font-semibold text-white">Arjun K.</div>
                    <div className="text-xs text-amber-500">🟠 Expert Tier</div>
                  </div>
                  <div className="ml-auto">
                    <TFESGauge score={87} size={60} />
                  </div>
                </div>
                <div className="flex gap-2 mb-5">
                  {["Embedded", "IoT", "STM32"].map(badge => (
                    <span key={badge} className="text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium flex items-center gap-1">
                      <Zap className="w-2.5 h-2.5" /> {badge}
                    </span>
                  ))}
                </div>
                <AnimatePresence>
                  {notifVisible && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-green-500/10 border border-green-500/30 rounded-xl p-3 text-xs text-green-400 font-medium flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      New Match Found — React HR Dashboard ₹28K
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[["₹35,000", "Earned"], ["12", "Projects"], ["Expert", "Tier"]].map(([val, lbl]) => (
                    <div key={lbl} className="bg-slate-900/60 rounded-lg p-2">
                      <div className="text-sm font-bold text-white">{val}</div>
                      <div className="text-[10px] text-slate-400">{lbl}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-xl p-4 w-56 border border-white/10 shadow-xl self-start mt-2">
                <div className="text-xs text-slate-400 mb-1">AI Match Score</div>
                <div className="text-2xl font-black text-gradient">94%</div>
                <div className="text-xs text-slate-500 mt-1">ESP32 IoT Project · ₹22K</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={50} suffix="M+" label="Target Graduate Market" />
          <StatCounter value={120} prefix="₹" suffix=" Cr" label="Y3 Revenue Projection" />
          <StatCounter value={95} suffix="%" label="Quality Assurance Rate" />
          <StatCounter value={48} suffix=" hrs" label="Avg Project Start" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-4">One Platform. Three Superpowers.</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-xl mx-auto">Everything you need to prove your skills, earn real income, and get hired by the best teams.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🧠", title: "Assess", desc: "Take our AI-adaptive psychometric test. Get your Talent Forge Employability Score (TFES).", color: "blue" },
              { icon: "🎮", title: "Prove", desc: "Complete real-world simulations and missions. Earn blockchain-verified NFT badges that can't be faked.", color: "amber" },
              { icon: "🚀", title: "Get Hired", desc: "Get AI-matched to projects and jobs. Employers see your proof, not just your resume.", color: "green" },
            ].map((step) => (
              <motion.div key={step.title} variants={fadeUp} className="glass-card rounded-2xl p-8 border border-white/5 hover-glow transition-all text-center">
                <div className="text-5xl mb-5">{step.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Domain Coverage */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-4">Built for Every Engineer</motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg">Six domains. Real challenges. Blockchain-verified results.</motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domains.map((d) => (
              <motion.div key={d.name} variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 hover-glow transition-all group cursor-pointer">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{d.name}</h3>
                <ul className="space-y-2 mb-5">
                  {d.skills.map(s => (
                    <li key={s} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {s}
                    </li>
                  ))}
                </ul>
                <button onClick={handleWaitlist} className="text-sm text-blue-400 font-medium group-hover:text-blue-300 flex items-center gap-1 transition-colors">
                  View Challenges <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gamification */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-16 text-center">Level Up Your Career</motion.h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Tier Tree */}
              <motion.div variants={fadeUp} className="space-y-3">
                {tiers.map((tier, i) => (
                  <div key={tier.label} className="flex items-center gap-4 glass-card p-4 rounded-xl border border-white/5 hover-glow transition-all">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg border-2 shrink-0" style={{ background: `${tier.color}20`, borderColor: tier.color }}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white">{tier.label}</div>
                      <div className="text-xs text-slate-400">Level {tier.level} · {tier.earnings}</div>
                    </div>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: tier.color }} />
                  </div>
                ))}
              </motion.div>

              {/* Active tier card */}
              <motion.div variants={fadeUp} className="glass-card rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="px-3 py-1 rounded-full text-xs font-semibold border" style={{ background: "#EAB30820", borderColor: "#EAB308", color: "#EAB308" }}>
                    🟡 Practitioner — Level 3
                  </div>
                </div>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>XP Progress</span>
                    <span>3,400 / 5,000 XP</span>
                  </div>
                  <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: "68%" }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
                  </div>
                  <div className="text-xs text-slate-500 mt-1">68% to Expert</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-amber-500/20 mb-4">
                  <div className="text-xs text-amber-500 font-semibold uppercase tracking-wider mb-1">Active Mission</div>
                  <div className="text-white font-medium text-sm">Design a Low-Pass Filter</div>
                  <div className="text-xs text-slate-400 mt-1">Due in 2 days · 200 XP · ₹6,000</div>
                </div>
                <div className="flex items-center gap-3 glass-card rounded-xl p-4 border border-green-500/20">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-0.5">Badge Earned</div>
                    <div className="text-white font-medium text-sm">Embedded Systems Pro</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blockchain Credentials */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-black text-white mb-16 text-center">
            Your Proof. Forever. On-Chain.
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-12 items-center">
            {/* NFT Badge mockup */}
            <motion.div variants={fadeUp} className="flex justify-center">
              <div className="relative">
                <div className="w-52 h-60 rounded-3xl glass-card border-2 border-blue-500/40 flex flex-col items-center justify-center p-6 shadow-2xl" style={{ boxShadow: "0 0 60px rgba(37,99,235,0.3)" }}>
                  <div className="text-5xl mb-4">🏆</div>
                  <div className="text-white font-bold text-center mb-1">Embedded Systems Pro</div>
                  <div className="text-xs text-blue-400 mb-3">Expert Tier · 2024</div>
                  <div className="flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/30">
                    <ShieldCheck className="w-3 h-3" /> Verified on Polygon
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-6">
              {[
                { icon: Lock, title: "Tamper-proof", desc: "Cannot be faked or altered. Your skills are permanently recorded on the blockchain.", color: "blue" },
                { icon: Zap, title: "Instant Verification", desc: "Employers verify your credentials in one click — no phone calls, no delays.", color: "cyan" },
                { icon: Globe, title: "Universally Accepted", desc: "Works on LinkedIn, NSDC, job portals, and every major platform worldwide.", color: "green" },
              ].map((prop) => (
                <motion.div key={prop.title} variants={fadeUp} className="flex items-start gap-4 glass-card p-5 rounded-xl border border-white/5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${prop.color === "blue" ? "bg-blue-500/20" : prop.color === "cyan" ? "bg-cyan-500/20" : "bg-green-500/20"}`}>
                    <prop.icon className={`w-5 h-5 ${prop.color === "blue" ? "text-blue-400" : prop.color === "cyan" ? "text-cyan-400" : "text-green-400"}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-white mb-1">{prop.title}</div>
                    <div className="text-sm text-slate-400">{prop.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-4xl font-black text-white mb-16 text-center">
            What They're Saying
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div key={t.name} variants={fadeUp} className="glass-card rounded-2xl p-8 border border-white/5 hover-glow transition-all flex flex-col">
                <div className="flex mb-4 gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed flex-1">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-bold text-white`}>{t.initial}</div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-4">
              Ready to Transform Your Career or Hiring?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-400 mb-10 text-lg">Join thousands of engineers and companies already on the platform.</motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <Link href="/for-students">
                <button data-testid="cta-student" className="px-8 py-4 rounded-lg btn-gradient text-white font-bold text-lg">
                  I'm a Student
                </button>
              </Link>
              <Link href="/for-employers">
                <button data-testid="cta-employer" className="px-8 py-4 rounded-lg border border-amber-500/50 text-amber-400 font-bold text-lg hover:bg-amber-500/10 transition-all">
                  I'm an Employer
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

