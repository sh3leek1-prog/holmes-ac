import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'محمد سالم',
    role: 'طالب برمجة',
    text: 'تجربة تعليمية فريدة غيرت مساري المهني بالكامل. المدربون على أعلى مستوى من الكفاءة.',
  },
  {
    id: 2,
    name: 'نورة العلي',
    role: 'طالبة تصميم',
    text: 'البيئة هنا محفزة جداً للإبداع. تعلمت الكثير في وقت قصير وحصلت على وظيفة فور تخرجي.',
  },
  {
    id: 3,
    name: 'كريم محمود',
    role: 'طالب لغات',
    text: 'المعهد يوفر كل الأدوات التي تحتاجها للنجاح. أنصح به بشدة لكل من يريد تطوير نفسه.',
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">ماذا يقول طلابنا</h2>
          <p className="text-gray-400">قصص نجاح حقيقية بدأت من هنا.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card p-8 rounded-2xl relative border border-white/5 hover:border-neon/30 transition-all"
            >
              <Quote className="text-neon/30 absolute top-6 left-6" size={48} />
              <p className="text-gray-300 mb-6 relative z-10 leading-relaxed min-h-[80px]">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon to-blue-500 flex items-center justify-center font-bold text-black">
                  {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <span className="text-xs text-gray-400">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
