import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink, useNavigate, useLocation, Routes, Route, Navigate } from 'react-router-dom';
import Logo from '../components/ui/Logo';
import { getUser, clearAuthData, getPermissions, setPermissions } from '../utils/auth';
import { clientServices } from '../services/clientServices';

// Sidebar Icons
import { DashboardIcon, OrdersIcon, ClientsIcon, AgentsIcon, StatsIcon, LogoutIcon } from '../components/layout/icons';

// Dashboard Sections
import DashboardOverview from '../components/sections/dashboard/DashboardOverview';
import OrdersSection from '../components/sections/orders/OrdersSection';
import ClientsSection from '../components/sections/clients/ClientsSection';
import AgentsSection from '../components/sections/agents/AgentsSection';
import StatisticsSection from '../components/sections/statistics/StatisticsSection';
import { useTheme } from '../hooks/useTheme';




const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [permissions, setPermissionsState] = useState(getPermissions());
  const [notifications, setNotifications] = useState(3);
  const fetchStarted = useRef(false);

  // Derive the active section from the current URL path
  const pathSegment = location.pathname.split('/dashboard/')[1] || '';
  const activeSection = pathSegment || 'dashboard';
  
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const userData = getUser();
    if (!userData) {
      // navigate('/signin'); 
    }
    setUser(userData);

    // Fetch permissions if not already loaded
    const fetchPermissions = async () => {
      if (fetchStarted.current) return;
      fetchStarted.current = true;

      try {
        const data = await clientServices.getPermissions();
        const permissionsList = Array.isArray(data) ? data : (data?.permissions || []);
        
        if (permissionsList.length > 0) {
          setPermissions(permissionsList);
          setPermissionsState(permissionsList);
        }
      } catch (error) {
        console.error('Failed to fetch permissions:', error);
        fetchStarted.current = false; // Allow retry on error
      }
    };

    if (permissions.length === 0) {
      fetchPermissions();
    }
  }, [navigate, permissions.length]);

  const hasPerm = (p) => permissions.includes(p);

  const navItems = [
    { id: 'dashboard', label: t('Tableau de bord'), icon: <DashboardIcon />, visible: true },
    { id: 'orders', label: t('Commandes'), icon: <OrdersIcon />, visible: true },
    { id: 'clients', label: t('Clients'), icon: <ClientsIcon />, visible: true },
    { id: 'agents', label: t('Agents'), icon: <AgentsIcon />, visible: true },
    { id: 'statistics', label: t('Statistiques'), icon: <StatsIcon />, visible: true },
  ].filter(item => item.visible);

  const handleLogout = async () => {
    try {
      await clientServices.signOut();
    } catch (error) {
      console.error('API Logout error:', error);
    } finally {
      clearAuthData();
      navigate('/');
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const languages = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'ar', label: 'AR' }
  ];

  return (
    <div className="h-screen bg-slate-50 dark:bg-slate-950 font-outfit flex transition-colors duration-500 overflow-hidden relative">
      {/* Sidebar Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[55] lg:hidden transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`${
          isSidebarOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0 w-72 lg:w-20'
        } fixed lg:static inset-y-0 left-0 bg-white dark:bg-slate-900 border-e border-slate-200 dark:border-slate-800 transition-all duration-300 flex flex-col z-[60] h-full shadow-2xl lg:shadow-none`}
      >
        <div className="p-6 flex items-center justify-between shrink-0">
          <Link to="/">
            <Logo 
              showText={isSidebarOpen} 
              iconClassName="w-10 h-10"
              textClassName="text-xl font-black text-heading dark:text-white tracking-tight"
            />
          </Link>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors lg:flex hidden"
          >
            <svg className={`w-5 h-5 text-slate-400 transition-transform ${!isSidebarOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4 overflow-y-auto custom-scrollbar shrink-0">
          {navItems.map((item) => {
            const to = item.id === 'dashboard' ? '/dashboard' : `/dashboard/${item.id}`;
            return (
              <NavLink
                key={item.id}
                to={to}
                end={item.id === 'dashboard'}
                onClick={() => {
                  if (window.innerWidth < 1024) setIsSidebarOpen(false);
                }}
                className={({ isActive }) =>
                  `w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <div className={`${isActive ? 'text-white' : 'text-slate-400 group-hover:text-primary'} transition-colors shrink-0`}>
                      {item.icon}
                    </div>
                    {(isSidebarOpen || window.innerWidth < 1024) && (
                      <span className="font-bold text-sm truncate">{item.label}</span>
                    )}
                    {isActive && (isSidebarOpen || window.innerWidth < 1024) && (
                      <div className="ms-auto w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-800 shrink-0">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-all font-bold text-sm"
          >
            <div className="shrink-0"><LogoutIcon /></div>
            {isSidebarOpen || window.innerWidth < 1024 ? <span className="truncate">{t('Déconnexion')}</span> : null}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 sm:px-8 flex items-center justify-between shrink-0 z-40 gap-4">
          <div className="flex items-center gap-4 truncate">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 lg:hidden hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors text-slate-400"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <div className="truncate">
              <h1 className="text-lg sm:text-xl font-black text-heading dark:text-white truncate">
                {navItems.find(i => i.id === activeSection)?.label}
              </h1>
              <p className="text-[10px] sm:text-xs text-slate-400 font-medium truncate">RiseConfirm</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            {/* Language Switcher - Hide on very small screens */}
            <div className="hidden sm:flex items-center bg-slate-50 dark:bg-slate-800/50 p-1 rounded-xl border border-slate-100 dark:border-slate-800">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${
                    i18n.language === lang.code 
                      ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' 
                      : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-300'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-primary transition-all"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>
              )}
            </button>

            {/* Notifications - Hide on small screens */}
            <button className="hidden sm:block relative p-2.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-800 text-slate-400 hover:text-primary transition-all group">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {notifications > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white dark:border-slate-900">
                  {notifications}
                </span>
              )}
            </button>

            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-1 hidden sm:block" />

            {/* Profile */}
            <div className="flex items-center gap-3 pl-2">
              <div className="hidden sm:block text-right">
                <p className="text-sm font-black text-heading dark:text-white leading-none mb-0.5 truncate max-w-[120px]">
                  {user?.firstName ? `${user.firstName} ${user.lastName}` : localStorage.getItem('userName') || 'Agent'}
                </p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wider">Agent Senior</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border-2 border-primary/20 overflow-hidden shrink-0">
                {user?.avatar ? (
                  <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-primary font-black text-sm">
                    {user?.firstName?.[0] || localStorage.getItem('userName')?.[0] || 'A'}
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar scroll-smooth">
          <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8 animate-slide-up pb-12">
            <Routes>
              <Route index element={<DashboardOverview permissions={permissions} />} />
              <Route path="orders" element={<OrdersSection permissions={permissions} />} />
              <Route path="clients" element={<ClientsSection permissions={permissions} />} />
              <Route path="agents" element={<AgentsSection permissions={permissions} />} />
              <Route path="statistics" element={<StatisticsSection permissions={permissions} />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;