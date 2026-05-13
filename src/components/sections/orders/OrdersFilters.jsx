import React from 'react';
import { useTranslation } from 'react-i18next';

const OrdersFilters = ({
  searchTerm,
  onSearchChange,
  activeTab,
  onTabChange,
  dateRange,
  onDateRangeChange,
  filterTenant,
  onTenantChange,
  filterTeam,
  onTeamChange,
  filterWilaya,
  onWilayaChange,
  filterProduct,
  onProductChange,
  wilayas,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
      {/* Search + Status Tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div className="flex items-center gap-4 w-full lg:w-auto flex-1">
          <div className="relative flex-1 lg:max-w-md">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder={t('Rechercher une commande...')}
              className="w-full pl-11 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none text-heading dark:text-white font-medium"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-x-auto no-scrollbar">
          {['all', 'pending', 'confirmed', 'cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => onTabChange(status)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all whitespace-nowrap ${
                activeTab === status
                  ? 'bg-white dark:bg-slate-700 text-primary shadow-sm'
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              {t(status)}
            </button>
          ))}
        </div>
      </div>

      {/* Advanced Filters */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-50 dark:border-slate-800">
        {/* Date Range */}
        <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
          {['Today', '7d', '30d', 'All'].map((range) => (
            <button
              key={range}
              onClick={() => onDateRangeChange(range)}
              className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                dateRange === range ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
              }`}
            >
              {t(range)}
            </button>
          ))}
        </div>

        {/* Tenant */}
        <select
          value={filterTenant}
          onChange={(e) => onTenantChange(e.target.value)}
          className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
        >
          <option value="all">{t('Tous les Tenants')}</option>
          <option value="fashion">Fashion Store</option>
          <option value="electro">Electro Dz</option>
        </select>

        {/* Team */}
        <select
          value={filterTeam}
          onChange={(e) => onTeamChange(e.target.value)}
          className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm"
        >
          <option value="all">{t('Toutes les Équipes')}</option>
          <option value="alpha">Team Alpha</option>
          <option value="beta">Team Beta</option>
        </select>

        {/* Wilaya */}
        <select
          value={filterWilaya}
          onChange={(e) => onWilayaChange(e.target.value)}
          className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm max-w-[150px] truncate"
        >
          <option value="all">{t('Toutes les Wilayas')}</option>
          {wilayas.map((w) => (
            <option key={w.id || w.fr} value={w.fr}>{w.fr}</option>
          ))}
        </select>

        {/* Product */}
        <select
          value={filterProduct}
          onChange={(e) => onProductChange(e.target.value)}
          className="bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm max-w-[150px] truncate"
        >
          <option value="all">{t('Tous les Produits')}</option>
          <option value="Pack Zen 2.0">Pack Zen 2.0</option>
          <option value="Smart Watch Pro">Smart Watch Pro</option>
          <option value="AirPods Max">AirPods Max</option>
          <option value="Organic Tea Set">Organic Tea Set</option>
          <option value="Gaming Mouse">Gaming Mouse</option>
        </select>
      </div>
    </div>
  );
};

export default OrdersFilters;
