import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TFESGaugeProps {
  score: number;
  size?: number;
  className?: string;
}

export default function TFESGauge({ score, size = 120, className = "" }: TFESGaugeProps) {
  const [currentScore, setCurrentScore] = useState(0);
  const strokeWidth = size * 0.1;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (currentScore / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScore(score);
    }, 500);
    return () => clearTimeout(timer);
  }, [score]);

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg className="transform -rotate-90 w-full h-full">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-slate-800"
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#blue-gradient)"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-white leading-none">
          {currentScore.toFixed(0)}
        </span>
        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">
          TFES
        </span>
      </div>
    </div>
  );
}
