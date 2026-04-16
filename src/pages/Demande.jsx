import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import DemandeDeDemonstration from '../components/sections/Demande_de_demonstration';

const Demande = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <DemandeDeDemonstration />
      </main>

      <Footer />
    </div>
  );
};

export default Demande;
