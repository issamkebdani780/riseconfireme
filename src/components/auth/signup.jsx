import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../ui/Logo';
import { clientServices } from '../../services/clientServices';
import { useToast } from '../ui/toast';
import { setAuthData, isAuthenticated } from '../../utils/auth';

export default function SignUp() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [formData, setFormData] = useState({ 
    firstName: '', 
    lastName: '', 
    email: '', 
    phone: '', 
    address: '', 
    password: '',
    confirmPassword: '' 
  });
  const [isLoading, setIsLoading] = useState(false);

  React.useEffect(() => {
    if (isAuthenticated()) {
      navigate('/dashboard', { replace: true });
    }
  }, [navigate]);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validations = {
    length: formData.password.length >= 8,
    uppercase: /[A-Z]/.test(formData.password),
    lowercase: /[a-z]/.test(formData.password),
    number: /[0-9]/.test(formData.password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
  };
  
  const strength = Object.values(validations).filter(Boolean).length;
  const strengthLabels = [
    t('auth.strength.weak'), 
    t('auth.strength.medium'), 
    t('auth.strength.good'), 
    t('auth.strength.strong'), 
    t('auth.strength.veryStrong')
  ];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-emerald-400', 'bg-emerald-600'];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-row-reverse" dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Right side (visually Left due to flex-row-reverse): Marketing / Branding (hidden on mobile) */}
      <div className="hidden lg:flex w-1/2 relative bg-slate-50 dark:bg-slate-900 items-center justify-center overflow-hidden border-l border-slate-200 dark:border-slate-800">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-400/10 dark:bg-purple-400/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center p-12 max-w-lg">
          <Logo 
            iconClassName="w-20 h-20 mb-6 shadow-2xl" 
            textClassName="text-4xl font-extrabold text-heading dark:text-white tracking-tight" 
            className="flex flex-col items-center gap-4 shrink-0"
          />
          <h2 className="mt-8 text-3xl font-black text-heading dark:text-white leading-tight">
            {t("Rejoignez la révolution du")} <br />
            <span className="text-primary italic">{t("E-commerce en Afrique.")}</span>
          </h2>
          <p className="mt-6 text-lg text-body dark:text-slate-400">
            {t("Inscrivez-vous dès maintenant et commencez à sécuriser vos commandes. L'installation prend moins de 10 minutes.")}
          </p>
          
          <div className="mt-12 flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <div>
                <div className="font-bold text-heading dark:text-white">{t("Zéro risque")}</div>
                <div className="text-sm text-slate-500">{t("Paiement par commande livrée uniquement")}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 text-left">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <div className="font-bold text-heading dark:text-white">{t("Traitement Flash")}</div>
                <div className="text-sm text-slate-500">{t("Commandes appelées en moins de 15 minutes")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Left side (visually Right due to flex-row-reverse): Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-12 relative overflow-y-auto overflow-x-hidden lg:overflow-visible">
        {/* Mobile Background Elements */}
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 lg:hidden pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-96 bg-primary/10 dark:bg-primary/5 blur-3xl lg:hidden pointer-events-none" />
        
        <div className="max-w-xl w-full space-y-8 relative z-10 bg-white dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent p-6 sm:p-10 lg:p-0 rounded-[32px] shadow-2xl shadow-slate-200/50 dark:shadow-none lg:shadow-none border border-slate-100 dark:border-slate-800 lg:border-none my-8 lg:my-0 py-8 lg:py-0">
          <div className="lg:hidden flex flex-col items-center mb-8">
            <Logo 
              iconClassName="w-12 h-12 mb-3" 
              textClassName="text-2xl font-extrabold text-heading dark:text-white tracking-tight" 
              className="flex flex-col items-center gap-2"
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-heading dark:text-white">
              {t('auth.signup.title', 'Créer un compte')}
            </h3>
            <p className="mt-2 text-sm text-body dark:text-slate-400">
              {t('auth.signup.subtitle', 'Rejoignez-nous et commencez votre aventure')}
            </p>
          </div>
          
          <form className="mt-8 space-y-5" onSubmit={async (e) => {
            e.preventDefault();
            
            if (formData.password !== formData.confirmPassword) {
              addToast(t('auth.signup.passwordMismatch', 'Les mots de passe ne correspondent pas.'), 'error');
              return;
            }
            
            const isPasswordValid = Object.values(validations).every(Boolean);
            if (!isPasswordValid) {
              addToast(t('auth.signup.passwordInvalid', 'Le mot de passe ne respecte pas toutes les exigences.'), 'error');
              return;
            }

            setIsLoading(true);
            try {
              const { confirmPassword, ...payload } = formData;
              const res = await clientServices.signUp(payload);
              
              setAuthData(res, `${formData.firstName} ${formData.lastName}`);

              addToast(t('auth.signup.success', 'Inscription réussie ! Bienvenue.'), 'success');
              navigate('/dashboard');
            } catch (err) {
              const errorMessage = err.message || t('auth.errors.general');
              addToast(errorMessage, 'error');
            } finally {
              setIsLoading(false);
            }
          }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="firstName">
                  {t('auth.firstName')}
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={t('placeholder_firstName')}
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="lastName">
                  {t('auth.lastName')}
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder={t('placeholder_lastName')}
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="email">
                {t('auth.email')}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('placeholder_email')}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="phone">
                {t('auth.phone')}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="+213 555 55 55 55"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="address">
                {t('auth.address')}
              </label>
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                required
                className="appearance-none block w-full px-5 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder={t('placeholder_address')}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="password">
                  {t('auth.password')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full pl-11 pr-12 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none">
                      {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-heading dark:text-slate-300 mb-2" htmlFor="confirmPassword">
                  {t('auth.confirmPassword')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="appearance-none block w-full pl-11 pr-12 py-4 border border-slate-200 dark:border-slate-700 rounded-2xl bg-slate-50 dark:bg-slate-800/50 text-heading dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 focus:outline-none">
                      {showConfirmPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.543 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {formData.password && (
              <div className="space-y-4">
                <div className="flex gap-1.5 w-full">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 w-full rounded-full transition-colors duration-300 ${
                        i < strength ? strengthColors[strength - 1] : 'bg-slate-200 dark:bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
                <div className="text-sm font-semibold" style={{ color: strength > 0 ? `var(--tw-color-${strengthColors[strength - 1]?.split('-')[1]}-600)` : '' }}>
                  {strength > 0 && t('auth.passwordStrength', { strength: strengthLabels[strength - 1] })}
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                    {t('auth.passwordRequirements')}
                  </h4>
                  <ul className="space-y-2">
                    <RequirementItem met={validations.length} text={t('auth.reqLength')} />
                    <RequirementItem met={validations.uppercase} text={t('auth.reqUpper')} />
                    <RequirementItem met={validations.lowercase} text={t('auth.reqLower')} />
                    <RequirementItem met={validations.number} text={t('auth.reqNumber')} />
                    <RequirementItem met={validations.special} text={t('auth.reqSpecial')} />
                  </ul>
                </div>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-semibold rounded-2xl text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-white dark:focus:ring-offset-slate-900 transition-all shadow-lg shadow-primary/20 cursor-pointer ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {isLoading ? t('Chargement...') : t('auth.signup.submit')}
              </button>
            </div>
          </form>
          
          <div className="text-center text-sm text-body dark:text-slate-400 mt-6">
            {t('auth.signup.hasAccount')}{' '}
            <Link to="/signin" className="font-bold text-primary hover:text-primary-hover transition-colors">
              {t('auth.signup.signin')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const RequirementItem = ({ met, text }) => (
  <li className="flex items-center gap-2 text-sm">
    <div className={`flex items-center justify-center w-5 h-5 rounded-full shrink-0 ${met ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'}`}>
      {met ? (
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
      )}
    </div>
    <span className={met ? 'text-emerald-700 dark:text-emerald-400 font-medium' : 'text-slate-500 dark:text-slate-400'}>
      {text}
    </span>
  </li>
);
