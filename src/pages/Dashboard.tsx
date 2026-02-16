import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  Filter, 
  Search, 
  Clock, 
  Trash2, 
  Mail, 
  Phone, 
  Calendar,
  Zap,
  LogOut,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';

type Lead = {
  id: number;
  full_name: string;
  email: string;
  phone: string;
  interest: string;
  notes: string;
  created_at: string;
  status: 'new' | 'read' | 'contacted';
};


export const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterInterest, setFilterInterest] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    const auth = localStorage.getItem('holmes_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === 'holmes##11$$acac(#$_!@h32') {
      setIsAuthenticated(true);
      localStorage.setItem('holmes_admin_auth', 'true');
      fetchLeads();
    } else {
      alert('كلمة المرور غير صحيحة');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('holmes_admin_auth');
    setPasswordInput('');
  };

  useEffect(() => {
    filterData();
  }, [leads, filterInterest, filterStatus, searchQuery]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      // Try fetching from Supabase
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      if (data) {
  const mappedData = data.map((item: any) => ({
    ...item,
    status: item.status || 'new'
  }));
  setLeads(mappedData);
} else {
  setLeads([]); // لا تستخدم أي بيانات افتراضية
}

    } catch (error) {
      console.error('Error fetching leads:', error);
      // Fallback to mock data on error
      setLeads();
    } finally {
      setLoading(false);
    }
  };

  const updateLeadStatus = async (id: number, newStatus: 'read' | 'contacted') => {
    try {
      // Optimistic UI update
      setLeads(prev => prev.map(lead => 
        lead.id === id ? { ...lead, status: newStatus } : lead
      ));

      if (selectedLead && selectedLead.id === id) {
        setSelectedLead(prev => prev ? { ...prev, status: newStatus } : null);
      }

      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleRowClick = (lead: Lead) => {
    setSelectedLead(lead);
    if (lead.status === 'new') {
      updateLeadStatus(lead.id, 'read');
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('هل أنت متأكد من حذف هذا السجل؟')) return;

    try {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setLeads(prev => prev.filter(lead => lead.id !== id));
      setSelectedLead(null); // Close modal
    } catch (error) {
      console.error('Error deleting lead:', error);
      alert('حدث خطأ أثناء الحذف');
    }
  };

  const filterData = () => {
    let result = [...leads];

    if (filterInterest !== 'all') {
      result = result.filter(lead => lead.interest === filterInterest);
    }

    if (filterStatus !== 'all') {
      result = result.filter(lead => lead.status === filterStatus);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(lead => 
        lead.full_name.toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        lead.phone.includes(query)
      );
    }

    setFilteredLeads(result);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-neon/20 text-neon border-neon/50';
      case 'read': return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'contacted': return 'bg-green-500/20 text-green-400 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'جديد';
      case 'read': return 'تمت القراءة';
      case 'contacted': return 'تم التواصل';
      default: return status;
    }
  };
  
  const getInterestLabel = (interest: string) => {
    const labels: Record<string, string> = {
      'programming': 'برمجة وتطوير',
      'languages': 'لغات',
      'computer': 'حاسوب',
      'skills': 'مهارات',
      'other': 'أخرى'
    };
    return labels[interest] || interest;
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="glass-card max-w-md w-full p-8 rounded-2xl border border-white/10">
          <div className="text-center mb-8">
            <Zap className="w-12 h-12 text-neon mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white">تسجيل دخول المشرف</h1>
            <p className="text-gray-400 mt-2">يرجى إدخال رمز الدخول للوصول للوحة التحكم</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="رمز الدخول..."
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-neon outline-none text-white transition-colors"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-neon text-black font-bold rounded-lg hover:bg-neon/90 transition-colors"
            >
              دخول
            </button>
            <Link to="/" className="block text-center text-gray-500 hover:text-white text-sm">
              العودة للموقع
            </Link>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white font-cairo flex flex-col md:flex-row">
      
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-zinc-900 border-l border-white/10 flex flex-col h-auto md:h-screen fixed right-0 top-0 z-50 md:sticky">
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="text-neon w-6 h-6" />
            <span className="font-bold text-xl">لوحة التحكم</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-neon/10 text-neon rounded-lg border border-neon/20 transition-all">
            <LayoutDashboard size={20} />
            <span>الرسائل والطلبات</span>
          </button>
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-all">
            <Users size={20} />
            <span>الطلاب (قريباً)</span>
          </button>
        </nav>

        <div className="p-4 border-t border-white/10 space-y-2">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white rounded-lg transition-all"
          >
            <LogOut size={20} />
            <span>تسجيل الخروج</span>
          </button>
          
          <Link to="/" className="w-full flex items-center gap-3 px-4 py-3 text-neon hover:bg-neon/10 rounded-lg transition-all border border-neon/20 justify-center">
            <span>العودة للموقع</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:mr-64 overflow-y-auto">
        
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">طلبات الانضمام</h1>
            <p className="text-gray-400">إدارة ومتابعة رسائل الزبائن والطلاب المحتملين</p>
          </div>
          
          <div className="flex gap-4">
            <div className="glass-card px-4 py-2 rounded-lg flex flex-col items-center min-w-[100px]">
              <span className="text-xs text-gray-400">إجمالي الطلبات</span>
              <span className="text-2xl font-bold text-white">{leads.length}</span>
            </div>
            <div className="glass-card px-4 py-2 rounded-lg flex flex-col items-center min-w-[100px] border-neon/30 bg-neon/5">
              <span className="text-xs text-gray-400">طلبات جديدة</span>
              <span className="text-2xl font-bold text-neon">{leads.filter(l => l.status === 'new').length}</span>
            </div>
          </div>
        </header>

        {/* Filters & Search */}
        <div className="glass-card p-4 rounded-xl border border-white/10 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
            <div className="relative group">
              <Filter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-neon transition-colors" size={18} />
              <select 
                className="pl-4 pr-10 py-2 bg-black/50 border border-white/10 rounded-lg focus:border-neon outline-none text-sm w-full appearance-none cursor-pointer hover:border-white/30 transition-colors"
                value={filterInterest}
                onChange={(e) => setFilterInterest(e.target.value)}
              >
                <option value="all">جميع المجالات</option>
                <option value="programming">برمجة وتطوير</option>
                <option value="languages">لغات</option>
                <option value="computer">حاسوب</option>
                <option value="skills">مهارات</option>
              </select>
            </div>

            <div className="relative group">
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-neon transition-colors" size={18} />
              <select 
                className="pl-4 pr-10 py-2 bg-black/50 border border-white/10 rounded-lg focus:border-neon outline-none text-sm w-full appearance-none cursor-pointer hover:border-white/30 transition-colors"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all">جميع الحالات</option>
                <option value="new">جديد</option>
                <option value="read">تمت القراءة</option>
                <option value="contacted">تم التواصل</option>
              </select>
            </div>
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="بحث بالاسم أو البريد..." 
              className="w-full pl-4 pr-10 py-2 bg-black/50 border border-white/10 rounded-lg focus:border-neon outline-none text-sm transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Data Table / Cards */}
        <div className="glass-card rounded-xl border border-white/10 overflow-hidden min-h-[400px]">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-neon"></div>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <Users size={48} className="mb-4 opacity-20" />
              <p>لا توجد طلبات مطابقة للبحث</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead className="bg-white/5 text-gray-400 text-sm">
                  <tr>
                    <th className="p-4 font-medium">الاسم</th>
                    <th className="p-4 font-medium">معلومات الاتصال</th>
                    <th className="p-4 font-medium">المجال</th>
                    <th className="p-4 font-medium">التاريخ</th>
                    <th className="p-4 font-medium">الحالة</th>
                    <th className="p-4 font-medium">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  <AnimatePresence>
                    {filteredLeads.map((lead) => (
                      <motion.tr 
                        key={lead.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="hover:bg-white/5 transition-colors group cursor-pointer"
                        onClick={() => handleRowClick(lead)}
                      >
                        <td className="p-4">
                          <div className="font-bold text-white">{lead.full_name}</div>
                        </td>
                        <td className="p-4 text-sm">
                          <div className="flex items-center gap-2 mb-1 text-gray-300">
                            <Mail size={14} className="text-neon/70" /> {lead.email}
                          </div>
                          <div className="flex items-center gap-2 text-gray-400">
                            <Phone size={14} className="text-neon/70" /> {lead.phone}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                            {getInterestLabel(lead.interest)}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            {new Date(lead.created_at).toLocaleDateString('ar-EG')}
                          </div>
                        </td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs border ${getStatusColor(lead.status)}`}>
                            {getStatusText(lead.status)}
                          </span>
                        </td>
                        <td className="p-4">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(lead.id);
                            }}
                            className="p-2 hover:bg-white/10 rounded-lg text-gray-400 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={20} />
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedLead && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-card w-full max-w-lg rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-neon/10"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{selectedLead.full_name}</h3>
                  <p className="text-gray-400 text-sm">تم التقديم في {new Date(selectedLead.created_at).toLocaleString('ar-EG')}</p>
                </div>
                <button 
                  onClick={() => setSelectedLead(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-gray-400 block mb-1">البريد الإلكتروني</span>
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Mail size={16} className="text-neon" />
                      {selectedLead.email}
                    </span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <span className="text-xs text-gray-400 block mb-1">رقم الهاتف</span>
                    <span className="text-sm font-medium flex items-center gap-2">
                      <Phone size={16} className="text-neon" />
                      {selectedLead.phone}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-gray-400 block mb-2">المجال المهتم به</span>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 bg-neon/10 text-neon border border-neon/20 rounded-lg text-sm font-bold">
                      {getInterestLabel(selectedLead.interest)}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-xs text-gray-400 block mb-2">ملاحظات إضافية</span>
                  <div className="p-4 bg-black/40 rounded-xl border border-white/10 text-gray-300 text-sm min-h-[100px]">
                    {selectedLead.notes || 'لا توجد ملاحظات إضافية.'}
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-white/10 flex-wrap justify-end">
                  <a 
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedLead.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 bg-neon text-black font-bold rounded-lg hover:bg-neon/90 transition-colors flex items-center gap-2"
                  >
                    <Mail size={20} />
                    مراسلة (Gmail)
                  </a>
                  
                  {selectedLead.status !== 'contacted' && (
                    <button 
                      onClick={() => updateLeadStatus(selectedLead.id, 'contacted')}
                      className="px-4 py-3 bg-green-500/10 hover:bg-green-500/20 text-green-400 font-bold rounded-lg transition-colors flex items-center gap-2 border border-green-500/20"
                    >
                      <Zap size={20} />
                      تم التواصل
                    </button>
                  )}

                  <button 
                    onClick={() => handleDelete(selectedLead.id)}
                    className="px-4 py-3 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-lg transition-colors flex items-center gap-2 border border-red-500/20"
                  >
                    <Trash2 size={20} />
                    حذف
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
