import React from 'react';

const ClientsStats = ({ totalClients, newThisMonth }) => (
  <div className="flex flex-col sm:flex-row gap-4">
    {/* Total Clients */}
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between flex-1">
      <div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Total Clients</p>
        <h4 className="text-xl font-black text-heading dark:text-white">{totalClients}</h4>
      </div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-primary shrink-0">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </div>
    </div>

    {/* New This Month */}
    <div className="bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-between flex-1">
      <div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Nouveaux ce mois</p>
        <h4 className="text-xl font-black text-heading dark:text-white">{newThisMonth}</h4>
      </div>
      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </div>
    </div>
  </div>
);

export default ClientsStats;
