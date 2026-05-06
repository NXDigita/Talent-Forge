import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const plans = [
  {
    name: "Free",
    subtitle: "For Students",
    monthly: 0,
    annual: 0,
    cta: "Start Free",
    color: "blue",
    popular: false,
    features: ["Basic AI Assessment", "TFES Score", "1 Project Application/month", "Community Access", "Student Dashboard"],
  },
  {
    name: "Pro",
    subtitle: "For Students",
    monthly: 499,
    annual: 333,
    cta: "Start Pro Trial",
    color: "gradient",
    popular: true,
    features: ["Unlimited Applications", "AI Career Coaching", "Priority Matching", "Advanced Analytics", "NFT Badge Minting", "All Free features"],
  },
  {
    name: "Employer",
    subtitle: "Pay Per Hire",
    monthly: 0,
    annual: 0,
    cta: "Post First Project Free",
    color: "amber",
    popular: false,
    perHire: "12% success fee",
    features: ["Free to Post Projects", "AI Candidate Matching", "Escrow Protection", "60-day Quality Guarantee", "Verification API Access", "Dedicated Support"],
  },
];

const faqs = [
  { q: "Can I cancel my Pro subscription anytime?", a: "Yes, you can cancel anytime. Your access continues until the end of your billing period with no questions asked." },
  { q: "How much does NFT badge minting cost?", a: "NFT minting is included in the Pro plan at no extra cost. Free plan users can mint badges for ₹99 each." },
  { q: "Is there a refund policy?", a: "We offer a 14-day money-back guarantee for Pro subscriptions if you're not satisfied." },
  { q: "How does the 12% success fee work for employers?", a: "You only pay when a project is successfully completed. The fee is calculated on the project value and deducted from the escrow on milestone completion." },
  { q: "Can colleges negotiate custom contracts?", a: "Yes, we offer custom pricing and contract terms for institutional SaaS integrations. Book a demo to discuss your requirements." },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      <Navbar />

      <section className="pt-28 pb-20" style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A5F 50%, #0F172A 100%)" }}>
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-5xl font-black text-white mb-4">Simple, Transparent Pricing</motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-slate-400 mb-10">Start free. Pay only when you see value.</motion.p>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 p-1 bg-slate-800/60 border border-slate-700 rounded-xl mb-12">
              <button data-testid="toggle-monthly" onClick={() => setAnnual(false)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${!annual ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}>Monthly</button>
              <button data-testid="toggle-annual" onClick={() => setAnnual(true)} className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${annual ? "bg-blue-600 text-white" : "text-slate-400 hover:text-white"}`}>
                Annual <span className="text-green-400 text-xs ml-1">Save 33%</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 -mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map(plan => (
              <motion.div key={plan.name} variants={fadeUp} className={`glass-card rounded-2xl p-8 border relative flex flex-col ${plan.popular ? "border-blue-500/50 shadow-2xl shadow-blue-500/10" : "border-white/5"}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 btn-gradient rounded-full text-xs font-bold text-white shadow-lg">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                  <div className="text-slate-400 text-sm">{plan.subtitle}</div>
                </div>
                <div className="mb-8">
                  {plan.perHire ? (
                    <>
                      <div className="text-4xl font-black text-gradient">₹0</div>
                      <div className="text-slate-400 text-sm mt-1">to post + <span className="text-amber-400 font-semibold">{plan.perHire}</span></div>
                    </>
                  ) : plan.monthly === 0 ? (
                    <>
                      <div className="text-4xl font-black text-white">₹0</div>
                      <div className="text-slate-400 text-sm mt-1">forever</div>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-black text-gradient">₹{annual ? plan.annual : plan.monthly}</div>
                      <div className="text-slate-400 text-sm mt-1">per month{annual ? " (billed ₹3,999/yr)" : ""}</div>
                    </>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-green-400 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  data-testid={`btn-plan-${plan.name.toLowerCase()}`}
                  onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")}
                  className={`w-full py-3.5 rounded-xl font-bold transition-all ${plan.popular ? "btn-gradient text-white" : plan.color === "amber" ? "border border-amber-500/50 text-amber-400 hover:bg-amber-500/10" : "border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white"}`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Institution Pricing */}
      <section className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-12">
            Institutions & Colleges
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Starter", price: "₹5L / year", limit: "Up to 500 students", feats: ["Basic TFES Assessment", "Placement Analytics", "Student Dashboards", "Email Support"] },
              { name: "Enterprise", price: "₹15L / year", limit: "Unlimited students", feats: ["Everything in Starter", "White-label Branding", "API Integration", "Advanced Analytics", "Dedicated Manager"], highlight: true },
            ].map(plan => (
              <motion.div key={plan.name} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className={`glass-card rounded-2xl p-8 border flex flex-col gap-4 ${plan.highlight ? "border-amber-500/30" : "border-white/5"}`}>
                <div>
                  <h3 className="text-xl font-black text-white">{plan.name}</h3>
                  <div className="text-3xl font-black text-gradient mt-1">{plan.price}</div>
                  <div className="text-slate-400 text-sm mt-1">{plan.limit}</div>
                </div>
                <ul className="space-y-2">
                  {plan.feats.map(f => <li key={f} className="flex items-center gap-2 text-sm text-slate-300"><Check className="w-3.5 h-3.5 text-green-400 shrink-0" />{f}</li>)}
                </ul>
                <button onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className={`w-full py-3 rounded-xl font-bold mt-auto ${plan.highlight ? "btn-gradient text-white" : "border border-slate-600 text-slate-300 hover:border-slate-400"} transition-all`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-3xl font-black text-white text-center mb-12">
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="glass-card rounded-xl border border-white/5 overflow-hidden">
                <button data-testid={`faq-${i}`} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-semibold hover:bg-white/2 transition-all">
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
