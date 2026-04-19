import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      className="relative pt-32 pb-20 lg:pt-32 lg:pb-40 overflow-x-clip dark:bg-slate-950 transition-colors duration-500"
      onMouseMove={handleMouseMove}
    >
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-4 animate-slide-up [animation-delay:0.1s]">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/10 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-emerald-600 dark:text-emerald-400">
                    {t("hero_badge_orders")}
                  </span>
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/10 rounded-full border border-blue-100 dark:border-blue-800/30">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-bold text-blue-600 dark:text-blue-400">
                    {t("hero_badge_africa")}
                  </span>
                  <div className="w-6 h-6 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <svg className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight lg:leading-[1.1] text-heading dark:text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {t('Confirmez chaque commande')} <br />
                <span className="text-primary tracking-tight">{t('par appel client.')}</span>
              </h1>
              <p className="text-lg lg:text-xl text-body dark:text-slate-400 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                {t('hero_desc')}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                {t("Démarrer gratuitement")}
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-primary border border-slate-100 dark:border-slate-800 rounded-2xl font-semibold transition-all hover:-translate-y-1 flex items-center gap-2">
                {t("Demander une démo")}
              </button>
            </div>

            {/* Static Hero Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/5 dark:bg-slate-800/70 p-4 rounded-3xl border border-slate-200/70 dark:border-slate-700 mt-6 animate-slide-up" style={{ animationDelay: '0.45s' }}>
              {[
                { value: "+30%", label: t("de livraisons réussies") },
                { value: "-25%", label: t("de retours produits") },
                { value: "+20%", label: t("d'upsell") },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-heading dark:text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {[t("Appels de confirmation"), t("Intégration instantanée"), t("Paiement par commande livrée")].map((point, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
                  <div className="w-5 h-5 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center border border-blue-100 dark:border-blue-800">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Agent/Confirmation Mockup */}
          <div
            className="w-full lg:w-1/2 relative lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0"
            style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
          >
            <div className="relative w-full max-w-[560px] rounded-[40px] overflow-hidden border border-slate-200/80 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 shadow-2xl animate-float" style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)` }}>
              <img
                src="/centredappel.jpg"
                alt="Agent confirmant une commande par appel"
                className="w-full aspect-[4/5] sm:aspect-auto sm:h-[600px] object-cover"
              />
            </div>
            <div className="absolute -top-10 left-6 lg:left-10 rtl:left-auto rtl:right-6 rtl:lg:right-10 animate-float-delayed">
              <div className="w-[220px] rounded-[30px] bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-3xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 19h12M9 4h6M4 10h16" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-semibold text-start">{t('Commandes')}</div>
                    <div className="mt-1 text-2xl font-extrabold text-heading dark:text-white text-start">1,247</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 right-6 lg:right-10 rtl:right-auto rtl:left-6 rtl:lg:left-10 animate-float-slow">
              <div className="w-[220px] rounded-[30px] bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-3xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v8m4-4H8" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-semibold text-start">{t('Profit')}</div>
                    <div className="mt-1 text-2xl font-extrabold text-heading dark:text-white text-start">284,500 DA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(0.5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-1deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
        .animate-float-slow { animation: float-slow 10s ease-in-out infinite 0.5s; }
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
