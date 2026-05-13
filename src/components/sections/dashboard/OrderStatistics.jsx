import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip,
  AreaChart, Area, PieChart, Pie, Cell, Legend,
} from 'recharts';
import {
  MetricCard, StatusCountCard,
  OrdersIcon, CheckIcon, PercentIcon, TruckIcon, ReturnIcon, PackageIcon,
} from './DashboardCards';

const DAILY_TRENDS = [
  { day: 'Lun', total: 450, confirmed: 380, shipped: 320, delivered: 280, returned: 15 },
  { day: 'Mar', total: 520, confirmed: 410, shipped: 380, delivered: 340, returned: 12 },
  { day: 'Mer', total: 480, confirmed: 400, shipped: 350, delivered: 310, returned: 18 },
  { day: 'Jeu', total: 610, confirmed: 540, shipped: 490, delivered: 450, returned: 22 },
  { day: 'Ven', total: 580, confirmed: 490, shipped: 460, delivered: 420, returned: 10 },
  { day: 'Sam', total: 720, confirmed: 650, shipped: 600, delivered: 550, returned: 25 },
  { day: 'Dim', total: 850, confirmed: 780, shipped: 720, delivered: 680, returned: 30 },
];

const STATUS_DATA = [
  { name: 'Pending',   value: 120, color: '#f59e0b' },
  { name: 'Confirmed', value: 850, color: '#10b981' },
  { name: 'Canceled',  value: 45,  color: '#ef4444' },
  { name: 'Shipped',   value: 640, color: '#3b82f6' },
  { name: 'Delivered', value: 580, color: '#8b5cf6' },
  { name: 'Returned',  value: 32,  color: '#ec4899' },
];

const TEAM_MEMBERS = [
  { name: 'Ahmed K.',  calls: 156, conf: 142, rate: '91%', color: 'bg-emerald-500' },
  { name: 'Sarah M.',  calls: 142, conf: 128, rate: '90%', color: 'bg-primary' },
  { name: 'Yassine B.', calls: 128, conf: 102, rate: '80%', color: 'bg-blue-500' },
  { name: 'Lila R.',   calls: 95,  conf: 82,  rate: '86%', color: 'bg-amber-500' },
];

const OrderStatistics = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <MetricCard title="Total Orders"   value="4,215" change="+12.5%" icon={<OrdersIcon />}  color="text-slate-600"   bg="bg-slate-100" />
        <MetricCard title="Real Orders"    value="3,842" change="+8.2%"  icon={<CheckIcon />}   color="text-blue-600"   bg="bg-blue-100" />
        <MetricCard title="Conf. Rate"     value="91.2%" change="+2.4%"  icon={<PercentIcon />} color="text-emerald-600" bg="bg-emerald-100" />
        <MetricCard title="Delivery Rate"  value="84.5%" change="+1.5%"  icon={<TruckIcon />}   color="text-violet-600" bg="bg-violet-100" />
        <MetricCard title="Return Rate"    value="3.2%"  change="-0.5%"  icon={<ReturnIcon />}  color="text-rose-600"   bg="bg-rose-100"   trend="down" />
        <MetricCard title="Shipped Rate"   value="88.7%" change="+4.1%"  icon={<PackageIcon />} color="text-amber-600"  bg="bg-amber-100" />
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
          <div className="h-80 min-h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={DAILY_TRENDS}>
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
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '16px', color: '#fff', fontSize: '11px', fontWeight: 800 }} itemStyle={{ color: '#fff' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '11px', fontWeight: 700 }} />
                <Area type="monotone" dataKey="total"     stroke="#64748b" strokeWidth={3} fillOpacity={1} fill="url(#colorTotal)" />
                <Area type="monotone" dataKey="confirmed" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorConf)" />
                <Area type="monotone" dataKey="shipped"   stroke="#3b82f6" strokeWidth={3} fillOpacity={0} />
                <Area type="monotone" dataKey="delivered" stroke="#8b5cf6" strokeWidth={3} fillOpacity={0} />
                <Area type="monotone" dataKey="returned"  stroke="#f43f5e" strokeWidth={3} fillOpacity={0} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Donut */}
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-black mb-8">{t('Status Overview')}</h3>
          <div className="h-64 min-h-[256px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={STATUS_DATA} cx="50%" cy="50%" innerRadius={60} outerRadius={85} paddingAngle={5} dataKey="value">
                  {STATUS_DATA.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
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
            {STATUS_DATA.map((status, i) => (
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
              {TEAM_MEMBERS.map((member, i) => (
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

export default OrderStatistics;
