import React from 'react';

export const StatsMetricCard = ({ title, value, change, icon, color, bg, trend = "up" }) => (
  <div className="bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group">
    <div className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.15em] mb-2">{title}</p>
    <div className="flex items-end justify-between">
      <h4 className="text-2xl font-black text-heading dark:text-white tracking-tight">{value}</h4>
      <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${trend === 'up' ? 'bg-emerald-50 dark:bg-emerald-500/10 text-emerald-500' : 'bg-red-50 dark:bg-red-500/10 text-red-500'}`}>
        {change}
      </span>
    </div>
  </div>
);

export const StatusLegend = ({ label, value, hexColor }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
    <div className="flex items-center gap-3">
      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hexColor }} />
      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-sm font-black text-heading dark:text-white">{value}</span>
  </div>
);

// Icons
export const RevenueIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const CartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

export const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const ReturnIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3" />
  </svg>
);
