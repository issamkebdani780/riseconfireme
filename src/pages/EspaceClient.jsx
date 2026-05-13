import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ClientPortal from '../components/sections/landing/ClientPortal';

const EspaceClient = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <ClientPortal />
      </main>

      <Footer />
    </div>
  );
};

export default EspaceClient;
