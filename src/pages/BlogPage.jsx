import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import BlogSection from '../components/sections/landing/BlogSection';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <BlogSection />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
