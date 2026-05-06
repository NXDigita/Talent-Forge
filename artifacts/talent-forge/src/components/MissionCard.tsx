import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Clock, Trophy, IndianRupee } from "lucide-react";

interface MissionCardProps {
  title: string;
  duration: string;
  xp: number;
  reward: string;
  progress: number;
}

export default function MissionCard({ title, duration, xp, reward, progress }: MissionCardProps) {
  return (
    <div className="glass-card p-5 rounded-2xl hover-glow transition-all border border-slate-700/50 flex flex-col gap-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-800">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400" 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div>
        <h4 className="font-semibold text-white mb-2 leading-tight">{title}</h4>
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {duration}</span>
          <span className="flex items-center gap-1 text-amber-500"><Trophy className="w-3 h-3" /> {xp} XP</span>
          <span className="flex items-center gap-1 text-green-500"><IndianRupee className="w-3 h-3" /> {reward}</span>
        </div>
      </div>
      
      <div className="mt-auto pt-2">
        <Button 
          className="w-full text-xs h-8 bg-white/5 hover:bg-white/10 text-white border border-white/10"
          onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")}
        >
          Continue Mission →
        </Button>
      </div>
    </div>
  );
}
