import React, { useState } from 'react';
import { ExternalLink, Tag, ChevronDown, ChevronUp, Info, Zap, AlertCircle } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleExpanded = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 bg-navy-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical Projects & Research
          </h2>
          <p className="text-slate-400 max-w-3xl">
            Selected projects demonstrating advanced autonomous systems, machine learning, and engineering research.
            Each project includes detailed technical implementation, measured performance metrics, and honest assessment of current limitations.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <article
              key={project.id}
              className={`bg-slate-950 border rounded-xl overflow-hidden transition-all duration-300 ${
                project.featured
                  ? 'border-primary-500/50 lg:col-span-2'
                  : 'border-slate-800 hover:border-primary-500/30'
              }`}
            >

              {/* Image Container */}
              <div className={`relative overflow-hidden ${project.featured ? 'h-64' : 'h-48'}`}>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80 z-10"></div>
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-4 right-4 z-20">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-primary-500/80 transition-colors block"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
                      Featured Research
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Performance Metrics */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-primary-400" />
                    <span className="text-primary-400 text-sm font-medium">Performance Metrics</span>
                  </div>
                  <div className="text-slate-300 text-sm bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    {project.metrics}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-2 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-md"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Technical Details Toggle */}
                {(project.technicalDetails || project.limitations || project.businessValue) && (
                  <div className="border-t border-slate-700/50 pt-4">
                    <button
                      onClick={() => toggleExpanded(project.id)}
                      className="flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      Technical Details & Analysis
                      {expandedProject === project.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedProject === project.id && (
                      <div className="mt-4 space-y-4 text-sm">

                        {project.technicalDetails && (
                          <div>
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                              Technical Implementation
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-4 border-l-2 border-primary-600/30">
                              {project.technicalDetails}
                            </p>
                          </div>
                        )}

                        {project.limitations && (
                          <div>
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 text-amber-400" />
                              Current Limitations & Development Status
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-4 border-l-2 border-amber-400/30">
                              {project.limitations}
                            </p>
                          </div>
                        )}

                        {project.businessValue && (
                          <div>
                            <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              Business Impact & Applications
                            </h4>
                            <p className="text-slate-400 leading-relaxed pl-4 border-l-2 border-green-500/30">
                              {project.businessValue}
                            </p>
                          </div>
                        )}

                        {project.comparisonUrl && (
                          <div>
                            <p className="text-slate-400 text-xs mb-2 uppercase tracking-wide">
                              Live comparison report
                            </p>
                            <iframe
                              src={project.comparisonUrl}
                              width="100%"
                              height="580px"
                              className="border border-slate-700 rounded-lg"
                              title="LangSmith Model Comparison"
                            />
                          </div>
                        )}

                      </div>
                    )}
                  </div>
                )}

                {/* Project Link - Always Visible */}
                <div className="mt-6 pt-4 border-t border-slate-700/50">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                  >
                    View Implementation & Code →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Professional Note */}
        <div className="mt-12 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-white font-medium mb-2">Engineering Approach & Methodology</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                All projects follow rigorous engineering practices with honest assessment of capabilities, limitations, and development status.
                Performance metrics represent measured values from actual testing, not theoretical estimates. Current focus on safety-critical
                autonomous systems requires thorough validation before real-world deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
