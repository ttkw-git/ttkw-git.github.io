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
    title: 'Shoe Brand Classification with Computer Vision',
    description: 'Machine learning model using CNN to classify shoe images into brand categories (Adidas, Nike, Converse). Demonstrates practical computer vision applications in e-commerce and product recognition.',
    longDescription: 'Built a convolutional neural network to automatically classify shoe brands from product images. Applied deep learning techniques including image preprocessing, CNN architecture design, and model evaluation to create a practical computer vision solution for automated product categorization.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/81b6d19b8424e9129592db48f459e3c1',
    demoUrl: '',
    category: 'Computer Vision',
    featured: true,
    tags: ['Computer Vision', 'CNN', 'Python', 'TensorFlow'],
    technologies: [
      'Python', 'TensorFlow/Keras', 'Computer Vision', 'CNN', 'Image Processing', 'Jupyter Notebooks'
    ],
    achievements: [
      'Implemented CNN architecture for multi-class image classification',
      'Achieved high accuracy in automated brand recognition',
      'Built end-to-end ML pipeline from data preprocessing to model evaluation',
      'Demonstrated practical computer vision application for e-commerce'
    ],
    businessImpact: 'Automated product classification system with applications in e-commerce, inventory management, and retail automation',
    learningOutcomes: [
      'Hands-on experience with convolutional neural networks',
      'Image preprocessing and computer vision techniques',
      'End-to-end machine learning project development'
    ]
  },
  {
    id: 2,
    title: 'Customer Segmentation Analysis',
    description: 'Unsupervised learning project analyzing customer data to identify distinct market segments using clustering algorithms. Provides actionable insights for targeted marketing strategies.',
    longDescription: 'Applied K-means clustering and statistical analysis to customer behavior data to discover meaningful market segments. Used data visualization and exploratory data analysis to extract business insights and develop recommendations for targeted marketing campaigns.',
    imageUrl: 'images/projects/2.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/0306d2680dacb9050acebbd1d22e690c',
    demoUrl: '',
    category: 'Data Analytics',
    featured: true,
    tags: ['Data Analysis', 'K-Means', 'Customer Analytics', 'Python'],
    technologies: [
      'Python', 'Pandas', 'Scikit-learn', 'K-Means Clustering', 'Matplotlib', 'Data Visualization'
    ],
    achievements: [
      'Successfully identified distinct customer behavioral patterns using clustering',
      'Applied statistical analysis to extract actionable business insights',
      'Created comprehensive data visualizations for stakeholder communication',
      'Developed targeted marketing recommendations based on segment analysis'
    ],
    businessImpact: 'Customer segmentation insights enabling data-driven marketing strategies and improved customer relationship management',
    learningOutcomes: [
      'Unsupervised learning and clustering algorithm implementation',
      'Customer behavior analysis and market segmentation',
      'Business intelligence and data-driven recommendation development'
    ]
  },
  {
    id: 3,
    title: 'YouTube Spam Detection with NLP',
    description: 'Natural language processing system to detect spam comments across YouTube videos using machine learning text classification. Trained on diverse comment datasets for content moderation.',
    longDescription: 'Developed a comprehensive NLP pipeline for automated spam detection in social media comments. Applied text preprocessing, feature extraction, and machine learning classification to build a content moderation system with practical applications for online platforms.',
    imageUrl: 'images/projects/3.jpg',
    projectUrl: 'https://gist.github.com/ttkw-git/4923c2bfa486086834f6663ed5ad97eb',
    demoUrl: '',
    category: 'Natural Language Processing',
    featured: true,
    tags: ['NLP', 'Text Classification', 'Spam Detection', 'Python'],
    technologies: [
      'Python', 'NLTK', 'Scikit-learn', 'Text Processing', 'Feature Engineering', 'Machine Learning'
    ],
    achievements: [
      'Implemented text classification pipeline for automated spam detection',
      'Applied advanced NLP techniques including text preprocessing and feature extraction',
      'Trained models on diverse YouTube comment datasets for robust performance',
      'Developed practical solution for social media content moderation'
    ],
    businessImpact: 'Automated content moderation system with applications to social media platforms and online community management',
    learningOutcomes: [
      'Natural language processing and text classification techniques',
      'Feature engineering for text data and model optimization',
      'Practical application of NLP to real-world content moderation'
    ]
  },
  {
    id: 4,
    title: 'Agricultural Robotics Research (Current Work)',
    description: 'Ongoing research in autonomous systems development using ROS2 and Python at University of Winnipeg. Building practical skills in robotics programming and sensor integration for agricultural applications.',
    longDescription: 'Current research project in autonomous robotics systems using ROS2 and Python as part of agricultural technology development at University of Winnipeg. Working on foundational expertise in autonomous navigation, sensor integration, and data collection applicable to precision agriculture.',
    imageUrl: 'images/projects/1.jpg',
    projectUrl: 'https://github.com/ttkw-git', // Link to main GitHub since this is current work
    demoUrl: '',
    category: 'Robotics Research',
    featured: false,
    tags: ['ROS2', 'Python', 'Agricultural Research', 'Autonomous Systems'],
    technologies: [
      'ROS2', 'Python', 'Robotics Programming', 'Sensor Integration', 'Autonomous Navigation', 'Research Methods'
    ],
    achievements: [
      'Developing expertise in ROS2 framework for autonomous systems',
      'Building hands-on experience with sensor integration for agricultural applications',
      'Learning autonomous navigation and control system development',
      'Contributing to agricultural technology research at University of Winnipeg'
    ],
    businessImpact: 'Research and development in agricultural robotics with future applications to precision farming and automated data collection',
    learningOutcomes: [
      'Advanced robotics programming with ROS2',
      'Sensor integration and data collection system development',
      'Understanding of agricultural technology requirements and research methodologies'
    ]
  }
];

export const ABOUT_TEXT_1 = "Technical Professional and AI Specialist currently pursuing MS Computer Science at Georgia Institute of Technology. My experience spans machine learning applications from computer vision and NLP to data analytics and business intelligence. Currently working as AI Trainer for Outlier while conducting agricultural robotics research at University of Winnipeg.";

export const ABOUT_TEXT_2 = "My analytical approach combines technical expertise with practical application, focusing on solutions that deliver measurable improvements. I bring international perspective with strong analytical foundation, now specializing in AI development, data science, and emerging technologies for real-world challenges.";

export const VALUE_PROPOSITION = "I develop practical AI and machine learning solutions that drive business value, from computer vision and NLP to data analytics, with a focus on delivering measurable improvements in operational efficiency.";

// Additional exports that components might need
export const CURRENT_STATUS = {
  education: "MS Computer Science at Georgia Institute of Technology (2025-2026)",
  work: "AI Trainer at Outlier (Freelance) • Research Technician at University of Winnipeg",
  location: "Winnipeg, Manitoba, Canada",
  availability: "Open to Full-Time Opportunities"
};

export const CORE_COMPETENCIES = [
  "Machine Learning & Computer Vision",
  "Natural Language Processing & Text Analytics", 
  "Data Science & Customer Analytics",
  "Agricultural Technology & IoT Systems",
  "Business Intelligence & Process Optimization",
  "Cross-functional Collaboration & Research"
];

export const PROFESSIONAL_SUMMARY = "Experienced technical professional with strong foundation in machine learning, data science, and practical AI applications. Currently pursuing advanced studies at Georgia Institute of Technology while developing expertise in computer vision, NLP, and autonomous systems. Seeking to apply technical skills and analytical thinking to solve complex industry challenges.";
