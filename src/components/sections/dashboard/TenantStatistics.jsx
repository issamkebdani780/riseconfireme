import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar,
} from 'recharts';
import { StatusCountCard } from './DashboardCards';

const TOP_TENANTS = [
  { name: 'Fashion Store', volume: 1250, success: 92 },
  { name: 'Electro Dz',   volume: 980,  success: 88 },
  { name: 'Beauty Care',  volume: 850,  success: 85 },
  { name: 'Home Design',  volume: 720,  success: 82 },
  { name: 'Baby Shop',    volume: 650,  success: 79 },
];

const TenantStatistics = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Active Tenants Banner */}
      <div className="bg-gradient-to-r from-primary to-blue-600 rounded-[40px] p-8 text-white flex items-center justify-between shadow-xl shadow-primary/20">
        <div>
          <h3 className="text-2xl font-black mb-2">{t('Active Tenant Accounts')}</h3>
          <p className="text-blue-100 font-medium">Monitoring real-time performance across all businesses.</p>
        </div>
        <div className="text-5xl font-black tracking-tighter">
          124
          <span className="text-sm font-bold uppercase tracking-widest ms-3 text-blue-200">Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Top 5 Bar Chart */}
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-primary rounded-full" />
            {t('Top 5 Tenants by Volume')}
          </h3>
          <div className="h-80 min-h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={TOP_TENANTS} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }} />
                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff' }} />
                <Bar dataKey="volume" fill="#00a2ff" radius={[0, 10, 10, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Per-Tenant Performance Cards */}
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black mb-8">{t('Performance per Tenant')}</h3>
          <div className="space-y-6">
            {TOP_TENANTS.map((tenant, i) => (
              <div key={i} className="p-5 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-black text-sm">{tenant.name}</span>
                  <span className="text-[10px] font-black px-2 py-1 bg-emerald-100 text-emerald-600 rounded-lg">{tenant.success}% Success</span>
                </div>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Orders</p>
                    <p className="text-sm font-black">{tenant.volume}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Conf. Rate</p>
                    <p className="text-sm font-black">{tenant.success}%</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Deliv. Rate</p>
                    <p className="text-sm font-black">84%</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mb-1">Return</p>
                    <p className="text-sm font-black text-rose-500">4.2%</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-[10px] font-bold text-slate-400">Pending: <span className="text-slate-600 dark:text-slate-200">24</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-bold text-slate-400">Shipped: <span className="text-slate-600 dark:text-slate-200">156</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    <span className="text-[10px] font-bold text-slate-400">Canceled: <span className="text-slate-600 dark:text-slate-200">12</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Global Status Overview */}
      <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-lg font-black mb-8 flex items-center gap-3">
          <div className="w-2 h-6 bg-emerald-500 rounded-full" />
          {t('Global Tenant Status Overview')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCountCard label="Pending Orders"   count="452"   color="bg-amber-500" />
          <StatusCountCard label="Shipped Orders"   count="1,240" color="bg-blue-500" />
          <StatusCountCard label="Canceled Orders"  count="128"   color="bg-rose-500" />
        </div>
      </div>
    </div>
  );
};

export default TenantStatistics;
