import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SearchableSelect from '../common/SearchableSelect';

const OrdersSection = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const [orders, setOrders] = useState([
    { id: '#ORD-7294', customer: 'Ahmed Mansouri', phone: '+213 551 23 45 67', date: '02 Mai 2026', amount: '4,500 DA', status: 'Pending', product: 'Pack Zen 2.0', agent: { name: 'Amine K.', time: '14:32' } },
    { id: '#ORD-7295', customer: 'Sara El Amrani', phone: '+213 552 88 99 00', date: '02 Mai 2026', amount: '8,900 DA', status: 'Confirmed', product: 'Smart Watch Pro', agent: { name: 'Selma R.', time: '12:15' } },
    { id: '#ORD-7296', customer: 'Yassine Benjelloun', phone: '+213 553 11 22 33', date: '01 Mai 2026', amount: '12,000 DA', status: 'Cancelled', product: 'AirPods Max', agent: { name: 'Yanis B.', time: '10:45' } },
    { id: '#ORD-7297', customer: 'Khadija Alami', phone: '+213 554 44 55 66', date: '01 Mai 2026', amount: '3,200 DA', status: 'Confirmed', product: 'Organic Tea Set', agent: { name: 'Ines L.', time: '16:20' } },
    { id: '#ORD-7298', customer: 'Omar Tazi', phone: '+213 555 77 88 99', date: '30 Avr 2026', amount: '5,600 DA', status: 'Pending', product: 'Gaming Mouse', agent: { name: 'Amine K.', time: '09:15' } },
  ]);
  const availableAgents = [
    { name: 'Amine K.', time: '14:32' },
    { name: 'Selma R.', time: '12:15' },
    { name: 'Yanis B.', time: '10:45' },
    { name: 'Ines L.', time: '16:20' },
  ];

  const [editingId, setEditingId] = useState(null);
  const [editFormData, setEditFormData] = useState({});

  const handleEditClick = (order) => {
    setEditingId(order.id);
    setEditFormData({ ...order });
  };

  const handleCancelClick = () => {
    setEditingId(null);
    setEditFormData({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'agentName') {
      setEditFormData(prev => ({
        ...prev,
        agent: { ...prev.agent, name: value }
      }));
    } else {
      setEditFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSaveClick = (id) => {
    setOrders(prevOrders =>
      prevOrders.map(order => order.id === id ? editFormData : order)
    );
    setEditingId(null);
    setEditFormData({});
  };

  const handleDeleteClick = (id) => {
    if (window.confirm(t('Êtes-vous sûr de vouloir supprimer cette commande ?'))) {
      setOrders(prevOrders => prevOrders.filter(order => order.id !== id));
    }
  };

  const statusColors = {
    Pending: 'bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
    Confirmed: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    Cancelled: 'bg-red-100 text-red-600 dark:bg-red-500/10 dark:text-red-400',
  };

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) || order.id.includes(searchTerm);
    const matchesTab = activeTab === 'all' || order.status.toLowerCase() === activeTab.toLowerCase();
    return matchesSearch && matchesTab;
  });

  return (
    <div className="space-y-6">
      {/* Filters & Actions */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={t('Rechercher une commande...')}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-heading dark:text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl">
          {['all', 'pending', 'confirmed', 'cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${activeTab === tab
                ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
            >
              {t(tab)}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Commande')}</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Client')}</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Produit')}</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Montant')}</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Agent')}</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800">{t('Statut')}</th>
                <th className="px-6 py-4 text-[11px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-100 dark:border-slate-800 text-right">{t('Actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
              {filteredOrders.map((order) => (
                <tr key={order.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-heading dark:text-white">{order.id}</span>
                    <p className="text-[10px] text-slate-400 font-medium">{order.date}</p>
                  </td>
                  <td className="px-6 py-5">
                    {editingId === order.id ? (
                      <div className="flex flex-col gap-2">
                        <input
                          type="text"
                          name="customer"
                          value={editFormData.customer}
                          onChange={handleInputChange}
                          className="text-sm font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                        />
                        <input
                          type="text"
                          name="phone"
                          value={editFormData.phone}
                          onChange={handleInputChange}
                          className="text-[11px] bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-heading dark:text-slate-200">{order.customer}</span>
                        <span className="text-[11px] text-slate-400">{order.phone}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    {editingId === order.id ? (
                      <input
                        type="text"
                        name="product"
                        value={editFormData.product}
                        onChange={handleInputChange}
                        className="text-sm font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                      />
                    ) : (
                      <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{order.product}</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    {editingId === order.id ? (
                      <input
                        type="text"
                        name="amount"
                        value={editFormData.amount}
                        onChange={handleInputChange}
                        className="text-sm font-black text-primary bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 outline-none focus:ring-1 focus:ring-primary w-full"
                      />
                    ) : (
                      <span className="text-sm font-black text-primary">{order.amount}</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    {editingId === order.id ? (
                      <div className="flex flex-col gap-1">
                        <SearchableSelect
                          options={availableAgents.map(a => ({ label: a.name, value: a.name }))}
                          value={editFormData.agent.name}
                          onChange={(val) => handleInputChange({ target: { name: 'agentName', value: val } })}
                          placeholder={t('Agent')}
                          t={t}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-heading dark:text-slate-200">{order.agent.name}</span>
                          <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tight">{order.agent.time}</span>
                        </div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    {editingId === order.id ? (
                      <SearchableSelect
                        options={[
                          { label: t('Pending'), value: 'Pending' },
                          { label: t('Confirmed'), value: 'Confirmed' },
                          { label: t('Cancelled'), value: 'Cancelled' },
                        ]}
                        value={editFormData.status}
                        onChange={(val) => handleInputChange({ target: { name: 'status', value: val } })}
                        placeholder={t('Statut')}
                        t={t}
                      />
                    ) : (
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusColors[order.status]}`}>
                        <div className={`w-1 h-1 rounded-full me-2 ${order.status === 'Confirmed' ? 'bg-emerald-500' :
                          order.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                          }`} />
                        {t(order.status)}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {editingId === order.id ? (
                        <>
                          <button
                            onClick={() => handleSaveClick(order.id)}
                            title="Sauvegarder"
                            className="p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-xl transition-all active:scale-90"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                          </button>
                          <button
                            onClick={handleCancelClick}
                            title="Annuler"
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all active:scale-90"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEditClick(order)}
                            title="Modifier"
                            className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all active:scale-90"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button title="Détails" className="p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-all active:scale-90">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDeleteClick(order.id)}
                            title="Supprimer"
                            className="p-2 text-red-500 hover:bg-red-500/10 rounded-xl transition-all active:scale-90"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Placeholder */}
        <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-xs text-slate-400 font-medium">Affichage de 5 sur 1,284 commandes</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary disabled:opacity-50" disabled>Précédent</button>
            <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-xl shadow-lg shadow-primary/20">1</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary">2</button>
            <button className="px-4 py-2 text-xs font-bold text-slate-400 hover:text-primary">Suivant</button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OrdersSection;
