import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t } = useTranslation();
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            desc: t("pricing_starter_desc"),
            price: t("Libre"),
            commission: "25 DA",
            unit: t("par commande"),
            features: [
                t("Confirmation par appel"),
                t("Scripts standards"),
                t("Dashboard de base"),
                t("Relances WhatsApp auto"),
                t("Support par email")
            ],
            notIncluded: [
                t("Agents dédiés"),
                t("Upsell personnalisé"),
                t("API & Webhooks")
            ],
            cta: t("Démarrer gratuitement"),
            color: "slate"
        },
        {
            name: "Performance",
            desc: t("pricing_performance_desc"),
            price: "4.900 DA",
            commission: "18 DA",
            unit: t("/ mois + commande"),
            recommended: true,
            features: [
                t("Tout le plan Starter"),
                t("Scripts de vente avancés"),
                t("Upsell & Cross-sell actif"),
                t("Priorité sur les appels"),
                t("Intégration API & Webhooks"),
                t("Support Prioritaire 7j/7")
            ],
            cta: t("Choisir Performance"),
            color: "primary"
        },                    
        {
            name: "Enterprise",
            desc: t("pricing_enterprise_desc"),
            price: t("Sur mesure"),
            commission: t("Contactez-nous"),
            unit: "",
            features: [
                t("Agents 100% dédiés"),
                t("Formation sur mesure"),
                t("Reporting BI avancé"),
                t("Manager de compte dédié"),
                t("SLA Garanti"),
                t("Marque blanche possible")
            ],
            cta: t("Contacter l'équipe"),
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
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{t('Tarification Transparente')}</span>
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-heading dark:text-white leading-[1.1] tracking-tight animate-slide-up">
                        {t('Payez à la')} <span className="text-primary italic">{t('performance.')}</span>
                    </h2>
                    <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {t('pricing_desc')}
                    </p>
                </div>

                {/* Switcher */}
                <div className="flex justify-center mb-16 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl flex items-center gap-1 border border-slate-200 dark:border-slate-800">
                        <button 
                            onClick={() => setIsAnnual(false)}
                            className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${!isAnnual ? 'bg-white dark:bg-slate-800 text-primary shadow-md' : 'text-slate-500 dark:text-slate-400'}`}
                        >
                            {t('Facturation mensuelle')}
                        </button>
                        <button 
                            onClick={() => setIsAnnual(true)}
                            className={`px-6 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-white dark:bg-slate-800 text-primary shadow-md' : 'text-slate-500 dark:text-slate-400'}`}
                        >
                            {t('Facturation annuelle')}
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
                                    {t('Recommandé')}
                                </div>
                            )}

                            <div className="mb-8 text-start">
                                <h3 className="text-xl font-black text-heading dark:text-white mb-2">{plan.name}</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{plan.desc}</p>
                            </div>

                            <div className="mb-10 text-start">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl lg:text-5xl font-black text-heading dark:text-white tracking-tighter">{plan.price}</span>
                                    <span className="text-sm font-bold text-slate-400">{plan.unit}</span>
                                </div>
                                {plan.commission && (
                                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800 inline-block">
                                        <div className="text-[10px] font-black text-primary uppercase tracking-widest">{t('Commission')}</div>
                                        <div className="text-lg font-black text-primary">{plan.commission} <span className="text-xs text-primary/70">{t('/ CMD')}</span></div>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 space-y-4 mb-10">
                                {plan.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 text-start">
                                        <div className="w-5 h-5 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-[13px] font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded && plan.notIncluded.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-3 opacity-40 grayscale text-start">
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

                {/* Interactive ROI Calculator */}
                <div className="max-w-5xl mx-auto mt-24 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                    <RoiCalculator />
                </div>

                 {/* Help Card */}
                 <div className="max-w-xl mx-auto text-center mt-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {t("Besoin d'une offre personnalisée")} 
                        <a href="#contact" className="text-primary hover:underline underline-offset-4">{t('Contactez nos experts')}</a>
                    </p>
                </div>

            </div>
        </section>
    );
};

const RoiCalculator = () => {
    const { t } = useTranslation();
    const [orders, setOrders] = useState(1000);
    const [returnRate, setReturnRate] = useState(30);
    const [avgOrderValue, setAvgOrderValue] = useState(5000);

    // Current Loss Calculations
    const totalReturns = Math.round(orders * (returnRate / 100));
    const lostRevenue = totalReturns * avgOrderValue;
    const lostShipping = totalReturns * 600; // Assume 600 DA average shipping cost
    const totalLoss = lostRevenue + lostShipping;

    // RiseConfirm Recovery Calculations (Assume 30% of returns are recovered)
    const recoveredOrders = Math.round(totalReturns * 0.30);
    const recoveredRevenue = recoveredOrders * avgOrderValue;
    const recoveredShipping = recoveredOrders * 600;
    const totalRecovered = recoveredRevenue + recoveredShipping;

    return (
        <div className="bg-white dark:bg-slate-900 rounded-[44px] p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 rtl:right-auto rtl:left-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2 pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Inputs */}
                <div className="lg:col-span-5 space-y-8 text-start">
                    <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-primary mb-6 border border-blue-100 dark:border-blue-800/50 shadow-sm">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <h3 className="text-2xl font-black text-heading dark:text-white mb-2">{t('Simulateur de')} <span className="text-primary italic">{t('Pertes & ROI')}</span></h3>
                        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{t('calculator_desc')}</p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bold">
                                <span className="text-slate-700 dark:text-slate-300">{t('Commandes mensuelles')}</span>
                                <span className="text-primary">{orders} CMD</span>
                            </div>
                            <input 
                                type="range" min="100" max="10000" step="100" 
                                value={orders} onChange={(e) => setOrders(Number(e.target.value))}
                                className="w-full accent-primary"
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bold">
                                <span className="text-slate-700 dark:text-slate-300">{t('Taux de retour actuel')}</span>
                                <span className="text-primary">{returnRate}%</span>
                            </div>
                            <input 
                                type="range" min="10" max="60" step="1" 
                                value={returnRate} onChange={(e) => setReturnRate(Number(e.target.value))}
                                className="w-full accent-rose-500"
                            />
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-bold">
                                <span className="text-slate-700 dark:text-slate-300">{t('Panier moyen')}</span>
                                <span className="text-primary">{avgOrderValue.toLocaleString()} DA</span>
                            </div>
                            <input 
                                type="range" min="1000" max="25000" step="500" 
                                value={avgOrderValue} onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                                className="w-full accent-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Outputs */}
                <div className="lg:col-span-7 grid md:grid-cols-2 gap-6">
                    {/* Loss Block */}
                    <div className="bg-rose-50/50 dark:bg-rose-900/10 rounded-[32px] p-6 lg:p-8 border border-rose-100 dark:border-rose-800/30 flex flex-col justify-center text-start">
                        <h4 className="text-[11px] font-black text-rose-400 dark:text-rose-500 uppercase tracking-widest mb-6">{t('Vos pertes actuelles / Mois')}</h4>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center pb-3 border-b border-rose-100 dark:border-rose-800/30">
                                <span className="text-xs font-bold text-slate-500">{t('Commandes échouées')}</span>
                                <span className="text-sm font-black text-rose-500">{totalReturns}</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-rose-100 dark:border-rose-800/30">
                                <span className="text-xs font-bold text-slate-500">{t('Perte logistique')}</span>
                                <span className="text-sm font-black text-rose-500">-{lostShipping.toLocaleString()} DA</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-500">{t('C.A. Perdu')}</span>
                                <span className="text-sm font-black text-rose-500">-{lostRevenue.toLocaleString()} DA</span>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 text-center">
                            <div className="text-[10px] uppercase font-black text-rose-400 tracking-widest mb-1">{t('Total Perdu')}</div>
                            <div className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white truncate">
                                -{totalLoss.toLocaleString()} <span className="text-base font-bold text-slate-400">DA</span>
                            </div>
                        </div>
                    </div>

                    {/* Recovered Block */}
                    <div className="bg-emerald-50/50 dark:bg-emerald-900/10 rounded-[32px] p-6 lg:p-8 border border-emerald-100 dark:border-emerald-800/30 flex flex-col justify-center text-start">
                        <h4 className="text-[11px] font-black text-emerald-500 dark:text-emerald-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                             {t('Récupéré via RiseConfirm')}
                        </h4>
                        
                        <div className="space-y-4 mb-6">
                            <div className="flex justify-between items-center pb-3 border-b border-emerald-100 dark:border-emerald-800/30">
                                <span className="text-xs font-bold text-slate-500">{t('Commandes sauvées')}</span>
                                <span className="text-sm font-black text-emerald-500">+{recoveredOrders}</span>
                            </div>
                            <div className="flex justify-between items-center pb-3 border-b border-emerald-100 dark:border-emerald-800/30">
                                <span className="text-xs font-bold text-slate-500">{t('Économie logistique')}</span>
                                <span className="text-sm font-black text-emerald-500">+{recoveredShipping.toLocaleString()} DA</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-500">{t('C.A. Récupéré')}</span>
                                <span className="text-sm font-black text-emerald-500">+{recoveredRevenue.toLocaleString()} DA</span>
                            </div>
                        </div>

                        <div className="mt-auto pt-4 text-center">
                            <div className="text-[10px] uppercase font-black text-emerald-500 tracking-widest mb-1">{t('Bénéfice Net Ajouté')}</div>
                            <div className="text-2xl lg:text-3xl font-extrabold text-heading dark:text-white truncate">
                                +{totalRecovered.toLocaleString()} <span className="text-base font-bold text-slate-400">DA</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="mt-8 text-center px-4">
                <p className="text-[10px] text-slate-400 font-medium italic">{t('calculator_note')}</p>
            </div>
        </div>
    );
};

export default Pricing;
