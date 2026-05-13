import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/landing/Hero';
import Problem from '../components/sections/landing/Problem';
import Preuve from '../components/sections/landing/Preuve';
import Temoignages from '../components/sections/landing/Temoignages';
import Features from '../components/sections/landing/Fonctionnalites';
import CommentCaMarche from '../components/sections/landing/Comment_ca_marche';
import Differentiation from '../components/sections/landing/differenciation';
import UseCases from '../components/sections/landing/casdusage';
import Ecosystem from '../components/sections/landing/ecosysteme';
import Integrations from '../components/sections/landing/Integrations';
import Pricing from '../components/sections/landing/prix';
import APropos from '../components/sections/landing/A_propos';
import DemandeDeDemonstration from '../components/sections/landing/Demande_de_demonstration';
import Blog from '../components/sections/landing/Blog';
import Espace_Client from '../components/sections/landing/Espace_Client';
import FAQ from '../components/sections/landing/FAQ';
import Contact from '../components/sections/landing/Contact';
import FinalCTA from '../components/sections/landing/cta';

const Accueill = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
            <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            
            <main>
                <Hero />
                <Problem />
                <Preuve />
                <Temoignages />
                <Features />
                <CommentCaMarche />
                <Differentiation />
                <UseCases />
                <Ecosystem />
                <Integrations />
                <Pricing />
                <APropos />
                <Blog />
                <Espace_Client />
                <FAQ />
                <DemandeDeDemonstration />
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
};

export default Accueill;
