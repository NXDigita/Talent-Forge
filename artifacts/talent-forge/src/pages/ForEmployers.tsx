import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, TrendingDown, Clock, ShieldCheck, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function ForEmployers() {
  const [hiresPerQuarter, setHiresPerQuarter] = useState(10);
  const [costPerHire, setCostPerHire] = useState(40000);

  const currentAnnual = hiresPerQuarter * 4 * costPerHire;
  const tfCostPerHire = Math.round(costPerHire * 0.35);
  const tfAnnual = hiresPerQuarter * 4 * tfCostPerHire;
  const savings = currentAnnual - tfAnnual;

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      <Navbar />

      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-amber-500/10 border border-amber-500/30 text-amber-300 mb-6">
              For Employers
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white mb-6">
              Stop Interviewing.<br /><span className="text-gradient">Start Verifying.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Access India's largest pool of AI-assessed, blockchain-verified engineering talent. Post a project and get matched candidates in 48 hours.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <button data-testid="btn-post-project" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg btn-gradient text-white font-bold text-lg">
                Post a Project Free <ArrowRight className="w-5 h-5" />
              </button>
              <button data-testid="btn-book-demo" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-bold hover:border-slate-400 hover:text-white transition-all">
                Book a Demo
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-4">
            Calculate Your ROI
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-400 text-center mb-12">See how much you save vs. traditional hiring.</motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-2xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Hires per quarter: <span className="text-blue-400">{hiresPerQuarter}</span>
                  </label>
                  <input data-testid="slider-hires" type="range" min={1} max={50} value={hiresPerQuarter} onChange={e => setHiresPerQuarter(Number(e.target.value))} className="w-full accent-blue-500 h-2" />
                  <div className="flex justify-between text-xs text-slate-500 mt-1"><span>1</span><span>50</span></div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">
                    Current cost per hire: <span className="text-blue-400">₹{costPerHire.toLocaleString()}</span>
                  </label>
                  <input data-testid="input-cost" type="number" value={costPerHire} onChange={e => setCostPerHire(Number(e.target.value))} className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <div className="text-slate-400 text-sm mb-1">Current Annual Hiring Spend</div>
                  <div className="text-2xl font-black text-white">₹{currentAnnual.toLocaleString()}</div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-5">
                  <div className="text-slate-400 text-sm mb-1">With Talent Forge (65% less)</div>
                  <div className="text-2xl font-black text-blue-400">₹{tfAnnual.toLocaleString()}</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-5">
                  <div className="text-green-400 text-sm mb-1 font-semibold">Annual Savings</div>
                  <div className="text-3xl font-black text-green-400">₹{savings.toLocaleString()}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Hiring Works */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-16">
            How Hiring Works
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Post Project", desc: "Define scope, budget, required tier. AI scopes feasibility automatically and surfaces matching candidates within 48 hours." },
              { num: "02", title: "Review Scorecards", desc: "See AI-generated skill profiles, TFES scores, and past project results. No resumes. Just real proof of skill." },
              { num: "03", title: "Hire & Pay", desc: "Escrow-protected milestones. Pay only on completion. Backed by a 60-day money-back guarantee." },
            ].map(step => (
              <motion.div key={step.num} variants={fadeUp} className="glass-card rounded-2xl p-8 border border-white/5 hover-glow transition-all">
                <div className="text-5xl font-black text-gradient mb-4">{step.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle2, value: "80%", label: "First-Pass Acceptance Rate", color: "text-green-400" },
              { icon: ShieldCheck, value: "<3%", label: "Dispute Rate", color: "text-blue-400" },
              { icon: Clock, value: "48 hrs", label: "Avg Candidate Match", color: "text-cyan-400" },
              { icon: TrendingDown, value: "₹15K", label: "vs ₹40K Industry Standard", color: "text-amber-400" },
            ].map(sig => (
              <motion.div key={sig.label} variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 text-center hover-glow transition-all">
                <sig.icon className={`w-8 h-8 ${sig.color} mx-auto mb-3`} />
                <div className={`text-3xl font-black ${sig.color} mb-2`}>{sig.value}</div>
                <div className="text-slate-400 text-sm">{sig.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-6">Ready to Hire Better, Faster, Cheaper?</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="px-8 py-4 rounded-lg btn-gradient text-white font-bold text-lg">
              Post First Project Free
            </button>
            <button onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="px-8 py-4 rounded-lg border border-amber-500/50 text-amber-400 font-bold hover:bg-amber-500/10 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
