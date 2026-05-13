import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) => {
  const { i18n } = useTranslation();
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = progress * end;
      setCount(currentCount);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={counterRef}>
      {prefix}{count.toLocaleString(i18n.language === 'ar' ? 'ar-DZ' : (i18n.language === 'en' ? 'en-US' : 'fr-FR'), {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}{suffix}
    </span>
  );
};

const Preuve = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 lg:py-32 bg-[#f8fbff] dark:bg-slate-950 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-24 space-y-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-heading dark:text-white leading-tight animate-slide-up">
            {t('La preuve par')} 
            <span className="text-primary tracking-tight">{t('les chiffres.')}</span>
          </h2>
          <p className="text-lg text-body dark:text-slate-400 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {t('preuve_desc')}
          </p>
        </div>

        {/* Logos Clients / Partenaires */}
        <div className="max-w-5xl mx-auto mb-20 animate-slide-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-center text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-8">{t('preuve_confiance')}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-14 opacity-60 dark:opacity-40 transition-all duration-500 grayscale dark:invert">
            <img src="/confiance/conf1.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
            <img src="/confiance/conf2.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
            <img src="/confiance/conf3.webp" alt="Client Logo" className="h-8 lg:h-11 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
            <img src="/confiance/conf4.webp" alt="Client Logo" className="h-7 lg:h-10 w-auto object-contain brightness-75 dark:brightness-100 hover:brightness-100 transition-all cursor-default" />
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto items-stretch">

          {/* Card 1: Appels traités */}
          <div className="lg:col-span-8 group relative bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:from-slate-800 dark:via-slate-800/80 dark:to-slate-900 rounded-[40px] p-8 lg:p-12 border border-blue-50/50 dark:border-slate-700 shadow-sm overflow-hidden animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative z-10 space-y-4 max-w-md">
              <div className="text-5xl lg:text-7xl font-extrabold text-primary dark:text-primary-light tracking-tighter">
                <AnimatedCounter end={5.8} decimals={1} prefix="+" suffix="M" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-heading dark:text-white">{t("Appels de confirmation")}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm lg:text-base">
                {t('appel_desc')}
              </p>
            </div>
            <div className="absolute right-12 rtl:right-auto rtl:left-12 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center animate-float">
                <div className="w-20 h-20 bg-white dark:bg-slate-700 rounded-[28px] shadow-xl border border-blue-50 dark:border-slate-600 flex items-center justify-center rotate-12 rtl:-rotate-12">
                   <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
            </div>
          </div>

          {/* Card 2: Agents formés */}
          <div className="lg:col-span-4 bg-white dark:bg-slate-800 rounded-[40px] p-8 border border-slate-100 dark:border-slate-700 shadow-sm flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 border border-blue-100 dark:border-blue-800">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <div className="text-4xl lg:text-5xl font-extrabold text-heading dark:text-white mb-2">
              <AnimatedCounter end={250} suffix="+" />
            </div>
            <div className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-4">{t('Agents Experts')}</div>
            <p className="text-xs text-slate-400 dark:text-slate-500 italic leading-relaxed">
              "{t('agents_quote')}"
            </p>
          </div>

          {/* Card 3: Hausse Livraison */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-[40px] p-8 lg:p-10 border border-slate-100 dark:border-slate-700 shadow-sm animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-full text-[10px] font-extrabold text-green-600 dark:text-green-400 mb-6 uppercase tracking-wider">
              <svg className="w-3 h-3 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              {t('Impact moyen constaté')}
            </div>
            <div className="text-6xl font-extrabold text-heading dark:text-white mb-2 leading-none">
              <AnimatedCounter end={85} suffix="%" />
            </div>
            <h3 className="text-xl font-bold text-heading dark:text-white mb-3">{t('Taux de livraison en plus')}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {t('impact_desc')}
            </p>
          </div>

          {/* Card 4: Fake order detection */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-800 rounded-[40px] p-8 lg:p-10 border border-slate-100 dark:border-slate-700 shadow-sm animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-full text-[10px] font-extrabold text-red-600 dark:text-red-400 mb-6 uppercase tracking-wider">
               <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
               {t('Sécurité Anti-Fake')}
            </div>
            <div className="text-6xl font-extrabold text-heading dark:text-white mb-2 leading-none">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <h3 className="text-xl font-bold text-heading dark:text-white mb-3">{t('Vérification humaine')}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm">
              {t('verif_desc')}
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Preuve;
