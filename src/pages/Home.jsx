import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/landing/Hero';
import Problem from '../components/sections/landing/Problem';
import Preuve from '../components/sections/landing/Preuve';
import Temoignages from '../components/sections/landing/Temoignages';
import Features from '../components/sections/landing/Fonctionnalites';
import CommentCaMarche from '../components/sections/landing/Comment_ca_marche';
import Integrations from '../components/sections/landing/Integrations';
import Pricing from '../components/sections/landing/prix';
import APropos from '../components/sections/landing/A_propos';
import Blog from '../components/sections/landing/Blog';
import FAQ from '../components/sections/landing/FAQ';
import Contact from '../components/sections/landing/Contact';
import FinalCTA from '../components/sections/landing/cta';

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
