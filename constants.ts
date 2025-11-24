import { Github, Linkedin } from 'lucide-react';
import { Project, SocialLink, NavItem } from './types';

// Updated project description that accurately reflects Tony's current work
export const ACCURATE_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Autonomous Systems Development & Research',
    description: 'Developing autonomous navigation and control systems using ROS2 and Python as part of agricultural robotics research at University of Winnipeg, building foundational skills for future precision agriculture applications.',
    longDescription: 'Currently working on autonomous mini rover development using ROS2 and Python at University of Winnipeg research facilities. Gaining hands-on experience with robotics programming, sensor integration, and autonomous navigation that will be applicable to agricultural data collection systems and precision farming applications.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '',
    category: 'Robotics Research',
    featured: true,
    tags: ['ROS2', 'Python', 'Autonomous Systems', 'Agricultural Research'],
    technologies: [
      'ROS2', 'Python', 'Robotics Programming', 'Sensor Integration', 'Autonomous Navigation', 'Research Methodologies'
    ],
    achievements: [
      'Developing proficiency in ROS2 robotics framework for autonomous systems',
      'Learning sensor integration and data collection techniques for agricultural applications',
      'Building foundation in autonomous navigation and control systems',
      'Conducting research applicable to precision agriculture and data collection systems'
    ],
    businessImpact: 'Research and skill development in autonomous systems with direct applications to agricultural automation and precision farming',
    learningOutcomes: [
      'Advanced robotics programming with ROS2 framework',
      'Sensor integration and data processing for autonomous systems',
      'Research methodologies applicable to agricultural technology development',
      'Understanding of precision agriculture technology requirements'
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

// Alternative approach - keep everything else the same but just update the first project
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
  }
  // ... keep other projects the same
];
