import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { SocialLink } from '../types';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-900/10 rounded-t-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's Connect</h2>
        <p className="text-slate-400 mb-10 text-lg">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          {SOCIAL_LINKS.map((link: SocialLink) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-slate-900/50 hover:bg-slate-800 border border-slate-800 hover:border-primary-500 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary-900/20 w-full sm:w-auto"
              >
                <div className="p-2 bg-slate-800 group-hover:bg-primary-500/20 rounded-lg transition-colors">
                  <Icon className="w-6 h-6 text-slate-300 group-hover:text-primary-400" />
                </div>
                <div className="text-left">
                  <span className="block text-xs text-slate-500 uppercase tracking-wider font-medium">Follow on</span>
                  <span className="block text-lg font-semibold text-white">{link.name}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
