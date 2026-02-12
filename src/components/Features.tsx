import { motion } from 'framer-motion';
import { ShieldCheck, Monitor, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={32} />,
    title: 'شهادات معتمدة',
    description: 'نمنح شهادات معترف بها محلياً ودولياً لتعزيز فرصك الوظيفية.'
  },
  {
    icon: <Monitor size={32} />,
    title: 'بيئة تقنية حديثة',
    description: 'قاعات مجهزة بأحدث الأجهزة والبرمجيات لتجربة تعليمية متكاملة.'
  },
  {
    icon: <Users size={32} />,
    title: 'تدريب عملي',
    description: 'تركيز كامل على الجانب العملي والمشاريع الحقيقية.'
  },
  {
    icon: <Clock size={32} />,
    title: 'أوقات مرنة',
    description: 'جداول دراسية تناسب الطلاب والموظفين على حد سواء.'
  }
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-8">لماذا تختار <span className="text-neon">معهد هولمز</span>؟</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-6 rounded-xl border border-white/5 hover:border-neon/30 transition-colors">
                  <div className="text-neon mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-full min-h-[400px] flex items-center justify-center"
          >
            {/* Abstract Graphic */}
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-neon/5 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute inset-4 border-2 border-dashed border-white/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute inset-16 border border-neon/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center p-8 glass-card rounded-full w-48 h-48 flex flex-col items-center justify-center border-2 border-neon/50 shadow-[0_0_30px_rgba(226,246,72,0.2)]">
                   <span className="text-5xl font-bold text-white mb-1">+10</span>
                   <span className="text-sm text-gray-300">سنوات من التميز</span>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
