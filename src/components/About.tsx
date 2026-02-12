import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-black/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
                <span className="w-2 h-10 bg-neon rounded-full block"></span>
                من نحن
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                معهد هولمز هو مؤسسة تعليمية رائدة تهدف إلى سد الفجوة بين التعليم التقليدي ومتطلبات سوق العمل المستقبلي. 
                نحن نؤمن بأن التكنولوجيا هي المفتاح لتمكين الأفراد والمجتمعات.
              </p>
              
              <div className="space-y-6">
                <div className="glass-card p-6 rounded-xl border-l-4 border-neon">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-neon/10 rounded-lg text-neon">
                      <Eye size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">رؤيتنا</h3>
                      <p className="text-gray-400">بناء جيل من المبتكرين والمبدعين القادرين على تشكيل المستقبل التقني للمنطقة.</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 rounded-xl border-l-4 border-blue-500">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                      <Target size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">رسالتنا</h3>
                      <p className="text-gray-400">توفير تعليم عالي الجودة يركز على التطبيق العملي والمهارات الحقيقية المطلوبة عالمياً.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="md:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2 border border-white/10 relative group">
                 {/* Abstract representation of code/tech */}
                 <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-blue-500/5"></div>
                 <div className="h-full w-full bg-black/40 rounded-xl p-6 font-mono text-sm text-green-400 overflow-hidden leading-relaxed">
                   <p><span className="text-blue-400">class</span> <span className="text-yellow-400">HolmesInstitute</span> <span className="text-white">{`{`}</span></p>
                   <p className="pl-4"><span className="text-purple-400">constructor</span>() <span className="text-white">{`{`}</span></p>
                   <p className="pl-8">this.mission = <span className="text-green-300">"Future Education"</span>;</p>
                   <p className="pl-8">this.vision = <span className="text-green-300">"Global Impact"</span>;</p>
                   <p className="pl-8">this.students = <span className="text-blue-300">[]</span>;</p>
                   <p className="pl-4"><span className="text-white">{`}`}</span></p>
                   <br />
                   <p className="pl-4"><span className="text-blue-400">async</span> <span className="text-yellow-400">empower</span>(student) <span className="text-white">{`{`}</span></p>
                   <p className="pl-8"><span className="text-purple-400">await</span> student.learnSkills();</p>
                   <p className="pl-8"><span className="text-purple-400">return</span> student.createFuture();</p>
                   <p className="pl-4"><span className="text-white">{`}`}</span></p>
                   <p className="text-white">{`}`}</p>
                 </div>
                 
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-neon/20 rounded-full blur-3xl"></div>
                 <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
