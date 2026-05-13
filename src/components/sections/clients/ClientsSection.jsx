import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { clientServices } from '../../../services/clientServices';
import ClientsStats from './ClientsStats';
import ClientsTable from './ClientsTable';

const INITIAL_CLIENTS = [
  { id: 1, name: 'Ahmed Mansouri', email: 'ahmed.m@email.dz', phone: '+213 551 23 45 67', wilaya: 'Alger', commune: "Sidi M'Hamed", orders: 12, totalSpent: '54,000 DA', lastOrder: 'Il y a 2 jours' },
  { id: 2, name: 'Sara El Amrani', email: 'sara.a@email.dz', phone: '+213 552 88 99 00', wilaya: 'Oran', commune: 'Bir El Djir', orders: 5, totalSpent: '28,900 DA', lastOrder: "Aujourd'hui" },
  { id: 3, name: 'Yassine Benjelloun', email: 'yassine.b@email.dz', phone: '+213 553 11 22 33', wilaya: 'Constantine', commune: 'Khroub', orders: 24, totalSpent: '122,000 DA', lastOrder: 'Il y a 1 semaine' },
  { id: 4, name: 'Khadija Alami', email: 'khadija.al@email.dz', phone: '+213 554 44 55 66', wilaya: 'Annaba', commune: 'El Bouni', orders: 3, totalSpent: '13,200 DA', lastOrder: 'Hier' },
  { id: 5, name: 'Omar Tazi', email: 'omar.t@email.dz', phone: '+213 555 77 88 99', wilaya: 'Sétif', commune: 'El Eulma', orders: 8, totalSpent: '45,600 DA', lastOrder: 'Il y a 3 jours' },
];

const ClientsSection = ({ permissions = [] }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [clients, setClients] = useState(INITIAL_CLIENTS);
  const [wilayas, setWilayas] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const hasPerm = (p) => permissions.includes(p);

  useEffect(() => {
    const fetchWilayas = async () => {
      try {
        const data = await clientServices.getWilayas();
        setWilayas(data);
      } catch (error) {
        console.error('Failed to fetch wilayas:', error);
      }
    };
    fetchWilayas();
  }, []);

  // --- CRUD Handlers ---
  const handleAddClient = () => {
    const newClient = {
      id: Math.max(0, ...clients.map((c) => c.id)) + 1,
      name: '', email: '', phone: '', wilaya: '', commune: '',
      orders: 0, totalSpent: '0 DA', lastOrder: 'N/A',
    };
    setClients([newClient, ...clients]);
    setEditingId(newClient.id);
    setEditFormData({ ...newClient });
  };

  const handleEditClick = (client) => {
    setEditingId(client.id);
    setEditFormData({ ...client });
  };

  const handleSaveClick = (id, updatedData = editFormData) => {
    setClients((prev) => prev.map((c) => (c.id === id ? updatedData : c)));
    setEditingId(null);
    setEditFormData({});
  };

  const handleDeleteClient = (id) => {
    if (window.confirm(t('Êtes-vous sûr de vouloir supprimer ce client ?'))) {
      setClients((prev) => prev.filter((c) => c.id !== id));
      if (editingId === id) setEditingId(null);
    }
  };

  const handleKeyDown = (e, id) => {
    if (e.key === 'Enter') handleSaveClick(id);
    else if (e.key === 'Escape') setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const filteredClients = clients.filter((c) =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      {/* Top Bar: Search + Add Button + Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Search + Add */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={t('Rechercher un client...')}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-heading dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          {hasPerm('clients:create') && (
            <button
              onClick={handleAddClient}
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white text-sm font-black rounded-2xl shadow-lg shadow-primary/20 hover:bg-primary-hover transition-all active:scale-95 whitespace-nowrap"
            >
              {t('Ajouter Client')}
            </button>
          )}
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          <ClientsStats totalClients="4,829" newThisMonth="+156" />
        </div>
      </div>

      {/* Table */}
      <ClientsTable
        clients={filteredClients}
        editingId={editingId}
        editFormData={editFormData}
        wilayas={wilayas}
        hasPerm={hasPerm}
        onRowClick={handleEditClick}
        onInputChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onDeleteClick={handleDeleteClient}
      />
    </div>
  );
};

export default ClientsSection;
