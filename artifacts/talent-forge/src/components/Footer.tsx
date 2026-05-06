import { Link } from "wouter";
import { Zap, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-amber-500 fill-amber-500" />
              <span className="font-bold text-xl text-white">Talent Forge</span>
            </Link>
            <p className="text-slate-400 text-sm mb-6">
              India's first AI + Blockchain talent marketplace platform connecting engineering graduates with companies.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              <li><Link href="/for-students" className="text-slate-400 hover:text-white text-sm transition-colors">For Students</Link></li>
              <li><Link href="/for-employers" className="text-slate-400 hover:text-white text-sm transition-colors">For Employers</Link></li>
              <li><Link href="/for-colleges" className="text-slate-400 hover:text-white text-sm transition-colors">For Colleges</Link></li>
              <li><Link href="/marketplace" className="text-slate-400 hover:text-white text-sm transition-colors">Marketplace</Link></li>
              <li><Link href="/assessment" className="text-slate-400 hover:text-white text-sm transition-colors">AI Assessment</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="text-slate-400 hover:text-white text-sm transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-slate-400 text-sm">support@resourceindia.co</li>
              <li className="text-slate-400 text-sm">sales@resourceindia.co</li>
              <li className="text-slate-400 text-sm mt-4 pt-4 border-t border-slate-800">
                Bengaluru, India<br/>
                Koramangala, 560034
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800 text-slate-500 text-sm">
          <p>© 2025 ResourceIndia.co. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
