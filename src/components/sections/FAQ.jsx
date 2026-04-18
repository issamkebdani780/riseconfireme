import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQ = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(0);

    const questions = [
        { q: t("faq_q1"), a: t("faq_a1") },
        { q: t("faq_q2"), a: t("faq_a2") },
        { q: t("faq_q3"), a: t("faq_a3") },
        { q: t("faq_q4"), a: t("faq_a4") },
        { q: t("faq_q5"), a: t("faq_a5") },
        { q: t("faq_q6"), a: t("faq_a6") },
        { q: t("faq_q7"), a: t("faq_a7") }
    ];

    return (
        <section className="py-24 lg:py-40 bg-white dark:bg-slate-950 overflow-hidden transition-colors duration-500" id="faq">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-100 dark:border-slate-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-[10px] font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-none">{t('Questions Fréquentes')}</span>
                    </div>
                    <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
                        {t('Des réponses pour lever')} <br />
                        <span className="text-primary italic">{t('vos doutes.')}</span>
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {questions.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`group border rounded-[32px] transition-all duration-500 animate-slide-up ${openIndex === i ? 'bg-[#fbfcfd] dark:bg-slate-900 border-primary/20 dark:border-primary/30 shadow-xl shadow-slate-200/50 dark:shadow-none' : 'bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700'}`}
                            style={{ animationDelay: `${0.2 + i * 0.05}s` }}
                        >
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                className="w-full text-start p-6 lg:p-8 flex items-center justify-between gap-6"
                            >
                                <span className={`text-base lg:text-lg font-bold transition-colors ${openIndex === i ? 'text-heading dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-heading dark:group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-primary border-primary text-white rotate-180' : 'border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 bg-white dark:bg-slate-900 group-hover:border-slate-200 dark:group-hover:border-slate-700'}`}>
                                    {openIndex === i ? 
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg> : 
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                                    }
                                </div>
                            </button>
                            
                             <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 lg:px-8 pb-8 pt-2">
                                    <div className="h-[1px] w-full bg-slate-100 dark:bg-slate-800 mb-6" />
                                    <p className="text-body dark:text-slate-400 leading-relaxed font-medium">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                        {t('Vous avez une autre question ?')} 
                        <a href="#contact" className="text-primary font-bold hover:underline underline-offset-4 ml-2 flex inline-flex items-center gap-1">
                            {t('Envoyez-nous un message')} <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default FAQ;
