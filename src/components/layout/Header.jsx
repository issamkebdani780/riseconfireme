import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DropDown from '../ui/DropDown';
import Logo from '../ui/Logo';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const featuresItems = [
    { title: "Confirmation par appel", description: "Agents formés pour vos appels COD", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> },
    { title: "Suivi récalcitrant", description: "Récupérez vos commandes en attente", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
    { title: "Upsell & Cross-sell", description: "Augmentez votre panier moyen", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
    { title: "Dashboard & Analytics", description: "Visualisez vos performances réelles", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
    { title: "Scripts personnalisés", description: "Argumentaires adaptés à vos produits", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg> },
    { title: "Automatisation", description: "SMS, WhatsApp et Voice AI", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg> },
    { title: "Intégrations", description: "Connectez vos boutiques facilement", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg> },
    { title: "API & Webhooks", description: "Pour les workflows personnalisés", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
  ];

  const ecoItems = [
    { title: "RiseConfirm", description: "Le Cœur de la Confirmation", icon: <img src="/ecosystem/riseconfirem.jpg" alt="RiseConfirm" className="w-full h-full rounded-xl object-cover" /> },
    { title: "RiseManager", description: "Gestion e-commerce globale", icon: <img src="/ecosystem/risemanager.png" alt="RiseManager" className="w-full h-full rounded-xl object-cover bg-white" /> },
    { title: "RiseCart", description: "Checkout optimisé pour le COD", icon: <img src="/ecosystem/risecart.jpg" alt="RiseCart" className="w-full h-full rounded-xl object-cover" /> },
    { title: "FBR", description: "Logistique et stockage", icon: <img src="/ecosystem/fbr.jpg" alt="FBR" className="w-full h-full rounded-xl object-cover" /> },
    { title: "RiseAcademy", description: "Formation e-commerce", icon: <img src="/ecosystem/riseacademy.png" alt="RiseAcademy" className="w-full h-full rounded-xl object-cover" /> },
    { title: "RisePay", description: "Solutions de paiement", icon: <img src="/ecosystem/risepay.jpg" alt="RisePay" className="w-full h-full rounded-xl object-cover" /> },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6">
        <div
          className={`container mx-auto px-4 lg:px-6 py-3 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 flex items-center justify-between ${isScrolled ? 'shadow-md scale-[0.98]' : ''
            }`}
        >
          {/* Logo */}
          <Logo 
            className="flex items-center gap-2 shrink-0 cursor-pointer"
            iconClassName="w-8 h-8 lg:w-9 lg:h-9"
            textClassName="text-xl lg:text-2xl font-black text-heading dark:text-white tracking-tight"
          />

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <NavLink to="/">Accueil</NavLink>
            <DropDown title="Solutions" items={featuresItems} columns={2} />
            <DropDown title="Écosystème" items={ecoItems} columns={1} />
            {/* <NavLink to="/#tarifs">Tarifs</NavLink> */}
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/espace-client">Espace Client</NavLink>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 border border-slate-50 dark:border-slate-800 rounded-full bg-slate-50/50 dark:bg-slate-800/50 shadow-inner hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95 group"
            >
              {theme === 'dark' ? (
                <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <Link to="/espace-client" className="hidden lg:inline-flex text-sm font-bold text-heading dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors border border-slate-100 dark:border-slate-800 px-5 py-2.5 rounded-full">
              Se connecter
            </Link>

            <Link to="/demande" className="hidden sm:inline-flex px-5 py-2.5 lg:px-6 lg:py-3 bg-primary hover:bg-primary-hover text-white text-xs lg:text-sm font-extrabold rounded-full transition-all active:scale-95 whitespace-nowrap shadow-lg shadow-primary/20 items-center justify-center">
              Démarrer gratuitement
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-heading dark:text-white transition-transform active:scale-90"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-heading/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="relative w-full max-w-sm bg-white dark:bg-slate-900 rounded-4xl p-8 shadow-2xl border border-slate-50 dark:border-slate-800 animate-slide-up text-center">
            <button className="absolute top-6 right-6 p-2 text-slate-400 hover:text-heading bg-slate-50 rounded-full" onClick={() => setIsMenuOpen(false)}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col items-center gap-3 mb-10">
              <Logo showText={false} iconClassName="w-12 h-12" />
              <span className="text-xl font-black text-heading dark:text-white">RiseConfirm</span>
            </div>

            <nav className="flex flex-col gap-6 mb-10">
              <MobileNavLink to="/" active onClick={() => setIsMenuOpen(false)}>Accueil</MobileNavLink>
              <MobileNavLink to="/#features" onClick={() => setIsMenuOpen(false)}>Fonctionnalités</MobileNavLink>
              <MobileNavLink to="/#tarifs" onClick={() => setIsMenuOpen(false)}>Tarifs</MobileNavLink>
              <MobileNavLink to="/blog" onClick={() => setIsMenuOpen(false)}>Blog</MobileNavLink>
              <MobileNavLink to="/espace-client" onClick={() => setIsMenuOpen(false)}>Espace Client</MobileNavLink>
              <MobileNavLink to="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
              <MobileNavLink to="/#contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            </nav>

            <div className="flex flex-col gap-3">
              <button className="w-full py-4 text-sm font-bold text-heading dark:text-white border border-slate-100 dark:border-slate-800 rounded-2xl">
                Se connecter
              </button>
              <button className="w-full py-4 bg-primary text-white text-sm font-bold rounded-2xl shadow-lg shadow-primary/20">
                Démarrer gratuitement
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-[13px] font-bold text-slate-400 dark:text-slate-500 transition-colors hover:text-primary">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick} className="text-sm font-bold text-slate-500 transition-colors hover:text-primary">
    {children}
  </Link>
);

export default Header;