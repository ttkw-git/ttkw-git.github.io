import { Github, Linkedin } from 'lucide-react';
import { Project, SocialLink, NavItem } from './types';

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

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Agricultural Robotics Research & Development',
    description: 'Currently developing autonomous systems using ROS2 and Python at University of Winnipeg, building practical skills in robotics programming and sensor integration for agricultural applications.',
    longDescription: 'Active research in autonomous robotics systems using ROS2 and Python as part of agricultural technology development. Currently working on mini rover systems to build foundational expertise in autonomous navigation, sensor integration, and data collection that will be applicable to precision agriculture and field robotics.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '',
    category: 'Agricultural Robotics',
    featured: true,
    tags: ['ROS2', 'Python', 'Agricultural Research', 'Autonomous Systems'],
    technologies: [
      'ROS2', 'Python', 'Robotics Programming', 'Sensor Integration', 'Autonomous Navigation', 'Agricultural Technology'
    ],
    achievements: [
      'Developing expertise in ROS2 framework for autonomous systems programming',
      'Building hands-on experience with sensor integration for agricultural applications',
      'Learning autonomous navigation and control system development',
      'Gaining practical knowledge applicable to precision agriculture technology'
    ],
    businessImpact: 'Research and development in agricultural robotics with potential applications to precision farming and automated data collection',
    learningOutcomes: [
      'Advanced robotics programming with ROS2 in agricultural contexts',
      'Practical sensor integration and data collection system development',
      'Understanding of agricultural technology requirements and applications'
    ]
  },
  {
    id: 2,
    title: 'IoT Environmental Monitoring System',
    description: 'Designed and implemented IoT infrastructure using Raspberry Pi for real-time environmental monitoring, demonstrating practical applications of edge computing and sensor networks.',
    longDescription: 'Built comprehensive IoT ecosystem for environmental data collection using Raspberry Pi and sensor networks. Developed automated data logging systems and real-time monitoring capabilities that demonstrate the potential for precision agriculture and greenhouse automation applications.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'IoT & Edge Computing',
    featured: true,
    tags: ['IoT', 'Raspberry Pi', 'Environmental Monitoring', 'Python'],
    technologies: [
      'Raspberry Pi', 'IoT Sensors', 'Python', 'Environmental Data Processing', 'Real-time Systems', 'Data Logging'
    ],
    achievements: [
      'Successfully deployed 24/7 automated environmental monitoring system',
      'Achieved reliable data collection and processing using edge computing principles',
      'Built scalable IoT architecture suitable for agricultural applications',
      'Developed real-time data visualization and monitoring capabilities'
    ],
    businessImpact: 'IoT infrastructure demonstrating practical applications for environmental monitoring and precision agriculture',
    learningOutcomes: [
      'IoT system architecture and edge computing implementation',
      'Environmental data processing and analysis techniques',
      'Real-time monitoring system design and deployment'
    ]
  },
  {
    id: 3,
    title: 'Multi-Agent Reinforcement Learning Research',
    description: 'Implementing advanced multi-agent AI systems using Deep Q-Networks as part of Georgia Tech MS coursework, developing expertise in cutting-edge machine learning approaches.',
    longDescription: 'Conducting academic research in multi-agent reinforcement learning using PyTorch and advanced DQN algorithms. Work focuses on cooperative AI behaviors and coordination strategies as part of Georgia Tech MS Computer Science program, with potential applications to autonomous system coordination.',
    imageUrl: 'images/projects/3.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/4923c2bfa486086834f6663ed5ad97eb',
    demoUrl: '',
    category: 'AI Research',
    featured: true,
    tags: ['Reinforcement Learning', 'PyTorch', 'Academic Research', 'Multi-Agent AI'],
    technologies: [
      'PyTorch', 'Deep Q-Networks', 'Multi-Agent Systems', 'Python', 'Academic Research Methods'
    ],
    achievements: [
      'Implementing advanced DQN algorithms for multi-agent coordination',
      'Developing expertise in reinforcement learning through rigorous academic study',
      'Building practical experience with PyTorch and deep learning frameworks',
      'Applying theoretical concepts to practical AI coordination challenges'
    ],
    businessImpact: 'Advanced AI research contributing to understanding of autonomous system coordination and decision-making',
    learningOutcomes: [
      'Advanced reinforcement learning theory and implementation',
      'Multi-agent coordination strategies and algorithm design',
      'Academic research methodology and performance evaluation',
      'Practical experience with modern deep learning frameworks'
    ]
  },
  {
    id: 4,
    title: 'Data Analysis & Business Intelligence Development',
    description: 'Developing expertise in data processing, automation, and business intelligence through academic projects and practical applications, focusing on operational efficiency improvements.',
    longDescription: 'Building proficiency in data engineering, automated processing systems, and business intelligence through coursework and practical projects. Gaining experience with SQL optimization, data pipeline development, and dashboard creation for operational insights.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'Data Engineering',
    featured: false,
    tags: ['Data Analysis', 'Business Intelligence', 'SQL', 'Python'],
    technologies: [
      'Python', 'SQL', 'Data Processing', 'Business Intelligence', 'Automation', 'Dashboard Development'
    ],
    achievements: [
      'Developing proficiency in data processing and automation techniques',
      'Building experience with business intelligence and dashboard creation',
      'Learning SQL optimization and data pipeline development',
      'Applying data analysis skills to real-world operational challenges'
    ],
    businessImpact: 'Skill development in data engineering and business intelligence with applications to operational efficiency',
    learningOutcomes: [
      'Data engineering best practices and pipeline development',
      'Business intelligence system design and implementation',
      'SQL optimization and database performance improvement techniques'
    ]
  }
];

export const ABOUT_TEXT_1 = "Technical Professional and AI Specialist currently pursuing MS Computer Science at Georgia Institute of Technology. My analytical approach combines technical expertise with business understanding, focusing on solutions that deliver measurable operational improvements and support strategic decision-making. Currently working as AI Trainer for Outlier while conducting research at University of Winnipeg.";

export const ABOUT_TEXT_2 = "My recent focus centers on practical AI applications that drive business value, from agricultural automation to data systems optimization. I bring international perspective with strong analytical foundation, now specializing in autonomous systems, computer vision, and business intelligence solutions for real-world challenges.";

export const VALUE_PROPOSITION = "I develop practical AI and automation solutions that drive business value, from agricultural robotics to data systems, with a focus on delivering measurable improvements in operational efficiency and ROI.";

// Additional exports that components might need
export const CURRENT_STATUS = {
  education: "MS Computer Science at Georgia Institute of Technology (2025-2026)",
  work: "AI Trainer at Outlier (Freelance) • Research Technician at University of Winnipeg",
  location: "Winnipeg, Manitoba, Canada",
  availability: "Open to Full-Time Opportunities"
};

export const CORE_COMPETENCIES = [
  "AI & Machine Learning Applications",
  "Data Engineering & Business Intelligence", 
  "Process Optimization & Automation",
  "Agricultural Technology & IoT Systems",
  "Executive Reporting & KPI Development",
  "Cross-functional Collaboration & Strategic Thinking"
];

export const PROFESSIONAL_SUMMARY = "Experienced technical professional with strong foundation in data systems and proven research capabilities. Currently pursuing advanced studies at Georgia Institute of Technology while developing practical AI and automation expertise that drives business value. Seeking to apply technical skills and business acumen to solve complex challenges in industry.";
