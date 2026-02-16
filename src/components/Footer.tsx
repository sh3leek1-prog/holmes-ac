import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-2">
            <Zap className="text-neon h-8 w-8" />
            <span className="text-2xl font-bold text-white">معهد <span className="text-neon">هولمز</span></span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-neon transition-colors"><Facebook size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors"><Twitter size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors"><Instagram size={24} /></a>
            <a href="#" className="text-gray-400 hover:text-neon transition-colors"><Linkedin size={24} /></a>
          </div>
        </div>
        
        <div className="text-center border-t border-white/5 pt-8 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} معهد هولمز. جميع الحقوق محفوظة.</p>
          <Link to="/dashboard" className="text-gray-800 hover:text-gray-600 transition-colors text-xs">Admin Access</Link>
        </div>
      </div>
    </footer>
  );
};
