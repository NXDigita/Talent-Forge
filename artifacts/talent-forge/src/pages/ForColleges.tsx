import { motion } from "framer-motion";
import { toast } from "sonner";
import { ArrowRight, BarChart3, GraduationCap, Building2, Users, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const features = [
  { icon: BarChart3, title: "Placement Analytics", desc: "Real-time dashboard showing placement rates, domain distribution, and salary benchmarks." },
  { icon: Users, title: "Bulk Assessment", desc: "Assess your entire batch simultaneously. AI-adaptive tests for every branch." },
  { icon: Award, title: "Credential Wallet", desc: "Every student gets a blockchain-verified credential wallet linked to your institution." },
  { icon: TrendingUp, title: "Progress Tracking", desc: "Monitor student progress, skill gaps, and readiness for industry." },
  { icon: Building2, title: "Company Connect", desc: "Direct pipeline to 500+ hiring companies looking for verified talent." },
  { icon: GraduationCap, title: "Alumni Network", desc: "Track alumni success and leverage their network for placements." },
];

export default function ForColleges() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      <Navbar />

      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-500/10 border border-green-500/30 text-green-300 mb-6">
              For Institutions
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-black text-white mb-6">
              Transform Your<br /><span className="text-gradient">Placement Cell.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Give every student a verified, AI-assessed skill profile that actually gets them hired. Integrate Talent Forge into your institution in 48 hours.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
              <button data-testid="btn-colleges-demo" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg btn-gradient text-white font-bold text-lg">
                Book a College Demo <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["38%", "Avg Placement Rate Jump"], ["200+", "Partner Colleges"], ["50K+", "Students Assessed"], ["48 hrs", "Integration Time"]].map(([val, lbl]) => (
            <div key={lbl}>
              <div className="text-4xl font-black text-gradient mb-2">{val}</div>
              <div className="text-slate-400 text-sm">{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-16">
            Built for Placement Offices
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(f => (
              <motion.div key={f.title} variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 hover-glow transition-all">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-slate-400">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-12">
            Institution Pricing
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Starter", price: "₹5L / year", students: "Up to 500 students", features: ["Basic TFES Assessment", "Placement Analytics", "Student Dashboard", "Email Support"], color: "blue" },
              { name: "Enterprise", price: "₹15L / year", students: "Unlimited students", features: ["Everything in Starter", "White-label branding", "API Integration", "Advanced Analytics", "Dedicated Account Manager", "Priority Support"], color: "amber", popular: true },
            ].map(plan => (
              <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`glass-card rounded-2xl p-8 border ${plan.popular ? "border-amber-500/40" : "border-white/5"} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full text-xs font-bold text-white">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-black text-white mb-1">{plan.name}</h3>
                <div className="text-3xl font-black text-gradient mb-1">{plan.price}</div>
                <div className="text-slate-400 text-sm mb-6">{plan.students}</div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center ${plan.popular ? "bg-amber-500/20" : "bg-blue-500/20"}`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${plan.popular ? "bg-amber-400" : "bg-blue-400"}`} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className={`w-full py-3 rounded-lg font-bold ${plan.popular ? "btn-gradient text-white" : "border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"} transition-all`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
          <div className="glass-card rounded-2xl p-10 border border-white/10">
            <div className="text-4xl mb-4">💬</div>
            <p className="text-xl text-slate-300 italic mb-6">"Our placement rate jumped 38% in one semester after integrating Talent Forge. The students are more motivated, and companies trust our graduates more."</p>
            <div className="text-white font-semibold">Dr. Anitha K.</div>
            <div className="text-slate-400 text-sm">TPO, Engineering College, Madurai</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
