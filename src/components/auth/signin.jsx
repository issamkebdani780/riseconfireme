import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';
import { clientServices } from '../../services/clientServices';
import { useToast } from '../ui/toast';
import { setAuthData } from '../../utils/auth';

export default function SignIn() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex">
      {/* Left side: Marketing / Branding (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-50 dark:bg-slate-900 items-center justify-center overflow-hidden border-r border-slate-200 dark:border-slate-800">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/10 dark:bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center p-12 max-w-lg">
          <Logo 
            iconClassName="w-20 h-20 mb-6 shadow-2xl" 
            textClassName="text-4xl font-extrabold text-heading dark:text-white tracking-tight" 
            className="flex flex-col items-center gap-4 shrink-0"
          />
          <h2 className="mt-8 text-3xl font-black text-heading dark:text-white leading-tight">
            {t("Transformez vos colis en")} <br />
            <span className="text-primary italic">{t("ventes confirmées.")}</span>
          </h2>
          <p className="mt-6 text-lg text-body dark:text-slate-400">
            {t("RiseConfirm gère vos appels de confirmation de commandes pour réduire les retours, augmenter les livraisons réussies et sécuriser vos ventes en temps réel.")}
          </p>
          
          <div className="mt-12 grid grid-cols-2 gap-4 w-full">
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-extrabold text-heading dark:text-white">+30%</div>
              <div className="text-sm font-medium text-slate-500 mt-1">{t("Livraisons réussies")}</div>
            </div>
            <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-2xl font-extrabold text-heading dark:text-white">-25%</div>
              <div className="text-sm font-medium text-slate-500 mt-1">{t("Retours produits")}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-12 relative overflow-hidden lg:overflow-visible">
        {/* Mobile Background Elements */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 lg:hidden pointer-events-none" />
        <div className="absolute -top-32 left-0 right-0 h-96 bg-primary/10 dark:bg-primary/5 blur-3xl lg:hidden pointer-events-none" />
        
        <div className="max-w-md w-full space-y-8 relative z-10 bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent p-8 sm:p-10 lg:p-0 rounded-[32px] shadow-2xl shadow-slate-200/50 dark:shadow-none lg:shadow-none border border-slate-100 dark:border-slate-800 lg:border-none my-8 lg:my-0">
          <div className="lg:hidden flex flex-col items-center mb-8">
            <Logo 
              iconClassName="w-12 h-12 mb-3" 
              textClassName="text-2xl font-extrabold text-heading dark:text-white tracking-tight" 
              className="flex flex-col items-center gap-2"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-heading dark:text-white">
              {t('auth.signin.title', 'Bienvenue')}
            </h3>
            <p className="mt-2 text-sm text-body dark:text-slate-400">
              {t('auth.signin.subtitle', 'Connectez-vous à votre compte pour continuer')}
            </p>
          </div>
          
          <form className="mt-8 space-y-6" onSubmit={async (e) => {
            e.preventDefault();
            setIsLoading(true);
            try {
              const res = await clientServices.signIn(formData);
              
              setAuthData(res, formData.email);

              addToast(t('auth.signin.success', 'Connexion réussie !'), 'success');
              navigate('/dashboard');
            } catch (err) {
              const errorMessage = err.message || "Une erreur est survenue lors de la connexion.";
              addToast(errorMessage, 'error');
            } finally {
              setIsLoading(false);
            }
          }}>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="email">
                  {t('auth.email', 'Adresse e-mail')}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="vous@exemple.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="password">
                  {t('auth.password', 'Mot de passe')}
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-700 rounded bg-white dark:bg-slate-800"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-body dark:text-slate-300">
                  {t('auth.signin.remember', 'Se souvenir de moi')}
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary-hover transition-colors">
                  {t('auth.signin.forgot', 'Mot de passe oublié ?')}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-semibold rounded-2xl text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all shadow-lg shadow-primary/20 cursor-pointer ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {isLoading ? 'Chargement...' : t('auth.signin.submit', 'Se connecter')}
              </button>
            </div>
          </form>
          
          <div className="text-center text-sm text-body dark:text-slate-400">
            {t('auth.signin.noAccount', "Vous n'avez pas de compte ?")}{' '}
            <Link to="/signup" className="font-bold text-primary hover:text-primary-hover transition-colors">
              {t('auth.signin.signup', "S'inscrire")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
