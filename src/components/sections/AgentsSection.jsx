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

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const hasPerm = (p) => permissions.includes(p);


  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const result = await clientServices.getAgents();
        
        // Map API data to UI structure
        const mappedAgents = (result.data || []).map(agent => {
          // Map API status to UI status
          let uiStatus = 'offline';
          if (agent.status === 'available') uiStatus = 'online';
          else if (agent.status === 'busy' || agent.status === 'break') uiStatus = 'away';
          else if (agent.status === 'offline') uiStatus = 'offline';
          
          return {
            id: agent.id,
            name: `${agent.firstName} ${agent.lastName}`,
            email: agent.email,
            phone: agent.phone,
            role: agent.role?.description || 'Agent',
            status: uiStatus,
            apiStatus: agent.status,
            isOnline: agent.isOnline,
            // Placeholder values since they aren't in the agents API yet
            calls: Math.floor(Math.random() * 500) + 50, 
            rate: (Math.floor(Math.random() * 20) + 80) + '%',
            lastActive: agent.lastHeartbeatAt ? new Date(agent.lastHeartbeatAt).toLocaleTimeString() : 'N/A'
          };
        });

        setAgents(mappedAgents);
      } catch (err) {
        console.error('Failed to fetch agents:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAgents();
  }, []);

  const filteredAgents = agents.filter(agent => {
    const searchStr = searchTerm.toLowerCase();
    const nameMatch = agent.name.toLowerCase().includes(searchStr);
    const roleMatch = agent.role.toLowerCase().includes(searchStr);
    const emailMatch = agent.email?.toLowerCase().includes(searchStr);
    const phoneMatch = agent.phone?.includes(searchTerm);
    const matchesSearch = nameMatch || roleMatch || emailMatch || phoneMatch;
    
    const matchesFilter = activeFilter === 'all' || agent.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const handleAddAgent = () => {
    const newAgent = {
      id: Math.max(0, ...agents.map(a => a.id)) + 1,
      name: '',
      email: '',
      phone: '',
      role: 'Agent',
      status: 'offline',
      apiStatus: 'offline',
      isOnline: false,
      calls: 0,
      rate: '0%',
      lastActive: 'N/A'
    };
    setAgents([newAgent, ...agents]);
    setEditingId(newAgent.id);
    setEditFormData({ ...newAgent });
  };

  const handleEditClick = (agent) => {
    setEditingId(agent.id);
    setEditFormData({ ...agent });
  };

  const handleSaveClick = (id) => {
    setAgents(prev => prev.map(a => a.id === id ? { ...a, ...editFormData } : a));
    setEditingId(null);
    setEditFormData({});
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleDeleteAgent = (id) => {
    if (window.confirm(t('Êtes-vous sûr de vouloir supprimer cet agent ?'))) {
      setAgents(prev => prev.filter(a => a.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

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
          <button 
            onClick={handleAddAgent}
            className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-all font-black text-sm"
          >
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

            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center font-black text-primary text-xl border-2 border-primary/5 group-hover:scale-110 transition-transform shrink-0">
                {agent.name ? agent.name.split(' ').map(n => n[0]).join('') : 'A'}
              </div>
              <div className="min-w-0 flex-1">
                {editingId === agent.id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleInputChange}
                      placeholder={t('Nom complet')}
                      className="w-full text-lg font-black bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 mb-1 outline-none focus:ring-1 focus:ring-primary"
                    />
                    <input
                      type="text"
                      name="role"
                      value={editFormData.role}
                      onChange={handleInputChange}
                      placeholder={t('Rôle')}
                      className="w-full text-xs font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
                    />
                  </>
                ) : (
                  <>
                    <h4 className="text-lg font-black text-heading dark:text-white truncate">{agent.name || 'Nouvel Agent'}</h4>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider truncate">{agent.role}</p>
                  </>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {editingId === agent.id ? (
                  <input
                    type="text"
                    name="email"
                    value={editFormData.email}
                    onChange={handleInputChange}
                    placeholder={t('Email')}
                    className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
                  />
                ) : (
                  <span className="truncate">{agent.email || '-'}</span>
                )}
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {editingId === agent.id ? (
                  <input
                    type="text"
                    name="phone"
                    value={editFormData.phone}
                    onChange={handleInputChange}
                    placeholder={t('Téléphone')}
                    className="flex-1 min-w-0 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-primary"
                  />
                ) : (
                  <span>{agent.phone || '-'}</span>
                )}
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
              
              {editingId === agent.id ? (
                <div className="flex items-center gap-2">
                  <button onClick={handleCancelClick} className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all" title={t('Annuler')}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <button onClick={() => handleSaveClick(agent.id)} className="p-2 text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 rounded-xl transition-all" title={t('Sauvegarder')}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  {hasPerm('agents:edit') && (
                    <button onClick={() => handleEditClick(agent)} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-xl transition-all shadow-sm" title={t('Modifier')}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  )}
                  {hasPerm('agents:delete') && (
                    <button onClick={() => handleDeleteAgent(agent.id)} className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all shadow-sm" title={t('Supprimer')}>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentsSection;
