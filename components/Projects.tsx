import React, { useState } from 'react';
import { ExternalLink, Github, TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Machine Learning', 'Data Analytics', 'Natural Language Processing'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter((project: Project) => project.category === filter);

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8">
            Real-world machine learning solutions that deliver measurable business impact. 
            Each project demonstrates end-to-end development from problem analysis to deployment.
          </p>

          {/* Project Categories Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  filter === category
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700 border border-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {filteredProjects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-slate-800 hover:border-primary-500/50 transition-all duration-500 overflow-hidden"
            >
              <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-[1fr,1.2fr]' : 'lg:grid-cols-[1.2fr,1fr]'} gap-8 p-8`}>
                
                {/* Project Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} relative`}>
                  <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-indigo-500/20"></div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    
                    {/* Project Actions */}
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-slate-900/80 hover:bg-primary-600 text-white rounded-lg transition-all backdrop-blur-sm border border-slate-700 hover:border-primary-500"
                        title="View Source Code"
                      >
                        <Github size={18} />
                      </a>
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-slate-900/80 hover:bg-primary-600 text-white rounded-lg transition-all backdrop-blur-sm border border-slate-700 hover:border-primary-500"
                          title="Live Demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-primary-600/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-lg text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies?.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-slate-800 text-slate-300 text-sm rounded-lg border border-slate-700 hover:border-primary-500 transition-colors"
                        >
                          {tech}
                        </span>
                      )) || null}
                    </div>
                  </div>

                  {/* Key Results */}
                  <div className="bg-gradient-to-r from-primary-500/10 to-indigo-500/10 rounded-xl p-6 border border-primary-500/20">
                    <div className="flex items-center space-x-2 mb-3">
                      <TrendingUp className="text-green-400" size={18} />
                      <h4 className="text-white font-semibold">Business Impact</h4>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.businessImpact}
                    </p>
                  </div>

                  {/* Quick Achievements */}
                  <div className="grid grid-cols-1 gap-3">
                    {project.achievements?.slice(0, 2).map((achievement: string, idx: number) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Award className="text-primary-400 mt-0.5 flex-shrink-0" size={16} />
                        <span className="text-slate-300 text-sm">{achievement}</span>
                      </div>
                    )) || null}
                  </div>

                  {/* Expand/Collapse Button */}
                  <button
                    onClick={() => toggleExpanded(project.id)}
                    className="flex items-center space-x-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                  >
                    <span>{expandedProject === project.id ? 'Show Less' : 'Show More Details'}</span>
                    {expandedProject === project.id ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </button>

                  {/* Expanded Content */}
                  {expandedProject === project.id && (
                    <div className="space-y-6 border-t border-slate-800 pt-6 animate-in slide-in-from-top-2 duration-300">
                      {/* Detailed Description */}
                      <div>
                        <h4 className="text-white font-semibold mb-2">Project Overview</h4>
                        <p className="text-slate-300 leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>

                      {/* All Achievements */}
                      {project.achievements && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Achievements</h4>
                          <div className="space-y-2">
                            {project.achievements.map((achievement: string, idx: number) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-300">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Learning Outcomes */}
                      {project.learningOutcomes && (
                        <div>
                          <h4 className="text-white font-semibold mb-3">Technical Learning</h4>
                          <div className="space-y-2">
                            {project.learningOutcomes.map((outcome: string, idx: number) => (
                              <div key={idx} className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-slate-300">{outcome}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-3 pt-4">
                        <a
                          href={project.projectUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 hover:border-primary-500"
                        >
                          <Github size={18} className="mr-2" />
                          View Source Code
                        </a>
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary-600/25"
                          >
                            <ExternalLink size={18} className="mr-2" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary-500/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-slate-300 mb-6">
              I'm always excited to discuss new opportunities and challenging projects. 
              Let's connect and see how I can help drive your team's data science initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary-600/25"
              >
                Get In Touch
                <ExternalLink size={18} className="ml-2" />
              </a>
              <a
                href="https://github.com/ttkw-git"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700 hover:border-primary-500"
              >
                <Github size={18} className="mr-2" />
                View All Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
