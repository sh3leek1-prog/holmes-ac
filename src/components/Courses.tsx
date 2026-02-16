import { motion } from 'framer-motion';
import { Code, Globe, Cpu, Zap } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'لغات',
    icon: <Globe size={40} />,
    description: 'إتقان اللغات الحية بأساليب تفاعلية حديثة.',
    color: 'text-blue-400',
    borderColor: 'hover:border-blue-400',
    shadowColor: 'hover:shadow-blue-400/50',
  },
  {
    id: 2,
    title: 'حاسوب',
    icon: <Cpu size={40} />,
    description: 'أساسيات الحاسوب، الشبكات، والصيانة المتقدمة.',
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-400',
    shadowColor: 'hover:shadow-purple-400/50',
  },
  {
    id: 3,
    title: 'برمجة',
    icon: <Code size={40} />,
    description: 'تطوير الويب، تطبيقات الموبايل، والذكاء الاصطناعي.',
    color: 'text-neon',
    borderColor: 'hover:border-neon',
    shadowColor: 'hover:shadow-neon/50',
  },
  {
    id: 4,
    title: 'مهارات',
    icon: <Zap size={40} />,
    description: 'مهارات القيادة، التواصل، والتفكير النقدي.',
    color: 'text-pink-400',
    borderColor: 'hover:border-pink-400',
    shadowColor: 'hover:shadow-pink-400/50',
  },
];

export const Courses = () => {
  return (
    <section id="courses" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">مسارات التعلم</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">اختر المسار الذي يناسب طموحك وابدأ رحلتك نحو الاحتراف.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`glass-card p-8 rounded-2xl border border-white/5 transition-all duration-300 group ${course.borderColor} hover:shadow-lg ${course.shadowColor}`}
            >
              <div className={`mb-6 p-4 rounded-full bg-white/5 w-fit group-hover:bg-white/10 transition-colors ${course.color}`}>
                {course.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                {course.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
