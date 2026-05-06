import { motion } from "framer-motion";
import { toast } from "sonner";
import { Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatCounter from "@/components/StatCounter";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const team = [
  { name: "Kiran Patel", role: "Founder & CEO", bio: "IIT Bombay alum. Built and exited two EdTech startups before founding ResourceIndia.", initials: "KP", color: "from-blue-600 to-indigo-600" },
  { name: "Ananya Iyer", role: "CTO & AI Lead", bio: "Ex-Google Brain researcher. Architecting the adaptive assessment and matching algorithms.", initials: "AI", color: "from-cyan-500 to-blue-600" },
  { name: "Rohan Mehta", role: "Head of Product", bio: "Former PM at Zerodha and Swiggy. Obsessed with job-to-be-done and user delight.", initials: "RM", color: "from-purple-600 to-pink-600" },
  { name: "Deepa Krishnan", role: "Head of Partnerships", bio: "Built institutional partnerships for NSDC. Connecting 200+ colleges to the ecosystem.", initials: "DK", color: "from-emerald-500 to-teal-600" },
];

const pressLogos = ["TechCrunch", "YourStory", "Inc42", "The Hindu Business Line", "NDTV Profit"];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      <Navbar />

      {/* Mission */}
      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-8">
              Our Mission
            </motion.span>
            <motion.div variants={fadeUp} className="glass-card rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl">
              <div className="text-5xl mb-6">💙</div>
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed italic">
                "We believe every engineer in India deserves a fair shot — regardless of their city, college, or connections."
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-black text-white mb-6">The Problem</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>India produces 1.5 million engineering graduates every year. But 60% remain unemployed or underemployed — not because they lack talent, but because the hiring system is broken.</p>
                <p>Resumes are gamed. Interviews are biased toward tier-1 colleges. Recruiters don't have the time or tools to identify real potential in a stack of PDFs.</p>
                <p>Meanwhile, thousands of companies — startups, MSMEs, and growing enterprises — are desperately looking for skilled engineers but can't afford expensive recruitment agencies or lengthy interview processes.</p>
              </div>
            </motion.div>
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl font-black text-gradient mb-6">Our Solution</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>Talent Forge replaces the broken resume-and-interview loop with a proof-first system. AI-adaptive assessments measure actual skill. Gamified missions build real-world experience. Blockchain credentials make that proof permanent and portable.</p>
                <p>Students build verified portfolios that speak louder than any pedigree. Employers access a pre-vetted, scored talent pool with a 94% match accuracy. Colleges see placement rates climb semester over semester.</p>
                <p>The result: a meritocracy. The best engineer gets the job, regardless of where they went to college.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCounter value={50} suffix="M+" label="Target Graduate Market" />
          <StatCounter value={120} prefix="₹" suffix=" Cr" label="Y3 Revenue Projection" />
          <StatCounter value={95} suffix="%" label="Quality Rate" />
          <StatCounter value={48} suffix=" hrs" label="Avg Project Start" />
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-16">
            The Team
          </motion.h2>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(member => (
              <motion.div key={member.name} variants={fadeUp} className="glass-card rounded-2xl p-6 border border-white/5 hover-glow transition-all text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-black text-white mx-auto mb-4 shadow-lg`}>
                  {member.initials}
                </div>
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <div className="text-blue-400 text-sm font-semibold mb-3">{member.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{member.bio}</p>
                <button data-testid={`btn-linkedin-${member.initials}`} onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-16 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-400 text-sm uppercase tracking-widest font-semibold mb-8">
            Backed by angel investors from
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center gap-6">
            {["IIM Ahmedabad", "IIT Delhi", "Unacademy", "BYJU's", "Razorpay"].map(org => (
              <motion.div key={org} variants={fadeUp} className="px-6 py-3 glass-card rounded-xl border border-white/5 text-slate-400 text-sm font-semibold">
                {org}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-8">
            As Featured In
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="flex flex-wrap justify-center items-center gap-8">
            {pressLogos.map(logo => (
              <motion.div key={logo} variants={fadeUp} className="text-slate-600 text-lg font-black hover:text-slate-400 transition-colors cursor-default">
                {logo}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-black text-white mb-4">Join the Mission</h2>
          <p className="text-slate-400 mb-8">Be part of building India's meritocratic talent economy.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button data-testid="btn-about-students" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="px-8 py-4 rounded-lg btn-gradient text-white font-bold">
              Join as a Student
            </button>
            <button data-testid="btn-about-employers" onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="px-8 py-4 rounded-lg border border-amber-500/50 text-amber-400 font-bold hover:bg-amber-500/10 transition-all">
              Hire with Talent Forge
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
