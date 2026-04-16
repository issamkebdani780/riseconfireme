import React from 'react';

const Blog = () => {
    const articles = [
        {
            title: "COD : comment réduire les retours clients ?",
            description: "Des stratégies concrètes pour sécuriser les commandes à la livraison et améliorer vos conversions.",
            category: "E-commerce"
        },
        {
            title: "Intégrations RiseConfirm avec Shopify et WooCommerce",
            description: "Guide pas à pas pour connecter votre boutique et automatiser la confirmation des commandes.",
            category: "Technique"
        },
        {
            title: "Pourquoi les marketplaces choisissent RiseConfirm",
            description: "Étude des gains de livraison, de fiabilité et de scalabilité pour les vendeurs en ligne.",
            category: "Cas client"
        }
    ];


    return (
        <section className="py-24 lg:py-40 bg-[#f8fbff] dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="blog">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Ressources</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight">
                        Découvrez nos articles et guides <br />
                        <span className="text-primary italic">pour optimiser le COD.</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed">
                        Accédez à des contenus pratiques, des études de cas et des ressources pour accélérer la croissance de votre activité e-commerce.
                    </p>
                </div>

                <div className="grid xl:grid-cols-3 gap-8 mb-16">
                    {articles.map((article, index) => (
                        <article key={index} className="group bg-white dark:bg-slate-900 rounded-[32px] border border-slate-100 dark:border-slate-800 p-8 shadow-lg shadow-slate-200/30 dark:shadow-none transition-all hover:-translate-y-1 hover:border-primary/30">
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">{article.category}</div>
                            <h3 className="text-2xl font-extrabold text-heading dark:text-white mb-4">{article.title}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{article.description}</p>
                            <button className="mt-8 inline-flex items-center gap-2 text-primary font-bold hover:underline">
                                Lire l'article
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
