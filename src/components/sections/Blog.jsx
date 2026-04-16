import React from 'react';

const Blog = () => {
    const posts = [
        {
            title: "5 astuces pour réduire votre taux de retour de 20%",
            excerpt: "La confirmation téléphonique n'est que la première étape. Découvrez comment optimiser vos colis pour booster la livraison.",
            author: "Amine",
            date: "12 Avril 2026",
            category: "Optimisation"
        },
        {
            title: "Pourquoi le COD reste roi en Afrique du Nord",
            excerpt: "Analyse des comportements d'achat et des raisons de la résistance aux paiements digitaux sur le marché local.",
            author: "Sarah",
            date: "10 Avril 2026",
            category: "Marché"
        },
        {
            title: "Internaliser vs Externaliser sa confirmation",
            excerpt: "Le guide complet pour calculer le coût réel de votre service client et choisir le modèle le plus rentable.",
            author: "Equipe Rise",
            date: "08 Avril 2026",
            category: "Guide"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="blog">
            <div className="container mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 max-w-7xl mx-auto">
                    <div className="space-y-6 text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800 shadow-sm transition-colors">
                            <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Ressources & Expertise</span>
                        </div>
                        <h2 className="text-4xl lg:text-6xl font-extrabold text-heading dark:text-white leading-tight">
                            Derniers articles de <br />
                            <span className="text-primary italic">notre blog.</span>
                        </h2>
                    </div>
                    <button className="px-8 py-4 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-primary font-bold rounded-2xl flex items-center gap-3 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm">
                        Voir toutes les ressources 
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>

                {/* Blog Grid */}
                <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {posts.map((post, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-[44px] p-4 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                                {/* Image Placeholder */}
                                <div className="aspect-[16/10] rounded-[32px] bg-slate-200 dark:bg-slate-800 mb-8 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase tracking-widest">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="px-6 pb-6 space-y-4">
                                    <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                            {post.author}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-heading dark:text-white leading-tight group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                    <div className="pt-4 flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest group-hover:gap-4 transition-all">
                                        Lire l'article 
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;
