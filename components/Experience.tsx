import React from 'react';
import { GraduationCap, Briefcase, Award, MapPin, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Education & Experience</h2>
          <p className="text-slate-400 max-w-3xl">
            Advanced technical education combined with enterprise technology experience and cutting-edge research in autonomous systems and AI.
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
                    <span>Atlanta, GA • January 2025 - Present</span>
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
                  <h4 className="text-lg font-semibold text-white mb-2">Diploma, Data Science & Machine Learning</h4>
                  <p className="text-slate-400 font-medium mb-2">Red River College Polytechnic</p>
                  <div className="text-slate-400 text-sm mb-2">August 2021 - April 2023</div>
                  <div className="text-slate-400 text-sm">
                    Comprehensive training in ML model development, data analysis, statistical methods, and production deployment techniques.
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-slate-600/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-slate-600 rounded-full"></div>
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Bachelor of Mathematical & Computer Sciences</h4>
                  <p className="text-slate-400 font-medium mb-2">The University of Adelaide</p>
                  <div className="text-slate-400 text-sm">
                    Strong foundation in algorithms, data structures, mathematical modeling, and systems programming (Java, C, C++).
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

              <div className="relative pl-8 border-l-2 border-green-500/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Senior Officer</h4>
                  <p className="text-green-400 font-medium mb-2">Hang Seng Bank Limited</p>
                  <div className="text-slate-400 text-sm mb-3">Jan 2013 - Aug 2021</div>
                  <div className="text-slate-300 text-sm space-y-2">
                    <p>Branch-level data systems and business intelligence for assigned portfolio:</p>
                    <div className="pl-4 space-y-1">
                      <p>• <span className="text-green-400">SQL-based reporting systems:</span> 25% reduction in reporting errors within managed portfolio</p>
                      <p>• <span className="text-green-400">Automated data processing:</span> 40% reduction in manual handling for branch operations</p>
                      <p>• <span className="text-green-400">Data reliability improvements:</span> 50% improvement through automation</p>
                      <p>• <span className="text-green-400">System implementation:</span> Contributed to Knowledge Management System rollout</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 border-l-2 border-blue-500/30">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
                  <h4 className="text-lg font-semibold text-white mb-2">Research Assistant</h4>
                  <p className="text-blue-400 font-medium mb-2">University of Winnipeg • TerraByte Research Lab</p>
                  <div className="text-slate-400 text-sm mb-3">Jan 2023 - Present</div>
                  <div className="text-slate-300 text-sm">
                    Agricultural robotics research collaboration, YOLO computer vision implementation, and autonomous systems development.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="mt-16 pt-12 border-t border-slate-700">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary-600/20 rounded-lg">
              <Award className="w-6 h-6 text-primary-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Professional Certifications</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white text-sm mb-1">CompTIA A+</h4>
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span className="text-slate-400">Nov 2025</span>
              </div>
            </div>

            <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white text-sm mb-1">Azure AI Fundamentals</h4>
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span className="text-slate-400">May 2024</span>
              </div>
            </div>

            <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white text-sm mb-1">Google Advanced Data Analytics</h4>
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span className="text-slate-400">Oct 2023</span>
              </div>
            </div>

            <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white text-sm mb-1">CCNA</h4>
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="w-3 h-3 text-slate-400" />
                <span className="text-slate-400">In Progress</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Technical Competencies */}
        <div className="mt-12 pt-8">
          <h4 className="text-lg font-semibold text-white mb-6">Core Technical Competencies</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">Autonomous Robotics</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                ROS2, GPS-SLAM sensor fusion, safety systems architecture, agricultural robotics research, and real-time control systems.
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">Data Systems & Analytics</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                SQL-based data processing, automated reporting systems, business intelligence, and enterprise data operations.
              </p>
            </div>

            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50">
              <h4 className="font-semibold text-white mb-3">AI & Machine Learning</h4>
              <p className="text-slate-400 text-sm leading-relaxed">
                Computer vision (YOLO), transfer learning, production ML systems, and automated model deployment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
