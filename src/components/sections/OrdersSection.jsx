import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const OrdersSection = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const orders = [
    { id: '#ORD-7294', customer: 'Ahmed Mansouri', phone: '+213 551 23 45 67', date: '02 Mai 2026', amount: '4,500 DA', status: 'Pending', product: 'Pack Zen 2.0' },
    { id: '#ORD-7295', customer: 'Sara El Amrani', phone: '+213 552 88 99 00', date: '02 Mai 2026', amount: '8,900 DA', status: 'Confirmed', product: 'Smart Watch Pro' },
    { id: '#ORD-7296', customer: 'Yassine Benjelloun', phone: '+213 553 11 22 33', date: '01 Mai 2026', amount: '12,000 DA', status: 'Cancelled', product: 'AirPods Max' },
    { id: '#ORD-7297', customer: 'Khadija Alami', phone: '+213 554 44 55 66', date: '01 Mai 2026', amount: '3,200 DA', status: 'Confirmed', product: 'Organic Tea Set' },
    { id: '#ORD-7298', customer: 'Omar Tazi', phone: '+213 555 77 88 99', date: '30 Avr 2026', amount: '5,600 DA', status: 'Pending', product: 'Gaming Mouse' },
  ];

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
          <button className="p-3 bg-slate-50 dark:bg-slate-800 rounded-2xl text-slate-400 hover:text-primary transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl">
          {['all', 'pending', 'confirmed', 'cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                activeTab === tab 
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
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-heading dark:text-slate-200">{order.customer}</span>
                      <span className="text-[11px] text-slate-400">{order.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{order.product}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-primary">{order.amount}</span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${statusColors[order.status]}`}>
                      <div className={`w-1 h-1 rounded-full me-2 ${
                        order.status === 'Confirmed' ? 'bg-emerald-500' : 
                        order.status === 'Pending' ? 'bg-amber-500' : 'bg-red-500'
                      }`} />
                      {t(order.status)}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button title="Confirmer" className="p-2 text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 rounded-xl transition-all active:scale-90">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </button>
                      <button title="Annuler" className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all active:scale-90">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                      <button title="Détails" className="p-2 text-primary hover:bg-primary/10 rounded-xl transition-all active:scale-90">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
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
