import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Blog from '../components/sections/Blog';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-outfit selection:bg-primary/20 selection:text-primary transition-colors duration-500">
      <Header />

      <main>
        <Blog />
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
