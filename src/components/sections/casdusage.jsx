import React from 'react';

const UseCases = () => {
    const cases = [
        {
            title: "Débutant E-commerce",
            problem: "Beaucoup de retours et peu de ventes livrées.",
            solution: "Confirmation experte 7j/7 pour sécuriser vos ventes.",
            benefit: "+25% livraisons.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.585 15.585a6.219 6.219 0 001.246-1.334L12 9l-4.831 5.251a6.219 6.219 0 001.246 1.334M12 9v12m0-12L7.169 14.251M12 9l4.831 5.251" /></svg>,
            color: "text-blue-600",
            bg: "bg-blue-50",
            cta: "Démarrer"
        },
        {
            title: "Boutique en Croissance",
            problem: "Gestion humaine complexe et chronophage.",
            solution: "Externalisation totale de votre service client.",
            benefit: "Zéro gestion RH.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            color: "text-emerald-600",
            bg: "bg-emerald-50",
            recommended: true,
            cta: "Optimiser"
        },
        {
            title: "Marketplace & Marques",
            problem: "Volume élevé ingérable en interne.",
            solution: "Infrastructure scalable capable de traiter 5000+ CMD.",
            benefit: "Capacité illimitée.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            color: "text-violet-600",
            bg: "bg-violet-50",
            cta: "Mise à l'échelle"
        },
        {
            title: "Social Sellers",
            problem: "Pas le temps de rappeler chaque prospect.",
            solution: "Nos agents s'occupent de tout pour vous.",
            benefit: "Vendez en dormant.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
            color: "text-rose-600",
            bg: "bg-rose-50",
            cta: "Essayer"
        },
        {
            title: "Secteur Logistique",
            problem: "Difficulté à tracker le réel au téléphone.",
            solution: "Lien direct entre appel et statut de livraison.",
            benefit: "Traçabilité 100%.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
            color: "text-cyan-600",
            bg: "bg-cyan-50",
            cta: "Intégrer"
        },
        {
            title: "Fintech & Services",
            problem: "Besoin de validation d'KYC / Identité.",
            solution: "Appels de vérification conformes et sécurisés.",
            benefit: "Sécurité totale.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            color: "text-slate-900 dark:text-slate-100",
            bg: "bg-slate-100 dark:bg-slate-800",
            cta: "Étudier"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Cas d'usage</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        Adapté à <span className="text-primary italic">votre business</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed max-w-2xl mx-auto font-medium animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Peu importe votre taille, RiseConfirm vous aide à passer au niveau supérieur.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {cases.map((useCase, i) => (
                        <div 
                            key={i} 
                            className={`relative flex flex-col p-8 rounded-[40px] border ${useCase.recommended ? 'border-primary/50 dark:border-primary/30 shadow-xl shadow-primary/5 bg-white dark:bg-slate-900' : 'border-slate-50 dark:border-slate-800 bg-[#fbfcfd] dark:bg-slate-900/50'} hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group animate-slide-up`}
                            style={{ animationDelay: `${0.2 + i * 0.1}s` }}
                        >
                            {useCase.recommended && (
                                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-to-r from-primary to-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg z-10 flex items-center gap-1.5">
                                    Recommandé
                                </div>
                            )}

                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 shrink-0 ${useCase.bg} dark:bg-slate-800/50 ${useCase.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-sm border border-current/5`}>
                                    {useCase.icon}
                                </div>
                                <h3 className="text-lg font-bold text-heading dark:text-white leading-tight">{useCase.title}</h3>
                            </div>

                            <div className="space-y-5 flex-1 mb-6 mt-2">
                                <div className="space-y-1.5">
                                    <div className="text-[10px] font-extrabold text-red-500/80 uppercase tracking-widest flex items-center gap-1.5">Problème</div>
                                    <p className="text-[14px] text-slate-500 dark:text-slate-400 font-medium leading-snug">{useCase.problem}</p>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="text-[10px] font-extrabold text-emerald-500 uppercase tracking-widest flex items-center gap-1.5">Solution</div>
                                    <p className="text-[14px] text-slate-800 dark:text-slate-200 font-bold leading-snug">{useCase.solution}</p>
                                </div>
                            </div>

                             <div className="mt-2 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mb-8">
                                <div className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Gain Direct</div>
                                <div className={`text-[11px] font-extrabold ${useCase.color} bg-white dark:bg-slate-800 shadow-sm border border-slate-50 dark:border-slate-700 px-3 py-1 rounded-full whitespace-nowrap`}>
                                    {useCase.benefit}
                                </div>
                            </div>

                             <button className={`w-full group/btn inline-flex justify-center items-center gap-2 px-4 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${useCase.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700'}`}>
                                {useCase.cta}
                                <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
