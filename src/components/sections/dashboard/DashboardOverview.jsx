import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import OrderStatistics from './OrderStatistics';
import TenantStatistics from './TenantStatistics';

const DashboardOverview = ({ permissions = [] }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="space-y-8">
      {/* Tab Switcher + Global Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-2 rounded-[24px] border border-slate-100 dark:border-slate-800 w-fit shadow-sm">
          {[
            { key: 'orders',  label: t('Order Statistics') },
            { key: 'tenants', label: t('Tenant Statistics') },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-3 rounded-2xl text-sm font-black transition-all ${
                activeTab === key
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                  : 'text-slate-500 hover:text-primary dark:text-slate-400'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Global Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            {['Today', '7d', '30d', 'All'].map((range) => (
              <button key={range} className="px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 hover:text-primary transition-all uppercase tracking-widest">
                {t(range)}
              </button>
            ))}
          </div>
          <select className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl px-4 py-2.5 text-xs font-bold text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 shadow-sm">
            <option>{t('All Tenants')}</option>
            <option>Fashion Store</option>
            <option>Electro Dz</option>
          </select>
          <button className="p-2.5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl text-slate-400 hover:text-primary shadow-sm transition-all">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Active View */}
      {activeTab === 'orders' ? <OrderStatistics /> : <TenantStatistics />}
    </div>
  );
};

export default DashboardOverview;
