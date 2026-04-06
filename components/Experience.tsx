import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Education & Experience</h2>
          <p className="text-slate-400 max-w-3xl">
            Academic foundation and professional experience in AI systems, robotics engineering, and business technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-600/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary-600/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-2">Master of Science in Computer Science</h4>
                  <p className="text-primary-400 font-medium mb-2">Georgia Institute of Technology</p>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>Atlanta, GA • 2024 - Present</span>
                  </div>
                  <div className="text-slate-300 text-sm">
                    <p className="font-medium text-primary-300 mb-1">Specialization:</p>
                    <p>Autonomous Robotics Systems, AI/ML Applications, Sensor Fusion</p>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-600/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Agricultural Robotics Research</h4>
                  <p className="text-slate-400 font-medium mb-2">University of Winnipeg</p>
                  <div className="text-slate-400 text-sm">
                    Research focus on autonomous systems for agricultural applications
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-primary-600/20 rounded-lg">
                <Briefcase className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-white">Professional Experience</h3>
            </div>

            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-primary-600/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                  <h4 className="text-lg font-semibold text-white mb-2">AI Trainer</h4>
                  <p className="text-primary-400 font-medium mb-2">Outlier</p>
                  <div className="text-slate-400 text-sm mb-3">2024 - Present</div>
                  <div className="text-slate-300 text-sm">
                    Training and fine-tuning AI models, developing training datasets, and optimizing model performance for production applications.
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-600/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Business Technology Analyst</h4>
                  <p className="text-slate-400 font-medium mb-2">Hang Seng Bank</p>
                  <div className="text-slate-400 text-sm mb-3">Previous Role</div>
                  <div className="text-slate-400 text-sm">
                    Financial technology systems analysis, business process optimization, and cross-functional project coordination in banking operations.
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-600/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Agricultural Robotics Researcher</h4>
                  <p className="text-slate-400 font-medium mb-2">University of Winnipeg</p>
                  <div className="text-slate-400 text-sm mb-3">Research Position</div>
                  <div className="text-slate-400 text-sm">
                    Autonomous systems development for agricultural applications, sensor integration, and field robotics research.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Focus Areas */}
        <div className="mt-16 pt-12 border-t border-slate-700">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary-600/20 rounded-lg">
              <Award className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Research & Technical Focus</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">Autonomous Robotics</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                GPS-SLAM sensor fusion, autonomous navigation, safety systems architecture, and real-time control systems.
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">Machine Learning & AI</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Deep learning model development, transfer learning, computer vision, and production ML systems.
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">Systems Engineering</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                ROS2 architecture, multi-sensor integration, safety-critical systems, and hardware-software integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
