import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { Clock, ChevronRight, Lightbulb, Brain, X, Home } from "lucide-react";
import { Link } from "wouter";
import TFESGauge from "@/components/TFESGauge";

const TOTAL_SECONDS = 20 * 60; // 20 minutes

const questions = [
  {
    id: 1,
    section: "Technical",
    text: "A series RLC circuit has R=10Ω, L=0.1H, C=100μF. At resonance frequency, the impedance is:",
    options: ["Z = 0Ω (zero impedance)", "Z = 10Ω (purely resistive)", "Z = jωL (inductive)", "Z = 1/jωC (capacitive)"],
    correct: 1,
    hint: "At resonance, inductive and capacitive reactances cancel out — what's left?",
  },
  {
    id: 2,
    section: "Technical",
    text: "In a BJT common-emitter amplifier, increasing the collector resistance Rc while keeping other parameters constant will:",
    options: ["Decrease voltage gain |Av|", "Increase voltage gain |Av|", "Have no effect on gain", "Decrease input impedance Rin"],
    correct: 1,
    hint: "Voltage gain Av ≈ -gm × Rc. What happens when Rc increases?",
  },
  {
    id: 3,
    section: "Embedded",
    text: "Which embedded communication protocol uses a master-slave architecture with separate dedicated clock (SCLK) and data lines (MOSI/MISO)?",
    options: ["UART (async, no clock line)", "SPI (synchronous, separate clock)", "I2C (two wires: SDA + SCL shared)", "CAN Bus (differential signaling)"],
    correct: 1,
    hint: "Look for the protocol with a dedicated clock pin AND full-duplex capability.",
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

function formatTime(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, "0");
  const s = (secs % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

export default function Assessment() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [tfesScore, setTfesScore] = useState(12); // warm-up baseline
  const [isTimerRed, setIsTimerRed] = useState(false);

  // Live countdown
  useEffect(() => {
    if (showResults) return;
    const id = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) {
          clearInterval(id);
          setShowResults(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [showResults]);

  useEffect(() => {
    setIsTimerRed(secondsLeft < 5 * 60); // red when < 5 mins
  }, [secondsLeft]);

  const handleSelect = (idx: number) => {
    if (answered.includes(currentQ)) return;
    setSelected(idx);
  };

  const handleNext = useCallback(() => {
    if (selected === null) { toast("⚠️ Please select an answer first."); return; }
    const newAnswered = [...answered, currentQ];
    setAnswered(newAnswered);
    // Build TFES progressively: starts at 12, builds to 78
    const newScore = Math.round(12 + (newAnswered.length / questions.length) * 66);
    setTfesScore(newScore);
    if (currentQ < questions.length - 1) {
      setCurrentQ(q => q + 1);
      setSelected(null);
    } else {
      setTimeout(() => setShowResults(true), 700);
    }
  }, [selected, answered, currentQ]);

  // Keyboard shortcut: 1-4 to select answer, Enter/Space to proceed
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (showResults) return;
      const num = parseInt(e.key) - 1;
      if (num >= 0 && num < questions[currentQ].options.length) {
        handleSelect(num);
      }
      if ((e.key === "Enter" || e.key === " ") && selected !== null) {
        handleNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentQ, selected, showResults, handleNext]);

  const q = questions[currentQ];
  const progressPct = Math.round((answered.length / questions.length) * 100);

  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-50 flex flex-col">
      {/* Top bar */}
      <div className="h-14 glass-card border-b border-white/10 flex items-center px-4 md:px-6 gap-4 fixed top-0 left-0 right-0 z-50">
        <Link href="/" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors mr-2">
          <Home className="w-4 h-4" />
        </Link>
        <div className="flex items-center gap-2 font-bold text-white">
          <span className="text-amber-500">⚡</span>
          <span className="hidden sm:inline">Talent Forge Assessment</span>
          <span className="sm:hidden">TF Assessment</span>
        </div>
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden sm:block px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 border border-blue-500/20 text-blue-300">
            ECE — Circuit Theory
          </span>
          <div className={`flex items-center gap-1.5 text-sm font-mono font-bold px-3 py-1.5 rounded-lg transition-colors ${isTimerRed ? "bg-red-500/15 text-red-400 border border-red-500/30 animate-pulse" : "text-slate-300"}`}>
            <Clock className={`w-4 h-4 ${isTimerRed ? "text-red-400" : "text-blue-400"}`} />
            {formatTime(secondsLeft)}
          </div>
          {/* Overall progress */}
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full transition-all duration-500" style={{ width: `${progressPct}%` }} />
            </div>
            <span>{progressPct}%</span>
          </div>
        </div>
      </div>

      <div className="flex pt-14 flex-1 h-[calc(100vh-0px)] overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-52 glass-card border-r border-white/10 p-5 flex-col gap-5 hidden md:flex shrink-0">
          <div>
            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Progress</div>
            <div className="text-2xl font-black text-white mb-3">
              Q {currentQ + 1} <span className="text-slate-500 font-normal text-base">of {questions.length}</span>
            </div>
            <div className="flex gap-1.5">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-2.5 rounded-full transition-all duration-500 ${answered.includes(i) ? "bg-green-500" : i === currentQ ? "bg-blue-500" : "bg-slate-700"}`}
                />
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Sections</div>
            <div className="space-y-1.5">
              {["Aptitude", "Technical", "Psychometric", "Simulation"].map((s, i) => (
                <div
                  key={s}
                  className={`text-sm px-3 py-2.5 rounded-lg font-medium transition-colors ${
                    i === 1
                      ? "bg-blue-500/15 text-blue-300 border border-blue-500/20"
                      : i === 0
                      ? "text-green-400 text-xs"
                      : "text-slate-600 text-xs"
                  }`}
                >
                  {i === 0 ? "✓ " : ""}{s}
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-slate-600 mt-auto">
            <div className="font-medium text-slate-500 mb-1">Keyboard shortcuts</div>
            <div>1–4 → select answer</div>
            <div>Enter → next</div>
          </div>
        </div>

        {/* Main question area */}
        <div className="flex-1 p-5 md:p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQ}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.25 }}
            >
              <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 mb-5">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
                    Question {currentQ + 1}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300">
                    {q.section}
                  </span>
                </div>
                <h2 className="text-lg md:text-xl font-semibold text-white leading-relaxed mb-7">{q.text}</h2>
                <div className="grid gap-3">
                  {q.options.map((opt, idx) => {
                    const isAnswered = answered.includes(currentQ);
                    const isCorrect = idx === q.correct;
                    const isSelected = selected === idx;
                    let cls =
                      "rounded-xl p-4 border cursor-pointer transition-all duration-200 text-left text-sm font-medium w-full ";
                    if (isAnswered) {
                      if (isCorrect)
                        cls += "border-green-500/60 bg-green-500/10 text-green-300";
                      else if (isSelected)
                        cls += "border-red-500/60 bg-red-500/10 text-red-300";
                      else cls += "border-white/5 bg-slate-800/30 text-slate-500";
                    } else {
                      cls += isSelected
                        ? "border-blue-500/70 bg-blue-500/15 text-white shadow-lg shadow-blue-500/10"
                        : "border-slate-700/60 bg-slate-800/20 text-slate-300 hover:border-blue-500/40 hover:bg-blue-500/5 hover:text-white";
                    }
                    return (
                      <button
                        key={idx}
                        data-testid={`answer-${idx}`}
                        className={cls}
                        onClick={() => handleSelect(idx)}
                      >
                        <span className="inline-flex items-center gap-3">
                          <span
                            className={`w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                              isAnswered && isCorrect
                                ? "border-green-400 bg-green-400/20 text-green-300"
                                : isAnswered && isSelected && !isCorrect
                                ? "border-red-400 bg-red-400/20 text-red-300"
                                : isSelected
                                ? "border-blue-400 bg-blue-400/20 text-blue-300"
                                : "border-slate-600 text-slate-400"
                            }`}
                          >
                            {String.fromCharCode(65 + idx)}
                          </span>
                          {opt}
                          {isAnswered && isCorrect && (
                            <span className="ml-auto text-green-400 text-xs font-semibold">✓ Correct</span>
                          )}
                          {isAnswered && isSelected && !isCorrect && (
                            <span className="ml-auto text-red-400 text-xs font-semibold">✗ Wrong</span>
                          )}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  data-testid="btn-mark-review"
                  onClick={() => toast("📌 Marked for review.")}
                  className="px-4 py-2.5 rounded-lg border border-slate-700 text-slate-400 text-sm hover:border-slate-500 hover:text-white transition-all"
                >
                  Mark for Review
                </button>
                {answered.includes(currentQ) && currentQ < questions.length - 1 && (
                  <span className="text-xs text-green-400 font-medium">Answer saved ✓</span>
                )}
                <button
                  data-testid="btn-next-question"
                  onClick={handleNext}
                  className="ml-auto flex items-center gap-2 px-7 py-2.5 rounded-lg btn-gradient text-white font-semibold text-sm"
                >
                  {currentQ < questions.length - 1 ? "Next Question" : "Submit Assessment"}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Sidebar */}
        <div className="w-52 glass-card border-l border-white/10 p-5 flex-col gap-5 hidden md:flex shrink-0">
          <div className="flex flex-col items-center">
            <div className="text-xs text-slate-500 uppercase font-semibold tracking-wider mb-3">Live TFES</div>
            <TFESGauge score={tfesScore} size={100} />
            <div className="text-xs text-slate-500 mt-2 text-center">Updates as you answer</div>
          </div>

          <button
            data-testid="btn-ai-hint"
            onClick={() => toast(`💡 Hint: ${q.hint}`)}
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium hover:bg-amber-500/15 transition-all"
          >
            <Lightbulb className="w-4 h-4" /> Get AI Hint
          </button>

          <div className="glass-card rounded-xl p-4 border border-white/5 text-xs leading-relaxed">
            <Brain className="w-4 h-4 text-blue-400 mb-2" />
            <span className="text-slate-400 font-medium">AI is also tracking:</span>
            <ul className="mt-2 space-y-1 text-slate-500">
              <li>• Response confidence</li>
              <li>• Time per question</li>
              <li>• Answer revision patterns</li>
            </ul>
          </div>

          <div className="text-xs text-slate-600 space-y-1">
            <div className="flex justify-between"><span>Questions left</span><span className="text-white">{questions.length - answered.length}</span></div>
            <div className="flex justify-between"><span>Answered</span><span className="text-green-400">{answered.length}</span></div>
          </div>
        </div>
      </div>

      {/* Results Modal */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="glass-card rounded-2xl p-8 border border-white/10 max-w-lg w-full relative"
            >
              <button
                onClick={() => setShowResults(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-7">
                <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2">Demo Results</div>
                <h3 className="text-2xl font-black text-white mb-5">Your Demo TFES Score</h3>
                <div className="flex justify-center mb-2">
                  <TFESGauge score={sampleResults.score} size={130} />
                </div>
                <div className="text-slate-400 text-sm">out of 100 · Practitioner Tier</div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  ["Technical", sampleResults.technical, "blue"],
                  ["Aptitude", sampleResults.aptitude, "cyan"],
                  ["Behavioral", sampleResults.behavioral, "amber"],
                ].map(([label, val, color]) => (
                  <div key={String(label)} className="text-center bg-slate-800/50 rounded-xl p-3">
                    <div
                      className={`text-xl font-black ${
                        color === "blue" ? "text-blue-400" : color === "cyan" ? "text-cyan-400" : "text-amber-400"
                      }`}
                    >
                      {val}
                    </div>
                    <div className="text-xs text-slate-400 mt-1">{label}</div>
                    <div className="h-1.5 bg-slate-700 rounded-full mt-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          color === "blue" ? "bg-blue-500" : color === "cyan" ? "bg-cyan-500" : "bg-amber-500"
                        }`}
                        style={{ width: `${val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mb-5">
                <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">Recommended Tier</div>
                  <div className="text-amber-400 font-bold text-sm">🟡 {sampleResults.tier}</div>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">Top Domain</div>
                  <div className="text-blue-400 font-bold text-sm">{sampleResults.domain}</div>
                </div>
                <div className="flex-1 bg-slate-800/50 rounded-xl p-3 text-center">
                  <div className="text-slate-400 text-xs mb-1">Est. Earnings</div>
                  <div className="text-green-400 font-bold text-sm">₹25K–50K</div>
                </div>
              </div>

              <button
                onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")}
                className="w-full py-4 rounded-xl btn-gradient text-white font-bold text-base"
              >
                Get Your Real Score — Sign Up Free →
              </button>
              <p className="text-center text-xs text-slate-500 mt-3">
                Real assessment takes ~25 mins · Results include NFT badge
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
