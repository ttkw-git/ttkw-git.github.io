import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { SOCIAL_LINKS, ABOUT_TEXT_1, ABOUT_TEXT_2, VALUE_PROPOSITION } from '../constants';
import { SocialLink } from '../types';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="space-y-6">
                {/* Badge */}
                <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for Full-Time Opportunities
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Data Scientist &<br />
                  <span className="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent">
                    ML Engineer
                  </span>
                </h1>

                {/* Value Proposition */}
                <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                  {VALUE_PROPOSITION}
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-slate-800/50">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-sm text-slate-400">Years Experience</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">94%</div>
                    <div className="text-sm text-slate-400">Avg Model Accuracy</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-sm text-slate-400">ML Projects</div>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a 
                    href="#projects"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:scale-105"
                  >
                    View My Projects
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-slate-800/50 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all border border-slate-700 hover:border-primary-500 backdrop-blur-sm"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </a>
                </div>

                {/* Social Proof */}
                <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
                  <span className="text-slate-400 text-sm">Connect with me:</span>
                  {SOCIAL_LINKS.map((social: SocialLink) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-800/50 hover:bg-primary-600 text-slate-400 hover:text-white rounded-lg transition-all hover:scale-110 backdrop-blur-sm border border-slate-700 hover:border-primary-500"
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-2xl blur-2xl opacity-30 scale-105"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-indigo-500/20 rounded-2xl"></div>
                  <img 
                    src="images/about/1.jpg" 
                    alt="Tony TK Wong - Data Scientist" 
                    className="relative w-full h-full object-cover rounded-2xl border border-slate-700 shadow-2xl"
                  />
                  {/* Professional Badge */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full px-4 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">Open to Work</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Professional Background</h3>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  {ABOUT_TEXT_1}
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {ABOUT_TEXT_2}
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-white mb-6">Core Competencies</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Machine Learning',
                    'Data Analysis', 
                    'Computer Vision',
                    'NLP/Text Mining',
                    'Python/R Programming',
                    'Statistical Modeling',
                    'Data Visualization',
                    'Model Deployment'
                  ].map((skill: string) => (
                    <div key={skill} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-slate-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Highlights */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Achievements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">Developed ML models with 90%+ accuracy across multiple domains</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">Automated business processes reducing manual work by 85%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                    <span className="text-slate-300">Built end-to-end data pipelines processing 100K+ records</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
