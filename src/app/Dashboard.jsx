import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { clientServices } from '../services/clientServices';

export default function Dashboard() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Retrieve the user's name saved during signup or signin
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-6 transition-colors duration-500">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-10 rounded-[30px] shadow-2xl text-center max-w-lg w-full">
        <h1 className="text-3xl font-extrabold text-heading dark:text-white mb-4">
          Tableau de Bord
        </h1>
        <p className="text-lg text-body dark:text-slate-400">
          Bienvenue,
        </p>
        <p className="mt-2 text-2xl text-primary font-bold">
          {userName}
        </p>
        
        <button 
          onClick={async () => {
            await clientServices.signOut();
            navigate('/signin');
          }}
          className="mt-8 px-6 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl transition-colors"
        >
          Se déconnecter
        </button>
      </div>
    </div>
  );
}
