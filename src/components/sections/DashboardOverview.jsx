import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';

const DashboardOverview = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="space-y-8">
      {/* Tab Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-2 rounded-[24px] border border-slate-100 dark:border-slate-800 w-fit shadow-sm">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === 'orders'
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                : 'text-slate-500 hover:text-primary dark:text-slate-400'
              }`}
          >
            {t('Order Statistics')}
          </button>
          <button
            onClick={() => setActiveTab('tenants')}
            className={`px-8 py-3 rounded-2xl text-sm font-black transition-all ${activeTab === 'tenants'
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105'
                : 'text-slate-500 hover:text-primary dark:text-slate-400'
              }`}
          >
            {t('Tenant Statistics')}
          </button>
        </div>

        {/* Global Filters */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
            {['Today', '7d', '30d', 'All'].map((range) => (
              <button
                key={range}
                className="px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 hover:text-primary transition-all uppercase tracking-widest"
              >
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

      {activeTab === 'orders' ? <OrderStatistics /> : <TenantStatistics />}
    </div>
  );
};

// --- Order Statistics Component ---
const OrderStatistics = () => {
  const { t } = useTranslation();

  // Dummy data for charts
  const dailyTrends = [
    { day: 'Lun', total: 450, confirmed: 380, shipped: 320, delivered: 280, returned: 15 },
    { day: 'Mar', total: 520, confirmed: 410, shipped: 380, delivered: 340, returned: 12 },
    { day: 'Mer', total: 480, confirmed: 400, shipped: 350, delivered: 310, returned: 18 },
    { day: 'Jeu', total: 610, confirmed: 540, shipped: 490, delivered: 450, returned: 22 },
    { day: 'Ven', total: 580, confirmed: 490, shipped: 460, delivered: 420, returned: 10 },
    { day: 'Sam', total: 720, confirmed: 650, shipped: 600, delivered: 550, returned: 25 },
    { day: 'Dim', total: 850, confirmed: 780, shipped: 720, delivered: 680, returned: 30 },
  ];

  const statusData = [
    { name: 'Pending', value: 120, color: '#f59e0b' },
    { name: 'Confirmed', value: 850, color: '#10b981' },
    { name: 'Canceled', value: 45, color: '#ef4444' },
    { name: 'Shipped', value: 640, color: '#3b82f6' },
    { name: 'Delivered', value: 580, color: '#8b5cf6' },
    { name: 'Returned', value: 32, color: '#ec4899' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <MetricCard title="Total Orders" value="4,215" change="+12.5%" icon={<OrdersIcon />} color="text-slate-600" bg="bg-slate-100" />
        <MetricCard title="Real Orders" value="3,842" change="+8.2%" icon={<CheckIcon />} color="text-blue-600" bg="bg-blue-100" />
        <MetricCard title="Conf. Rate" value="91.2%" change="+2.4%" icon={<PercentIcon />} color="text-emerald-600" bg="bg-emerald-100" />
        <MetricCard title="Delivery Rate" value="84.5%" change="+1.5%" icon={<TruckIcon />} color="text-violet-600" bg="bg-violet-100" />
        <MetricCard title="Return Rate" value="3.2%" change="-0.5%" icon={<ReturnIcon />} color="text-rose-600" bg="bg-rose-100" trend="down" />
        <MetricCard title="Shipped Rate" value="88.7%" change="+4.1%" icon={<PackageIcon />} color="text-amber-600" bg="bg-amber-100" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Daily Trends Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-black flex items-center gap-3">
              <div className="w-2 h-6 bg-primary rounded-full" />
              {t('Daily Trends')}
            </h3>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyTrends}>
                <defs>
                  <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#64748b" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#64748b" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorConf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 700 }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff', fontSize: '11px', fontWeight: 800 }}
                  itemStyle={{ color: '#fff' }}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 700 }} />
                <Area type="monotone" dataKey="total" stroke="#64748b" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                <Area type="monotone" dataKey="confirmed" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorConf)" />
                <Area type="monotone" dataKey="shipped" stroke="#3b82f6" strokeWidth={3} fillOpacity={0} />
                <Area type="monotone" dataKey="delivered" stroke="#8b5cf6" strokeWidth={3} fillOpacity={0} />
                <Area type="monotone" dataKey="returned" stroke="#f43f5e" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Overview */}
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black mb-8">{t('Status Overview')}</h3>
          <div className="h-64 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={85}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black">2,219</span>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3">
            {statusData.map((status, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: status.color }} />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{status.name}</span>
                <span className="ms-auto text-[10px] font-black">{status.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Performance */}
      <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-lg font-black mb-8 flex items-center gap-3">
          <div className="w-2 h-6 bg-amber-500 rounded-full" />
          {t('Team Performance')}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 dark:border-slate-800">
                <th className="pb-4 px-4">{t('Member')}</th>
                <th className="pb-4 px-4">{t('Total Calls')}</th>
                <th className="pb-4 px-4">{t('Confirmed')}</th>
                <th className="pb-4 px-4">{t('Success Rate')}</th>
                <th className="pb-4 px-4">{t('Performance')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[
                { name: 'Ahmed K.', calls: 156, conf: 142, rate: '91%', color: 'bg-emerald-500' },
                { name: 'Sarah M.', calls: 142, conf: 128, rate: '90%', color: 'bg-primary' },
                { name: 'Yassine B.', calls: 128, conf: 102, rate: '80%', color: 'bg-blue-500' },
                { name: 'Lila R.', calls: 95, conf: 82, rate: '86%', color: 'bg-amber-500' },
              ].map((member, i) => (
                <tr key={i} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-black text-primary">
                        {member.name[0]}
                      </div>
                      <span className="text-sm font-bold">{member.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 font-bold text-sm">{member.calls}</td>
                  <td className="py-4 px-4 font-bold text-sm">{member.conf}</td>
                  <td className="py-4 px-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-600 text-[10px] font-black">{member.rate}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="w-24 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${member.color}`} style={{ width: member.rate }} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// --- Tenant Statistics Component ---
const TenantStatistics = () => {
  const { t } = useTranslation();

  const topTenants = [
    { name: 'Fashion Store', volume: 1250, success: 92 },
    { name: 'Electro Dz', volume: 980, success: 88 },
    { name: 'Beauty Care', volume: 850, success: 85 },
    { name: 'Home Design', volume: 720, success: 82 },
    { name: 'Baby Shop', volume: 650, success: 79 },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Active Tenants Counter */}
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

      <div className="grid grid-cols-1  gap-8">
        {/* Top 5 Tenants Chart */}
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-primary rounded-full" />
            {t('Top 5 Tenants by Volume')}
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topTenants} layout="vertical" margin={{ left: 40 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#64748b', fontSize: 11, fontWeight: 700 }}
                />
                <Tooltip
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff' }}
                />
                <Bar dataKey="volume" fill="#00a2ff" radius={[0, 10, 10, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Metrics per Tenant Table */}
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black mb-8">{t('Performance per Tenant')}</h3>
          <div className="space-y-6">
            {topTenants.map((tenant, i) => (
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

      {/* Tenant Status Overview */}
      <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-lg font-black mb-8 flex items-center gap-3">
          <div className="w-2 h-6 bg-emerald-500 rounded-full" />
          {t('Global Tenant Status Overview')}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatusCountCard label="Pending Orders" count="452" color="bg-amber-500" />
          <StatusCountCard label="Shipped Orders" count="1,240" color="bg-blue-500" />
          <StatusCountCard label="Canceled Orders" count="128" color="bg-rose-500" />
        </div>
      </div>
    </div>
  );
};

// --- Helper Components ---
const MetricCard = ({ title, value, change, icon, color, bg, trend = "up" }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-[32px] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all group">
    <div className={`w-12 h-12 ${bg} ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-1">{title}</p>
    <h4 className="text-xl font-black text-heading dark:text-white mb-2">{value}</h4>
    <span className={`text-[10px] font-black px-2 py-0.5 rounded-lg ${trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
      {change}
    </span>
  </div>
);

const StatusCountCard = ({ label, count, color }) => (
  <div className="p-6 rounded-[32px] bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
    <div>
      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">{label}</p>
      <p className="text-2xl font-black">{count}</p>
    </div>
    <div className={`w-3 h-12 ${color} rounded-full`} />
  </div>
);

// Icons
const OrdersIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const PercentIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const TruckIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
  </svg>
);

const ReturnIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3" />
  </svg>
);

const PackageIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

export default DashboardOverview;

