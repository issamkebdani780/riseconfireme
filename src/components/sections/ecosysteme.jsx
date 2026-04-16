import React from 'react';

const Ecosystem = () => {
    const modules = [
        { name: "RiseConfirm", desc: "Le Cœur de la Confirmation", active: true, color: "bg-primary", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg> },
        { name: "RiseManager", desc: "Le Cerveau Opérationnel", active: false, color: "bg-blue-500", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
        { name: "RiseCart", desc: "Storefront & Conversion", active: false, color: "bg-emerald-500", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg> },
        { name: "FBR", desc: "Logistique & Stockage", active: false, color: "bg-rose-500", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg> },
        { name: "RiseAcademy", desc: "Formations & Expertise", active: false, color: "bg-amber-500", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" /></svg> },
        { name: "RisePay", desc: "Solutions de Paiement", active: false, color: "bg-cyan-500", icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> }
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
                            <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">L'ÉCOSYSTÈME RISE</span>
                        </div>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-[1.1] animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Bien plus qu'un service : <br />
                        Une <span className="text-primary italic">infrastructure</span> globale.
                    </h2>
                    <p className="text-xl text-body dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        RiseConfirm s'intègre parfaitement dans l'écosystème Rise pour couvrir 100% des besoins de votre business e-commerce.
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
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                        <div className={`w-14 h-14 ${module.active ? 'bg-primary' : module.color} text-white rounded-[20px] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                                            {module.icon}
                                        </div>
                                        <div className="space-y-2 w-full">
                                            <div className="text-xl font-bold text-heading dark:text-white group-hover:text-primary transition-colors">{module.name}</div>
                                            <div className="text-sm font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest text-[10px]">{module.desc}</div>
                                        </div>
                                    </div>

                                    {module.active && (
                                        <div className="absolute top-6 right-8">
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
