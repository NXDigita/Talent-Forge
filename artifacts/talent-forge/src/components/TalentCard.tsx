import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { MapPin, Trophy, CheckCircle2, ShieldCheck } from "lucide-react";

interface TalentCardProps {
  name: string;
  location: string;
  score: number;
  tier: string;
  domain: string;
  tags: string[];
  earned: string;
  projects: number;
  badges: number;
}

export default function TalentCard({ name, location, score, tier, domain, tags, earned, projects, badges }: TalentCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl border border-slate-700/50 hover-glow transition-all flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-lg font-bold text-white shrink-0 shadow-lg relative">
            {name.charAt(0)}
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800"></div>
          </div>
          <div>
            <h3 className="font-semibold text-white flex items-center gap-1">{name} <CheckCircle2 className="w-4 h-4 text-blue-400" /></h3>
            <div className="flex items-center gap-1 text-xs text-slate-400"><MapPin className="w-3 h-3" /> {location}</div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-400 leading-none">{score}</div>
          <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-1">TFES</div>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-xs px-2 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 font-medium flex items-center gap-1">
          {tier}
        </span>
        <span className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
          {domain}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-1.5 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-6 text-center divide-x divide-slate-800 bg-slate-900/50 rounded-lg py-2 border border-white/5">
        <div>
          <div className="text-xs text-slate-400 mb-1">Earned</div>
          <div className="text-sm font-semibold text-green-400">₹{earned}</div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">Projects</div>
          <div className="text-sm font-semibold text-white">{projects}</div>
        </div>
        <div>
          <div className="text-xs text-slate-400 mb-1">NFTs</div>
          <div className="text-sm font-semibold text-amber-400 flex items-center justify-center gap-1"><ShieldCheck className="w-3 h-3" /> {badges}</div>
        </div>
      </div>
      
      <div className="mt-auto grid grid-cols-2 gap-3">
        <Button 
          variant="outline"
          className="w-full text-xs h-9 bg-transparent border-slate-700 text-white hover:bg-slate-800"
          onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")}
        >
          View Profile
        </Button>
        <Button 
          className="w-full text-xs h-9 btn-gradient"
          onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")}
        >
          Invite
        </Button>
      </div>
    </div>
  );
}
