import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Experience from './components/Experience.tsx';
import Projects from './components/Projects.tsx';
import Research from './components/Research.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
