import { motion } from 'framer-motion';

const teachers = [
  {
    id: 1,
    name: 'أحمد علي',
    role: 'خبير برمجة',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
    specialty: 'Full Stack Dev',
  },
  {
    id: 2,
    name: 'سارة محمد',
    role: 'مدربة لغات',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=300&h=300',
    specialty: 'English / French',
  },
  {
    id: 3,
    name: 'عمر خالد',
    role: 'مهندس شبكات',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300',
    specialty: 'Cyber Security',
  },
  {
    id: 4,
    name: 'ليلى حسن',
    role: 'مدربة مهارات',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=300&h=300',
    specialty: 'Soft Skills',
  },
];

export const Teachers = () => {
  return (
    <section id="teachers" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-neon/5 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">فريقنا المتميز</h2>
            <p className="text-gray-400 max-w-xl">نخبة من الخبراء والمدربين المحترفين يقودون مسيرتك التعليمية.</p>
          </div>
          <div className="h-1 w-32 bg-neon rounded-full hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl"></div>
              
              <div className="glass-card p-4 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-neon text-xs font-bold uppercase tracking-wider block text-center">{teacher.specialty}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white text-center">{teacher.name}</h3>
                <p className="text-gray-400 text-sm text-center mt-1">{teacher.role}</p>
                
                {/* Decoration Lines */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-neon rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-2 left-2 w-2 h-2 bg-neon rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
