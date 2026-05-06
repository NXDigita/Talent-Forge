import { Link, useLocation } from "wouter";
import { LayoutDashboard, Target, FolderKanban, Award, ShieldCheck, IndianRupee, Users, Settings, LogOut, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  type: "student" | "employer";
}

export default function DashboardSidebar({ type }: DashboardSidebarProps) {
  const [location] = useLocation();

  const studentLinks = [
    { icon: LayoutDashboard, label: "Home", href: "/dashboard/student" },
    { icon: Target, label: "My Missions", href: "/dashboard/student/missions" },
    { icon: FolderKanban, label: "My Projects", href: "/dashboard/student/projects" },
    { icon: Award, label: "My Score", href: "/dashboard/student/score" },
    { icon: ShieldCheck, label: "My Badges", href: "/dashboard/student/badges" },
    { icon: IndianRupee, label: "Earnings", href: "/dashboard/student/earnings" },
    { icon: Users, label: "Community", href: "/dashboard/student/community" },
    { icon: Settings, label: "Settings", href: "/dashboard/student/settings" },
  ];

  const employerLinks = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard/employer" },
    { icon: FolderKanban, label: "My Projects", href: "/dashboard/employer/projects" },
    { icon: Users, label: "Candidates", href: "/dashboard/employer/candidates" },
    { icon: Search, label: "Find Talent", href: "/marketplace" },
    { icon: IndianRupee, label: "Billing", href: "/dashboard/employer/billing" },
    { icon: Settings, label: "Settings", href: "/dashboard/employer/settings" },
  ];

  const links = type === "student" ? studentLinks : employerLinks;

  return (
    <div className="w-64 flex-shrink-0 border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl h-screen sticky top-0 flex flex-col hidden md:flex z-40">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2 group mb-8">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold shrink-0 shadow-lg">
            ⚡
          </div>
          <span className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
            Talent Forge
          </span>
        </Link>

        {type === "student" ? (
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700 mb-6">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">AK</div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">Arjun K.</div>
              <div className="text-xs text-amber-500 font-medium">🟠 Expert Tier</div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-slate-700 mb-6">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-slate-700 to-slate-600 flex items-center justify-center text-white font-bold border border-slate-600">TC</div>
            <div>
              <div className="text-sm font-semibold text-white leading-tight">TechCorp Inc.</div>
              <div className="text-xs text-blue-400 font-medium">Pro Plan</div>
            </div>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-1">
          {links.map((link) => {
            const isActive = location === link.href;
            return (
              <Link 
                key={link.label} 
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-500/10 text-blue-400 border-l-2 border-blue-500 rounded-l-none" 
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <link.icon className={cn("w-4 h-4", isActive ? "text-blue-400" : "text-slate-500")} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="p-4 border-t border-slate-800">
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 w-full transition-colors">
          <LogOut className="w-4 h-4 text-slate-500" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
