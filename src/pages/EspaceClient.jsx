import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Espace_Client from '../components/sections/Espace_Client';

const EspaceClient = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <Espace_Client />
      </main>

      <Footer />
    </div>
  );
};

export default EspaceClient;
