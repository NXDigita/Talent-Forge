import { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import TalentCard from "@/components/TalentCard";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const allProjects = [
  { id: 1, title: "Build ESP32-based IoT Dashboard for Factory Floor", company: "IE", domain: "ECE", domainTag: "ECE · Embedded", budget: "₹22,000 – ₹28,000", duration: "10 days", tier: "Practitioner+", tags: ["ESP32", "MQTT", "Python", "AWS IoT"], applicants: 5 },
  { id: 2, title: "Motor Control PLC Simulation & Testing Suite", company: "PS", domain: "EEE", domainTag: "EEE · Power", budget: "₹18,000 – ₹22,000", duration: "8 days", tier: "Apprentice+", tags: ["PLC", "SCADA", "Ladder Logic"], applicants: 3 },
  { id: 3, title: "CAD Model & FEA Analysis for Gear Assembly", company: "MM", domain: "Mechanical", domainTag: "Mech · CAD", budget: "₹15,000 – ₹20,000", duration: "7 days", tier: "Practitioner+", tags: ["SolidWorks", "FEA", "GD&T"], applicants: 7 },
  { id: 4, title: "Sales Funnel Automation Script & CRM Integration", company: "SF", domain: "Business", domainTag: "Business · Sales", budget: "₹12,000 – ₹15,000", duration: "5 days", tier: "Apprentice+", tags: ["Python", "Zapier", "HubSpot"], applicants: 11 },
  { id: 5, title: "ML Model for Customer Churn Prediction", company: "DA", domain: "CS", domainTag: "CS · ML/AI", budget: "₹35,000 – ₹45,000", duration: "14 days", tier: "Expert+", tags: ["Python", "sklearn", "XGBoost", "AWS"], applicants: 4 },
  { id: 6, title: "React Dashboard for HR Analytics & Reporting", company: "HR", domain: "CS", domainTag: "CS · Frontend", budget: "₹28,000 – ₹35,000", duration: "12 days", tier: "Practitioner+", tags: ["React", "TypeScript", "Recharts", "REST API"], applicants: 9 },
];

const allTalent = [
  { name: "Arjun K.", location: "Coimbatore", score: 87, tier: "Expert", domain: "ECE · Embedded", tags: ["STM32", "FreeRTOS", "C Embedded", "Keil"], earned: "1,24,000", projects: 23, badges: 8 },
  { name: "Priya R.", location: "Chennai", score: 91, tier: "Master", domain: "CS · Full-Stack", tags: ["React", "Node.js", "PostgreSQL", "AWS"], earned: "2,10,000", projects: 34, badges: 12 },
  { name: "Ravi S.", location: "Bengaluru", score: 79, tier: "Practitioner", domain: "CS · ML/AI", tags: ["Python", "TensorFlow", "sklearn", "FastAPI"], earned: "65,000", projects: 14, badges: 5 },
  { name: "Sneha M.", location: "Pune", score: 84, tier: "Expert", domain: "EEE · Power", tags: ["MATLAB", "SCADA", "PLC", "AutoCAD Electrical"], earned: "98,000", projects: 19, badges: 7 },
];

const domains = ["All", "ECE", "EEE", "Mechanical", "CS", "Business"];

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<"projects" | "talent">("projects");
  const [search, setSearch] = useState("");
  const [activeDomain, setActiveDomain] = useState("All");
  const [budgetMax, setBudgetMax] = useState(500000);

  const filteredProjects = allProjects.filter(p => {
    const matchDomain = activeDomain === "All" || p.domain === activeDomain;
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    return matchDomain && matchSearch;
  });

  const filteredTalent = allTalent.filter(t => {
    const matchSearch = !search || t.name.toLowerCase().includes(search.toLowerCase()) || t.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      <Navbar />

      <div className="pt-20">
        {/* Filter Bar */}
        <div className="sticky top-16 z-40 glass-card border-b border-white/10 px-4 py-4">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="relative flex-1 min-w-52">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  data-testid="input-search"
                  type="search"
                  placeholder="Search projects or skills..."
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  className="w-full bg-slate-800 border border-slate-700 text-white rounded-lg pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {domains.map(d => (
                  <button
                    key={d}
                    data-testid={`filter-${d}`}
                    onClick={() => setActiveDomain(d)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${activeDomain === d ? "bg-blue-500 text-white" : "bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-600 hover:text-white"}`}
                  >
                    {d}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-400 min-w-52">
                <span className="shrink-0">Budget: ₹5K</span>
                <input data-testid="slider-budget" type="range" min={5000} max={500000} step={5000} value={budgetMax} onChange={e => setBudgetMax(Number(e.target.value))} className="flex-1 accent-blue-500 h-2" />
                <span className="shrink-0">₹{Math.round(budgetMax / 1000)}K</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Toggle */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex gap-2 mb-8 p-1 bg-slate-800/50 rounded-xl w-fit border border-slate-700">
            {(["projects", "talent"] as const).map(tab => (
              <button
                key={tab}
                data-testid={`tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all capitalize ${activeTab === tab ? "bg-blue-600 text-white shadow" : "text-slate-400 hover:text-white"}`}
              >
                {tab === "projects" ? "Projects" : "Talent Pool"}
              </button>
            ))}
          </div>

          {activeTab === "projects" && (
            <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.length === 0 ? (
                <div className="col-span-3 text-center text-slate-500 py-16">No projects match your filters.</div>
              ) : filteredProjects.map(p => (
                <motion.div key={p.id} variants={fadeUp}>
                  <ProjectCard
                    title={p.title}
                    company={p.company}
                    domain={p.domainTag}
                    budget={p.budget}
                    duration={p.duration}
                    tier={p.tier}
                    tags={p.tags}
                    applicants={p.applicants}
                  />
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "talent" && (
            <motion.div initial="hidden" animate="visible" variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTalent.map((t, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <TalentCard {...t} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
