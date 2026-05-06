import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleWaitlist = () => {
    toast("🚀 Feature coming soon! Join the waitlist.");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-white group-hover:text-blue-400 transition-colors">
              Talent Forge
            </span>
            <span className="text-[10px] text-amber-500 leading-none font-medium uppercase tracking-wider">
              by ResourceIndia.co
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/for-students" className="hover:text-white transition-colors">For Students</Link>
            <Link href="/for-employers" className="hover:text-white transition-colors">For Employers</Link>
            <Link href="/for-colleges" className="hover:text-white transition-colors">For Colleges</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" onClick={handleWaitlist} className="text-slate-300 hover:text-white hover:bg-white/5">
              Login
            </Button>
            <Button onClick={handleWaitlist} className="btn-gradient font-semibold">
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass-card absolute top-16 left-0 right-0 border-b border-white/10 p-4 flex flex-col gap-4 shadow-xl">
          <Link href="/for-students" className="text-slate-300 hover:text-white font-medium p-2" onClick={() => setIsOpen(false)}>For Students</Link>
          <Link href="/for-employers" className="text-slate-300 hover:text-white font-medium p-2" onClick={() => setIsOpen(false)}>For Employers</Link>
          <Link href="/for-colleges" className="text-slate-300 hover:text-white font-medium p-2" onClick={() => setIsOpen(false)}>For Colleges</Link>
          <Link href="/pricing" className="text-slate-300 hover:text-white font-medium p-2" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="/about" className="text-slate-300 hover:text-white font-medium p-2" onClick={() => setIsOpen(false)}>About</Link>
          <div className="h-px bg-white/10 my-2" />
          <Button variant="ghost" onClick={handleWaitlist} className="w-full justify-start text-slate-300 hover:text-white">
            Login
          </Button>
          <Button onClick={handleWaitlist} className="btn-gradient w-full">
            Get Started Free
          </Button>
        </div>
      )}
    </nav>
  );
}
