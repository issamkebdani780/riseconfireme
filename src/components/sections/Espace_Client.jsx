import React from 'react';

const Espace_Client = () => {
    return (
        <section id="espace-client" className="relative overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white py-24 lg:py-32">
            <div className="absolute inset-x-0 top-0 h-72 bg-linear-to-b from-primary/10 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center pb-12">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.3em]">
                        Espace Client
                    </span>
                    <h2 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-slate-950 dark:text-white">
                        Votre accès sécurisé à RiseConfirm.
                    </h2>
                    <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
                        Connectez-vous, pilotez votre dashboard, gérez les comptes et suivez vos demandes de support directement depuis un espace client professionnel.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] items-center">
                    <div className="rounded-[40px] border border-slate-200 bg-slate-50 p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.3)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_25px_70px_-40px_rgba(0,0,0,0.55)]">
                        <div className="mb-8">
                            <div className="text-sm font-black uppercase tracking-[0.28em] text-primary mb-3">Connexion sécurisée</div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Accédez à votre espace RiseConfirm via un portail sécurisé et suivez vos performances en temps réel.
                            </p>
                        </div>

                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 block">Email professionnel</label>
                                <input
                                    type="email"
                                    placeholder="votre.nom@boutique.com"
                                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-bold text-slate-700 dark:text-slate-200 mb-2 block">Mot de passe</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15 transition dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
                                <label className="inline-flex items-center gap-2">
                                    <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-500" />
                                    Se souvenir de moi
                                </label>
                                <a href="#contact" className="font-bold text-primary hover:text-primary-hover transition-colors">Mot de passe oublié ?</a>
                            </div>
                            <button className="w-full rounded-full bg-primary px-6 py-4 text-sm font-black uppercase tracking-[0.18em] text-slate-950 transition hover:bg-primary-hover shadow-lg shadow-primary/20">
                                Se connecter
                            </button>
                        </form>

                        <div className="mt-10 grid gap-4">
                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                <div className="text-[10px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 font-black mb-2">Dashboard</div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Visualisez vos commandes confirmées, performances agents et statistiques clé depuis une interface tout-en-un.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                <div className="text-[10px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 font-black mb-2">Support</div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Ouvrez des tickets, suivez l’avancement et recevez des réponses priorisées par notre équipe dédiée.
                                </p>
                            </div>
                            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                <div className="text-[10px] uppercase tracking-[0.28em] text-slate-500 dark:text-slate-400 font-black mb-2">Gestion de compte</div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                                    Gérez les accès, les notifications et les rôles de votre équipe directement dans votre espace client.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="rounded-[40px] border border-slate-200 bg-linear-to-br from-slate-100 via-slate-50 to-white p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 dark:shadow-[0_25px_70px_-40px_rgba(0,0,0,0.55)]">
                            <div className="flex items-center justify-between gap-4 mb-6">
                                <div>
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-2">Aperçu rapide</div>
                                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">Un cockpit dédié à votre croissance.</h3>
                                </div>
                                <div className="rounded-3xl bg-slate-100 px-4 py-3 text-xs uppercase tracking-[0.3em] text-slate-700 font-black dark:bg-slate-950 dark:text-slate-300">RiseConfirm</div>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-4">Commandes</div>
                                    <div className="flex items-end gap-3">
                                        <span className="text-4xl font-black text-slate-950 dark:text-white">842</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">confirmées aujourd’hui</span>
                                    </div>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-4">Tickets</div>
                                    <div className="flex items-end gap-3">
                                        <span className="text-4xl font-black text-slate-950 dark:text-white">12</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">ouverts en attente</span>
                                    </div>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-4">Alertes</div>
                                    <div className="flex items-end gap-3">
                                        <span className="text-4xl font-black text-slate-950 dark:text-white">Top</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">priorité client</span>
                                    </div>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                                    <div className="text-[10px] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400 mb-4">Ressources</div>
                                    <div className="flex items-end gap-3">
                                        <span className="text-4xl font-black text-slate-950 dark:text-white">24</span>
                                        <span className="text-sm text-slate-500 dark:text-slate-400">guides & rapports</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-[40px] border border-slate-200 bg-white p-8 shadow-[0_25px_70px_-40px_rgba(15,23,42,0.15)] dark:border-slate-800 dark:bg-slate-900/95 dark:shadow-[0_25px_70px_-40px_rgba(0,0,0,0.55)]">
                            <div className="text-[10px] uppercase tracking-[0.3em] text-primary font-black mb-4">Support Prioritaire</div>
                            <p className="text-slate-700 leading-relaxed mb-6 dark:text-slate-300">
                                Gardez une longueur d’avance avec une assistance projet, un suivi ticket dédié et des réponses rapides sur vos besoins COD.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                                    <div className="text-sm font-black text-slate-950 dark:text-white">Tickets ouverts</div>
                                    <p className="text-slate-600 text-sm mt-2 dark:text-slate-400">12 demandes en cours</p>
                                </div>
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-950">
                                    <div className="text-sm font-black text-slate-950 dark:text-white">Temps de réponse</div>
                                    <p className="text-slate-600 text-sm mt-2 dark:text-slate-400"><span className="text-primary"><strong>moins de 2h</strong></span> en moyenne</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Espace_Client;
