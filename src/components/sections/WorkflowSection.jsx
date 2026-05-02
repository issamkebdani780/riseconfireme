import React from 'react';
import { useTranslation } from 'react-i18next';

const WorkflowSection = () => {
  const { t } = useTranslation();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Column: Flow & Scenarios */}
      <div className="lg:col-span-2 space-y-8">
        {/* Visual Flow Diagram */}
        <div className="bg-white dark:bg-slate-900 rounded-[48px] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h3 className="text-2xl font-black text-heading dark:text-white tracking-tight">Configuration du Workflow</h3>
              <p className="text-sm text-slate-400 font-medium mt-1">Gérez la séquence de vos appels automatisés</p>
            </div>
            <button className="px-6 py-3 bg-blue-50 dark:bg-blue-900/20 text-primary text-[11px] font-black rounded-2xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest border border-primary/10">
              Modifier le flux
            </button>
          </div>

          <div className="relative">
            {/* Main Horizontal Flow */}
            <div className="flex items-center justify-between relative z-10 mb-20">
              <WorkflowNode label="Tentative initiale" icon={<CallIcon />} active />
              <div className="flex-1 px-4 relative">
                <FlowLine />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                   <DoubleArrow />
                </div>
              </div>
              <WorkflowNode label="Appel 1" sub="10 min" icon={<CallIcon />} />
              <div className="flex-1 px-4 relative">
                <FlowLine />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                   <DoubleArrow />
                </div>
              </div>
              <WorkflowNode label="Appel 2" sub="2 rances" icon={<CallIcon />} />
              <div className="flex-1 px-4 relative">
                <FlowLine />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                   <DoubleArrow />
                </div>
              </div>
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm shadow-xl shadow-primary/30 border-4 border-white dark:border-slate-900">10%</div>
            </div>

            {/* Sub-flow (Appel 3) */}
            <div className="flex justify-center relative mb-20">
               {/* Vertical Connection Line */}
               <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-20 border-l-2 border-dashed border-slate-200 dark:border-slate-800" />
               <WorkflowNode label="Appel 3" sub="Programmé" icon={<CallIcon />} variant="dashed" />
               {/* Line to Final */}
               <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16 border-l-2 border-dashed border-slate-200 dark:border-slate-800" />
            </div>

            {/* Final Goal */}
            <div className="w-full py-8 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center gap-4 group hover:border-primary/50 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all cursor-pointer">
              <span className="text-sm font-black text-slate-400 group-hover:text-primary transition-colors uppercase tracking-[0.3em]">Appel Final</span>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <svg key={i} className={`w-4 h-4 text-primary opacity-${100 - (i*30)} animate-pulse`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Automatic Scenarios */}
        <div className="bg-white dark:bg-slate-900 rounded-[48px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black text-heading dark:text-white">Scénarios Automatiques</h3>
            <div className="flex items-center gap-3 px-5 py-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-full border border-emerald-100 dark:border-emerald-500/20">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">Système Actif</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScenarioItem 
              title="Récupérer panier abandonné" 
              desc="Relance automatique des clients ayant quitté le checkout sans payer." 
              icon={<OrdersIcon className="w-5 h-5" />}
            />
            <ScenarioItem 
              title="Confirmer nouvelle commande" 
              desc="Envoi de notifications multicanales dès validation du panier." 
              icon={<WorkflowIcon />}
              active
            />
          </div>
        </div>
      </div>

      {/* Right Column: Stats */}
      <div className="space-y-8">
        <div className="bg-white dark:bg-slate-900 rounded-[48px] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-lg font-black text-heading dark:text-white">Statistiques</h3>
            <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl">
              <button className="px-4 py-2 rounded-xl text-[10px] font-black bg-white dark:bg-slate-700 text-primary shadow-sm">30j</button>
              <button className="px-4 py-2 rounded-xl text-[10px] font-black text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">7j</button>
            </div>
          </div>

          {/* Donut Chart */}
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-52 h-52 mb-8 group cursor-pointer">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-slate-100 dark:text-slate-800" />
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray="264" strokeDashoffset="66" className="text-primary transition-all duration-1000" />
                <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="10" fill="transparent" strokeDasharray="264" strokeDashoffset="210" className="text-emerald-400 transition-all duration-1000" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center group-hover:scale-110 transition-transform">
                <span className="text-5xl font-black text-heading dark:text-white tracking-tighter">75%</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Performance</span>
              </div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/10 px-6 py-3 rounded-2xl border border-blue-100/50 dark:border-blue-800/50">
              <p className="text-[11px] text-primary font-bold text-center">Optimisé par 2.4k appels ce mois</p>
            </div>
          </div>

          <div className="space-y-7">
            <AttemptStat label="Tentative 1" value="35%" progress={35} color="bg-primary" />
            <AttemptStat label="Tentative 2" value="26%" progress={26} color="bg-blue-400" />
            <AttemptStat label="Tentative 3" value="14%" progress={14} color="bg-emerald-400" />
            <AttemptStat label="Tentative finale" value="5%" progress={5} color="bg-slate-300" />
          </div>
        </div>

        {/* Pro Tip Card */}
        <div className="bg-slate-950 rounded-[48px] p-10 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 border border-primary/20">
              <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-black mb-3">Conseil IA</h4>
            <p className="text-sm text-slate-400 font-medium leading-relaxed mb-8">Les appels effectués entre <span className="text-white">10h et 12h</span> ont un taux de confirmation <span className="text-emerald-400">+12%</span> plus élevé.</p>
            <button className="w-full py-4 bg-primary text-white text-xs font-black rounded-2xl hover:bg-primary-hover transition-all uppercase tracking-[0.2em] shadow-lg shadow-primary/20">Optimiser</button>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
};

const WorkflowNode = ({ label, sub, icon, active, variant }) => (
  <div className={`relative flex flex-col items-center justify-center w-36 h-40 rounded-[32px] border-2 transition-all duration-300 group ${
    variant === 'dashed' 
      ? 'border-dashed border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50' 
      : active 
        ? 'border-primary bg-primary shadow-2xl shadow-primary/40 text-white scale-110 z-20' 
        : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 text-heading dark:text-white hover:border-primary/50'
  }`}>
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${active ? 'bg-white/20' : 'bg-slate-50 dark:bg-slate-800 text-primary'}`}>
      {icon}
    </div>
    <div className="text-center px-2">
      <p className={`text-xs font-black leading-tight ${active ? 'text-white' : 'text-heading dark:text-white'}`}>{label}</p>
      {sub && <p className={`text-[10px] font-bold uppercase tracking-tighter mt-1 ${active ? 'text-white/70' : 'text-slate-400'}`}>{sub}</p>}
    </div>
    
    {!active && variant !== 'dashed' && (
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center group-hover:border-primary transition-colors">
        <svg className="w-4 h-4 text-slate-400 group-hover:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
      </div>
    )}
  </div>
);

const FlowLine = () => (
  <div className="h-0.5 w-full bg-slate-100 dark:bg-slate-800" />
);

const DoubleArrow = () => (
  <div className="flex gap-0.5 bg-white dark:bg-slate-900 px-2">
     <svg className="w-4 h-4 text-slate-200 dark:text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
     </svg>
  </div>
);

const ScenarioItem = ({ title, desc, icon, active }) => (
  <div className={`flex items-start gap-5 p-7 rounded-[32px] border transition-all cursor-pointer ${
    active 
      ? 'border-primary/20 bg-primary/5 dark:bg-primary/10 ring-1 ring-primary/10' 
      : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-primary/30'
  }`}>
    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-50 dark:bg-slate-800 text-primary'}`}>
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-base font-black text-heading dark:text-white leading-none">{title}</h4>
        <div className={`w-10 h-5 rounded-full p-1 transition-colors ${active ? 'bg-primary' : 'bg-slate-200 dark:bg-slate-700'}`}>
          <div className={`w-3 h-3 rounded-full bg-white shadow-sm transform transition-transform ${active ? 'translate-x-5' : 'translate-x-0'}`} />
        </div>
      </div>
      <p className="text-xs text-slate-400 font-medium leading-relaxed">{desc}</p>
    </div>
  </div>
);

const AttemptStat = ({ label, value, progress, color }) => (
  <div className="space-y-2 group cursor-pointer">
    <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-widest">
      <span className="text-slate-400 group-hover:text-heading dark:group-hover:text-white transition-colors">{label}</span>
      <span className="text-heading dark:text-white">{value}</span>
    </div>
    <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-1000 group-hover:opacity-80`} style={{ width: `${progress}%` }} />
    </div>
  </div>
);

// Icons
const CallIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const OrdersIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
);

const WorkflowIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

export default WorkflowSection;
