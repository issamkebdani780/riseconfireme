import React from 'react';

const Problem = () => {
    return (
        <section className="py-24 lg:py-32 bg-[#f8fbff] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-4">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        Transformez vos colis en <br />
                        <span className="text-primary tracking-tight">ventes confirmées.</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Externalisez votre centre d'appels pour vous concentrer sur ce que vous faites de mieux : vendre.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">

                    {/* Card: Sans RiseConfirm */}
                    <div className="group relative bg-white dark:bg-slate-900/50 rounded-[40px] p-8 lg:p-14 border border-slate-100 dark:border-slate-800 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <div className="flex items-center gap-3 mb-10 opacity-60">
                            <div className="w-10 h-10 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                                <svg className="w-6 h-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-slate-500 dark:text-slate-400">Sans RiseConfirm</h3>
                        </div>

                        <div className="space-y-6">
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>}
                                title="Appels manqués et retardés"
                                description="Les clients changent d'avis si vous tardez trop."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                                title="Fausse commandes non détectées"
                                description="Vous payez la livraison pour rien."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>}
                                title="Taux de retour élevé"
                                description="Le manque de suivi direct coûte cher."
                                isNegative
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>}
                                title="Aucun Upsell"
                                description="Occasions manquées d'augmenter le panier."
                                isNegative
                            />
                        </div>
                    </div>

                    {/* Card: Avec RiseConfirm */}
                    <div className="group relative bg-white dark:bg-slate-900 rounded-[40px] p-8 lg:p-14 border border-blue-50 dark:border-blue-900/30 animate-slide-up shadow-premium" style={{ animationDelay: '0.3s' }}>
                        <div className="absolute top-8 right-8 hidden sm:block">
                            <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-[10px] font-extrabold uppercase tracking-widest rounded-full border border-blue-200 dark:border-blue-800 shadow-sm">
                                Performance Maximale
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mb-8 lg:mb-10">
                            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h3 className="text-xl font-extrabold text-heading dark:text-white">Avec RiseConfirm</h3>
                        </div>

                        {/* Stats Floating Card */}
                        <div className="mb-10 xl:mb-0 xl:absolute xl:top-[35%] xl:-right-16 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-5 rounded-[24px] shadow-xl border border-slate-100 dark:border-slate-700 animate-float z-20 min-w-[240px]">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center text-green-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black text-slate-400 uppercase">Impact Direct</div>
                                    <div className="text-sm font-bold text-heading dark:text-white">Réduction des retours de <span className="text-green-600">25%</span></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>}
                                title="Agents experts en 5 min"
                                description="Confirmation immédiate dès que la commande arrive."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                                title="Filtrage anti-fake"
                                description="Économisez vos frais de livraison inutiles."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                                title="Upsell systématique"
                                description="Augmentez votre chiffre d'affaires gratuitement."
                            />
                            <ProblemItem
                                icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
                                title="Reporting temps réel"
                                description="Suivez chaque appel et chaque centime."
                            />
                        </div>
                    </div>

                </div>
            </div>

            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
            `}</style>
        </section>
    );
};

const ProblemItem = ({ icon, title, description, isNegative = false }) => (
    <div className="flex items-start gap-4 lg:gap-5 group/item transition-all">
        <div className="relative shrink-0">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isNegative
                    ? 'bg-red-50 border-red-100 text-red-500 dark:bg-red-900/20 dark:border-red-900/40 dark:text-red-400 group-hover/item:bg-red-500 group-hover/item:text-white shadow-sm'
                    : 'bg-green-50 border-green-100 text-green-600 dark:bg-green-900/20 dark:border-green-900/40 dark:text-green-400 group-hover/item:bg-green-500 group-hover/item:text-white shadow-sm'
                }`}>
                {icon}
            </div>
            <div className={`absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 flex items-center justify-center shadow-sm z-10 transition-transform group-hover/item:scale-110 ${isNegative ? 'bg-red-500' : 'bg-green-500'}`}>
                {isNegative ? <svg className="w-2.5 h-2.5 text-white" strokeWidth={4} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-2.5 h-2.5 text-white" strokeWidth={4} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
            </div>
        </div>
        <div className="space-y-1">
            <h4 className={`text-[15px] font-bold transition-all duration-300 ${isNegative ? 'text-slate-600 dark:text-slate-400 group-hover/item:text-red-600 dark:group-hover/item:text-red-400' : 'text-slate-800 dark:text-slate-200 group-hover/item:text-green-600 dark:group-hover/item:text-green-400'
                }`}>
                {title}
            </h4>
            <p className={`text-[13px] leading-relaxed transition-all duration-300 ${isNegative ? 'text-slate-400 dark:text-slate-500 group-hover/item:text-slate-500 dark:group-hover/item:text-slate-400' : 'text-slate-500 dark:text-slate-500 group-hover/item:text-slate-600 dark:group-hover/item:text-slate-400'
                }`}>
                {description}
            </p>
        </div>
    </div>
);

export default Problem;
