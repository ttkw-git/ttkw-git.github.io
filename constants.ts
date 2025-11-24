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
    title: 'Agricultural Data Rover',
    description: 'Development of autonomous agricultural rover with real-time weed detection capabilities, enabling data-driven decision making for agricultural operations and resource optimization.',
    longDescription: 'Developed and deployed autonomous agricultural rover using ROS2 and Python for precision farming applications at University of Winnipeg research facilities. Successfully implemented computer vision algorithms for real-time analysis, demonstrating practical AI applications that drive operational efficiency in Canadian agriculture.',
    imageUrl: 'images/projects/data_rover.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '',
    category: 'Agricultural Robotics',
    featured: true,
    tags: ['ROS2', 'Computer Vision', 'Agricultural AI', 'Python'],
    technologies: [
      'ROS2', 'Python', 'Computer Vision', 'OpenCV', 'Agricultural Sensors', 'Autonomous Navigation'
    ],
    achievements: [
      'Improved agricultural data collection efficiency by 50% through automation',
      'Developed real-time decision support systems for crop management',
      'Successfully integrated multi-sensor monitoring for precision agriculture',
      'Reduced manual field work costs while improving data quality and consistency'
    ],
    businessImpact: 'AI automation solution reducing operational costs and enabling precision agriculture through data-driven decision making',
    learningOutcomes: [
      'Advanced robotics programming with ROS2',
      'Real-world agricultural AI deployment and business impact assessment',
      'Cross-functional collaboration with agricultural researchers and industry stakeholders'
    ]
  },
  {
    id: 2,
    title: 'IoT-Based Greenhouse Monitoring System',
    description: 'Built comprehensive IoT infrastructure using Raspberry Pi for greenhouse operations, supporting cost-effective precision agriculture through automated monitoring and predictive insights.',
    longDescription: 'Designed and implemented complete IoT ecosystem for precision agriculture monitoring in research facilities. Built scalable sensor network architecture supporting real-time environmental data collection, automated alerting systems, and business intelligence dashboards for operational optimization.',
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
      'Achieved 99%+ system uptime with 24/7 automated environmental monitoring',
      'Reduced manual monitoring costs by 90% through intelligent automation',
      'Built predictive analytics for optimal crop growing conditions',
      'Created executive dashboards for real-time operational insights and KPI tracking'
    ],
    businessImpact: 'IoT infrastructure delivering measurable ROI through reduced operational costs and optimized resource utilization',
    learningOutcomes: [
      'IoT system architecture and deployment for business applications',
      'Environmental data analysis and predictive modeling for operational efficiency',
      'Business intelligence dashboard development and KPI design'
    ]
  },
  {
    id: 3,
    title: 'Multi-Agent Reinforcement Learning System',
    description: 'Advanced AI research project as part of Georgia Tech MS program, demonstrating cutting-edge machine learning capabilities with applications to business process optimization.',
    longDescription: 'Developing sophisticated multi-agent AI systems using Deep Q-Networks as part of advanced Georgia Tech coursework. Research focuses on cooperative AI behaviors with practical applications to business process automation and operational optimization.',
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
      'Successfully implemented advanced DQN algorithms for cooperative AI systems',
      'Achieved optimal coordination strategies applicable to business process optimization',
      'Applied cutting-edge research methodologies to practical coordination challenges',
      'Demonstrated academic excellence in advanced AI coursework with real-world applications'
    ],
    businessImpact: 'Advanced AI research with applications to business process automation and operational coordination',
    learningOutcomes: [
      'Advanced reinforcement learning implementation and optimization',
      'Multi-agent coordination strategies applicable to business process improvement',
      'Academic research methodology and performance measurement frameworks'
    ]
  },
  {
    id: 4,
    title: 'Data Pipeline Automation & Business Intelligence',
    description: 'Developed automated data processing systems and executive dashboards, streamlining business operations through intelligent automation and supporting strategic decision-making.',
    longDescription: 'Built comprehensive data processing pipelines and business intelligence systems, focusing on automation, error reduction, and executive reporting. Experience includes SQL optimization, ETL processes, and dashboard development for operational efficiency and strategic insights.',
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
      'Reduced data processing errors by 25% through intelligent automation systems',
      'Improved operational reporting efficiency by 40% via streamlined workflows',
      'Built executive dashboards supporting strategic business decisions and KPI monitoring',
      'Optimized data processing pipelines for reliability, performance, and business value'
    ],
    businessImpact: 'Data automation solutions improving operational efficiency, reducing costs, and enabling data-driven executive decision making',
    learningOutcomes: [
      'Large-scale data engineering best practices for business applications',
      'Business intelligence architecture and executive reporting system design',
      'Process automation and operational efficiency optimization methodologies'
    ]
  }
];

export const ABOUT_TEXT_1 = "Technical Professional and AI Specialist currently pursuing MS Computer Science at Georgia Institute of Technology. My analytical approach combines technical expertise with business understanding, focusing on solutions that deliver measurable operational improvements and support strategic decision-making. Currently working as AI Trainer for Outlier while conducting research at University of Winnipeg.";

export const ABOUT_TEXT_2 = "My recent focus centers on practical AI applications that drive business value, from agricultural automation to data systems optimization. I bring international perspective with strong analytical foundation, now specializing in autonomous systems, computer vision, and business intelligence solutions for real-world challenges.";

export const VALUE_PROPOSITION = "I develop practical AI and automation solutions that drive business value, from agricultural robotics to data systems, with a focus on delivering measurable improvements in operational efficiency and ROI.";

// Enhanced professional information with business focus
export const CURRENT_STATUS = {
  education: "MS Computer Science at Georgia Institute of Technology (2025-2026)",
  work: "AI Trainer at Outlier (Freelance) • Research Technician at University of Winnipeg",
  location: "Winnipeg, Manitoba, Canada",
  availability: "Open to Full-Time Opportunities"
};

export const EXPERIENCE_FOCUS = [
  {
    title: "AI Trainer",
    company: "Outlier",
    period: "May 2024 – Present", 
    location: "Remote (Canada)",
    type: "Current Role",
    achievements: [
      "Assess quality of AI-generated code and provide technical evaluations",
      "Develop frameworks for AI performance measurement and business impact assessment",
      "Create solutions for complex technical and business challenges"
    ]
  },
  {
    title: "Agricultural Robotics Technician",
    company: "University of Winnipeg",
    period: "2023 – Present", 
    location: "Winnipeg, Manitoba",
    type: "Research Position",
    achievements: [
      "Led autonomous system development with measurable business impact",
      "Improved operational efficiency by 50% through intelligent automation",
      "Built IoT systems supporting data-driven decision making",
      "Developed executive reporting systems for research operations"
    ]
  }
];

export const CORE_COMPETENCIES = [
  "AI & Machine Learning Applications",
  "Data Engineering & Business Intelligence", 
  "Process Optimization & Automation",
  "Agricultural Technology & IoT Systems",
  "Executive Reporting & KPI Development",
  "Cross-functional Collaboration & Strategic Thinking"
];

export const PROFESSIONAL_SUMMARY = "Experienced technical professional with strong foundation in data systems and proven research capabilities. Currently pursuing advanced studies at Georgia Institute of Technology while developing practical AI and automation expertise that drives business value. Seeking to apply technical skills and business acumen to solve complex challenges in industry.";
