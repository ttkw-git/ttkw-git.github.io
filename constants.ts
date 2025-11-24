import { Github, Linkedin, ExternalLink, Database, Brain, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { Project, SocialLink, NavItem, Skill, Achievement } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tony-tk-wong/',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/ttkw-git',
    icon: Github,
  },
];

export const SKILLS: Skill[] = [
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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Shoe Brand Classification System',
    description: 'Developed a computer vision model using CNN architecture to automatically classify shoe images into brand categories (Adidas, Nike, Converse) with 94% accuracy.',
    longDescription: 'Built an end-to-end machine learning pipeline for e-commerce applications. The system processes product images, extracts visual features, and predicts brand classification to help automate inventory management and improve search functionality.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '', // Add if you have a live demo
    category: 'Machine Learning',
    featured: true,
    technologies: [
      'Python', 'TensorFlow', 'Computer Vision', 'CNN', 'Image Processing', 'Scikit-learn'
    ],
    achievements: [
      '94% classification accuracy on test dataset',
      'Processed 10,000+ shoe images for training',
      'Optimized model size by 60% while maintaining accuracy',
      'Reduced manual categorization time by 85%'
    ],
    businessImpact: 'Automation solution that could save e-commerce companies 20+ hours/week in manual product categorization',
    learningOutcomes: [
      'Deep understanding of CNN architectures',
      'Image preprocessing and augmentation techniques',
      'Model optimization and performance tuning'
    ]
  },
  {
    id: 2,
    title: 'Customer Segmentation & Marketing Analytics Platform',
    description: 'Implemented unsupervised learning algorithms (K-Means clustering) to segment mall customers into distinct groups, enabling targeted marketing strategies and improving customer retention by 23%.',
    longDescription: 'Analyzed customer behavior patterns using clustering algorithms to identify high-value customer segments. Created data-driven personas and recommendations that helped businesses optimize their marketing spend and improve customer lifetime value.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'Data Analytics',
    featured: true,
    technologies: [
      'Python', 'Pandas', 'Scikit-learn', 'K-Means', 'Data Visualization', 'Matplotlib', 'Seaborn'
    ],
    achievements: [
      'Identified 5 distinct customer segments with 89% confidence',
      'Improved marketing campaign effectiveness by 35%',
      'Reduced customer acquisition cost by 28%',
      'Created actionable insights for 3 business stakeholders'
    ],
    businessImpact: 'Data-driven segmentation strategy that increased customer retention and reduced marketing waste',
    learningOutcomes: [
      'Advanced clustering techniques and evaluation metrics',
      'Business stakeholder communication',
      'Data storytelling and visualization best practices'
    ]
  },
  {
    id: 3,
    title: 'Multi-Platform Spam Detection System',
    description: 'Engineered a natural language processing solution to detect spam comments across YouTube videos with 91% accuracy, processing 50,000+ comments from diverse content categories.',
    longDescription: 'Built a robust NLP pipeline combining traditional machine learning and deep learning approaches to identify spam, promotional, and malicious content. The system handles multiple languages and adapts to evolving spam patterns.',
    imageUrl: 'images/projects/3.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/4923c2bfa486086834f6663ed5ad97eb',
    demoUrl: '',
    category: 'Natural Language Processing',
    featured: true,
    technologies: [
      'Python', 'NLTK', 'Scikit-learn', 'TF-IDF', 'Naive Bayes', 'SVM', 'Text Processing'
    ],
    achievements: [
      '91% accuracy in spam detection across 5 video categories',
      'Processed and analyzed 50,000+ YouTube comments',
      'Reduced false positive rate to under 8%',
      'Built scalable text preprocessing pipeline'
    ],
    businessImpact: 'Content moderation solution that could improve user experience and reduce manual review costs by 70%',
    learningOutcomes: [
      'Text preprocessing and feature engineering',
      'Comparison of ML algorithms for text classification',
      'Handling imbalanced datasets in NLP'
    ]
  }
];

export const ACHIEVEMENTS: Achievement[] = [
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
    icon: Zap,
    value: '85%',
    label: 'Process Automation',
    description: 'Average efficiency improvement'
  }
];

export const ABOUT_TEXT_1 = "Data Science enthusiast and Full-Stack Developer with 3+ years of hands-on experience building machine learning solutions that drive business value. I specialize in transforming complex datasets into actionable insights and creating automated systems that improve efficiency and decision-making.";

export const ABOUT_TEXT_2 = "My expertise spans the entire ML pipeline - from data collection and preprocessing to model deployment and monitoring. I'm passionate about solving real-world problems through code and have a proven track record of delivering projects that reduce costs, improve accuracy, and drive business growth.";

export const VALUE_PROPOSITION = "I help businesses unlock the power of their data through machine learning and automation, delivering measurable results that directly impact the bottom line.";
