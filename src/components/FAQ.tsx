import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'ما هي شروط التسجيل في المعهد؟',
    answer: 'التسجيل مفتوح للجميع. لا توجد شروط معقدة، فقط الشغف للتعلم والالتزام بالحضور.',
  },
  {
    question: 'هل الشهادات معتمدة؟',
    answer: 'نعم، جميع شهاداتنا معتمدة من الجهات المختصة ومعترف بها في سوق العمل.',
  },
  {
    question: 'هل يتوفر نظام تقسيط للرسوم؟',
    answer: 'نعم، نوفر خطط دفع مرنة تناسب الجميع، ويمكنك التواصل معنا لمعرفة التفاصيل.',
  },
  {
    question: 'هل الدراسة حضورية أم عن بعد؟',
    answer: 'نوفر النظامين. يمكنك اختيار الدراسة في مقراتنا أو عن طريق منصتنا الإلكترونية التفاعلية.',
  }
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black/30">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl font-bold mb-12 text-center">الأسئلة الشائعة</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl border border-white/5 overflow-hidden transition-all hover:border-white/20"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-right"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className={`text-neon transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                  {activeIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
