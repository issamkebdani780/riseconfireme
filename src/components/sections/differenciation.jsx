import React from 'react';

const Differentiation = () => {
    const reasons = [
        {
            title: "Expertise COD Locale",
            description: "Nos agents maîtrisent les dialectes et les habitudes d'achat locales pour une proximité maximale avec vos clients.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
            color: "text-blue-600",
            bg: "bg-blue-50/50"
        },
        {
            title: "Zéro Frais Fixes",
            description: "Pas de salaire à gérer, pas de bureau à louer. Nous sommes votre centre d'appels externe, flexible et scalable.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
            color: "text-amber-600",
            bg: "bg-amber-50/50"
        },
        {
            title: "Pay-Per-Delivery",
            description: "Un modèle économique unique : nous sommes incentivés sur votre réussite. Si vous ne livrez pas, nous ne gagnons pas.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
            color: "text-emerald-600",
            bg: "bg-emerald-50/50"
        },
        {
            title: "Intégration Native",
            description: "Se connecte en un clic à Shopify, WooCommerce ou notre écosystème Rise pour un flux de commandes automatisé.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2 2 2 0 01-2-2V4zm-2 2v1a4 4 0 108 0V6a2 2 0 00-2-2 2 2 0 00-2 2v1a2 2 0 01-2 2 2 2 0 01-2-2V6zM4 11V9a2 2 0 012-2 2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2zm12 0V9a2 2 0 012-2 2 2 0 012 2v2a2 2 0 01-2 2 2 2 0 01-2-2z" /></svg>,
            color: "text-indigo-600",
            bg: "bg-indigo-50/50"
        },
        {
            title: "Sécurité Anti-Fake",
            description: "Algorithmes de détection de faux numéros et de clients à risque pour éviter les frais de livraison inutiles.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
            color: "text-red-600",
            bg: "bg-red-50/50"
        },
        {
            title: "Support 7j/7",
            description: "Votre business ne s'arrête jamais, nos agents non plus. Nous confirmons vos ventes même les week-ends.",
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
            color: "text-slate-700 dark:text-slate-200",
            bg: "bg-slate-100/50 dark:bg-slate-800/50"
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-slate-50/30 dark:bg-slate-900/10 overflow-hidden relative transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                 <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm animate-slide-up">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Pourquoi nous ?</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Bien plus qu'un simple <br /><span className="text-primary italic">centre d'appels.</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up max-w-2xl mx-auto font-medium" style={{ animationDelay: '0.2s' }}>
                        RiseConfirm est le partenaire stratégique qui sécurise votre cash-flow et maximise votre rentabilité.
                    </p>
                </div>

                {/* Reasons Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {reasons.map((reason, i) => (
                         <div 
                            key={i} 
                            className="group p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[32px] shadow-xl shadow-slate-200/20 dark:shadow-none hover:shadow-2xl hover:border-primary/20 dark:hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 animate-slide-up"
                            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
                        >
                            <div className={`w-14 h-14 ${reason.bg} dark:bg-slate-800/50 ${reason.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                                {reason.icon}
                            </div>
                            <h3 className="text-xl font-extrabold text-heading dark:text-white mb-4 group-hover:text-primary transition-colors">
                                {reason.title}
                            </h3>
                            <p className="text-body dark:text-slate-400 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiation;
