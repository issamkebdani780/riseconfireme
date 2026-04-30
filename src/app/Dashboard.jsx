import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientServices } from '../services/clientServices';
import { getUser, clearAuthData } from '../utils/auth';
import { useToast } from '../components/ui/toast';

export default function Dashboard() {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = getUser();
    if (userData) {
      setUser(userData);
    }
  }, []);

  const handleLogout = async () => {
    try {
      await clientServices.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearAuthData();
      addToast('Déconnexion réussie', 'success');
      navigate('/');
    }
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[32px] shadow-2xl text-center max-w-md w-full">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
          <span className="text-2xl font-black text-primary">
            {user.firstName[0]}{user.lastName[0]}
          </span>
        </div>
        
        <h1 className="text-3xl font-black text-heading dark:text-white mb-2">
          {user.firstName} {user.lastName}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mb-8 font-medium">
          {user.email}
        </p>
        
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Rôle</p>
            <p className="font-bold text-heading dark:text-white capitalize">{user.role}</p>
          </div>
          
          <button 
            onClick={handleLogout}
            className="w-full py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-2xl transition-all active:scale-95 shadow-lg shadow-red-500/20"
          >
            Se déconnecter
          </button>
        </div>
      </div>
    </div>
  );
}
