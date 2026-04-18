import React from 'react';

const A_propos = () => {
    const values = [
        { 
            title: "Notre Mission", 
            desc: "Transformer chaque intention d'achat en une livraison réussie par l'excellence humaine.", 
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg> 
        },
        { 
            title: "Notre Vision", 
            desc: "Devenir le standard de confiance de la vente à distance sur le continent.", 
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg> 
        },
        { 
            title: "Notre Histoire", 
            desc: "Plus de 5 millions de commandes traitées pour des marques de toutes tailles.", 
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> 
        },
        { 
            title: "Notre Équipe", 
            desc: "Des agents formés aux psychologies de vente et à la gestion de crise client.", 
            icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg> 
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="a-propos">
            <div className="container mx-auto px-4 sm:px-6">
                
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto">
                    {/* Content */}
                    <div className="w-full lg:w-1/2 space-y-12">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800 shadow-sm transition-colors">
                                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
                                <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Qui sommes-nous ?</span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight">
                                La voix de <span className="text-primary italic">votre succès</span> e-commerce.
                            </h2>
                            <p className="text-lg text-body dark:text-slate-400 leading-relaxed font-medium">
                                RiseConfirm est né d'un constat simple : la confirmation est le maillon faible du e-commerce en Afrique. Nous avons bâti la première infrastructure dédiée à la sécurisation des ventes COD.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            {values.map((item, i) => (
                                <div key={i} className="space-y-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-primary border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-black text-heading dark:text-white">{item.title}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*  Visual/Image */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 rounded-[48px] overflow-hidden aspect-[4/5] bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-primary/30">
                             <img 
                                 src="/centredappel2.jpg" 
                                 alt="L'équipe RiseConfirm en action" 
                                 className="absolute inset-0 w-full h-full transition-transform duration-1000 group-hover:scale-105" 
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent transition-opacity duration-700 group-hover:opacity-60" />
                        </div>
                        {/* Decorative floating elements */}
                        <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-primary/20 rounded-full blur-[80px] animate-pulse" />
                        <div className="absolute -top-10 -left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-[60px] animate-pulse delay-1000" />
                    </div>

                    
                </div>

            </div>
        </section>
    );
};

export default A_propos;
