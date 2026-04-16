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
            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight lg:leading-[1.1] text-heading dark:text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                Confirmez chaque commande <br />
                <span className="text-primary tracking-tight">par appel client.</span>
              </h1>
              <p className="text-lg lg:text-xl text-body dark:text-slate-400 max-w-xl leading-relaxed animate-slide-up" style={{ animationDelay: '0.3s' }}>
                RiseConfirm gère vos appels de confirmation de commandes pour réduire les retours, augmenter les livraisons réussies et sécuriser vos ventes en temps réel.
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

            {/* Static Hero Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/5 dark:bg-slate-800/70 p-4 rounded-3xl border border-slate-200/70 dark:border-slate-700 mt-6 animate-slide-up" style={{ animationDelay: '0.45s' }}>
              {[
                { value: "+30%", label: "de livraisons réussies" },
                { value: "-25%", label: "de retours produits" },
                { value: "+20%", label: "d'upsell" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-heading dark:text-white">{stat.value}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
              {["Appels de confirmation", "Intégration instantanée", "Paiement par commande livrée"].map((point, index) => (
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
                className="w-full h-[520px] object-cover sm:h-[600px]"
              />
            </div>
            <div className="absolute -top-10 left-6 lg:left-10 animate-float-delayed">
              <div className="w-[220px] rounded-[30px] bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-3xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 19h12M9 4h6M4 10h16" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-semibold">Commandes</div>
                    <div className="mt-1 text-2xl font-extrabold text-heading dark:text-white">1,247</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 right-6 lg:right-10 animate-float-slow">
              <div className="w-[220px] rounded-[30px] bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-3xl bg-emerald-50 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v8m4-4H8" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-semibold">Profit</div>
                    <div className="mt-1 text-2xl font-extrabold text-heading dark:text-white">284,500 DA</div>
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
