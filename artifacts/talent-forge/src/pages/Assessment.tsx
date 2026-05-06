import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Clock, ChevronRight, Lightbulb, Brain, X } from "lucide-react";
import TFESGauge from "@/components/TFESGauge";

const questions = [
  {
    id: 1,
    text: "A series RLC circuit has R=10Ω, L=0.1H, C=100μF. At resonance frequency, the impedance is:",
    options: ["Z = 0Ω", "Z = 10Ω (purely resistive)", "Z = jωL", "Z = 1/jωC"],
    correct: 1,
  },
  {
    id: 2,
    text: "In a BJT common-emitter amplifier, increasing the collector resistance Rc while keeping other parameters constant will:",
    options: ["Decrease voltage gain", "Increase voltage gain", "Have no effect on gain", "Decrease input impedance"],
    correct: 1,
  },
  {
    id: 3,
    text: "Which embedded communication protocol uses a master-slave architecture with separate clock and data lines?",
    options: ["UART", "SPI", "I2C", "CAN Bus"],
    correct: 1,
  },
];

const sampleResults = {
  score: 78,
  technical: 82,
  aptitude: 75,
  behavioral: 77,
  tier: "Practitioner",
  domain: "Embedded Systems",
};

export default function Assessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft] = useState("18:42");
  const [tfesScore, setTfesScore] = useState(0);

  const handleSelect = (idx: number) => {
    if (answered.includes(currentQ)) return;
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === null) { toast("Please select an answer first."); return; }
    const newAnswered = [...answered, currentQ];
    setAnswered(newAnswered);
    const newScore = Math.round((newAnswered.length / questions.length) * 78);
    setTfesScore(newScore);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
    } else {
      setTimeout(() => setShowResults(true), 600);
    }
  };

  const q = questions[currentQ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      {/* Header */}
      <div className="h-14 glass-card border-b border-white/10 flex items-center px-6 gap-4 fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-2 font-bold text-white">
          <span className="text-amber-500">⚡</span> Talent Forge Assessment
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">ECE — Circuit Theory</span>
          <div className="flex items-center gap-1.5 text-sm font-mono text-slate-300">
            <Clock className="w-4 h-4 text-red-400" /> {timeLeft}
          </div>
        </div>
      </div>

      <div className="flex pt-14 flex-1 h-screen overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-56 glass-card border-r border-white/10 p-5 flex flex-col gap-6 hidden md:flex shrink-0">
          <div>
            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Progress</div>
            <div className="text-2xl font-black text-white">Q {currentQ + 1} <span className="text-slate-500 font-normal text-base">of {questions.length}</span></div>
            <div className="mt-3 flex gap-1.5">
              {questions.map((_, i) => (
                <div key={i} className={`flex-1 h-2 rounded-full transition-all ${answered.includes(i) ? "bg-green-500" : i === currentQ ? "bg-blue-500" : "bg-slate-700"}`} />
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Sections</div>
            <div className="space-y-2">
              {["Aptitude", "Technical", "Psychometric", "Simulation"].map((s, i) => (
                <div key={s} className={`text-sm px-3 py-2 rounded-lg ${i === 1 ? "bg-blue-500/15 text-blue-300 border border-blue-500/20" : "text-slate-500"}`}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <div className="glass-card rounded-2xl p-8 border border-white/10 mb-6">
                <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-4">Question {currentQ + 1}</div>
                <h2 className="text-xl font-semibold text-white leading-relaxed mb-8">{q.text}</h2>
                <div className="grid gap-3">
                  {q.options.map((opt, idx) => {
                    const isAnswered = answered.includes(currentQ);
                    const isCorrect = idx === q.correct;
                    const isSelected = selected === idx;
                    let cls = "glass-card rounded-xl p-4 border cursor-pointer transition-all text-left text-sm font-medium ";
                    if (isAnswered) {
                      if (isCorrect) cls += "border-green-500/50 bg-green-500/10 text-green-300";
                      else if (isSelected) cls += "border-red-500/50 bg-red-500/10 text-red-300";
                      else cls += "border-white/5 text-slate-500";
                    } else {
                      cls += isSelected ? "border-blue-500/60 bg-blue-500/15 text-white" : "border-white/5 text-slate-300 hover:border-blue-500/30 hover:bg-blue-500/5";
                    }
                    return (
                      <button key={idx} data-testid={`answer-${idx}`} className={cls} onClick={() => handleSelect(idx)}>
                        <span className="inline-flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center text-xs shrink-0">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          {opt}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex gap-4">
                <button data-testid="btn-mark-review" onClick={() => toast("Marked for review.")} className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-400 text-sm hover:border-slate-600 hover:text-white transition-all">
                  Mark for Review
                </button>
                <button data-testid="btn-next-question" onClick={handleNext} className="ml-auto flex items-center gap-2 px-6 py-2.5 rounded-lg btn-gradient text-white font-semibold text-sm">
                  {currentQ < questions.length - 1 ? "Next Question" : "Submit"} <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Sidebar */}
        <div className="w-56 glass-card border-l border-white/10 p-5 flex flex-col gap-6 hidden md:flex shrink-0">
          <div className="flex flex-col items-center">
            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Your TFES Score</div>
            <TFESGauge score={tfesScore} size={100} />
          </div>
          <button data-testid="btn-ai-hint" onClick={() => toast("💡 AI Hint: Focus on the impedance formula at resonance — what happens to reactances?")} className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/15 transition-all">
            <Lightbulb className="w-4 h-4" /> Get AI Hint
          </button>
          <div className="glass-card rounded-xl p-4 border border-white/5 text-xs text-slate-500 leading-relaxed">
            <Brain className="w-4 h-4 text-blue-400 mb-2" />
            <span className="text-slate-400 font-medium">We're also measuring:</span> response confidence, time patterns, and revision behavior.
          </div>
        </div>
      </div>

      {/* Results Modal */}
      <AnimatePresence>
        {showResults && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="glass-card rounded-2xl p-8 border border-white/10 max-w-lg w-full">
              <button onClick={() => setShowResults(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
              <div className="text-center mb-8">
                <div className="text-sm text-blue-400 font-semibold uppercase tracking-wider mb-2">Sample Results</div>
                <h3 className="text-2xl font-black text-white mb-4">Your Demo TFES Score</h3>
                <div className="flex justify-center mb-4">
                  <TFESGauge score={sampleResults.score} size={120} />
                </div>
                <div className="text-slate-400 text-sm">out of 100</div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[["Technical", sampleResults.technical, "blue"], ["Aptitude", sampleResults.aptitude, "cyan"], ["Behavioral", sampleResults.behavioral, "amber"]].map(([label, val, color]) => (
                  <div key={String(label)} className="text-center bg-slate-800/50 rounded-xl p-3">
                    <div className={`text-xl font-black ${color === "blue" ? "text-blue-400" : color === "cyan" ? "text-cyan-400" : "text-amber-400"}`}>{val}</div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                    <div className="h-1.5 bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div className={`h-full rounded-full ${color === "blue" ? "bg-blue-500" : color === "cyan" ? "bg-cyan-500" : "bg-amber-500"}`} style={{ width: `${val}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 mb-6 text-sm">
                <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                  <div className="text-slate-400 mb-1">Recommended Tier</div>
                  <div className="text-amber-400 font-bold">🟡 {sampleResults.tier}</div>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                  <div className="text-slate-400 mb-1">Top Domain Match</div>
                  <div className="text-blue-400 font-bold">{sampleResults.domain}</div>
                </div>
              </div>
              <button onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")} className="w-full py-4 rounded-xl btn-gradient text-white font-bold text-base">
                Get Your Real Score — Sign Up Free
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
