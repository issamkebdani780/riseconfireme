import React from 'react';
import { useTranslation } from 'react-i18next';

const Ecosystem = () => {
    const { t } = useTranslation();
    const modules = [
        { name: "RiseConfirm", desc: t("Le Cœur de la Confirmation"), active: true, color: "bg-primary", icon: <img src="/ecosystem/RiseConfirm.jpg" alt="RiseConfirm" className="w-full h-full object-cover rounded-[20px]" /> },
        { name: "RiseManager", desc: t("Le Cerveau Opérationnel"), active: false, color: "bg-blue-500", icon: <img src="/ecosystem/risemanager.png" alt="RiseManager" className="w-full h-full object-cover rounded-[20px] bg-white" /> },
        { name: "RiseCart", desc: t("Storefront & Conversion"), active: false, color: "bg-emerald-500", icon: <img src="/ecosystem/risecart.jpg" alt="RiseCart" className="w-full h-full object-cover rounded-[20px]" /> },
        { name: "FBR", desc: t("Logistique & Stockage"), active: false, color: "bg-rose-500", icon: <img src="/ecosystem/fbr.jpg" alt="FBR" className="w-full h-full object-cover rounded-[20px]" /> },
        { name: "RiseAcademy", desc: t("Formations & Expertise"), active: false, color: "bg-amber-500", icon: <img src="/ecosystem/riseacademy.png" alt="RiseAcademy" className="w-full h-full object-cover rounded-[20px]" /> },
        { name: "RisePay", desc: t("Solutions de Paiement"), active: false, color: "bg-cyan-500", icon: <img src="/ecosystem/risepay.jpg" alt="RisePay" className="w-full h-full object-cover rounded-[20px]" /> }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden relative transition-colors duration-500">
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32 space-y-8">
                    <div className="flex justify-center animate-slide-up">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{t("L'ÉCOSYSTÈME RISE")}</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        {t('Bien plus qu\'un service :')} <br />
                        <span className="text-primary italic">{t('infrastructure')}</span> {t('globale.')}
                    </h2>
                    <p className="text-xl text-body dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {t('eco_desc')}
                    </p>
                </div>

                {/* Ecosystem Visualized */}
                <div className="relative max-w-5xl mx-auto py-10 px-4 sm:px-0">
                    {/* Connecting lines (Desktop) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent hidden lg:block" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent hidden lg:block" />

                    {/* Connecting line (Mobile) */}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-800 to-transparent lg:hidden" />

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-12 relative">
                        {modules.map((module, i) => (
                            <div key={i} className="relative">
                                {/* Connection Node (Mobile) */}
                                {i > 0 && (
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 z-10 lg:hidden shadow-sm" />
                                )}

                                <div
                                    className={`group relative p-8 bg-white dark:bg-slate-900 rounded-[40px] border transition-all duration-500 animate-slide-up ${module.active ? 'border-primary dark:border-primary/50 shadow-2xl shadow-primary/10 dark:shadow-primary/5 scale-105 z-20' : 'border-slate-50 dark:border-slate-800 shadow-xl shadow-slate-100/50 dark:shadow-none hover:border-slate-200 dark:hover:border-slate-700 hover:shadow-2xl'}`}
                                    style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                                >
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-start">
                                        <div className={`w-14 h-14 ${module.active ? 'bg-primary' : module.color} text-white rounded-[20px] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                            {module.icon}
                                        </div>
                                        <div className="space-y-2 w-full">
                                            <div className="text-xl font-bold text-heading dark:text-white group-hover:text-primary transition-colors">{module.name}</div>
                                            <div className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest text-[10px]">{module.desc}</div>
                                        </div>
                                    </div>

                                    {module.active && (
                                        <div className="absolute top-6 right-8 rtl:right-auto rtl:left-8">
                                            <div className="flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ecosystem;
