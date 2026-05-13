import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { clientServices } from '../../../services/clientServices';
import AgentsFilters from './AgentsFilters';
import AgentCard from './AgentCard';

const AgentsSection = ({ permissions = [] }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const hasPerm = (p) => permissions.includes(p);

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        setLoading(true);
        const result = await clientServices.getAgents();
        const mappedAgents = (result.data || []).map((agent) => {
          let uiStatus = 'offline';
          if (agent.status === 'available') uiStatus = 'online';
          else if (agent.status === 'busy' || agent.status === 'break') uiStatus = 'away';

          return {
            id: agent.id,
            name: `${agent.firstName} ${agent.lastName}`,
            email: agent.email,
            phone: agent.phone,
            role: agent.role?.description || 'Agent',
            status: uiStatus,
            calls: Math.floor(Math.random() * 500) + 50,
            rate: (Math.floor(Math.random() * 20) + 80) + '%',
            lastActive: agent.lastHeartbeatAt
              ? new Date(agent.lastHeartbeatAt).toLocaleTimeString()
              : 'N/A',
          };
        });
        setAgents(mappedAgents);
      } catch (err) {
        console.error('Failed to fetch agents:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchAgents();
  }, []);

  const filteredAgents = agents.filter((agent) => {
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      agent.name.toLowerCase().includes(q) ||
      agent.role.toLowerCase().includes(q) ||
      agent.email?.toLowerCase().includes(q) ||
      agent.phone?.includes(searchTerm);
    const matchesFilter = activeFilter === 'all' || agent.status === activeFilter;
    return matchesSearch && matchesFilter;
  });

  // --- CRUD Handlers ---
  const handleAddAgent = () => {
    const newAgent = {
      id: Math.max(0, ...agents.map((a) => a.id)) + 1,
      name: '', email: '', phone: '', role: 'Agent',
      status: 'offline', calls: 0, rate: '0%', lastActive: 'N/A',
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
    setAgents((prev) => prev.map((a) => (a.id === id ? { ...a, ...editFormData } : a)));
    setEditingId(null);
    setEditFormData({});
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleDeleteAgent = (id) => {
    if (window.confirm(t('Êtes-vous sûr de vouloir supprimer cet agent ?'))) {
      setAgents((prev) => prev.filter((a) => a.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-slide-up">
      {/* Page Header */}
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

      {/* Filters */}
      <AgentsFilters
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      {/* Agents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.map((agent) => (
          <AgentCard
            key={agent.id}
            agent={agent}
            editingId={editingId}
            editFormData={editFormData}
            hasPerm={hasPerm}
            onEditClick={handleEditClick}
            onSaveClick={handleSaveClick}
            onCancelClick={handleCancelClick}
            onDeleteClick={handleDeleteAgent}
            onInputChange={handleInputChange}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentsSection;
