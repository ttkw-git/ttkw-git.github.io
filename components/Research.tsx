import React from 'react';
import { Award, Presentation, Users, Calendar } from 'lucide-react';

const Research: React.FC = () => {
  return (
    <section id="research" className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Research & Technical Presentations</h2>
          <p className="text-slate-400 max-w-3xl">
            Research contributions to agricultural AI and computer vision systems.
            Active collaboration in academic research with focus on practical agricultural technology applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* EAGL-I Conference Presentation */}
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-primary-600/20 rounded-lg">
                <Presentation className="w-6 h-6 text-primary-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Agricultural AI Research Presentation
                </h3>
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>February 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>NAPPN 2024 Conference</span>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Conference poster presentation: "Addressing lighting and bounding box accuracy for the
                  Embedded Automated Generator of Labeled Images (EAGL-I) system." Presented research
                  findings at North American Plant Phenotyping Network 2024, West Lafayette, Indiana.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-md">
                    Conference Presentation
                  </span>
                  <span className="px-2 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-md">
                    Computer Vision
                  </span>
                  <span className="px-2 py-1 bg-primary-600/20 text-primary-300 text-xs rounded-md">
                    Agricultural AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* TerraByte Research Work */}
          <div className="bg-slate-950 border border-slate-700 rounded-xl p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-2 bg-primary-600/20 rounded-lg">
                <Award className="w-6 h-6 text-primary-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Agricultural Robotics Research Collaboration
                </h3>
                <div className="text-sm text-slate-400 mb-3">
                  University of Winnipeg • TerraByte Research Lab
                </div>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                  Contributed to autonomous systems research for agricultural applications. Implemented
                  YOLO machine learning model achieving 90% accuracy in plant segmentation tasks.
                  Developed Python automation systems improving data collection reliability.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">YOLO implementation: 90% plant segmentation accuracy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Python automation: 50% improvement in data reliability</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Autonomous rover testing with 100% operational uptime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Focus */}
        <div className="mt-12 p-6 bg-slate-900/50 border border-slate-700/50 rounded-xl">
          <h4 className="text-white font-medium mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-primary-400" />
            Research Contributions & Technical Focus
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h5 className="text-primary-400 font-medium mb-2">Agricultural Computer Vision</h5>
              <p className="text-slate-400 leading-relaxed">
                YOLO-based plant segmentation systems, lighting adaptation challenges, and automated
                labeling for precision agriculture applications.
              </p>
            </div>
            <div>
              <h5 className="text-primary-400 font-medium mb-2">Autonomous Systems Research</h5>
              <p className="text-slate-400 leading-relaxed">
                Collaborative research on field robotics navigation, sensor integration strategies,
                and agricultural automation system reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
