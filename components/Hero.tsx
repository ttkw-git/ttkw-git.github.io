import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ABOUT_TEXT_1, ABOUT_TEXT_2 } from '../constants.ts';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col justify-center min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-primary-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-primary-400 font-medium tracking-wide uppercase text-sm">Portfolio</h2>
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">Tony</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light">
                A passionate developer crafting impactful digital solutions.
              </p>
            </div>
            
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white mb-3" id="about">About Me</h3>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>{ABOUT_TEXT_1}</p>
                <p>{ABOUT_TEXT_2}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a 
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-medium transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-medium transition-all border border-slate-700"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg transition-opacity duration-500"></div>
              <img 
                src="images/about/1.jpg" 
                alt="Tony TK Wong" 
                className="relative w-full h-full object-cover rounded-full border-4 border-slate-950 shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;