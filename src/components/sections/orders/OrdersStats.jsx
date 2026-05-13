import React from 'react';
import { useTranslation } from 'react-i18next';

const OrdersStats = ({ total, pending, confirmed, cancelled }) => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-[24px] border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{t('Total Commandes')}</span>
        <span className="text-2xl font-black text-heading dark:text-white">{total}</span>
      </div>
      <div className="bg-amber-50 dark:bg-amber-500/10 p-4 sm:p-5 rounded-[24px] border border-amber-100 dark:border-amber-500/20 shadow-sm flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-1">{t('En Attente')}</span>
        <span className="text-2xl font-black text-amber-600 dark:text-amber-400">{pending}</span>
      </div>
      <div className="bg-emerald-50 dark:bg-emerald-500/10 p-4 sm:p-5 rounded-[24px] border border-emerald-100 dark:border-emerald-500/20 shadow-sm flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 dark:text-emerald-400 mb-1">{t('Confirmées')}</span>
        <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{confirmed}</span>
      </div>
      <div className="bg-red-50 dark:bg-red-500/10 p-4 sm:p-5 rounded-[24px] border border-red-100 dark:border-red-500/20 shadow-sm flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-widest text-red-600 dark:text-red-400 mb-1">{t('Annulées')}</span>
        <span className="text-2xl font-black text-red-600 dark:text-red-400">{cancelled}</span>
      </div>
    </div>
  );
};

export default OrdersStats;
