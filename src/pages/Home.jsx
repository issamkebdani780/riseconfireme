import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Sections
import Hero from '../components/sections/landing/Hero';
import ProblemSection from '../components/sections/landing/ProblemSection';
import ProofSection from '../components/sections/landing/ProofSection';
import DifferentiationSection from '../components/sections/landing/DifferentiationSection';
import FeaturesSection from '../components/sections/landing/FeaturesSection';
import HowItWorks from '../components/sections/landing/HowItWorks';
import EcosystemSection from '../components/sections/landing/EcosystemSection';
import TestimonialsSection from '../components/sections/landing/TestimonialsSection';
import IntegrationsSection from '../components/sections/landing/IntegrationsSection';
import PricingSection from '../components/sections/landing/PricingSection';
import AboutSection from '../components/sections/landing/AboutSection';
import BlogSection from '../components/sections/landing/BlogSection';
import FAQSection from '../components/sections/landing/FAQ';
import ContactSection from '../components/sections/landing/ContactSection';
import CTASection from '../components/sections/landing/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <ProofSection />
        <DifferentiationSection />
        <FeaturesSection />
        <HowItWorks />
        <EcosystemSection />
        <TestimonialsSection />
        <IntegrationsSection />
        <PricingSection />
        <AboutSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
