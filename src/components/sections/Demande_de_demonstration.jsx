import React from 'react';

const DemandeDeDemonstration = () => {
    return (
        <section id="demande-demonstration" className="relative overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-950 dark:text-white py-24 lg:py-32">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center mb-14">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.3em]">
                        Démonstration
                    </span>
                    <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
                        Demandez votre démonstration riseconfireme.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Découvrez en direct comment riseconfireme sécurise vos commandes COD, réduit les retours et augmente votre conversion client.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center">
                    <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-slate-900 dark:shadow-[0_25px_70px_-40px_rgba(0,0,0,0.55)]">
                        <div className="mb-10">
                            <div className="text-sm font-black uppercase tracking-[0.28em] text-primary mb-3">Formulaire de demande</div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Remplissez ce formulaire et notre équipe riseconfireme vous contacte sous 24h pour une session personnalisée.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 block">Nom complet</label>
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 block">Email professionnel</label>
                                <input
                                    type="email"
                                    placeholder="vous@boutique.com"
                                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 block">Nom de la boutique</label>
                                <input
                                    type="text"
                                    placeholder="Nom de votre boutique"
                                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 block">Objectif de la démonstration</label>
                                <textarea
                                    rows="4"
                                    placeholder="Expliquez votre besoin : suivi commandes, support, CRM, etc."
                                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                />
                            </div>
                            <button className="w-full rounded-full bg-primary px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:bg-primary-hover shadow-lg shadow-primary/20">
                                Demander ma démo
                            </button>
                        </form>
                    </div>

                    <div className="rounded-[40px] border border-slate-200 bg-gradient-to-br from-slate-100 via-white to-slate-50 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-[0_25px_70px_-40px_rgba(0,0,0,0.55)]">
                        <div className="space-y-6">
                            <div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-3">Pourquoi une démo ?</div>
                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Obtenez un aperçu opérationnel de riseconfireme, découvrez l’intégration avec votre boutique et voyez immédiatement comment réduire les retours COD.
                                </p>
                            </div>

                            <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm dark:bg-slate-950 dark:border-slate-800">
                                <div className="text-sm font-bold text-slate-950 dark:text-white mb-2">Ce que vous verrez</div>
                                <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                                    <li>• Dashboard de confirmation et performance</li>
                                    <li>• Gestion des comptes et permissions</li>
                                    <li>• Suivi tickets & support prioritaire</li>
                                    <li>• Connexion sécurisée et accès client</li>
                                </ul>
                            </div>

                            <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200 dark:bg-slate-950 dark:border-slate-800">
                                <div className="text-sm font-bold text-slate-950 dark:text-white mb-2">Résultat attendu</div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    Votre boutique gagne en fiabilité sur le COD, vos agents confirment plus vite et vos clients reçoivent un service transparent dès la première démo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemandeDeDemonstration;
