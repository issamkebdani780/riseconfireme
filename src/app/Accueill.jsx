import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import Preuve from '../components/sections/Preuve';
import Temoignages from '../components/sections/Temoignages';
import Features from '../components/sections/Fonctionnalites';
import CommentCaMarche from '../components/sections/Comment_ca_marche';
import Differentiation from '../components/sections/differenciation';
import UseCases from '../components/sections/casdusage';
import Ecosystem from '../components/sections/ecosysteme';
import Integrations from '../components/sections/Integrations';
import Pricing from '../components/sections/prix';
import APropos from '../components/sections/A_propos';
import DemandeDeDemonstration from '../components/sections/Demande_de_demonstration';
import Blog from '../components/sections/Blog';
import Espace_Client from '../components/sections/Espace_Client';
import FAQ from '../components/sections/FAQ';
import Contact from '../components/sections/Contact';
import FinalCTA from '../components/sections/cta';

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
                {/* <DemandeDeDemonstration /> */}
                <Blog />
                <Espace_Client />
                <FAQ />
                <DemandeDeDemonstration />
                {/* <Contact /> */}
                <FinalCTA />
            </main>

            <Footer />
        </div>
    );
};

export default Accueill;
