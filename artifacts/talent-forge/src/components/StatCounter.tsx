import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

export default function StatCounter({ value, label, prefix = "", suffix = "" }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, { mass: 1, stiffness: 50, damping: 15 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          spring.set(value);
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [spring, value, hasAnimated]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass-card rounded-xl hover-glow transition-all duration-300">
      <div className="text-4xl font-bold text-white mb-2 flex items-center gap-1">
        {prefix && <span className="text-blue-400">{prefix}</span>}
        <motion.span>{display}</motion.span>
        {suffix && <span className="text-blue-400">{suffix}</span>}
      </div>
      <span className="text-slate-400 text-sm uppercase tracking-wider font-medium">{label}</span>
    </div>
  );
}
