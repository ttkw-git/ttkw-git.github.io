import React from 'react';
import { ArrowRight, Download, MapPin, GraduationCap, Briefcase } from 'lucide-react';
import { SOCIAL_LINKS, VALUE_PROPOSITION } from '../constants';
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
                {/* Status Badges */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  <div className="inline-flex items-center px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full text-primary-400 text-sm font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Open to New Opportunities
                  </div>
                  <div className="inline-flex items-center px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Georgia Tech MS Student
                  </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent">
                    Tony TK Wong
                  </span>
                  <br />
                  AI Specialist &<br />
                  Agricultural Technology Developer
                </h1>

                {/* Location & Current Focus */}
                <div className="flex flex-col items-center lg:items-start space-y-2">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <MapPin className="w-4 h-4" />
                    <span>Winnipeg, Manitoba, Canada</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Briefcase className="w-4 h-4" />
                    <span>AI Trainer • Agricultural Robotics Researcher</span>
                  </div>
                </div>

                {/* Value Proposition */}
                <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl">
                  {VALUE_PROPOSITION}
                </p>

                {/* Professional Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-slate-800/50">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">3+</div>
                    <div className="text-sm text-slate-400">Years Research</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">50%</div>
                    <div className="text-sm text-slate-400">Data Reliability ↑</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-white">MS</div>
                    <div className="text-sm text-slate-400">Computer Science</div>
                  </div>
                </div>

                {/* Current Professional Focus */}
                <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2 text-primary-400" />
                    Current Focus: Advanced AI & Practical Applications
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-white font-medium">Advanced AI Studies</span>
                        <span className="text-slate-400 text-sm block">Georgia Tech MS • Reinforcement Learning, Robotics AI Techniques</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-white font-medium">Agricultural Robotics Research</span>
                        <span className="text-slate-400 text-sm block">University of Winnipeg • Autonomous systems with practical applications</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <span className="text-white font-medium">AI Code Quality Specialist</span>
                        <span className="text-slate-400 text-sm block">Outlier • Professional AI evaluation and training</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <a 
                    href="#projects"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:scale-105"
                  >
                    View Research Projects
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

                {/* Professional Network */}
                <div className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
                  <div className="flex items-center space-x-2 text-slate-400">
                    <span className="text-sm">Connect professionally:</span>
                  </div>
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
                    alt="Tony TK Wong - AI Specialist & Agricultural Technology Developer" 
                    className="relative w-full h-full object-cover rounded-2xl border border-slate-700 shadow-2xl"
                  />
                  {/* Professional Achievement Badges */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700 rounded-full px-3 py-1.5">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white text-xs font-medium">Available for Hire</span>
                      </div>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Professional Background</h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Career Timeline */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-primary-400" />
                  Recent Career Development
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-primary-400 font-bold text-sm">2024</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">AI Trainer & Advanced Studies</h4>
                      <p className="text-slate-400 text-sm">Outlier • Georgia Tech MS Program</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-indigo-400 font-bold text-sm">2023</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Agricultural Robotics Research</h4>
                      <p className="text-slate-400 text-sm">University of Winnipeg • Practical AI applications</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-sm">2021</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Canadian Education & Skills Development</h4>
                      <p className="text-slate-400 text-sm">Red River College • Data Science Program (Academic Excellence)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Credentials */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-primary-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary-500/20">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Education & Professional Development
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="text-primary-400 mt-1 flex-shrink-0" size={18} />
                    <div>
                      <span className="text-white font-medium block">MS Computer Science (Current)</span>
                      <span className="text-slate-300 text-sm">Georgia Institute of Technology • Advanced AI & Robotics Focus</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-emerald-400 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-medium block">Academic Excellence Award</span>
                      <span className="text-slate-300 text-sm">International Student Scholarship • Red River College</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <span className="text-white font-medium block">Professional Certifications</span>
                      <span className="text-slate-300 text-sm">CompTIA A+, Microsoft Azure AI, Google Data Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Readiness */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-4">Professional Readiness</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300 text-sm">Technical Expertise</span>
                    <span className="text-primary-400 font-medium">AI, Robotics, Data Engineering</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300 text-sm">Research Experience</span>
                    <span className="text-blue-400 font-medium">University-Industry Applications</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300 text-sm">Work Authorization</span>
                    <span className="text-emerald-400 font-medium">Authorized to work in Canada</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                    <span className="text-slate-300 text-sm">Industry Focus</span>
                    <span className="text-yellow-400 font-medium">AgTech, AI/ML, Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
