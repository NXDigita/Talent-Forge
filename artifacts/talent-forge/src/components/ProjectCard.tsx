import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Clock, IndianRupee, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  company: string;
  domain: string;
  budget: string;
  duration: string;
  tier: string;
  tags: string[];
  applicants: number;
}

export default function ProjectCard({ title, company, domain, budget, duration, tier, tags, applicants }: ProjectCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl border border-slate-700/50 hover-glow transition-all flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-slate-800 border border-slate-700 flex items-center justify-center text-sm font-bold text-white shrink-0">
          {company}
        </div>
        <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">
          {domain}
        </span>
      </div>
      
      <h3 className="font-semibold text-lg text-white mb-3 line-clamp-2">{title}</h3>
      
      <div className="grid grid-cols-2 gap-y-2 mb-4 text-sm text-slate-400">
        <div className="flex items-center gap-1.5"><IndianRupee className="w-4 h-4 text-green-500" /> {budget}</div>
        <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {duration}</div>
        <div className="flex items-center gap-1.5 col-span-2"><Users className="w-4 h-4" /> {applicants} applicants</div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <span className="text-xs px-2 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20">
          {tier} Required
        </span>
        {tags.map(tag => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="mt-auto">
        <Button 
          className="w-full btn-gradient"
          onClick={() => toast("🚀 Feature coming soon! Join the waitlist.")}
        >
          Apply Now →
        </Button>
      </div>
    </div>
  );
}
