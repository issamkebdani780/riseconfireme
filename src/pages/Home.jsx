import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Preuve from '../components/sections/Preuve';
import Temoignages from '../components/sections/Temoignages';
import Features from '../components/sections/Fonctionnalites';
import CommentCaMarche from '../components/sections/Comment_ca_marche';
import Integrations from '../components/sections/Integrations';
import Pricing from '../components/sections/prix';
import APropos from '../components/sections/A_propos';
import Blog from '../components/sections/Blog';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import FinalCTA from '../components/sections/cta';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <Hero />
        <Problem />
        <Preuve />
        <Temoignages />
        <Features />
        <CommentCaMarche />
        <Integrations />
        <Pricing />
        <APropos />
        <Blog />
        <FAQ />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
