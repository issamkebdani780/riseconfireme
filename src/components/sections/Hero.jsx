import React, { useState } from 'react';

const Hero = () => {
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
            {/* Badge */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-full text-primary dark:text-primary-light font-medium text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                Service de confirmation n°1 en Algérie
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800 rounded-full text-emerald-600 dark:text-emerald-400 font-medium text-sm shadow-sm backdrop-blur-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                <span><span className="font-extrabold">+85%</span> de livraisons en moyenne</span>
              </div>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight lg:leading-[1.1] text-heading dark:text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Réduisez vos retours et <br />
                <span className="text-primary tracking-tight">augmentez vos livraisons.</span>
              </h1>
              <p className="text-lg lg:text-xl text-body dark:text-slate-400 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                RiseConfirm externalise votre service de confirmation. Nos agents experts traitent vos commandes pour garantir un taux de livraison maximal.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <button className="px-8 py-4 bg-primary hover:bg-primary-hover text-white rounded-2xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                Démarrer l'essai gratuit
              </button>
              <button className="px-8 py-4 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-primary border border-slate-100 dark:border-slate-800 rounded-2xl font-semibold transition-all hover:-translate-y-1 flex items-center gap-2">
                Demander une démo <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {["Agents formés au COD", "Intégration instantanée", "Paiment par commande livrée"].map((point, index) => (
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
            <div
              className="relative w-full max-w-[500px] aspect-square bg-gradient-to-br from-blue-50/50 to-white dark:from-slate-900 dark:to-slate-950 rounded-[40px] border border-blue-100/50 dark:border-slate-800 shadow-2xl p-10 animate-float"
              style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)` }}
            >
              {/* Agent UI Simulation */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Appel en cours...</div>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/50 animate-pulse delay-75" />
                  </div>
                </div>

                {/* Client Info Card */}
                <div className="p-4 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center text-primary font-bold">IM</div>
                    <div>
                      <div className="text-sm font-bold text-heading dark:text-white">Issam Mohamed</div>
                      <div className="text-[10px] text-slate-400">Alger, Algérie</div>
                    </div>
                  </div>
                  <div className="h-px bg-slate-50 dark:bg-slate-700" />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Produit</div>
                      <div className="text-xs font-bold text-slate-700 dark:text-slate-200">Smartphone X Pro</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-bold">Montant</div>
                      <div className="text-xs font-bold text-primary">45,900 DA</div>
                    </div>
                  </div>
                </div>

                {/* Script snippet */}
                <div className="p-4 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl border border-blue-100/50 dark:border-blue-800/50">
                  <div className="text-[10px] text-primary uppercase font-black mb-2">Script suggéré</div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">"Bonjour M. Issam, je vous appelle pour confirmer votre commande de Smartphone X Pro..."</p>
                </div>

                {/* Confirm Button */}
                <button className="w-full py-4 bg-emerald-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Confirmer la commande
                </button>
              </div>

              {/* Floating Performance Card */}
              <div
                className="absolute -top-10 -right-4 lg:-right-10 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-premium border border-slate-100 dark:border-slate-800 animate-float-delayed flex items-center gap-4 min-w-[180px]"
                style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
              >
                <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center text-emerald-500">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Taux de livraison</div>
                  <div className="text-xl font-bold text-emerald-500">92%</div>
                </div>
              </div>

              {/* Calls Done Card */}
              <div
                className="absolute -bottom-6 -left-4 lg:-left-12 bg-white dark:bg-slate-900 p-4 rounded-3xl shadow-premium border border-slate-100 dark:border-slate-800 animate-float-slow flex items-center gap-4 min-w-[160px]"
                style={{ transform: `translate(${mousePos.x * -1.2}px, ${mousePos.y * -1.2}px)` }}
              >
                <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/40 rounded-xl flex items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Appels / Jour</div>
                  <div className="text-lg font-bold text-heading dark:text-white">5,000+</div>
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
