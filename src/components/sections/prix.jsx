import React, { useState } from 'react';

const Pricing = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            desc: "Idéal pour lancer votre boutique.",
            price: "Libre",
            commission: "25 DA",
            unit: "par commande",
            features: [
                "Confirmation par appel",
                "Scripts standards",
                "Dashboard de base",
                "Relances WhatsApp auto",
                "Support par email"
            ],
            notIncluded: [
                "Agents dédiés",
                "Upsell personnalisé",
                "API & Webhooks"
            ],
            cta: "Démarrer gratuitement",
            color: "slate"
        },
        {
            name: "Performance",
            desc: "Pour les boutiques en pleine croissance.",
            price: "4.900 DA",
            commission: "18 DA",
            unit: "/ mois + commande",
            recommended: true,
            features: [
                "Tout le plan Starter",
                "Scripts de vente avancés",
                "Upsell & Cross-sell actif",
                "Priorité sur les appels",
                "Intégration API & Webhooks",
                "Support Prioritaire 7j/7"
            ],
            cta: "Choisir Performance",
            color: "primary"
        },                    
        {
            name: "Enterprise",
            desc: "Infrastructure dédiée pour gros volumes.",
            price: "Sur mesure",
            commission: "Contactez-nous",
            unit: "",
            features: [
                "Agents 100% dédiés",
                "Formation sur mesure",
                "Reporting BI avancé",
                "Manager de compte dédié",
                "SLA Garanti",
                "Marque blanche possible"
            ],
            cta: "Contacter l'équipe",
            color: "slate"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-[#f8fbff] dark:bg-slate-950 overflow-hidden transition-colors duration-500" id="tarifs">
            <div className="container mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm animate-slide-up">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Tarification Transparente</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Payez à la <span className="text-primary italic">performance.</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Pas de frais cachés. Choisissez le plan qui correspond à votre volume actuel et évoluez à votre rythme.
                    </p>
                </div>

                {/* Switcher */}
                <div className="flex justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200 dark:border-slate-800">
                        <button 
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${!isAnnual ? 'bg-white dark:bg-slate-800 text-primary shadow-md' : 'text-slate-500 dark:text-slate-400'}`}
                        >
                            Facturation mensuelle
                        </button>
                        <button 
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-white dark:bg-slate-800 text-primary shadow-md' : 'text-slate-500 dark:text-slate-400'}`}
                        >
                            Facturation annuelle
                            <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[8px] font-black uppercase rounded-md">-20%</span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                    {plans.map((plan, i) => (
                        <div 
                            key={i} 
                            className={`group relative flex flex-col p-8 lg:p-10 rounded-[44px] border transition-all duration-500 animate-slide-up ${plan.recommended ? 'bg-white dark:bg-slate-900 border-primary shadow-2xl shadow-primary/5 z-10' : 'bg-white/50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl'}`}
                            style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                        >
                            {plan.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-2 bg-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                                    Recommandé
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-black text-heading dark:text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{plan.desc}</p>
                            </div>

                            <div className="mb-10">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl lg:text-5xl font-black text-heading dark:text-white tracking-tighter">{plan.price}</span>
                                    <span className="text-sm font-bold text-slate-400">{plan.unit}</span>
                                </div>
                                {plan.commission && (
                                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 inline-block">
                                        <div className="text-[10px] font-black text-primary uppercase tracking-widest">Commission</div>
                                        <div className="text-lg font-black text-primary">{plan.commission} <span className="text-xs text-primary/70">/ CMD</span></div>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded && plan.notIncluded.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 opacity-40 grayscale">
                                        <div className="w-5 h-5 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 shrink-0 mt-0.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </div>
                                        <span className="text-[13px] font-bold text-slate-500 dark:text-slate-500 line-through decoration-slate-400">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-4 px-6 rounded-2xl text-sm font-black transition-all duration-300 ${plan.recommended ? 'bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/20 hover:-translate-y-1' : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 hover:-translate-y-1'}`}>
                                {plan.cta}
                            </button>
                        </div>
                    ))}
                </div>

                {/* ROI Calculator Preview (Simple) */}
                <div className="max-w-4xl mx-auto mt-24 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                    <div className="bg-white dark:bg-slate-900 rounded-[44px] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-premium flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="shrink-0 w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-3xl flex items-center justify-center text-primary shadow-sm border border-blue-100 dark:border-blue-800 relative z-10">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        
                        <div className="flex-1 relative z-10">
                            <h4 className="text-xl font-black text-heading dark:text-white mb-2">Simulez votre gain de rentabilité.</h4>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Découvrez combien vous pourriez économiser en réduisant vos retours de seulement 15%.</p>
                        </div>
                        
                        <button className="px-8 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl text-xs font-bold tracking-widest uppercase hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-lg active:scale-95 relative z-10 whitespace-nowrap">
                            Accéder au calculateur
                        </button>
                    </div>
                </div>

                 {/* Help Card */}
                 <div className="max-w-xl mx-auto text-center mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Besoin d'une offre personnalisée ou plus de 10 000 CMD / jour ? 
                        <a href="#contact" className="text-primary hover:underline underline-offset-4">Contactez nos experts</a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
