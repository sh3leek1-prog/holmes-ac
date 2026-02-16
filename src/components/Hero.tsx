import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 border border-neon/50 rounded-full bg-neon/10 backdrop-blur-sm">
            <span className="text-neon text-sm font-bold tracking-wider uppercase">بوابة المستقبل</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            مستقبلك يبدأ في <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-white drop-shadow-[0_0_15px_rgba(226,246,72,0.5)]">
              معهد هولمز
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            اكتشف أحدث التقنيات والمهارات في بيئة تعليمية متطورة. 
            نحن نصنع قادة الغد بأساليب تعليمية مبتكرة تواكب العصر.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <a 
              href="#courses"
              className="px-8 py-4 bg-neon text-black font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(226,246,72,0.4)] hover:shadow-[0_0_30px_rgba(226,246,72,0.6)]"
            >
              استكشف الدورات
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-white/20 hover:border-neon text-white hover:text-neon rounded-lg transition-all backdrop-blur-sm"
            >
              تواصل معنا
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-gray-500" size={32} />
      </motion.div>
    </section>
  );
};
