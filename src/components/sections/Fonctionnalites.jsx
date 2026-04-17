import React, { useState } from 'react';
import Logo from '../ui/Logo';

const Features = () => {
    return (
        <section className="py-24 lg:py-32 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500" id="features">
            <div className="container mx-auto px-4 sm:px-6">

                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-32 space-y-4 px-4">
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        Des experts au service de <br />
                        <span className="text-primary tracking-tight">votre performance.</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
                        Découvrez comment RiseConfirm optimise chaque étape de votre processus de confirmation.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto space-y-20 lg:space-y-40">

                    {/* 1. Confirmation par appel */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary border border-blue-100 dark:border-blue-800 shrink-0 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white">Confirmation humaine experte</h3>
                            </div>
                            <p className="text-body dark:text-slate-400 leading-relaxed">
                                Nos agents ne se contentent pas d'appeler. Ils sont formés pour rassurer le client, valider les informations de livraison et détecter les intentions d'achat fragiles.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <FeatureBullet text="Scripts personnalisés selon votre marque" />
                                <FeatureBullet text="Gestion des objections clients par des pros" />
                                <FeatureBullet text="Traitement en moins de 15 minutes par commande" />
                            </ul>
                            <div className="p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border-l-[3px] border-primary mt-8">
                                <p className="text-sm italic text-blue-700 dark:text-blue-300 font-medium">
                                    "La voix humaine reste le levier le plus puissant pour transformer une commande en livraison réussie."
                                </p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 relative">
                            <div className="bg-slate-50 dark:bg-slate-900 rounded-[32px] p-6 sm:p-10 border border-slate-100 dark:border-slate-800 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                                
                                {/* Mock Call UI */}
                                <div className="space-y-8 relative z-10">
                                    <div className="flex justify-between items-center">
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Interface Agent - En direct</div>
                                        <div className="px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full text-[10px] font-bold text-green-600">Appel Actif</div>
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                                        <div className="w-20 h-20 bg-primary rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                                            <svg className="w-10 h-10 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-xl font-black text-heading dark:text-white">Mme. Karima Bensaid</div>
                                            <div className="text-sm text-slate-400">+213 (0) 560 XX XX XX</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                            <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Délai Traitement</div>
                                            <div className="text-base font-black text-heading dark:text-white">04:25 min</div>
                                        </div>
                                        <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
                                            <div className="text-[9px] font-bold text-slate-400 uppercase mb-1">Sentiment Client</div>
                                            <div className="text-base font-black text-emerald-500 flex items-center gap-2">Positif 😊</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Automation SMS / WhatsApp */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 border border-indigo-100 dark:border-indigo-800 shrink-0 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white">Automatisation Intelligente</h3>
                            </div>
                            <p className="text-body dark:text-slate-400 leading-relaxed">
                                Ne laissez aucun client sans nouvelles. RiseConfirm utilise des notifications automatiques WhatsApp et SMS pour renforcer la confiance et rappeler la livraison.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <FeatureBullet 
                                    text="Relances automatiques SMS (En cas d'absence)" 
                                    customIcon={<svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>}
                                />
                                <FeatureBullet 
                                    text="Notifications de livraison automatisées WhatsApp" 
                                    customIcon={<svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a5.8 5.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>}
                                />
                                <FeatureBullet 
                                    text="IA vocale (VoiceBot) pour les pré-confirmations" 
                                    customIcon={<svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>}
                                />
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center">
                            <div className="relative w-[300px] h-[550px] bg-slate-900 rounded-[45px] border-[8px] border-slate-800 shadow-3xl overflow-hidden shadow-emerald-500/10">
                                {/* Screen content */}
                                <div className="h-full bg-slate-100 flex flex-col">
                                    <div className="h-14 bg-white border-b border-slate-200 flex items-center px-6 gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Logo showText={false} iconClassName="w-5 h-5" />
                                        </div>
                                        <div className="text-xs font-bold text-heading">RiseConfirm AI</div>
                                    </div>
                                    <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-[#e5ddd5]">
                                        <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-tl-none text-[11px] shadow-sm">
                                            Bonjour M. Kamel ! Votre commande <span className="font-bold text-primary">#4582</span> a été validée avec succès. Elle est en route vers Constantine. 🚛
                                        </div>
                                        <div className="max-w-[80%] bg-white p-3 rounded-2xl rounded-tl-none text-[11px] shadow-sm animate-pulse-slow">
                                            Prévoyez le montant de <span className="font-bold text-emerald-600">8,500 DA</span> pour la livraison demain entre 10h et 14h. Merci de votre confiance !
                                        </div>
                                        <div className="flex justify-end">
                                            <div className="max-w-[80%] bg-[#dcf8c6] p-3 rounded-2xl rounded-tr-none text-[11px] shadow-sm font-medium">
                                                C'est noté, merci beaucoup. 👍
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Floating Card */}
                            <div className="absolute top-1/2 -right-10 bg-white dark:bg-slate-800 p-5 rounded-3xl shadow-premium border border-slate-100 dark:border-slate-800 animate-float">
                                <div className="flex items-center gap-3">
                                     <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center text-white">
                                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                     </div>
                                     <div>
                                         <div className="text-[10px] font-black text-slate-400 uppercase">Taux de réponse</div>
                                         <div className="text-xl font-black text-heading dark:text-white">98%</div>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Interactive Real-Time Dashboard */}
                    <InteractiveDashboard />

                    {/* 4. API & Webhooks */}
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mt-20 lg:mt-40">
                        <div className="w-full lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-rose-50 dark:bg-rose-900/20 rounded-xl flex items-center justify-center text-rose-600 border border-rose-100 dark:border-rose-800 shrink-0 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                </div>
                                <h3 className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white">API Publique & Webhooks</h3>
                            </div>
                            <p className="text-body dark:text-slate-400 leading-relaxed">
                                Intégrez RiseConfirm à n'importe quel système de votre entreprise grâce à notre API puissante et documentée pour les développeurs.
                            </p>
                            <ul className="space-y-4 pt-4">
                                <FeatureBullet text="Webhooks en temps réel pour chaque changement de statut" />
                                <FeatureBullet text="Documentation API complète et facile à utiliser" />
                                <FeatureBullet text="Connexion rapide avec vos CRM et ERP internes" />
                            </ul>
                        </div>
                        <div className="w-full lg:w-1/2 relative flex justify-center">
                            <div className="w-full max-w-md bg-[#1e1e1e] rounded-[24px] p-6 shadow-2xl relative overflow-hidden text-left border border-slate-800">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="ml-2 text-[10px] text-slate-500 font-mono">POST /api/v1/orders/webhook</span>
                                </div>
                                <pre className="text-[11px] text-green-400 font-mono overflow-x-auto leading-relaxed">
{`{
  "event": "order.confirmed",
  "data": {
    "order_id": "RC-4582",
    "status": "confirmed",
    "customer": {
      "name": "Kamel M.",
      "phone": "+213560XXXXXX"
    },
    "delivery": {
      "wilaya": "Constantine",
      "amount": 8500
    },
    "agent_notes": "Client dispo demain matin."
  }
}`}
                                </pre>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

const FeatureBullet = ({ text, customIcon }) => (
    <li className="flex items-center gap-3">
        <div className="w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 shadow-sm border border-emerald-100 dark:border-emerald-800">
            {customIcon || <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
        </div>
        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">{text}</span>
    </li>
);

export default Features;
