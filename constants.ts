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
    title: 'Autonomous Agricultural Data Rover',
    description: 'Led development of real-time weed detection system deployed at Innovation Farms, demonstrating practical application of computer vision and ROS2 in Canadian agricultural research.',
    longDescription: 'Developed and deployed autonomous agricultural rover using ROS2 and Python for precision farming applications at University of Winnipeg research facilities. Successfully implemented computer vision algorithms for real-time weed detection, demonstrating practical AI applications in Canadian agriculture.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '',
    category: 'Agricultural Robotics',
    featured: true,
    tags: ['ROS2', 'Computer Vision', 'Agricultural AI', 'Python'],
    technologies: [
      'ROS2', 'Python', 'Computer Vision', 'OpenCV', 'Agricultural Sensors', 'Autonomous Navigation'
    ],
    achievements: [
      'Deployed real-time weed detection system at Innovation Farms research facility',
      'Improved agricultural data reliability by 50% through automation',
      'Successfully integrated multi-sensor monitoring for precision agriculture',
      'Contributed to Canadian agricultural research innovation'
    ],
    businessImpact: 'Practical AI solution for Canadian agriculture, reducing manual labor and improving crop monitoring efficiency',
    learningOutcomes: [
      'Advanced robotics programming with ROS2',
      'Real-world agricultural AI deployment',
      'Canadian agricultural technology landscape understanding'
    ]
  },
  {
    id: 2,
    title: 'IoT-Based Greenhouse Monitoring System',
    description: 'Built comprehensive IoT infrastructure using Raspberry Pi for Canadian greenhouse operations, showcasing practical application of edge computing and sensor networks.',
    longDescription: 'Designed and implemented complete IoT ecosystem for precision agriculture monitoring in Canadian research facilities. Built scalable sensor network architecture supporting real-time environmental data collection and automated alerting systems.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'IoT & Edge Computing',
    featured: true,
    tags: ['IoT', 'Raspberry Pi', 'Edge Computing', 'Python'],
    technologies: [
      'Raspberry Pi', 'IoT Sensors', 'Python', 'Environmental Monitoring', 'Data Logging', 'REST APIs'
    ],
    achievements: [
      'Deployed 24/7 automated environmental monitoring system',
      'Achieved 99%+ data collection reliability in Canadian greenhouse environments',
      'Built scalable architecture supporting multiple research facilities',
      'Reduced manual monitoring workload by 90%'
    ],
    businessImpact: 'IoT infrastructure enabling data-driven decision making for Canadian agricultural operations',
    learningOutcomes: [
      'IoT system architecture and deployment',
      'Environmental data analysis for agricultural optimization',
      'Canadian agricultural technology requirements'
    ]
  },
  {
    id: 3,
    title: 'Multi-Agent Reinforcement Learning System',
    description: 'Advanced AI research project as part of Georgia Tech MS program, demonstrating cutting-edge machine learning capabilities and academic excellence.',
    longDescription: 'Developing sophisticated multi-agent AI systems using Deep Q-Networks as part of advanced Georgia Tech coursework. Research focuses on cooperative AI behaviors with applications to autonomous systems and robotics.',
    imageUrl: 'images/projects/3.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/4923c2bfa486086834f6663ed5ad97eb',
    demoUrl: '',
    category: 'AI Research',
    featured: true,
    tags: ['Reinforcement Learning', 'PyTorch', 'Academic Research', 'AI'],
    technologies: [
      'PyTorch', 'Deep Q-Networks', 'Multi-Agent Systems', 'Python', 'Jupyter Notebooks'
    ],
    achievements: [
      'Successfully implemented advanced DQN algorithms for cooperative AI',
      'Achieved optimal coordination in complex multi-agent environments',
      'Applied cutting-edge research to practical coordination challenges',
      'Demonstrated academic excellence in advanced AI coursework'
    ],
    businessImpact: 'Advanced AI research with applications to autonomous systems and robotics coordination',
    learningOutcomes: [
      'Advanced reinforcement learning implementation',
      'Multi-agent coordination strategies',
      'Academic research methodology and AI performance evaluation'
    ]
  },
  {
    id: 4,
    title: 'Data Pipeline Automation & Analytics',
    description: 'Developed automated data processing systems and business intelligence dashboards, demonstrating strong foundation in data engineering and analytics.',
    longDescription: 'Built comprehensive data processing pipelines and analytics systems, focusing on automation, error reduction, and business intelligence. Experience includes SQL optimization, ETL processes, and dashboard development for decision support.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'Data Engineering',
    featured: false,
    tags: ['SQL', 'Data Engineering', 'Business Intelligence', 'Automation'],
    technologies: [
      'SQL', 'Python', 'Data Pipelines', 'Business Intelligence', 'Tableau', 'ETL Processes'
    ],
    achievements: [
      'Reduced data processing errors by 25% through automation',
      'Improved reporting efficiency by 40% via streamlined workflows',
      'Built executive dashboards supporting data-driven decision making',
      'Optimized data processing pipelines for reliability and performance'
    ],
    businessImpact: 'Data automation solutions improving operational efficiency and enabling informed business decisions',
    learningOutcomes: [
      'Large-scale data engineering best practices',
      'Business intelligence architecture and implementation',
      'Automated reporting system design and deployment'
    ]
  }
];

export const ABOUT_TEXT_1 = "Technical Professional and AI Specialist currently pursuing MS Computer Science at Georgia Institute of Technology. Combining solid analytical foundation with hands-on experience in agricultural robotics, IoT systems, and AI development. Currently working as AI Trainer for Outlier while conducting research at University of Winnipeg.";

export const ABOUT_TEXT_2 = "My recent focus centers on practical AI applications in Canadian agriculture and advanced machine learning research. I bring international perspective with strong analytical background, now specializing in autonomous systems, computer vision, and data-driven solutions for real-world challenges.";

export const VALUE_PROPOSITION = "I develop practical AI and automation solutions, from agricultural robotics to data systems, with a focus on delivering measurable improvements in efficiency and reliability.";

// Strategically positioned professional information
export const CURRENT_STATUS = {
  education: "MS Computer Science at Georgia Institute of Technology (2025-2026)",
  work: "AI Trainer at Outlier (Freelance) • Research Technician at University of Winnipeg",
  location: "Winnipeg, Manitoba, Canada",
  availability: "Open to Full-Time Opportunities"
};

export const CANADIAN_EXPERIENCE = [
  {
    title: "AI Trainer",
    company: "Outlier",
    period: "May 2024 – Present", 
    location: "Remote (Canada)",
    type: "Current Role",
    achievements: [
      "Assess quality of AI-generated code and provide technical evaluations",
      "Develop frameworks for AI code quality assessment",
      "Create solutions for complex mathematical and programming challenges"
    ]
  },
  {
    title: "Agricultural Robotics Technician",
    company: "University of Winnipeg",
    period: "2023 – Present", 
    location: "Winnipeg, Manitoba",
    type: "Research Position",
    achievements: [
      "Led autonomous rover development using ROS2 and Python",
      "Improved agricultural data reliability by 50% through automation",
      "Deployed real-time weed detection at Canadian research facilities",
      "Built IoT systems for precision agriculture monitoring"
    ]
  }
];

export const EDUCATION_FOCUS = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Georgia Institute of Technology",
    period: "2025 – 2026",
    status: "Current Student",
    coursework: "Reinforcement Learning, Robotics AI Techniques, Network Security",
    relevance: "Advanced AI and systems programming"
  },
  {
    degree: "Diploma, Data Science and Machine Learning", 
    institution: "Red River College Polytechnic",
    period: "2021 – 2023",
    status: "Graduated",
    gpa: "4.4/4.5 (International Student Scholarship)",
    relevance: "Canadian education with excellent academic performance"
  }
];

export const CORE_COMPETENCIES = [
  "Agricultural Technology & IoT Systems",
  "Computer Vision & Autonomous Systems", 
  "Data Engineering & Analytics",
  "AI/ML Development & Deployment",
  "Research & Academic Excellence",
  "Cross-Cultural Communication & Collaboration"
];

export const PROFESSIONAL_SUMMARY = "Experienced technical professional with strong foundation in data systems and proven research capabilities. Currently pursuing advanced studies at Georgia Institute of Technology while developing practical AI and automation expertise. Seeking to apply technical skills to solve complex challenges in industry.";
