import React, { useState } from 'react';

const Comment_ca_marche = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [commandes, setCommandes] = useState([
        { id: '#CMD-842', client: 'Sarah M.', status: 'Validée', amount: '15,000 DA', time: 'Il y a 2 min' },
        { id: '#CMD-841', client: 'Karim B.', status: 'En attente', amount: '8,500 DA', time: 'Il y a 15 min' },
        { id: '#CMD-840', client: 'Lina K.', status: 'Annulée', amount: '12,000 DA', time: 'Il y a 1h' }
    ]);

    const handleSearch = (e) => setSearchTerm(e.target.value);
    
    const handleAdd = () => {
        const newId = `#CMD-${Math.floor(Math.random() * 1000) + 1000}`;
        const newAmount = `${Math.floor(Math.random() * 20) + 5},000 DA`;
        const clients = ['Amine T.', 'Yasmine C.', 'Walid R.', 'Kenza S.', 'Mehdi B.'];
        const randomClient = clients[Math.floor(Math.random() * clients.length)];
        
        const newCmd = {
            id: newId,
            client: randomClient,
            status: 'Validée',
            amount: newAmount,
            time: 'À l\'instant'
        };
        setCommandes([newCmd, ...commandes]);
    };

    const handleDelete = (idToDelete) => {
        setCommandes(commandes.filter(cmd => cmd.id !== idToDelete));
    };
    
    const filteredCommandes = commandes.filter(cmd => 
        cmd.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
        cmd.client.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const steps = [
        {
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" /></svg>,
            title: "Intégration Flash",
            desc: "Connectez votre boutique (Shopify, WooCommerce, RiseManager) en quelques clics via notre API ou nos plugins natifs.",
            color: "blue"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
            title: "Réception Automatique",
            desc: "Chaque nouvelle commande est instantanément synchronisée et attribuée à l'un de nos agents disponibles.",
            color: "indigo"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
            title: "Confirmation Humaine",
            desc: "Nos experts appellent vos clients en moins de 15 min pour valider les coordonnées et l'intention d'achat.",
            color: "primary"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>,
            title: "Suivi & Relances",
            desc: "En cas d'échec d'appel, nous activons des relances multicanales (WhatsApp, SMS, Voice AI) pour ne rien perdre.",
            color: "emerald"
        },
        {
            icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>,
            title: "Livraison Maximisée",
            desc: "Vos commandes confirmées sont marquées dans votre système, prêtes pour une expédition à haut taux de réussite.",
            color: "orange"
        }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden" id="process">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-24 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm animate-slide-up">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">Processus de Confirmation</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        Comment ça <span className="text-primary italic">marche ?</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up">
                        Une transition invisible pour vos opérations, un impact immédiat sur votre chiffre d'affaires.
                    </p>
                </div>

                {/* Steps Layout */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-100 dark:via-slate-800 to-transparent -translate-y-1/2" />

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="group relative animate-slide-up" style={{ animationDelay: `${0.1 * i}s` }}>
                                <div className="flex flex-col items-center text-center space-y-6">
                                    {/* Icon Circle */}
                                    <div className={`w-20 h-20 rounded-[32px] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/50 transition-all duration-500 relative bg-white dark:bg-slate-900`}>
                                        <div className="absolute inset-0 bg-primary/5 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {step.icon}
                                        {/* Number Badge */}
                                        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-heading dark:bg-slate-800 text-white text-xs font-black flex items-center justify-center border-2 border-white dark:border-slate-950">
                                            {i + 1}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg font-black text-heading dark:text-white group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-[13px] leading-relaxed text-slate-500 dark:text-slate-400 font-medium">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Feature Highlight Card */}
                <div className="mt-32 max-w-5xl mx-auto">
                    <div className="bg-slate-900 rounded-[48px] p-8 lg:p-16 overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-1000" />
                        
                        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-[10px] font-black text-white uppercase tracking-widest">Temps Réel</div>
                                <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">Suivez chaque appel en direct depuis votre interface.</h3>
                                <p className="text-slate-400 leading-relaxed font-medium">
                                    Plus besoin d'appeler vos agents. Le dashboard RiseConfirm centralise les enregistrements audio, les motifs d'annulation et le ROI net généré.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="flex items-center gap-3 bg-white/5 py-3 px-5 rounded-2xl border border-white/10">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                        <div className="text-sm font-bold text-white">Analytics Avancés</div>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white/5 py-3 px-5 rounded-2xl border border-white/10">
                                        <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                                        <div className="text-sm font-bold text-white">Sync Auto</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="relative mt-8 lg:mt-0">
                                {/* Interactive Indicator Badge */}
                                <div className="absolute -top-4 -left-4 z-20 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest py-2 px-4 rounded-full shadow-lg shadow-emerald-500/30 flex items-center gap-2 animate-bounce">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                                    </span>
                                    Interactif : Testez-moi
                                </div>
                                {/* Interactive Visual Mockup */}
                                <div className="bg-white/5 backdrop-blur-md rounded-[32px] p-6 border border-white/10 shadow-2xl relative overflow-hidden flex flex-col h-[400px]">
                                    
                                    {/* Mini Stats */}
                                    <div className="grid grid-cols-3 gap-2 mb-4 shrink-0">
                                         {[
                                             { label: "Validés", value: "842" },
                                             { label: "Taux", value: "92.4%" },
                                             { label: "Profit", value: "1.2M" }
                                         ].map((item, idx) => (
                                             <div key={idx} className="p-2 bg-white/5 rounded-xl border border-white/5 text-center">
                                                 <div className="text-[10px] sm:text-xs font-bold text-slate-400 truncate">{item.label}</div>
                                                 <div className="text-sm sm:text-base font-black text-white">{item.value}</div>
                                             </div>
                                         ))}
                                    </div>

                                    {/* Search & Add */}
                                    <div className="flex gap-2 mb-4 shrink-0">
                                        <div className="relative flex-1">
                                            <input 
                                                type="text" 
                                                placeholder="Rechercher une commande..." 
                                                value={searchTerm}
                                                onChange={handleSearch}
                                                className="w-full bg-white/10 text-white text-xs sm:text-sm rounded-xl py-2.5 pl-9 pr-3 border border-white/10 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-500"
                                            />
                                            <svg className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </div>
                                        <button 
                                            onClick={handleAdd}
                                            className="w-10 h-10 flex-shrink-0 bg-primary hover:bg-primary-hover text-white rounded-xl flex items-center justify-center transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
                                            title="Ajouter une commande"
                                        >
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                        </button>
                                    </div>

                                    {/* Commandes List */}
                                    <div className="flex-1 overflow-y-auto pr-2 space-y-2 -mr-2 hide-scrollbar">
                                        <style dangerouslySetInnerHTML={{__html: `
                                            .hide-scrollbar::-webkit-scrollbar { display: none; }
                                            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                                        `}} />
                                        {filteredCommandes.length > 0 ? (
                                            filteredCommandes.map((cmd) => (
                                                <div key={cmd.id} className="p-3 bg-white/5 rounded-xl border border-white/5 group hover:bg-white/10 transition-all">
                                                    <div className="flex justify-between items-start mb-1.5">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-sm font-bold text-white">{cmd.id}</span>
                                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                                                                cmd.status === 'Validée' ? 'bg-emerald-500/20 text-emerald-400' :
                                                                cmd.status === 'En attente' ? 'bg-amber-500/20 text-amber-400' :
                                                                'bg-red-500/20 text-red-400'
                                                            }`}>
                                                                {cmd.status}
                                                            </span>
                                                        </div>
                                                        <button 
                                                            onClick={() => handleDelete(cmd.id)}
                                                            className="text-slate-500 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"
                                                            title="Supprimer"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between items-center text-xs">
                                                        <div className="text-slate-400 font-medium">{cmd.client}</div>
                                                        <div className="font-semibold text-white">{cmd.amount}</div>
                                                    </div>
                                                    <div className="text-[10px] text-slate-500 mt-1">{cmd.time}</div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-slate-500 text-sm">
                                                Aucune commande trouvée
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* Floating Label */}
                                <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-[28px] shadow-2xl animate-float">
                                     <div className="text-[10px] font-black uppercase tracking-widest mb-1">Impact direct</div>
                                     <div className="text-2xl font-black">+28% ROI</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Comment_ca_marche;
