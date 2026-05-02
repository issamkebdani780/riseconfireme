import React from 'react';
import { useTranslation } from 'react-i18next';

const DashboardOverview = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title={t('Total Commandes')} value="1,284" change="+12%" icon={<OrdersIcon />} />
      <StatCard title={t('Taux de Confirmation')} value="84.2%" change="+5.4%" icon={<CallIcon />} color="bg-emerald-500" />
      <StatCard title={t('Appels Aujourd\'hui')} value="156" change="-2%" icon={<CallIcon />} color="bg-amber-500" />
      <StatCard title={t('Revenu Généré')} value="12,450 DA" change="+18%" icon={<StatsIcon />} color="bg-blue-500" />
      
      <div className="col-span-full lg:col-span-3 bg-white dark:bg-slate-900 rounded-[32px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-lg font-black mb-6 flex items-center gap-3">
          <div className="w-2 h-6 bg-primary rounded-full" />
          Dernières Activités
        </h3>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                  <OrdersIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-heading dark:text-white">Commande #842{i} confirmée</p>
                  <p className="text-xs text-slate-400">Par Agent Ahmed • Il y a 5 minutes</p>
                </div>
              </div>
              <button className="px-4 py-2 text-[11px] font-black uppercase tracking-widest text-primary hover:bg-primary/10 rounded-xl transition-colors">
                Détails
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-full lg:col-span-1 bg-gradient-to-br from-primary to-blue-600 rounded-[32px] p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
        <div className="relative z-10">
          <h3 className="text-xl font-black mb-4">Objectif Mensuel</h3>
          <p className="text-blue-100 text-sm mb-8 font-medium">Vous avez atteint 75% de votre objectif de confirmation.</p>
          <div className="h-4 bg-white/20 rounded-full mb-4 overflow-hidden">
            <div className="h-full bg-white w-3/4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
          </div>
          <p className="text-xs font-bold text-right">3,000 / 4,000 Confirmations</p>
        </div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon, color = "bg-primary" }) => (
  <div className="bg-white dark:bg-slate-900 rounded-[32px] p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">
    <div className="flex items-center justify-between mb-4">
      <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${change.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-red-100 text-red-600'}`}>
        {change}
      </span>
    </div>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
    <h4 className="text-2xl font-black text-heading dark:text-white tracking-tight">{value}</h4>
  </div>
);

// Icons
const OrdersIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const CallIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const StatsIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

export default DashboardOverview;
