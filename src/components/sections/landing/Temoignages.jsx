import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Temoignages = () => {
    const { t } = useTranslation();
    const items = [
        {
            id: 0,
            name: t("Hichem Belabed"),
            role: t("CEO, BioShop DZ"),
            quote: t("quote_hichem"),
            result: t("result_hichem"),
            logo: "/confiance/conf1.webp",
            before: t("before_hichem"),
            after: t("after_hichem"),
            impact: t("impact_hichem"),
            detail: t("detail_hichem"),
        },
        {
            id: 1,
            name: t("Imane Seddik"),
            role: t("Fondatrice, Glamour Home"),
            quote: t("quote_imane"),
            result: t("result_imane"),
            logo: "/confiance/conf2.webp",
            before: t("before_imane"),
            after: t("after_imane"),
            impact: t("impact_imane"),
            detail: t("detail_imane"),
        },
        {
            id: 2,
            name: t("Sofiane Merrouche"),
            role: t("Manager E-commerce"),
            quote: t("quote_sofiane"),
            result: t("result_sofiane"),
            logo: "/confiance/conf3.webp",
            before: t("before_sofiane"),
            after: t("after_sofiane"),
            impact: t("impact_sofiane"),
            detail: t("detail_sofiane"),
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = items[activeIndex];

    return (
        <section className="py-24 lg:py-32 bg-slate-50/50 dark:bg-slate-950 overflow-hidden transition-colors duration-500" id="temoignages">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{t('Témoignages & Cas client')}</span>
                    </div>
                    <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight">
                        {t('Feedbacks clients interactifs.')}
                    </h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] max-w-7xl mx-auto">
                    <div className="space-y-4">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveIndex(item.id)}
                                className={`w-full text-start rounded-4xl border p-6 transition-all ${activeIndex === item.id ? 'border-primary bg-primary/5 shadow-lg' : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900'}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-black">{item.name.split(' ').map(n => n[0]).join('')}</div>
                                    <div className="flex-1">
                                        <div className="text-sm font-black text-heading dark:text-white">{item.name}</div>
                                        <div className="text-xs font-medium text-slate-400 dark:text-slate-500">{item.role}</div>
                                        <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.quote}</p>
                                    </div>
                                </div>
                                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-black uppercase text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300">
                                    {item.result}
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-4xl p-8 shadow-xl shadow-slate-200/30 dark:shadow-none">
                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4">{t('ÉTUDE DE CAS')}</div>
                        {activeItem.logo && (
                            <img src={activeItem.logo} alt={`${activeItem.caseTitle} logo`} className="h-12 mb-4 object-contain" />
                        )}
                        <h3 className="text-2xl font-extrabold text-heading dark:text-white mb-4">{activeItem.caseTitle}</h3>
                        <div className="space-y-4">
                            <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 p-5 border border-slate-100 dark:border-slate-800">
                                <div className="text-[11px] uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500 font-black mb-2">{t('Avant')}</div>
                                <div className="text-lg font-black text-heading dark:text-white">{activeItem.before}</div>
                            </div>
                            <div className="rounded-3xl bg-primary/10 p-5 border border-primary/20">
                                <div className="text-[11px] uppercase tracking-[0.25em] text-primary font-black mb-2">{t('Après')}</div>
                                <div className="text-lg font-black text-primary">{activeItem.after}</div>
                            </div>
                            <div className="rounded-3xl bg-emerald-50 dark:bg-emerald-900/10 p-5 border border-emerald-100 dark:border-emerald-800">
                                <div className="text-[11px] uppercase tracking-[0.25em] text-emerald-600 font-black mb-2">{t('Impact')}</div>
                                <div className="text-lg font-black text-emerald-600">{activeItem.impact}</div>
                            </div>
                        </div>
                        <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">{activeItem.detail}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Temoignages;
