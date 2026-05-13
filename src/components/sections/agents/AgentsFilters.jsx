import React from 'react';
import { useTranslation } from 'react-i18next';

const AgentsFilters = ({ searchTerm, onSearchChange, activeFilter, onFilterChange }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm">
      {/* Search */}
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
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Status Filter Tabs */}
      <div className="flex items-center gap-2 p-1 bg-slate-50 dark:bg-slate-800 rounded-2xl">
        {['all', 'online', 'away', 'offline'].map((status) => (
          <button
            key={status}
            onClick={() => onFilterChange(status)}
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
  );
};

export default AgentsFilters;
