import React from 'react';

const Integrations = () => {
    const integrations = [
        { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png", desc: "Installation en 1 clic via notre application native." },
        { name: "WooCommerce", logo: "https://upload.wikimedia.org/wikipedia/commons/2/22/WooCommerce_logo.png", desc: "Plugin léger et parfaitement synchronisé." },
        { name: "RiseManager", logo: "/logo.png", desc: "L'intégration la plus profonde pour une gestion COD totale." },
        { name: "Sidi Yahia", logo: "#", desc: "Compatible avec les meilleures agences de livraison locales." },
        { name: "WhatsApp API", logo: "#", desc: "Notifications automatiques intelligentes." },
        { name: "API Publique", logo: "#", desc: "Connectez n'importe quel système customisé." }
    ];

    const benefits = [
        { title: "API Unifiée", desc: "Une seule documentation pour tout gérer.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
        { title: "Zéro Latence", desc: "Synchronisation des commandes en ms.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { title: "Webhooks", desc: "Réactions automatiques à chaque succès.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
        { title: "Sécurisé", desc: "Données cryptées et isolées.", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> }
    ];

    return (
        <section className="py-24 lg:py-40 bg-[#f8fbff] dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="integrations">
            <div className="container mx-auto px-4 sm:px-6">
                
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32 max-w-7xl mx-auto">
                    
                    {/* Left: Content */}
                    <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800 shadow-sm transition-colors mx-auto lg:mx-0">
                                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Connectivité Totale</span>
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-[1.1]">
                                S'intègre partout <br />
                                où vous <span className="text-primary italic">vendez.</span>
                            </h2>
                            <p className="text-lg text-body dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                Connectez votre boutique en quelques minutes et laissez nos agents faire le reste. RiseConfirm est conçu pour être invisible dans votre workflow technique.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {benefits.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start text-left group">
                                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center text-primary shadow-sm border border-slate-100 dark:border-slate-800 group-hover:bg-primary group-hover:text-white transition-all shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-heading dark:text-white mb-1">{item.title}</div>
                                        <div className="text-xs text-slate-400 dark:text-slate-500 font-medium leading-tight">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="pt-6">
                            <button className="px-8 py-4 bg-slate-900 dark:bg-slate-800 text-white rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-slate-800 dark:hover:bg-slate-700 transition-all shadow-xl active:scale-95 flex items-center gap-3 mx-auto lg:mx-0">
                                Voir la documentation API
                            </button>
                        </div>
                    </div>

                    {/* Right: Integration Grid/Visual */}
                    <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 relative">
                            {/* Decorative Blur */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 blur-[100px] pointer-events-none rounded-full" />
                            
                            {integrations.map((item, i) => (
                                <div 
                                    key={i} 
                                    className={`bg-white dark:bg-slate-900 p-8 rounded-[40px] border border-slate-100 dark:border-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-none hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center space-y-4 animate-slide-up`}
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                >
                                    <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center p-3 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                                        {/* Placeholder for Logos - using initials or generic icons if URL not provided */}
                                        <div className="text-xs font-black text-slate-300 dark:text-slate-600">{item.name}</div>
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-heading dark:text-white mb-1">{item.name}</div>
                                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Integrations;
