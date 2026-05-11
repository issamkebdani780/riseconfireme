import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { clientServices } from '../../services/clientServices';

const AgentsSection = ({ permissions = [] }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasPerm = (p) => permissions.includes(p);

  const initialAgents = [
    { id: 1, name: 'Amine K.', role: 'Expert Confirmation', status: 'online', calls: 1240, rate: '92%', lastActive: 'Il y a 2 min', email: 'amine.k@riseconfirm.com' },
    { id: 2, name: 'Selma R.', role: 'Senior Agent', status: 'online', calls: 980, rate: '88%', lastActive: 'En ligne', email: 'selma.r@riseconfirm.com' },
    { id: 3, name: 'Yanis B.', role: 'Junior Agent', status: 'away', calls: 850, rate: '84%', lastActive: 'Il y a 15 min', email: 'yanis.b@riseconfirm.com' },
    { id: 4, name: 'Ines L.', role: 'Expert Confirmation', status: 'offline', calls: 720, rate: '81%', lastActive: 'Hier', email: 'ines.l@riseconfirm.com' },
    { id: 5, name: 'Ahmed M.', role: 'Team Lead', status: 'online', calls: 1560, rate: '95%', lastActive: 'En ligne', email: 'ahmed.m@riseconfirm.com' },
    { id: 6, name: 'Khadija A.', role: 'Senior Agent', status: 'online', calls: 1100, rate: '90%', lastActive: 'En ligne', email: 'khadija.a@riseconfirm.com' },
  ];

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const data = await clientServices.getAgents();
        setAgents(data.length > 0 ? data : initialAgents);
      } catch (err) {
        console.error('Failed to fetch agents:', err);
        setError(err.message);
        setAgents(initialAgents); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const filteredAgents = agents.filter(agent => {
    const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) || agent.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'all' || agent.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Header & Stats Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-heading dark:text-white tracking-tight">{t('Gestion des Agents')}</h2>
          <p className="text-sm text-slate-400 font-medium mt-1">Supervisez et gérez les performances de votre équipe.</p>
        </div>
        {hasPerm('agents:create') && (
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-all font-black text-sm">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            {t('Ajouter un Agent')}
          </button>
        )}
      </div>

      {/* Filters Area */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder={t('Rechercher un agent...')} 
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-heading dark:text-white font-medium"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="flex items-center gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl">
          {['all', 'online', 'away', 'offline'].map((status) => (
            <button
              key={status}
              onClick={() => setActiveFilter(status)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all ${
                activeFilter === status 
                  ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              {t(status)}
            </button>
          ))}
        </div>
      </div>

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <div key={agent.id} className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group relative overflow-hidden">
            {/* Status Indicator */}
            <div className={`absolute top-6 right-6 w-3 h-3 rounded-full border-4 border-white dark:border-slate-900 shadow-sm ${
              agent.status === 'online' ? 'bg-emerald-500' : agent.status === 'away' ? 'bg-amber-500' : 'bg-slate-300'
            }`} />

            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center font-black text-primary text-xl border-2 border-primary/5 group-hover:scale-110 transition-transform">
                {agent.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h4 className="text-lg font-black text-heading dark:text-white">{agent.name}</h4>
                <p className="text-xs text-primary font-bold uppercase tracking-wider">{agent.role}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t('Taux Succès')}</p>
                <p className="text-xl font-black text-primary">{agent.rate}</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{t('Appels')}</p>
                <p className="text-xl font-black text-heading dark:text-white">{agent.calls}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50 dark:border-slate-800">
              <div className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{t('Dernière Activité')}</span>
                <span className="text-xs font-bold text-heading dark:text-slate-300">{agent.lastActive}</span>
              </div>
              {(hasPerm('agents:edit') || hasPerm('agents:delete')) && (
                <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-slate-400 hover:text-primary transition-all active:scale-90 shadow-sm">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsSection;
