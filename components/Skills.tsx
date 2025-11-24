import React from 'react';
import { Code, Database, Brain, Globe, Award, TrendingUp } from 'lucide-react';

// Define types locally since they're not in the main types file yet
interface SkillItem {
  name: string;
  level: number;
  years: string;
}

interface Skill {
  category: string;
  items: SkillItem[];
}

interface Achievement {
  icon: any;
  value: string;
  label: string;
  description: string;
}

// Local data since it's not in constants yet
const SKILLS: Skill[] = [
  { 
    category: 'Programming Languages',
    items: [
      { name: 'Python', level: 90, years: '3+' },
      { name: 'JavaScript/TypeScript', level: 75, years: '2+' },
      { name: 'SQL', level: 85, years: '3+' },
      { name: 'R', level: 70, years: '2+' },
    ]
  },
  {
    category: 'Machine Learning & Data Science',
    items: [
      { name: 'Scikit-learn', level: 88, years: '3+' },
      { name: 'TensorFlow/Keras', level: 82, years: '2+' },
      { name: 'Pandas/NumPy', level: 90, years: '3+' },
      { name: 'Computer Vision (OpenCV)', level: 80, years: '2+' },
      { name: 'Natural Language Processing', level: 85, years: '2+' },
      { name: 'Data Visualization (Matplotlib/Seaborn)', level: 88, years: '3+' },
    ]
  },
  {
    category: 'Web Development',
    items: [
      { name: 'React', level: 75, years: '1+' },
      { name: 'HTML/CSS', level: 85, years: '2+' },
      { name: 'Node.js', level: 70, years: '1+' },
      { name: 'Git/GitHub', level: 88, years: '3+' },
    ]
  },
  {
    category: 'Tools & Platforms',
    items: [
      { name: 'Jupyter Notebooks', level: 95, years: '3+' },
      { name: 'Docker', level: 65, years: '1+' },
      { name: 'AWS/Cloud Services', level: 60, years: '1+' },
      { name: 'PostgreSQL/MySQL', level: 78, years: '2+' },
    ]
  }
];

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: TrendingUp,
    value: '94%',
    label: 'Average Model Accuracy',
    description: 'Across all ML projects'
  },
  {
    icon: Database,
    value: '100K+',
    label: 'Data Points Processed',
    description: 'In various projects'
  },
  {
    icon: Brain,
    value: '15+',
    label: 'ML Models Deployed',
    description: 'From concept to production'
  },
  {
    icon: Award,
    value: '85%',
    label: 'Process Automation',
    description: 'Average efficiency improvement'
  }
];

const Skills: React.FC = () => {
  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return Code;
      case 'Machine Learning & Data Science':
        return Brain;
      case 'Web Development':
        return Globe;
      case 'Tools & Platforms':
        return Database;
      default:
        return Code;
    }
  };

  const getSkillColor = (level: number) => {
    if (level >= 85) return 'from-green-400 to-emerald-500';
    if (level >= 75) return 'from-blue-400 to-cyan-500';
    if (level >= 65) return 'from-yellow-400 to-orange-500';
    return 'from-slate-400 to-slate-500';
  };

  const getSkillLabel = (level: number) => {
    if (level >= 85) return 'Expert';
    if (level >= 75) return 'Advanced';
    if (level >= 65) return 'Intermediate';
    return 'Beginner';
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
            Technical Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-6"></div>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto">
            Comprehensive skill set spanning the entire data science pipeline, from data collection 
            and preprocessing to model deployment and monitoring.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ACHIEVEMENTS.map((achievement: Achievement, index: number) => {
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
        <div className="grid lg:grid-cols-2 gap-8">
          {SKILLS.map((skillCategory: Skill, categoryIndex: number) => {
            const Icon = getSkillIcon(skillCategory.category);
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
                  {skillCategory.items.map((skill: SkillItem, skillIndex: number) => (
                    <div key={skillIndex} className="group">
                      {/* Skill Header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md">
                            {skill.years} years
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-400 text-sm">{getSkillLabel(skill.level)}</span>
                          <span className="text-white text-sm font-medium">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full transition-all duration-1000 ease-out group-hover:scale-x-105 origin-left`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                        
                        {/* Skill level indicator */}
                        <div
                          className="absolute top-0 h-2 w-1 bg-white rounded-full opacity-75"
                          style={{ left: `${skill.level}%` }}
                        ></div>
                      </div>

                      {/* Proficiency Markers */}
                      <div className="flex justify-between mt-1 text-xs text-slate-500">
                        <span>Beginner</span>
                        <span>Intermediate</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Competencies */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Additional Competencies</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Beyond technical skills, I bring strong problem-solving abilities and business acumen 
              to every data science project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Business Analytics',
                description: 'Translating complex data insights into actionable business strategies and KPI improvements.',
                highlights: ['ROI Analysis', 'Performance Metrics', 'Strategic Planning']
              },
              {
                icon: Brain,
                title: 'Problem Solving',
                description: 'Systematic approach to breaking down complex problems and developing innovative solutions.',
                highlights: ['Root Cause Analysis', 'Algorithm Design', 'Optimization']
              },
              {
                icon: Award,
                title: 'Project Management',
                description: 'End-to-end project delivery from requirements gathering to deployment and monitoring.',
                highlights: ['Agile Methodology', 'Stakeholder Management', 'Documentation']
              }
            ].map((competency, index: number) => {
              const Icon = competency.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-primary-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-3 bg-primary-500/10 rounded-xl group-hover:scale-110 transition-transform">
                      <Icon className="text-primary-400" size={24} />
                    </div>
                    <h4 className="text-lg font-semibold text-white">{competency.title}</h4>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {competency.description}
                  </p>
                  
                  <div className="space-y-2">
                    {competency.highlights.map((highlight: string, idx: number) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                        <span className="text-slate-400 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Learning & Growth */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500/10 to-indigo-500/10 rounded-2xl p-8 border border-primary-500/20 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              The field of data science evolves rapidly, and I'm committed to staying at the forefront 
              of new technologies and methodologies. Currently exploring advanced deep learning architectures, 
              MLOps practices, and cloud-native ML solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Deep Learning (PyTorch)',
                'MLOps & Model Monitoring', 
                'Cloud ML (AWS/Azure)',
                'Advanced NLP (Transformers)',
                'Time Series Forecasting',
                'A/B Testing & Experimentation'
              ].map((skill: string) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-600 hover:border-primary-500 transition-colors"
                >
                  {skill}
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
