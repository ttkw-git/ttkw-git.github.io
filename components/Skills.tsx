import React from 'react';
import { Code, Database, Brain, TrendingUp, Award, Cog } from 'lucide-react';

// Enhanced skill data with business intelligence category and no percentages
const SKILLS = [
  { 
    category: 'Programming & Development',
    icon: Code,
    items: [
      { name: 'Python', years: '5+ years', level: 'Expert', description: 'ML, Automation, Data Analysis' },
      { name: 'SQL', years: '8+ years', level: 'Expert', description: 'Data Engineering, Business Intelligence' },
      { name: 'JavaScript/TypeScript', years: '2+ years', level: 'Advanced', description: 'React, API Integration' },
      { name: 'R', years: '2+ years', level: 'Intermediate', description: 'Statistical Analysis, Research' },
    ]
  },
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    items: [
      { name: 'Scikit-learn', years: '4+ years', level: 'Expert', description: 'ML Models, Classification' },
      { name: 'PyTorch', years: '2+ years', level: 'Advanced', description: 'Deep Learning, RL' },
      { name: 'Computer Vision (OpenCV)', years: '2+ years', level: 'Advanced', description: 'Image Processing, Autonomous Systems' },
      { name: 'Natural Language Processing', years: '2+ years', level: 'Advanced', description: 'Text Analysis, AI Applications' },
      { name: 'Reinforcement Learning', years: '2+ years', level: 'Advanced', description: 'Multi-Agent Systems' },
    ]
  },
  {
    category: 'Business Intelligence & Analytics',
    icon: TrendingUp,
    items: [
      { name: 'Data-Driven Decision Making', years: '3+ years', level: 'Expert', description: 'Strategic Analysis, ROI Optimization' },
      { name: 'Process Optimization & Automation', years: '3+ years', level: 'Expert', description: 'Efficiency Improvements, Cost Reduction' },
      { name: 'KPI Development & Monitoring', years: '3+ years', level: 'Advanced', description: 'Performance Metrics, Business Intelligence' },
      { name: 'Executive Reporting & Dashboards', years: '2+ years', level: 'Advanced', description: 'Tableau, Strategic Insights' },
      { name: 'Business Metrics & ROI Analysis', years: '2+ years', level: 'Advanced', description: 'Financial Impact Assessment' },
    ]
  },
  {
    category: 'Data Engineering & Systems',
    icon: Database,
    items: [
      { name: 'Data Pipelines & ETL', years: '5+ years', level: 'Expert', description: 'Automated Processing, Quality Assurance' },
      { name: 'Tableau', years: '3+ years', level: 'Advanced', description: 'Business Intelligence, Visualization' },
      { name: 'Database Design & Optimization', years: '4+ years', level: 'Advanced', description: 'Performance Tuning, Scalability' },
      { name: 'Statistical Analysis', years: '4+ years', level: 'Advanced', description: 'Research Methods, Data Science' },
    ]
  },
  {
    category: 'Robotics & IoT Systems',
    icon: Cog,
    items: [
      { name: 'ROS2 (Robot Operating System)', years: '2+ years', level: 'Advanced', description: 'Autonomous Navigation' },
      { name: 'IoT & Edge Computing', years: '3+ years', level: 'Advanced', description: 'Raspberry Pi, Sensor Networks' },
      { name: 'Agricultural Technology', years: '3+ years', level: 'Advanced', description: 'Precision Agriculture, Field Deployment' },
      { name: 'System Integration', years: '3+ years', level: 'Advanced', description: 'API Development, REST Services' },
    ]
  }
];

const ACHIEVEMENTS = [
  {
    icon: TrendingUp,
    value: '50%',
    label: 'Operational Efficiency Improvement',
    description: 'Through automation and data systems'
  },
  {
    icon: Database,
    value: '25%',
    label: 'Error Reduction',
    description: 'Via optimized data pipelines'
  },
  {
    icon: Brain,
    value: '90%+',
    label: 'Cost Reduction',
    description: 'In manual monitoring processes'
  },
  {
    icon: Award,
    value: '18+',
    label: 'Professional Certifications',
    description: 'Validated technical expertise'
  }
];

const CERTIFICATIONS = [
  {
    name: 'CompTIA A+',
    issuer: 'CompTIA',
    date: 'Nov 2025',
    category: 'Systems & Hardware'
  },
  {
    name: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    date: 'May 2024',
    category: 'Cloud AI'
  },
  {
    name: 'Google Advanced Data Analytics',
    issuer: 'Google/Coursera',
    date: 'Oct 2023',
    category: 'Business Intelligence'
  },
  {
    name: 'Google Data Analytics',
    issuer: 'Google/Coursera', 
    date: 'Oct 2023',
    category: 'Data Analysis'
  },
  {
    name: 'Machine Learning with Python',
    issuer: 'FreeCodeCamp',
    date: 'Apr 2023',
    category: 'Machine Learning'
  }
];

const Skills: React.FC = () => {
  const getSkillLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'text-emerald-400 bg-emerald-900/20 border-emerald-700';
      case 'Advanced': return 'text-blue-400 bg-blue-900/20 border-blue-700';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-900/20 border-yellow-700';
      default: return 'text-slate-400 bg-slate-900/20 border-slate-700';
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical Skills & Business Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-4xl mx-auto">
            Comprehensive skill set spanning the entire data science pipeline, from data collection 
            and preprocessing to model deployment and business intelligence, with proven ability to 
            drive operational efficiency and strategic decision-making.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACHIEVEMENTS.map((achievement, index: number) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 text-center group hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500/10 rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="text-primary-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{achievement.value}</div>
                <div className="text-sm font-medium text-slate-300 mb-1">{achievement.label}</div>
                <div className="text-xs text-slate-400">{achievement.description}</div>
              </div>
            );
          })}
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {SKILLS.map((skillCategory, categoryIndex: number) => {
            const Icon = skillCategory.icon;
            return (
              <div
                key={categoryIndex}
                className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-primary-500/50 transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary-500/10 rounded-xl">
                    <Icon className="text-primary-400" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillCategory.category}</h3>
                </div>

                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex: number) => (
                    <div key={skillIndex} className="group">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
                            {skill.years}
                          </span>
                        </div>
                        <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getSkillLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>

                      {/* Skill Description */}
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Professional Certifications</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Validated expertise through industry-recognized certifications from leading technology companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index: number) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary-500/10 rounded-xl group-hover:scale-110 transition-transform">
                    <Award className="text-primary-400" size={24} />
                  </div>
                  <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
                
                <h4 className="text-white font-semibold mb-2 leading-tight">{cert.name}</h4>
                <p className="text-slate-400 text-sm mb-3">{cert.issuer}</p>
                
                <span className="inline-block px-3 py-1 bg-primary-900/30 text-primary-300 rounded-full text-xs border border-primary-700/50">
                  {cert.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Current Focus Areas */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Current Focus & Graduate Studies
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Pursuing MS in Computer Science at Georgia Institute of Technology while advancing expertise 
              in autonomous systems, business intelligence, and AI applications that drive measurable business value. 
              Bridging academic research with real-world applications for operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Advanced AI & Machine Learning',
                'Business Intelligence & Analytics',
                'Agricultural Technology & IoT',
                'Process Optimization & Automation',
                'Executive Reporting & KPIs',
                'Data-Driven Decision Making'
              ].map((area: string) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-primary-500 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
