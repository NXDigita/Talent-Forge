import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "For Students", href: "/for-students" },
  { label: "For Employers", href: "/for-employers" },
  { label: "For Colleges", href: "/for-colleges" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const handleWaitlist = () => {
    toast("🚀 Feature coming soon! Join the waitlist.");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
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
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-1 text-sm font-medium">
            {navLinks.map(link => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3 py-1.5 rounded-lg transition-colors",
                    isActive
                      ? "text-white bg-white/8"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Button
              variant="ghost"
              onClick={handleWaitlist}
              className="text-slate-300 hover:text-white hover:bg-white/5"
            >
              Login
            </Button>
            <Button onClick={handleWaitlist} className="btn-gradient font-semibold">
              Get Started Free
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden glass-card absolute top-16 left-0 right-0 border-b border-white/10 p-4 flex flex-col gap-1 shadow-xl">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium px-4 py-2.5 rounded-lg transition-colors",
                location === link.href
                  ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <Button
            variant="ghost"
            onClick={handleWaitlist}
            className="w-full justify-start text-slate-300 hover:text-white"
          >
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
