import React from 'react';
import { useTranslation } from 'react-i18next';

const FinalCTA = () => {
    const { t } = useTranslation();
    const reassurances = [
        { label: t("Mise en route immédiate"), icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { label: t("Agents certifiés COD"), icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
        { label: t("Support local 7j/7"), icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
        { label: t("Essai sans engagement"), icon: <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.585 15.585a6.219 6.219 0 001.246-1.334L12 9l-4.831 5.251a6.219 6.219 0 001.246 1.334M12 9v12m0-12L7.169 14.251M12 9l4.831 5.251" /></svg> }
    ];

    return (
        <section className="py-24 lg:py-40 overflow-hidden" id="cta">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="relative max-w-6xl mx-auto p-4 lg:p-6 rounded-[56px] shadow-2xl shadow-primary/20 dark:shadow-primary/5">
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-950 rounded-[44px] p-10 lg:p-24 flex flex-col items-center text-center space-y-12 border border-slate-100 dark:border-slate-800 transition-colors duration-500">
                        
                        {/* Header Text */}
                        <div className="max-w-3xl space-y-4 text-center">
                            <h2 className="text-3xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                                {t('Transformez vos commandes en')} <br />
                                <span className="text-primary italic">{t('ventes réelles.')}</span>
                            </h2>
                            <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 font-medium max-w-xl mx-auto">
                                {t('cta_desc')}
                            </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col items-center gap-5">
                            <div className="flex flex-col sm:flex-row gap-6 items-center">
                                <button className="px-10 py-5 bg-primary hover:bg-primary-hover text-white rounded-[24px] font-bold text-base shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 active:scale-95 relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                                    {t('Commencer mon essai gratuit')}
                                </button>
                                <button className="px-10 py-5 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-primary rounded-[24px] font-bold text-base shadow-lg border border-slate-100 dark:border-slate-700 transition-all hover:-translate-y-1 active:scale-95">
                                    {t('Demander une démo')}
                                </button>
                            </div>
                            
                             <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 text-xs lg:text-sm font-bold text-slate-500 dark:text-slate-400">
                                <div className="flex items-center gap-1.5 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2.5 py-1 rounded-md">
                                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    {t('Zéro risque, tout à gagner')}
                                </div>
                                <span className="hidden sm:block text-slate-300 dark:text-slate-700">•</span>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-slate-400 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                    {t('Prêt en 24 heures')}
                                </div>
                            </div>
                        </div>

                        {/* Reassurance Bar */}
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-4">
                            {reassurances.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 group cursor-default">
                                    <div className="text-primary opacity-80 group-hover:opacity-100 transition-opacity">
                                        {item.icon}
                                    </div>
                                    <span className="text-[10px] lg:text-[11px] font-bold text-primary/70 uppercase tracking-widest group-hover:text-primary transition-colors">{item.label}</span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
