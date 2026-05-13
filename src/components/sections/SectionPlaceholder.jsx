import React from 'react';
import MapUI from './statistics/mapui';

const SectionPlaceholder = ({ title }) => {
  const isGeographicSection = title === 'Distribution Géographique' || title === 'Geographic Distribution';

  if (isGeographicSection) {
    return (
      <div className="bg-white dark:bg-slate-900 rounded-[48px] p-10 border border-slate-100 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-xl font-black text-heading dark:text-white tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">Analyse de la couverture nationale</p>
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
        <MapUI />
      </div>
    );
  }

  return (
    <div className="min-h-[400px] flex flex-col items-center justify-center bg-white dark:bg-slate-900 rounded-[48px] border border-slate-100 dark:border-slate-800 shadow-sm p-12 text-center group">
      <div className="w-24 h-24 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
        <svg className="w-12 h-12 text-slate-300 dark:text-slate-600 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>
      <h2 className="text-2xl font-black text-heading dark:text-white tracking-tight mb-2">{title}</h2>
      <p className="text-slate-400 font-medium max-w-sm mx-auto">
        Cette section est actuellement en cours de développement par notre équipe d'ingénieurs.
      </p>
      <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-800 rounded-full text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        Bientôt Disponible
      </div>
    </div>
  );
};

export default SectionPlaceholder;
