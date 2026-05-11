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
  Cell
} from 'recharts';
import MapUI from './mapui';

const StatisticsSection = ({ permissions = [] }) => {
  const { t } = useTranslation();
  const [timeRange, setTimeRange] = useState('30d');

  const hasPerm = (p) => permissions.includes(p);

  const salesData = [
    { day: 'Lun', sales: 4200, confirmations: 3800 },
    { day: 'Mar', sales: 5100, confirmations: 4200 },
    { day: 'Mer', sales: 4800, confirmations: 4100 },
    { day: 'Jeu', sales: 6200, confirmations: 5400 },
    { day: 'Ven', sales: 5800, confirmations: 4900 },
    { day: 'Sam', sales: 7500, confirmations: 6800 },
    { day: 'Dim', sales: 8200, confirmations: 7400 },
  ];

  const statusData = [
    { name: 'Confirmé', value: 82, color: '#10b981' },
    { name: 'En attente', value: 12, color: '#00a2ff' },
    { name: 'Annulé', value: 6, color: '#f43f5e' },
  ];

  return (
    <div className="space-y-8 pb-12">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-sm">
        <div>
          <h2 className="text-2xl font-black text-heading dark:text-white tracking-tight">Analyse de Performance</h2>
          <p className="text-sm text-slate-400 font-medium mt-1">Consultez les indicateurs clés de votre activité en temps réel.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-100 dark:border-slate-800">
            {['7d', '30d', '90d', '1y'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-xl text-[10px] font-black transition-all ${
                  timeRange === range 
                    ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                    : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                }`}
              >
                {range.toUpperCase()}
              </button>
            ))}
          </div>
          {hasPerm('reports:generate') && (
            <button className="p-3 bg-primary text-white rounded-2xl shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* High-Level Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsMetricCard title="Revenu Total" value="154,200 DA" change="+12.5%" icon={<RevenueIcon />} color="text-primary" bg="bg-primary/10" />
        <StatsMetricCard title="Panier Moyen" value="4,850 DA" change="+3.2%" icon={<CartIcon />} color="text-blue-500" bg="bg-blue-500/10" />
        <StatsMetricCard title="Taux de Confirmation" value="82.4%" change="+5.7%" icon={<CheckIcon />} color="text-emerald-500" bg="bg-emerald-500/10" />
        <StatsMetricCard title="Taux de Retour" value="4.1%" change="-0.8%" icon={<ReturnIcon />} color="text-red-500" bg="bg-red-500/10" trend="down" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Chart: Revenue Trend */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[48px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-lg font-black text-heading dark:text-white flex items-center gap-3">
              <div className="w-2 h-6 bg-primary rounded-full" />
              Évolution des Ventes
            </h3>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Commandes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confirmations</span>
              </div>
            </div>
          </div>
          
          <div className="h-80 w-full min-h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00a2ff" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#00a2ff" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorConf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: 'none', 
                    borderRadius: '16px', 
                    fontSize: '11px',
                    color: '#fff',
                    fontWeight: 800,
                    boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                  }}
                  itemStyle={{ color: '#fff' }}
                  cursor={{ stroke: '#00a2ff', strokeWidth: 2, strokeDasharray: '5 5' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#00a2ff" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorSales)" 
                  animationDuration={2000}
                />
                <Area 
                  type="monotone" 
                  dataKey="confirmations" 
                  stroke="#10b981" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorConf)" 
                  animationDuration={2500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-white dark:bg-slate-900 rounded-[48px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col">
          <h3 className="text-lg font-black text-heading dark:text-white mb-10">Répartition Statuts</h3>
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="relative w-full h-64 min-h-[256px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={statusData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={8}
                    dataKey="value"
                    animationBegin={500}
                    animationDuration={1500}
                  >
                    {statusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: 'none', 
                      borderRadius: '12px', 
                      fontSize: '10px',
                      color: '#fff'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="text-3xl font-black text-heading dark:text-white leading-none">82%</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest mt-1">Confirmé</span>
              </div>
            </div>
            
            <div className="w-full space-y-4">
              {statusData.map((status, i) => (
                <StatusLegend key={i} label={status.name} value={`${status.value}%`} hexColor={status.color} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Agents Performance */}
      <div className="bg-white dark:bg-slate-900 rounded-[48px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
        <h3 className="text-lg font-black text-heading dark:text-white mb-8 flex items-center gap-3">
          <div className="w-2 h-6 bg-primary rounded-full" />
          Performance des Agents
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Amine K.', calls: 1240, rate: '92%', trend: '+3%', status: 'online' },
            { name: 'Selma R.', calls: 980, rate: '88%', trend: '+1%', status: 'online' },
            { name: 'Yanis B.', calls: 850, rate: '84%', trend: '-2%', status: 'away' },
            { name: 'Ines L.', calls: 720, rate: '81%', trend: '+4%', status: 'offline' },
          ].map((agent, i) => (
            <div key={i} className="bg-slate-50/50 dark:bg-slate-800/30 rounded-3xl p-6 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center font-black text-primary text-sm shadow-sm">
                    {agent.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 ${
                    agent.status === 'online' ? 'bg-emerald-500' : agent.status === 'away' ? 'bg-amber-500' : 'bg-slate-300'
                  }`} />
                </div>
                <div>
                  <p className="text-sm font-black text-heading dark:text-white">{agent.name}</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Expert Confirmation</p>
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Taux Succès</p>
                  <p className="text-xl font-black text-primary">{agent.rate}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Appels</p>
                  <p className="text-sm font-black text-heading dark:text-white">{agent.calls}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Width Geographic Distribution */}
      <div className="bg-white dark:bg-slate-900 rounded-[48px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <h3 className="text-lg font-black text-heading dark:text-white mb-10 flex items-center gap-3">
          <div className="w-2 h-6 bg-emerald-500 rounded-full" />
          Distribution Géographique
        </h3>
        <MapUI />
      </div>
    </div>
  );
};

const StatsMetricCard = ({ title, value, change, icon, color, bg, trend = "up" }) => (
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

const StatusLegend = ({ label, value, hexColor }) => (
  <div className="flex items-center justify-between p-4 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-all">
    <div className="flex items-center gap-3">
      <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: hexColor }} />
      <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{label}</span>
    </div>
    <span className="text-sm font-black text-heading dark:text-white">{value}</span>
  </div>
);

// Icons
const RevenueIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ReturnIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3" />
  </svg>
);

export default StatisticsSection;
